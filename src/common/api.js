// import axios from 'axios'

// export const Api = (type, target) => {
//   axios.defaults.baseURL = 'https://www.metaweather.com/api/location/'
//   const baseUrl = 'weather.php'
//   axios.defaults.timeout = 360000
//   axios.interceptors.request.use(request => {
//     // console.log('Starting Request', request)
//     return request
//   })

//   axios.interceptors.response.use(response => {
//     // console.log('Response:', response)
//     return response
//   })

//   if (type === 'GET') {
//     return axios.get(target)
//   }

//   if (type === 'POST') {
//     return axios.post(target)
//   }
// }

import axios from "axios";

class API {
  static async post(target) {
    axios.defaults.baseURL = 'https://www.metaweather.com/api/location/'
    axios.defaults.timeout = 360000
    const result = await fetch(`https://www.metaweather.com/api/location/${target}`)
    // const result = await axios.post(target, data)
    
    return result.json()
  }
}
export default API

