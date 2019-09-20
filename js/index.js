/*****************************Variable Declaration**********************************/
const adminSignInButton = document.getElementById('admin-sign-in');
const loginForm = document.getElementById('admin-signin-form');

const adminDB = 'http://localhost:3000/admin';
/**************************************************************************************/

/*******************************Get Admin Detail****************************/
const getAdminDetails = async () => {
  const data = await fetch(adminDB);
  const newData = await data.json();
  return newData
  
}
/***************************************************************************/
/***********************************Admin Sign In**************************************/
adminSignInButton.addEventListener('click', event => {
  event.preventDefault();
  getAdminDetails()
  .then(data => {
    let counter = 0
    const fillName = loginForm.elements.name.value;
    const fillPassword = loginForm.elements.password.value;
    data.forEach(obj => {if (obj.name == fillName && obj.password == fillPassword) counter++})

    if (counter === 1) {
      sessionStorage.setItem('name', fillName);
      sessionStorage.setItem('password', fillPassword);
      window.location.replace('/dashboard.html');      
    } else {
      alert('Incorrect Name or Password! Please try again')
    }
  })
  .catch(err=> console.error(err))
  
})
/***************************************************************************************/