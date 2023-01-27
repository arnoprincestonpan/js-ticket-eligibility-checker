/*
name    :   arno pan
project :   ticket eligibility
note    :   a retake on an old assignment
*/

// initialize form variables

const firstNameInput = document.getElementById("input-first-name")
firstNameInput.placeholder = "Enter First Name"

const lastNameInput = document.getElementById("input-last-name")
lastNameInput.placeholder = "Enter Last Name"

const ageInput = document.getElementById("input-age")
ageInput.placeholder = "Enter Age in Numeric"

const quantityInput = document.getElementById("input-quantity")
quantityInput.placeholder = "Enter Quantity in Numeric"

const cashInput = document.getElementById("input-cash")
cashInput.placeholder = "Enter Cash in Numeric"

// initialize buttons

const submitInput = document.getElementById("input-submit")
submitInput.value = "Check Eligibility"

// initialize input summary

const summaryInput = document.getElementById("input-summary")
summaryInput.innerHTML = "Summary of Form here."



// event triggers

submitInput.addEventListener("click", function(){

})


