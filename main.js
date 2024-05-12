(function() {

    const conversionFrom = document.getElementById("convertFrom");
    const conversionTo = document.getElementById("convertTo");
    const result = document.getElementById("result");
    const buttonClear = document.getElementById("buttonClear");
    const input = document.getElementById("input");
    const form = document.getElementById("form");    
  

    let bin2dec = true;

    const regexBinary = /^[01]+$/;
    const regexDecimal = /^-?\d+$/;

    document.getElementById("swapOp")
    .addEventListener('click', function(event){
        event.preventDefault();
        swap();
    });

    document.getElementById("convertButton")
    .addEventListener('click', function(event){
        event.preventDefault();
        tryConvert();
    });

    buttonClear.addEventListener('click', clear);

    // document.getElementById("swapOp")
    // .addEventListener('click', function(event){
    //     event.preventDefault();
    //     swap();
    // });

    function swap() {
      if (isValidInput()) {
        const userInput = getUserInput();
        const convertedResult = convert(userInput);
        
        result.innerHTML = userInput;
        input.value = convertedResult;
      }

      bin2dec = !bin2dec;
      updateConverionTypeText();
    }

    function tryConvert() {
      if (isValidInput()) {
        convert(getUserInput());
        input.setCustomValidity("");
      } else {
        input.setCustomValidity("Enter a valid " + (bin2dec ? "binary" : "decimal") + " number.");
        console.log("Invalid input.");
        form.reportValidity();
        input.value = "";
      }
    }

    function getUserInput() {
      return input.value.trim();
    }

    function isValidInput() {
      const userInput = getUserInput();

      return (bin2dec ? regexBinary.test(userInput) : regexDecimal.test(userInput));
    }
    
    function convert(input) {
      if (bin2dec) {
        let numResult = parseInt(input,2);
        result.innerHTML = numResult.toString();

        return numResult.toString();
      } else {
        let stringResult = Number(input).toString(2);
        result.innerHTML = stringResult;

        return stringResult;
      }
    }

    function updateConverionTypeText() {
        if (bin2dec) {
          conversionFrom.innerHTML = "Binary";
          conversionTo.innerHTML = "Decimal";
        } else {
          conversionFrom.innerHTML = "Decimal";
          conversionTo.innerHTML = "Binary";
        }
    }

    function clear() {
      input.value = '';
      result.innerHTML = '';
    }
})();