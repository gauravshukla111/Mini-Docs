import React, { useRef, useState } from 'react'
import Card from './Card'


function Foreground() {
  const ref = useRef(null)
  const data=[
    {
      desc:"The purpose of our lives is to be happy.",
      filesize:".9mb",
      close: true,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"}
    },
    {
      desc:"Turn your wounds into wisdom.",
      filesize:".9mb",
      close: true,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor:"blue"}
    },
    {
      desc:"Life is not a problem to be solved but a reality to be experienced.",
      filesize:".9mb",
      close: true,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"}
    }
  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}

    </div>

  )
}

export default Foreground
