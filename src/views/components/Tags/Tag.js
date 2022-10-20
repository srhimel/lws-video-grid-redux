import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tagRemoved, tagSelected } from '../../../features/filter/filterSlice'

const Tag = ({ tag }) => {
  const { title } = tag
  const dispatch = useDispatch()
  const { tags: selectedTags } = useSelector((state) => state.filter)
  const isSelected = selectedTags.includes(title)

  const handleSelect = () => {
    isSelected ? dispatch(tagRemoved(title)) : dispatch(tagSelected(title))
  }
  return (
    <div
      className={`${
        isSelected ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800'
      } px-4 py-1 rounded-full cursor-pointer`}
      onClick={handleSelect}>
      {title}
    </div>
  )
}

export default Tag
