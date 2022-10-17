import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedVideos } from '../../../features/relatedVideos/relatedVideosSlice'
import Loading from '../ui/Loading'
import RelatedVideo from './RelatedVideo'

const RelatedVideos = ({ tags, videoId }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, videoId }))
  }, [dispatch, tags, videoId])

  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  )
  // decide what to render
  let content = null

  if (isLoading) content = <Loading />
  if (!isLoading && isError) {
    content = <div className='col-span-12'>{error}</div>
  }
  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div className='col-span-12'>No related videos found!</div>
  }
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideo key={video.id} video={video} />
    ))
  }
  return (
    <div class='col-span-full lg:col-auto max-h-[570px] overflow-y-auto'>
      {/* <!-- single related video --> */}
      {content}
    </div>
  )
}

export default RelatedVideos
