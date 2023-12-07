import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPosts = async configParams => {
  const { data } = await axios.get('photo', {
    params: {
      key: '40695765-d4632d96e5d94e604b3421ed4',
      image_type: 'photo',
      orientation: 'horizontal',
      ...configParams,
    }
  })
  return data;
}