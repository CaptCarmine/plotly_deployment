// var citydata = cityGrowths

console.log(cityGrowths);



var ascendingsortedCities = cityGrowths.sort( (a,b) => a.Increase_from_2016 -
    b.Increase_from_2016);

var sortedCities = cityGrowths.sort((a,b) =>
    a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

var topFiveCities = sortedCities.slice(0,5);
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => city.Increase_from_2016);
var topFiveCityGrowthsInt = topFiveCities.map(city => parseInt(city.Increase_from_2016));


var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowthsInt,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);


  var populatedCities = cityGrowths.sort((a,b) =>
  a.population - b.population).reverse(); 

  var topSevenCities = populatedCities.slice(0,7);


  var topSevenCityNames = topSevenCities.map(city => city.City);
  var topSevenCityGrowths = topSevenCities.map(city => city.population);
  var topSevenCityGrowthsInt = topSevenCities.map(city => parseInt(city.population));


  var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowthsInt,
    type: "bar"
  };
  var data2 = [trace];
  var layout = {
    title: "Largest Populations",
    xaxis: { title: "City" },
    yaxis: { title: "Population Size"}
  };
  Plotly.newPlot("bar-plot2", data2, layout);