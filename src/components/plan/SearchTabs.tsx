import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import CategoryMap from './CategoryMap'
import KakaoMapSearch from './KakaoMapSearch'
import GPT from './GPT'
import PlanForm from './PlanForm'
export default function Category() {
const categories = [
        {
          id : 1,
          name: '카테고리 별 검색',
          type : 'category'
        },
        {
          id : 2,
          name: '일반 검색',
          type : 'search'
        },
        {
          id : 3,
          name: 'GPT에게 물어보기',
          type : 'gpt'
        },
      ]

  return (
    <>
    <PlanForm />
    <div className="w-full px-2 mt-10 sm:px-0" style={{ width: '100%' }}>
        <TabGroup>
          <TabList className="inline-flex rounded-xl">
            {categories.map(({ name,id }) => (
              <Tab key={id} as="div">
              {({ selected }) => (
                <button
                  className={`
                    inline-block rounded-t-xl py-2.5 px-4 text-sm font-medium font-bold leading-5
                    ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                    border-t border-l border-r border-gray-300
                    ${selected ? 'bg-blue-400 text-white shadow' : 'bg-white text-blue-500 hover:bg-white/[0.12] hover:text-black'}
                  `}
                >
                  {name}
                </button>
              )}
            </Tab>
            ))}
          </TabList>
          <TabPanels>
            {
                categories.map( ({type,id})=>(
                    <TabPanel className="" key={id}>
                        { type === 'category' && <CategoryMap /> }
                        { type === 'search' && <KakaoMapSearch /> }
                        { type === 'gpt' && <GPT /> }
                    </TabPanel>
                ))
            }
            </TabPanels>
        </TabGroup>
    </div>
    </>
  )
}
