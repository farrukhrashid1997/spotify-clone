import React, { Component } from 'react'

export default function SidebarButtons({ ButtonIcon, text }) {
  return (
    <button className="flex items-center space-x-2 hover:text-white">
      <ButtonIcon className="h-5 w-5" />
      <p>{text}</p>
    </button>
  )
}
