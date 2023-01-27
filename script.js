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
displayInformation()

function displayInformation() {

    summaryInput.innerHTML = ""
    summaryInput.innerHTML = "<h4>User Information</h4>"
    summaryInput.innerHTML += "<ul>"
    summaryInput.innerHTML += "<li>Name: " + firstNameInput.value + ` ` + lastNameInput.value + "</li>"
    summaryInput.innerHTML += "<li>Age: " + ageInput.value + "</li>"
    summaryInput.innerHTML += "<li>Quantity of Tickets: " + quantityInput.value + "</li>"
    summaryInput.innerHTML += "<li>Users' Amount of Cash: " + cashInput.value + "</li>"
    summaryInput.innerHTML += "</ul>"
}

// event triggers

submitInput.addEventListener("click", function () {
    console.log("Submit Button Clicked.")
    displayInformation()
})


