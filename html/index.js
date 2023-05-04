const getUsers = () => {
  const axios = require('axios');
    axios.get('http://127.0.0.1:5000')
    .then(response => {
     const users = response.data.data;
     console.log(`GET users`, users);
   })
    .catch(error => console.error(error));
   };
   getUsers();