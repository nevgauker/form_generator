import { submissionByForm } from '@/app/actions/getChartsData'
import { ResultsByFormChart } from '@/components/charts/ResultsByFormChart'

type Props = {}

const page = async (props: Props) => {
  const data = await submissionByForm()
  // const data = [
  //   { formName: 'form 1', totalResults: 3 },
  //   { formName: 'form 2', totalResults: 13 },
  //   { formName: 'form 3', totalResults: 1 },
  // ]
  return (
    <div>
      <ResultsByFormChart data={data} />
    </div>
  )
}

export default page
