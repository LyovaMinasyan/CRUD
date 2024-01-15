
function send(){
  let fnameInput = document.getElementById("fname").value
  let lnameInput = document.getElementById("lname").value
  let ageInput = document.getElementById("age").value
  let emailInput = document.getElementById("email").value
  let dateInput = document.getElementById("date").value
 
  fetch('/addName', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({fname : fnameInput, lname : lnameInput, age : ageInput, email : emailInput, date : dateInput,})
  });


}