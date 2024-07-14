import React from 'react'
import { Area } from 'types/area'

interface AreaItemProps{
    area : Area
}
export default function AreaItem({ area }: AreaItemProps) {
  return (
    <li className="flex justify-between items-center gap-x-6 py-5 px-4 areaitem-li">
    <div className="flex w-5/6 gap-x-3">
      <img
      src={area.img}
      className="h-12 w-12 flex-none rounded-full bg-gray-50" alt=""/>
      <div className="min-w-0 flex-auto w-32">
        <p className="text-sm font-semibold leading-6 text-gray-900">{ area.title }</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ area.addr }</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p>추가</p>
    </div>
  </li>
  )
}
