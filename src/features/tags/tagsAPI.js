import axios from '../../utils/axios'

const getTags = async () => {
  const response = await axios('/tags')
  return response.data
}

export default getTags
