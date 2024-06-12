'use server'

import { forms, questions, users } from './../../db/schema'
import { db } from '@/db'
import { formElements, formSubmissions } from '@/db/schema'

import { eq, sql } from 'drizzle-orm'
import { auth } from '@/auth'

export async function submissionByForm() {
  const submissionCountWithNamesQuery = sql`
    SELECT ${forms}.id AS form_id, ${forms}.name AS form_name, COUNT(${formSubmissions}.id) AS submission_count
    FROM ${formSubmissions}
    JOIN ${forms} ON ${formSubmissions}.form_id = ${forms}.id
    GROUP BY ${forms}.id, ${forms}.name;
  `

  const submissionCounts = await db.execute(submissionCountWithNamesQuery)

  const data = submissionCounts.map(row => ({
    formName: row.form_name as string,
    submissions: row.submission_count as number,
  }))

  return data
}

export async function questionsByType() {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) {
    return []
  }
  const bla = await db
    .select({
      questionId: questions.id,
      questionText: questions.text,
      fieldType: questions.fieldType,
      formId: questions.formId,
    })
    .from(questions)
    .innerJoin(forms, eq(forms.id, questions.formId))
    .innerJoin(users, eq(users.id, forms.userId))
    .where(eq(users.id, userId))

  let questionsTypes: { type: string; count: number }[] = []
  const vals = formElements.enumValues

  for (let i = 0; i < vals.length; i++) {
    const value = vals[i]
    const q = bla.filter(question => question.fieldType === value)
    questionsTypes.push({ type: value, count: q.length })
  }

  return questionsTypes
}
