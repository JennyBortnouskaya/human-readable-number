let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let hundreds = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convert_hundreds(num) {
    if (num > 99) {
        if(num % 100 !== 0){
            return units[Math.floor(num / 100)] + ' hundred ' + convert_dozens(num % 100);
        } else {
            return units[Math.floor(num / 100)] + ' hundred';
        }
    } else {
        return convert_dozens(num);
    }
}

function convert_dozens(num) {
    if (num < 10) {
        return units[num];
    }
    else if (num >= 10 && num < 20) {
        return hundreds[num - 10];
    }
    else {
        if(num % 10 !== 0){
            return dozens[Math.floor(num / 10)] + ' ' + units[num % 10];
        } else {
            return dozens[Math.floor(num / 10)];
        }
    }
}

function convert(num) {
    if (num === 0) return 'zero';
    else return convert_hundreds(num);
}

module.exports = function toReadable (number) {
    return convert(number);

};
