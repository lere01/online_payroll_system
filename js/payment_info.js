
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
const firstDiv = document.getElementById('first-div');
const homePageButton = document.getElementById('home-page-button');
const dataTable = document.getElementById('table-body')
const employeesPageButton = document.getElementById('employees-page')
const payAllEmployees = document.getElementById('pay-all-employees')



const db = 'http://localhost:3000/employees';


/**************************************************************************************/
/**************************************** format data***********************************/ 
const formatProfile = profile => {
    const { firstName, lastName, paymentBTax, tax, paymentStatus  } = profile;
    return `
    <div class='contact' data-profile=${JSON.stringify(profile)}>

    <div class="table table-hover table-fixed text-nowrap">
    <table class="table">
      
      <tbody>
        <tr id='${profile.id}'>
          <td> ${firstName} ${lastName} </td>
          <td> ${paymentBTax} </td>
          <td> ${tax} </td>          
          <td> ${paymentStatus} </td>          
        </tr>
        <tr>            
            <td><button data-profileId="${profile.id}" id="status" type="button" class="btn btn-sm btn-outline-primary waves-effect pay">Pay Employee</button></td>
        </tr>
      </tbody>
    </table>
        
  </div>
        
    </div>
    `;
  };

/******************************************************************************************/
/**************************populate page with formatted data ******************************/ 
const showAllProfiles = profiles => {
    const formattedProfile = profiles.map(formatProfile); 
    displayDiv.innerHTML += formattedProfile.join('');
    // dataTable.append(displayDiv)
  };
/************************************************************************ */  
/*********************Retrieve Data from Backend **************************/
const retrieveEmployeeProfiles = async () => {
    const data = await fetch(db);
    const newData = await data.json();
    showAllProfiles(newData)
    const payStaff = $('.pay')

    /**********************Pay Individual Staff****************************/
    payStaff.click(e=>{
        const payTarget = e.currentTarget.dataset.profileid
        
        $.ajax({
            type: 'GET',
            url: `${db}/${payTarget}`,
            success: function(data){
                console.log(data, typeof data)
                if (data.paymentStatus == 'paid') {
                    alert('Employee Already Paid')
                } else if (data.paymentStatus == 'unpaid') {
                    
                }
            }
        })
        
        
    })
  /*****************************************************************/
    /**********************Pay All Staff****************************/
    payAllEmployees.click(e=>{
        const editTarget = e.currentTarget.dataset.profileid
        
        
    })
  /*****************************************************************/

}
/*****************************************************************************************/
retrieveEmployeeProfiles()

/***************************************************************************/
/***********************************Return to Employees Page**************************************/
employeesPageButton.addEventListener('click', () => {
    window.location.replace("employees.html");
})
/***************************************************************************************/














