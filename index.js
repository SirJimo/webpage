const form = document.getElementById("form");
const fname = document.getElementById("firstName");
const lname = document.getElementById("lastName");
const email = document.getElementById("email");
const phone_Number = document.getElementById("number");
const guest = document.getElementById("guests");
const night = document.getElementById("nights");


function validFirstName()
{
    let min = 3;
    let max =30;
    const fnameValue = fname.value.trim();
    const errText = fname.parentElement;
    const showErr = errText.querySelector("#err_Name");

    if(fnameValue === '')
    {
        errText.classList.remove("success");
        errText.classList.add("errText");
        showErr.textContent = "Your First Name Cannot Be Blank";
        return false;
    }
    else if(fnameValue.length < min || fnameValue.length > max)
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
    const lastNameValue = lname.value.trim();
    const errText = lname.parentElement;
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
function isPhoneNumberValid(phone_Number)
{
    const numCheck = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return numCheck.test(phone_Number);
}
function validNumber()
{
    const numValue = phone_Number.value.trim();
    const errText  = phone_Number.parentElement;
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
        showErr.textContent = "";
        return true;
    }
}
/*
function isGuestValid(guest)
{
    const guestCheck = /^\d+$/;
    return guestCheck.test(guest);
}
function validGuest()
{
    let min =1;
    let max = 26;
    const guestValue = guest.value.trim();
    const errText = guest.parentElement;
    const showErr = errText.querySelector("err_Guests");

    if(guestValue === '' )
    {
        errText.classList.remove("success");
        errText.classList.add("errText");
        showErr.textContent = "You cannot leave this blank";
    }
    else if(guestValue < min || guestValue > max)
    {
        errText.classList.remove("success");
        errText.classList.add("errText");
        showErr.textContent = "Enter A Correct Number Of Guests";
    }
    else
    {
        errText.classList.remove("errText");
        errText.classList.add("success");
        showErr.textContent ="Correct";
    }
}*/
