(function() {

    const conversionType = document.getElementById("conversionType");
    const result = document.getElementById("result");
  

    let bin2dec = true;

    const regexBinary = "^[01]+$";
    const regexDecimal = "^-?\d+$";

    document.getElementById("swapOp")
    .addEventListener('click', function(event){
        event.preventDefault();
        swap();
    });

    // document.getElementById("convertButton")
    // .addEventListener('click', function(event){
    //     event.preventDefault();
    //     convert();
    // });

    function swap() {
        bin2dec = !bin2dec;
        updateConverionTypeText();
    }

    function convert() {
        document.getElementById("form").submit();
    }

    function updateConverionTypeText() {
        if (bin2dec) {
            conversionType.innerHTML = "Binary to Decimal";
        } else {
            conversionType.innerHTML = "Decimal to Binary";

        }
    }
})();