import axios from '../../utils/axios'

const getRelatedVideos = async ({ tags, id }) => {
  const limit = 5
  const queryString =
    tags.length > 0
      ? tags.join('&tags_like=') + `&id_ne=${id}&_limit=${limit}`
      : `&id_ne=${id}&_limit=${limit}`

  const response = await axios.get(`/videos?tags_like=${queryString}`)
  return response.data
}

export default getRelatedVideos
