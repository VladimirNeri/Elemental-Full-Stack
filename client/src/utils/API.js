import axios from 'axios'; 

export default {
  createSub: function(subscribers) {
    return axios.post('/api/sub', subscribers);
  },
  //get one profile
  getProfile: function () {
    return axios.get("/api/users/profile");
  },

  // Get a user
  getUser: function () {
    return axios.get("/api/users");
  },

  auth: function (token) {
    return axios.post("/api/auth", (token) => {
      console.log(token);
    });
  },
};
