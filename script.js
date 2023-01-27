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

// initialize result

const resultDisplay = document.getElementById("result")

// function that displays user information
function displayInformation() {

    summaryInput.innerHTML = ""
    summaryInput.innerHTML += "<h4>User Information</h4>"
    summaryInput.innerHTML += "<p>Name: " + firstNameInput.value + ` ` + lastNameInput.value + "</p>"
    summaryInput.innerHTML += "<p>Age: " + ageInput.value + "</p>"
    summaryInput.innerHTML += "<p>Quantity of Tickets: " + quantityInput.value + "</p>"
    summaryInput.innerHTML += "<p>Users' Amount of Cash: " + cashInput.value + "</p>"
}

// function that calculates eligibility 
function calculateEligibility(){
    console.log("Calculating...")

    let html = "<h4>Results</h4>"
    html += "<p>"

    // check variables
    if(!firstNameInput.value){
        html += "First Name is Empty. "
    }else{
        html += firstNameInput.value + " "
    }
    if(!lastNameInput.value){
        html += "Last Name is Empty. "
    }else{
        html += lastNameInput.value + " "
    }

    if(firstNameInput.value && lastNameInput.value){
        html += "is looking to get some tickets."
    }

    html += "</p>"

    // check numbers
    if(ageInput.value < 16){
        html += "<p>" + ageInput.value + " is too low. You need to be at least 16.</p>"
    }else{
        html += "<p>" + ageInput.value + " is old enough.</p>"
    }

    let ticketCost = 14

    if((quantityInput.value * ticketCost) > cashInput.value){
        html += "<p>" + quantityInput.value + " is not enough to purchase" + quantityInput.value + " tickets. </p>"
    }else{
        html += "<p>" + cashInput.value + " is enough for " + quantityInput.value +  " tickets. </p>"
    }

    if(ageInput.value > 16 && (quantityInput.value * ticketCost) > cashInput.value){
        html += "<p><b>Congratulations. Here are your tickets.</b></p>"
    }else{
        html += "<p><b>Sorry, you didn't make at least one requirement.</b></p>"
    }

    resultDisplay.innerHTML = html

}

// event triggers

submitInput.addEventListener("click", function () {
    console.log("Submit Button Clicked.")
    displayInformation()
    calculateEligibility()
})


