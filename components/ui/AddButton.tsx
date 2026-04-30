import React from 'react'

export default function AddButton(props: any) {
  return (
    <div className='w-full p-2 flex items-center justify-center'>
      <button
        className={`${props.bgColor || "bg-green-400"} w-90 text-xl font-bold rounded-4xl px-8 py-4 text-white`}
      >
        {props.content}
      </button>
    </div>
  )
}