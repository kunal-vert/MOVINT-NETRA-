import axios from 'axios'


const api = axios.create({
    baseURL:"",
    timeout:5000,
    headers:{
        'content-type':'application/json'
    }

})

export default api

// Every component imports this instead of using axios directly.
// Change the baseURL here once and every file picks it up.

// here we can Multiple instances for different services