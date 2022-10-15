import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from '../../../features/tags/tagsSlice'
import Loading from '../ui/Loading'
import Tag from './Tag'

const Tags = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTags())
  }, [dispatch])

  const { tags, isLoading, isError, error } = useSelector((state) => state.tags)
  console.log({ tags, isLoading, isError, error })
  let content
  if (isLoading) content = <Loading />
  if (!isLoading && isError)
    content = <div className='col-span-12'>{error}</div>

  if (!isError && !isLoading && tags?.length === 0) {
    content = <div className='col-span-12'>No Tags found!</div>
  }

  if (!isError && !isLoading && tags?.length > 0) {
    content = tags.map((tag) => <Tag key={tag.id} tag={tag} />)
  }
  return (
    <div>
      <section>
        <div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto'>
          {/* <!-- selected --> */}
          {content}
        </div>
      </section>
    </div>
  )
}

export default Tags
