import { questionsByType, submissionByForm } from '@/app/actions/getChartsData'
import { QuestionsByTypeChart } from '@/components/charts/QuestionsByTypeChart'
import { SubmissionsByFormChart } from '@/components/charts/ResultsByFormChart'

type Props = {}

const page = async (props: Props) => {
  const [questionsData, submittionsData] = await Promise.all([
    questionsByType(),
    submissionByForm(),
  ])

  return (
    <div className='grid grid-col-1 md:grid-cols-2'>
      <div className='flex flex-col'>
        <div className='text-xl text-black'>Submissions Per Form</div>
        <SubmissionsByFormChart data={submittionsData} />
      </div>
      <div className='flex flex-col'>
        <div className='text-xl text-black'>Questions By Type</div>
        <QuestionsByTypeChart data={questionsData} />
      </div>
    </div>
  )
}

export default page
