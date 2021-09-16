// function called submitData ( userName, userEmail )
  // fetch -




  function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
      })
    })
        .then(res => res.json())
        .then(function(obj) {
          const body = document.querySelector('body');
          body.append(obj.id)
        })
        .catch(function(error) {
          const message = error.message;
          document.body.append(message);
        })
  }

