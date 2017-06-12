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


//SeaTac Airport
var seaTacAir = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  randCustomersPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  locationName: 'Seatac Airport',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calctotalCookiesSoldPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesSoldPerHour[j]);
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
    }
  },
};
seaTacAir.calcRandCustomersPerHour();
seaTacAir.calctotalCookiesSoldPerHour();

function seaTacAirResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesSoldPerHour = document.getElementById('seaTacAir');
    var seaTacAirLi = document.createElement('li');
    seaTacAirLi.textContent = hours[k] + ': ' + seaTacAir.totalCookiesSoldPerHour[k] + ' cookies';
    console.log(totalCookiesSoldPerHour);
    totalCookiesSoldPerHour.appendChild(seaTacAirLi);
  };
  seaTacAirLi.textContent = 'Total Cookies Sold Today: ' + seaTacAir.totalDailyCookiesSold;
  totalCookiesSoldPerHour.appendChild(seaTacAirLi);
}
seaTacAirResults();
console.log(seaTacAir);


//Seattle Center
var seattleCen = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  randCustomersPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  locationName: 'Seattle Center',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calctotalCookiesSoldPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesSoldPerHour[j]);
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
    }
  },
};
seattleCen.calcRandCustomersPerHour();
seattleCen.calctotalCookiesSoldPerHour();

function seattleCenResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesSoldPerHour = document.getElementById('seattleCen');
    var seattleCenLi = document.createElement('li');
    seattleCenLi.textContent = hours[k] + ': ' + seattleCen.totalCookiesSoldPerHour[k] + ' cookies';
    console.log(totalCookiesSoldPerHour);
    totalCookiesSoldPerHour.appendChild(seattleCenLi);
  };
  seattleCenLi.textContent = 'Total Cookies Sold Today: ' + seattleCen.totalDailyCookiesSold;
  totalCookiesSoldPerHour.appendChild(seattleCenLi);
}
seattleCenResults();
console.log(seattleCen);


//Alki
var alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  randCustomersPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  locationName: 'Alki',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calctotalCookiesSoldPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesSoldPerHour[j]);
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
    }
  },
};
alki.calcRandCustomersPerHour();
alki.calctotalCookiesSoldPerHour();

function alkiResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesSoldPerHour = document.getElementById('alki');
    var alkiLi = document.createElement('li');
    alkiLi.textContent = hours[k] + ': ' + alki.totalCookiesSoldPerHour[k] + ' cookies';
    console.log(totalCookiesSoldPerHour);
    totalCookiesSoldPerHour.appendChild(alkiLi);
  };
  alkiLi.textContent = 'Total Cookies Sold Today: ' + alki.totalDailyCookiesSold;
  totalCookiesSoldPerHour.appendChild(alkiLi);
}
alkiResults();
console.log(alki);


//Capitol Hill
var capHill = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  randCustomersPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  locationName: 'Capitol Hill',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calctotalCookiesSoldPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesSoldPerHour[j]);
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
    }
  },
};
capHill.calcRandCustomersPerHour();
capHill.calctotalCookiesSoldPerHour();

function capHillResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesSoldPerHour = document.getElementById('capHill');
    var capHillLi = document.createElement('li');
    capHillLi.textContent = hours[k] + ': ' + capHill.totalCookiesSoldPerHour[k] + ' cookies';
    console.log(totalCookiesSoldPerHour);
    totalCookiesSoldPerHour.appendChild(capHillLi);
  };
  capHillLi.textContent = 'Total Cookies Sold Today: ' + capHill.totalDailyCookiesSold;
  totalCookiesSoldPerHour.appendChild(capHillLi);
}
capHillResults();
console.log(capHill);
