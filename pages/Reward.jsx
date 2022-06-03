import BottomTabsReward from '../components/BottomTabs/BottomTabsReward'
import PopUpMenu from '../components/PopUpMenu'
import DropDownMenu from '../components/DropDownMenu'
import TailwindRewardTable3 from '../components/TailwindRewardTable3'
import { FiPlusCircle } from 'react-icons/fi'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { useRouter } from 'next/router'

export default function Reward() {
  const router = useRouter()
  return (
    <div>
      <div className="h-screen bg-white">
        <div class="mx-auto flex h-screen max-w-7xl flex-col px-9 sm:px-9 md:px-4">
          <div class="flex items-center justify-between pt-10 pb-7">
            <div class="flex flex-auto justify-start lg:w-0 lg:flex-1">
              <span class="text-2xl font-bold text-gray-600">Rarbit</span>
            </div>

            <div class="-my-2 -mr-2">
              <PopUpMenu />
            </div>
          </div>
          <div class="flex-grow flex-col gap-y-10">
            <div class="box sm:flex">
              <div class="flex flex-1 flex-col justify-center rounded-2xl bg-white p-8 shadow">
                <DropDownMenu />

                <div class="mt-[25px] flex items-center">
                  <div class="relative text-2xl font-medium">$400.00</div>
                  <div class="flex cursor-pointer px-2 text-green-500">
                    {' '}
                    +4.1%
                    <AiOutlineArrowUp />
                  </div>
                </div>

                <div class="mt-2 leading-relaxed text-slate-500 dark:text-slate-500">
                  {' '}
                  Total value of 100 reward points
                </div>
              </div>
            </div>
            <div class="box sm:flex">
              <div class="mt-4 flex flex-1 flex-col justify-center rounded-2xl bg-white p-8 shadow">
                <div class="flex items-center">
                  <div class="text-1xl truncate font-medium md:text-2xl">
                    Total Allocations
                  </div>
                  <div class="ml-auto flex items-center">
                    <button
                      className="rounded-xl bg-primary py-2 px-4 text-sm font-medium text-white shadow outline-none hover:shadow-md hover:shadow-purple-700 focus:outline-none active:bg-gray-700"
                      onClick={() => router.push('../Tabs')}
                    >
                      <div className="my-1 flex flex-row items-center justify-center">
                        <FiPlusCircle className="mr-2" size={17} />
                        Add Shops
                      </div>
                    </button>
                  </div>
                </div>

                <div class="w-100 mt-7 overflow-x-auto overflow-y-hidden">
                  <TailwindRewardTable3 />
                  <div
                    onClick={() => router.push('../Records')}
                    className="cursor-pointer truncate pl-2 text-sm font-medium text-primary underline md:text-2xl"
                  >
                    See More
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="py-5 text-center">Tab bar goes here</div> */}

          <div className="py-10" />
        </div>
      </div>
      <BottomTabsReward />
    </div>
  )
}
