import React from 'react'
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline'
import SidebarButtons from './SidebarButtons'
import HoritzontalLine from '../common/HortizontalLine'

function Sidebar() {
  return (
    <div className="border-r border-gray-900 p-5 text-sm text-gray-500">
      <div className="space-y-4">
        <SidebarButtons ButtonIcon={HomeIcon} text={'Home'} />
        <SidebarButtons ButtonIcon={SearchIcon} text={'Search'} />
        <SidebarButtons ButtonIcon={LibraryIcon} text={'Library'} />
        <HoritzontalLine />
        <SidebarButtons ButtonIcon={PlusCircleIcon} text={'Create Playlist'} />
        <SidebarButtons ButtonIcon={HeartIcon} text={'Liked Songs'} />
        <SidebarButtons ButtonIcon={RssIcon} text={'Your episodes'} />
        <HoritzontalLine />
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
      </div>
    </div>
  )
}

export default Sidebar
