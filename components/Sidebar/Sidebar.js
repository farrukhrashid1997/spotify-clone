import React, { useEffect, useState } from 'react'
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
import SidebarButtons from './SidebarButtons'
import HoritzontalLine from '../common/HortizontalLine'
import useSpotify from '../../hooks/useSpotify'
import { signOut, useSession } from 'next-auth/react'
import PlaylistButtons from './PlaylistButtons/PlaylistButtons'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../../atoms/playlistAtom'

function Sidebar() {
  const { data: session, status } = useSession()
  const spotifyApi = useSpotify()
  const [playlist, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists(session).then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <div className="hidden h-screen overflow-y-scroll border-r border-gray-900 p-5 pb-36 text-xs  text-gray-500 scrollbar-hide sm:max-w-[12rem] md:inline-flex lg:max-w-[15rem] lg:text-sm">
      <div className="space-y-4">
        <SidebarButtons ButtonIcon={HomeIcon} text={'Home'} />
        <SidebarButtons ButtonIcon={SearchIcon} text={'Search'} />
        <SidebarButtons ButtonIcon={LibraryIcon} text={'Library'} />
        <HoritzontalLine />
        <SidebarButtons ButtonIcon={PlusCircleIcon} text={'Create Playlist'} />
        <SidebarButtons
          ButtonIcon={HeartIcon}
          text={'Liked Songs'}
          iconClassName="text-blue-500"
        />
        <SidebarButtons
          ButtonIcon={RssIcon}
          text={'Your episodes'}
          iconClassName="text-green-500"
        />
        <HoritzontalLine />
        {playlist.map((pl) => (
          <PlaylistButtons
            id={pl?.id}
            text={pl?.name}
            onClick={() => setPlaylistId(pl?.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
