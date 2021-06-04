/*
    The function compute() gathers all the inputs into variables
    and calculates the interest earned.

    If a non-positive number is entered at the time of calculation
    an alert is created and refocuses on the main input field.
*/
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    
    var year = new Date().getFullYear()+parseInt(years);

    if (principal > 0) {
        document.getElementById("result").innerText=
        "If you deposit " + principal + `, 
        at an interest rate of ` + rate + `.
        You will receive an amount of ` + interest + `, 
        in the year ` + year;
    }
    else {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    }        
}


/*
    The function updateRate() simply updates the rate displayed
    next to the Range control after being adjusted.
*/
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        