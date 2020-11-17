import axios from 'axios'; 

export default {
  createSub: function(subscribers) {
    return axios.post('/api/sub', subscribers);
  },
  //get post 
  getPost: function() {
    return axios.get('/api/post', {
      params: {
        ID: ''
      }
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    }) 
  },
  auth: function (token) {
    return axios.post("/api/auth", (token) => {
      console.log(token);
    });
  },
};
