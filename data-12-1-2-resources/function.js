var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);


var doubled = numbers.map(function(carPrice) {
    return carPrice * 2;
    });

var cities = [
    {
        "Rank": 1,
        "City": "San Antonio ",
        "State": "Texas",
        "Increase_from_2016": "24208",
        "population": "1511946"
    },
    {
        "Rank": 2,
        "City": "Phoenix ",
        "State": "Arizona",
        "Increase_from_2016": "24036",
        "population": "1626078"
    },
    {
        "Rank": 3,
        "City": "Dallas",
        "State": "Texas",
        "Increase_from_2016": "18935",
        "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City
    return city.State
    return city.population;
});
console.log(cityNames);    


var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var filter = words.filter(function(word){
    return word.match(/(\bs\S+\b)/ig); 
});

var numbers = [1,2,3,4,5];

var doubled = numbers.map(num => num * 2);
console.log(doubled);


var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );