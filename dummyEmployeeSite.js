// Create an employee object
/*1. function that (appends child) to the UL html element 
2. click listener for submit button that calls "event.prevenDefault()" to prevent the page trying to reload by default
3. within click listener get values for all inputs and save them as variables, then create an employee object from them and push them into the employee list thats appending to UL html element
*/

let employee1 = {
    firstName: "Taylor",
    lastName: "Johnson",
    department: "Revenue",
    salary: "71,000"
};
//Make function to retrieve info from html inputs after submitted
function retrieveFormInfo() {
    document.getElementById("form1").submit();
  }

//Function to retrieve employee name and print to console
function getEmployeeName(employee) {
    console.log(`${employee.firstName} ${employee.lastName}`);
}

function submitButtonFunc() {
    const submitButton = document.getElementById("sub-btn");
    submitButton.addEventListener("onclick", (event) => {
        event.preventDefault();
    })
}
//Adds new list item but only worked once. Got to figure that out.
function addNewEmployee() {
const li = document.createElement("li");
const liNode = document.createTextNode("New Text");
li.appendChild(liNode);
document.getElementById("staff-members").appendChild(li);
}
getEmployeeName(employee1);
addNewEmployee();

//Ask Caleb if I can add retrieveFormInfo() function to the submitButtonFunc() function as an "onclick" event