
const form = document.getElementById("form");
const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const email = document.getElementById("email");
const num = document.getElementById("number");
const guests = document.getElementById("guest");
const nights = document.getElementById("nights");

form.addEventListener("submit", function(e)
{
    e.preventDefault();
    validFirstName();
    validLastName();
    validEmail();
    validNumber();
});




function validFirstName()
{
    
    let min =3;
    let max = 30;
    const firstNameValue = fName.value.trim();
    const errText = fName.parentElement;
    const showErr = errText.querySelector("#err_Name");

    if(firstNameValue === '')
    {
        errText.classList.remove("success");
        errText.classList.add("errText");
        
        showErr.textContent = "Your First Name cannot be blank";
        return false;
    }
    else if(firstNameValue.length < min || firstNameValue.length > max)
    {
        errText.classList.remove("success");
        showErr.textContent = `Your First Name must be between ${min} and ${max} characters`;
        errText.classList.add("errText");
        
        return false;
    }
    else
    {
        errText.classList.remove("errText");
        errText.classList.add("success");
        showErr.textContent = "";
        return true;
    }
    
}
function validLastName()    
{
    let min =3;
    let max = 30;
    const lastNameValue = lName.value.trim();
    const errText = lName.parentElement;
    const showErr = errText.querySelector("#err_Surname");

    if(lastNameValue === '')
    {
        errText.classList.remove("success");
        errText.classList.add("errText");
        
        showErr.textContent = "Your Last Name cannot be blank";
        return false;
    }
    else if(lastNameValue.length < min || lastNameValue.length > max)
    {
        errText.classList.remove("success");
        showErr.textContent = `Your Last Name must be between ${min} and ${max} characters`;
        errText.classList.add("errText");
        
        return false;
    }
    else
    {
        errText.classList.remove("errText");
        errText.classList.add("success");
        showErr.textContent = "";
        return true;
    } 
}

function isEmailValid(email)
{
    const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    return check.test(email);
}

function validEmail()
{
    const emailValue = email.value.trim();
    const errText = email.parentElement;
    const showErr = errText.querySelector("#err_Email");
    if(emailValue ==='')
    {
        errText.classList.remove("success");
        errText.classList.add("errText");
        showErr.textContent = "Your email address cannot be blank";
        return false;
    }
    else if(!isEmailValid(emailValue))
    {
        errText.classList.remove("success");
        errText.classList.add("errText");
        showErr.textContent = "Email address your entered is not valid";
        return false;
    }
    else
    {
        errText.classList.remove("errText");
        errText.classList.add("success");
        showErr.textContent = "";
        return true;
    }
}
function isPhoneNumberValid(num)
{
    const numCheck = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return numCheck.test(num);
}
function validNumber()
{
    const numValue = num.value.trim();
    const errText  = num.parentElement;
    const showErr = errText.querySelector("#err_Number");

    if(numValue === '')
    {
        errText.classList.remove("success");
        errText.classList.add("errText");
        showErr.textContent = "You cannot leave this blank";
        return false;
    }
    else if(!isPhoneNumberValid(numValue))
    {
        errText.classList.remove("success");
        errText.classList.add("errText");
        showErr.textContent = "Enter a correct Phone Number";
        return false;    
    }
    else
    {
        errText.classList.remove("errText");
        errText.classList.add("success");
        return true;
    }
}
/*function validGuest()
{
    let max = 26;
    const guestValue = guests.value.trim();
    const errText = guests.parentElement;
    const showErr = errText.querySelector("err_Guests");

    if(guestValue === "")
    {
        errText.classList.remove("success");
        errText.classList.add("errText");
        showErr.textContent = "A number of Guests is NEEDED";
    }
    
}*/



/*function validInputname()
{
    const nameValue = fName.value.trim();
    const inputErr = fName.parentElement;
    const err = inputErr.querySelector("#err_Name");
    if(nameValue === '' || nameValue.length < 3)
    {

        err.textContent = "check";
        return false;
    }
    else
    {
        err.textContent = "checked name" ;
        return true;
    }
};
function validInput()
{
    const surnameValue = lName.value.trim();
    const inputErr = lName.parentElement;
    const err = inputErr.querySelector("#err_Surname");
    if(surnameValue === '' || surnameValue.length < 3)
    {

        
        err.textContent = "check";
        return false;
    }
    else
    {
        err.textContent = "checked name" ;
        return true;
    }
};*/