import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import KakaoMap from './KakaoMap'
export default function Category() {
const categories = [
        {
          name: '카테고리 별 검색',
          type : 'category'
        },
        {
          name: '일반 검색',
          type : 'search'
        },
        {
          name: 'GPT에게 물어보기',
          type : 'gpt'
        },
      ]

  return (
    <>
    <div className="w-full px-2 mt-10 sm:px-0" style={{ width: '100%'}}>
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="inline-flex rounded-xl bg-blue-900/20 p-1">
            {categories.map(({ name }) => (
              <Tab
                key={name}
              >
               <button
            className="[
              'inline-block rounded-t-xl py-2.5 px-4 text-sm font-medium font-bold leading-5',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              'border-t border-l border-r border-gray-300',
              selected
                ? 'bg-blue-400 text-white shadow'
                : 'text-blue-500 hover:bg-white/[0.12] hover:text-black',
            ]">
          {name}
          </button>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {
                categories.map( ({type})=>(
                    <TabPanel>
                        { type === 'category' && <KakaoMap /> }
                    </TabPanel>
                ))
            }
            {/* <div v-if="categories[Object.keys(categories)[idx]][0].type === 'category'">
                <KakaoMapView />
            </div>
            <div v-else-if="categories[Object.keys(categories)[idx]][0].type === 'search'">
                <KakaoMapSearhView />
            </div>
            <div v-else-if="categories[Object.keys(categories)[idx]][0].type === 'gpt'">
                <ChatGptView />
            </div> */}
            </TabPanels>
        </TabGroup>
      </div>
    </div>
    </>
  )
}
