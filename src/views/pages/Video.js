import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchVideo } from '../../features/video/VideoSlice'
import RelatedVideos from '../components/RelatedVideos/RelatedVideos'
import Loading from '../components/ui/Loading'
import Description from '../components/Video/Description'
import Player from '../components/Video/Player'

const Video = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchVideo(id))
  }, [dispatch, id])

  const { isLoading, video, isError, error } = useSelector(
    (state) => state.video
  )

  const { link, title, description, date, likes, unlikes } = video || {}

  let content
  if (isLoading) {
    content = <Loading />
  }
  if (!isLoading && isError) {
    content = <div> {error.message}</div>
  }
  if (!isLoading && !isError && !video?.id) {
    content = <div>No Video Found!</div>
  }
  if (!isLoading && !isError && video?.id) {
    content = (
      <div class='grid grid-cols-3 gap-2 lg:gap-8'>
        <div class='col-span-full w-full space-y-8 lg:col-span-2'>
          {/* <!-- video player --> */}
          <Player link={link} title={title} />
          {/* <!-- video description --> */}
          <Description
            title={title}
            description={description}
            date={date}
            likes={likes}
            unlikes={unlikes}
          />
        </div>

        {/* <!-- related videos --> */}
        <RelatedVideos />
      </div>
    )
  }
  return (
    <section class='pt-6 pb-20'>
      <div class='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>{content}</div>
    </section>
  )
}

export default Video
