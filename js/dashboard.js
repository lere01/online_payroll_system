/*****************************Variable Declaration**********************************/
const createEm = document.getElementById('create-employee');
const createEmployeeForm = document.querySelector('[create-employees-form]');
const createEmployeeButton = document.getElementById('create-employee-button');
const getAllEmployees = document.getElementById('get-employee-list');
const displayDiv = document.querySelector('[display-div]');
const rightSide = document.querySelector('#right-side');
const allEmployeesDisplay  = document.querySelector('[all-employees-display]');
const hrHomePage = document.getElementById('second-div');
const adminSignInButton = document.getElementById('admin-sign-in');
// const loginForm = document.getElementById('admin-signin-form');
const firstDiv = document.getElementById('first-div');
const logOut = document.getElementById('log-out');
const homePageButton = document.getElementById('home-page-button');
const deleteButton = document.querySelectorAll('.delete');
const editButton = document.querySelectorAll('.edit');
// const body = $('body');
const employeeForm = document.getElementById('employees');
const successMessage = document.getElementById('success-message')

const db = 'http://localhost:3000/employees';


/**************************************************************************************/
/********************************Return to Login Page****************************/
logOut.addEventListener('click', event => {
    event.preventDefault();
    window.location.replace("index.html");
})
/***************************************************************************************/
/**********************Show Create Profile Wizard ***********************/
createEm.addEventListener('click', () => {
    createEmployeeForm.style.visibility = 'visible';
    createEm.classList.add('active');
})
/***********************************************************************/
/************************Retrieve All Employees Page********************/
getAllEmployees.addEventListener('click', e => {
    window.location.replace("employees.html");
})
/***********************************************************************/
/*********************************Create New Employee Profile *************************/
createEmployeeButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const employeeProfile = {paymentStatus: "unpaid"}; 
  
    for (const key in employeeForm.elements) {
      if (employeeForm.elements.hasOwnProperty(key)) {
        const inputElement = employeeForm.elements[key];        
        if (inputElement['name'] && inputElement.value) {
          employeeProfile[inputElement['name']] = inputElement.value;
        }
      }
    }
  
    if (!Object.values(employeeProfile).length) return;
  
    await fetch(db, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(employeeProfile)
    });

    employeeForm.reset();
    alert('Profile Successfully Created')
    // successMessage.style.display = 'block'
  });
/**************************************************************************************/  





// $(document).ready(retrieveEmployeeProfiles);