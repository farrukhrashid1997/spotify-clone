import React, { Component } from 'react'

export default function SidebarButtons({
  ButtonIcon,
  text,
  onClick,
  iconClassName,
}) {
  return (
    <button
      className="flex items-center space-x-2 hover:text-white"
      onClick={onClick}
    >
      <ButtonIcon className={`h-5 w-5 ${iconClassName}`} />
      <p>{text}</p>
    </button>
  )
}
