'use server'
import { db } from '@/db'
import { forms, formSubmissions } from '@/db/schema'

import { sql } from 'drizzle-orm'

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
    totalResults: row.submission_count as number,
  }))

  return data
}
