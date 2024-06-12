'use client'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

type QuestionsByTypeChartProps = {
  data: {
    type: string
    count: number
  }[]
}

export function QuestionsByTypeChart({ data }: QuestionsByTypeChartProps) {
  return (
    <ResponsiveContainer width='100%' minHeight={300}>
      <PieChart>
        <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} />
        <Pie
          label={item => item.type}
          data={data}
          dataKey='count'
          type='monotone'
          nameKey='type'
          fill='hsl(var(--primary))'
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
