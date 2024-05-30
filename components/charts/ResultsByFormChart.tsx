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

type UsersByDateChartProps = {
  data: {
    formName: string
    totalResults: number
  }[]
}

export function ResultsByFormChart({ data }: UsersByDateChartProps) {
  return (
    <ResponsiveContainer width='100%' minHeight={300}>
      <BarChart data={data}>
        <CartesianGrid stroke='hsl(var(--muted))' />
        <XAxis dataKey='formName' stroke='hsl(var(--primary))' />
        <YAxis stroke='hsl(var(--primary))' />
        <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} />
        <Bar
          dataKey='totalResults'
          type='monotone'
          name='Submissions: '
          stroke='hsl(var(--primary))'
          fill='hsl(var(--primary))'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
