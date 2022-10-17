import React from 'react'

const Tag = ({ tag }) => {
  return (
    <div className='bg-blue-200 text-blue-800 px-4 py-1 rounded-full cursor-pointer'>
      {tag.title}
    </div>
  )
}

export default Tag
