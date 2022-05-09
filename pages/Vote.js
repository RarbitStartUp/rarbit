import RangeSlider3 from '../components/RangeSlider3'
import RewardTable from '../components/RewardTable'
import VoteButton from '../components/VoteButton'

export default function Vote() {
  return (
    <div className="mt-10 flex min-h-screen flex-col items-center justify-center">
      <RangeSlider3 />
      <h1 className="mt-3 text-2xl font-bold text-[#5865F2]">
        % of Rarbit Token Allocations
      </h1>
      <div className="mt-10"></div>
      <RewardTable />
      <VoteButton routePath="/Login" />
    </div>
  )
}
