
import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID l-EliiXKHFCu51EQo8M6F43Bi7uRLs7YkA8oOGpd-Iw'
    }
})

