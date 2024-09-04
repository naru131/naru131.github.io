const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

      //menu show
      if(searchButton){
        searchButton.addEventListener('click',() =>{
            searchContent.classList.add('show-search')
        })
      }

      //menu hidden
      if(searchClose){
        searchClose.addEventListener('click', () =>{
            searchContent.classList.remove('show-search')
        })
      }

      // Login Section

      const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

      //menu show
      if(loginButton){
        loginButton.addEventListener('click',() =>{
            loginContent.classList.add('show-login')
        })
      }

      //menu hidden
      if(loginClose){
        loginClose.addEventListener('click', () =>{
            loginContent.classList.remove('show-login')
        })
      }