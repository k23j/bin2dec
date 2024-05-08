(function() {

    const conversionType = document.getElementById("conversionType");
    const result = document.getElementById("result");
    const input = document.getElementById("input");
  

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

    function swap() {
      if (isValidInput) {
        const userInput = getUserInput();
        const convertedResult = convert(userInput);
        
        result.innerHTML = userInput;
        input.value = convertedResult;
      }

      bin2dec = !bin2dec;
      updateConverionTypeText();
    }

    function tryConvert() {
      if (isValidInput) {
        convert(input.value.trim());
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
            conversionType.innerHTML = "Binary to Decimal";
        } else {
            conversionType.innerHTML = "Decimal to Binary";

        }
    }
})();