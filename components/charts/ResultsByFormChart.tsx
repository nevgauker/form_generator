'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type SubmissionsByFormChartProps = {
  data: {
    formName: string
    submissions: number
  }[]
}

export function SubmissionsByFormChart({ data }: SubmissionsByFormChartProps) {
  return (
    <ResponsiveContainer width='100%' minHeight={300}>
      <BarChart data={data}>
        <CartesianGrid stroke='hsl(var(--muted))' />
        <XAxis dataKey='formName' stroke='hsl(var(--primary))' />
        <YAxis stroke='hsl(var(--primary))' />
        <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} />
        <Bar
          dataKey='submissions'
          type='monotone'
          name='Submissions: '
          stroke='hsl(var(--primary))'
          fill='hsl(var(--primary))'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
