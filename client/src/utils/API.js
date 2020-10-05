import axios from 'axios'; 

export default {
  createSub: function(subscribers) {
    return axios.post('/sub', subscribers);
  }
}
