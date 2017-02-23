/**
 * manual scraper for the "My Team" page on racing.fantasysports.yahoo.com
 * url is something like: https://racing.fantasysports.yahoo.com/auto/65342
 */

var run = function () {

  var getDrivers;
  var printDrivers;
  var processList;
  var processDriverLists;

  getDrivers = function () {
    var drivers = [];
    $("#available-players-tbody tr:visible").each(function (index, elem) {
      var name = $(elem).find(".racer-info a").text();
      var num = $(elem).find(".racer-info .car-number").text();
      drivers.push({name: name, num: num});
    });
    return drivers;
  };

  printDrivers = function (drivers) {
    var resultText = "";
    for (var i in drivers) {
      resultText += drivers[i].name + "\n";
    }
    resultText += "\n";
    for (var i in drivers) {
      resultText += drivers[i].num + "\n";
    }
    console.log(resultText);
  };

  var drivers = getDrivers();
  printDrivers(drivers);
};

var script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js";
script.onload = run;
document.head.appendChild(script);