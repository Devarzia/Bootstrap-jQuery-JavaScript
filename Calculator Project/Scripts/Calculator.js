// Creating an event listener for the page
// Excutes when the page load
window.addEventListener("load", function ()
{
    // Grabbing the container for the buttons
    var buttonContainer = but("operations");

    // Adding an event listener for the buttons
    // Excutes when a button in the container is clicked
    buttonContainer.addEventListener("click", function (event)
    {
        // Setting a target variable 
        var target = event.target;

        // If Statement: If the target nodeName equal to input
        // the calculation will be made based on the case stated below
        if (target.nodeName == "INPUT")
        {
            var firstNumber = but("txtFirstNumber").value?parseInt(but("txtFirstNumber").value):NaN;
            var secondNumber = but("txtSecondNumber").value?parseInt(but("txtSecondNumber").value):NaN;
            var result;
            var output = but("Result");

            switch(target.value)
            {
                case "Add":
                    result = firstNumber + secondNumber;
                    break;

                case "Subtract":
                    result = firstNumber - secondNumber;
                    break;

                case "Multiply":
                    result = firstNumber * secondNumber;
                    break;

                case "Divide":
                    result = Math.round(firstNumber / secondNumber);
                    break;
            }

            // If statement: If the result isn't null
            // display results
            if (result != "NaN") {
                output.className = "";
                output.innerHTML = "Result: " + result;
                txtFirstNumber.focus();
            }
        }
    });
});

// function that returns the element by ID
function but(id)
{
    return document.getElementById(id)
}