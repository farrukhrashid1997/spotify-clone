import React, { Component } from 'react'

interface SidebarIcons {
  ButtonIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  text: string
}

export default function SidebarButtons({ ButtonIcon, text }: SidebarIcons) {
  return (
    <button className="flex items-center space-x-2 hover:text-white">
      <ButtonIcon className="h-5 w-5" />
      <p>{text}</p>
    </button>
  )
}
