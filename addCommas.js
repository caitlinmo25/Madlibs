function addCommas(number) {
    const parts = number.toString().split(".");
    let integerPart = parts[0];
    const decimalPart = parts[1];

    // Handle negative numbers
    const sign = integerPart.startsWith('-') ? '-' : '';
    if(sign) {
        integerPart = integerPart.slice(1);
    }

    let withCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart) {
        withCommas += "." + decimalPart;
    }
    return sign + withCommas;
}

module.exports = addCommas;
