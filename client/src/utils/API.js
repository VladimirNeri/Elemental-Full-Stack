import axios from 'axios'; 

export default {
  createSub: function(subscribers) {
    return axios.post('/api/sub', subscribers);
  }
}
