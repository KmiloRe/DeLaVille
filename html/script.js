<script src="https://cdn.auth0.com/js/lock/11.35.1/lock.min.js"></script>
    function login() {
        const auth0 = new Auth0({
            clientID: 'py3MmzYYQsrkOOSB4xaf7WZWvffXrrvl',
            domain: 'http://localhost',});
        auth0.authorize();
      }
      
    function logout() {
        const auth0 = new Auth0({
            clientID: 'py3MmzYYQsrkOOSB4xaf7WZWvffXrrvl',
            domain: 'http://localhost',});
        auth0.logout({
          returnTo: 'http://localhost:5000',  // Redirect URL after logout
        });
    }