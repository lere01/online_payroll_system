
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
const paymentButton = document.getElementById('employee-payment')



const db = 'http://localhost:3000/employees';


/**************************************************************************************/
/**************************************** format data***********************************/ 
const formatProfile = profile => {
    const { firstName, lastName, age, employmentDate, cadre, email, contact, address, paymentBTax, tax  } = profile;
    return `
    <div class='contact' data-profile=${JSON.stringify(profile)}>

    <div class="table table-hover table-fixed text-nowrap">
    <table class="table">
      
      <tbody>
        <tr id='${profile.id}'>
          <td name="fullName" contenteditable="true"> ${firstName} ${lastName} </td>
          <td id="age" contenteditable="true"> ${age} </td>
          <td name="employmentDate" contenteditable="true"> ${employmentDate} </td>
          <td name="cadre" contenteditable="true"> ${cadre} </td>
          <td name="email" contenteditable="true"> ${email} </td>
          <td name="contact" contenteditable="true"> ${contact} </td>
          <td name="address" contenteditable="true"> ${address} </td>
          <td name="paymentBTax" contenteditable="true"> ${paymentBTax} </td>
          <td name="tax" contenteditable="true"> ${tax} </td>          
        </tr>
        <tr>
            <td><button data-profileId="${profile.id}" id="update" type="button" class="btn btn-sm btn-outline-primary waves-effect update">Update</button></td>
            <td><button data-profileId="${profile.id}" id="delete" type="button" class="btn btn-sm btn-outline-primary waves-effect delete">Delete</button></td>
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
    updateButtons = $('.update');
    statusButtons = $('.status')

    
    /**********************Update Employee Profile ************************************/
    updateButtons.click(e=>{
        const editTarget = e.currentTarget.dataset.profileid
        const rowObject = `${editTarget}`
        const thisRow = $(`#${rowObject}`)
        const rowElements = thisRow[0]
        for (key in rowElements) {
          console.log(key)
        }
        console.log(rowObject, thisRow, typeof rowElements, typeof rowElements.childNodes[1]);
        
        
    })
  /***********************************************************************/
    /**********************Delete Employee Profile ************************************/
    $('.delete').click(e => {
        const deleteTarget = e.currentTarget.dataset.profileid

        $.ajax({
            type: 'DELETE',
            url: `${db}/${deleteTarget}`,
            success: function(){
                $('#${deleteTarget}').remove()
            }
        })
        
    });  
  /***********************************************************************/

}
/*****************************************************************************************/
retrieveEmployeeProfiles()

/***************************************************************************/
/***********************************Return to Dashboard**************************************/
homePageButton.addEventListener('click', () => {
    window.location.replace("dashboard.html");
})
/***************************************************************************************/
/***********************************Go To Payment Page**************************************/
paymentButton.addEventListener('click', () => {
    window.location.replace("payment_info.html");
})
/***************************************************************************************/














