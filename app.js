'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//First and Pike
var firstNndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randCustomersPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  locationName: '1st and Pike',
  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calctotalCookiesSoldPerHour: function() {
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesSoldPerHour[j]);
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
    }
  },
};
firstNndPike.calcRandCustomersPerHour();
firstNndPike.calctotalCookiesSoldPerHour();

function firstNndPikeResults() {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesSoldPerHour = document.getElementById('firstNndPike');
    var firstNndPikeLi = document.createElement('li');
    firstNndPikeLi.textContent = hours[k] + ': ' + firstNndPike.totalCookiesSoldPerHour[k] + ' cookies';
    console.log(totalCookiesSoldPerHour);
    totalCookiesSoldPerHour.appendChild(firstNndPikeLi);
  };
  firstNndPikeLi.textContent = 'Total Cookies Sold Today: ' + firstNndPike.totalDailyCookiesSold;
  totalCookiesSoldPerHour.appendChild(firstNndPikeLi);
}
firstNndPikeResults();
console.log(firstNndPike);
