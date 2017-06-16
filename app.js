'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var salesDataTable = document.getElementById('locationjs');
//First and Pike
function Store(minCustPerHour, maxCustPerHour, avgCookiesPerCust, locationName) {

  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randCustomersPerHour = [];
  this.totalCookiesSoldPerHour = [];
  this.totalDailyCookiesSold = 0;
  this.locationName = locationName;
  this.calcRandCustomersPerHour = function() {
    this.randCustomersPerHour = [];
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);

    }
  };


  this.calctotalCookiesSoldPerHour = function() {
    this.totalCookiesSoldPerHour = [];
    this.totalDailyCookiesSold = 0;

    this.calcRandCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[i] * this.avgCookiesPerCust));

      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[i];
    }
  };

  this.render = function() {
    this.calctotalCookiesSoldPerHour();

    var rowElement = document.createElement('tr');

    var dataCell = document.createElement('th');
    dataCell.textContent = this.locationName;
    rowElement.appendChild(dataCell);

    for (var i = 0; i < hours.length; i++) {
      dataCell = document.createElement('td');
      dataCell.textContent = this.totalCookiesSoldPerHour[i];
      rowElement.appendChild(dataCell);
    }

    dataCell = document.createElement('th');
    dataCell.textContent = this.totalDailyCookiesSold;
    rowElement.appendChild(dataCell);
    salesDataTable.appendChild(rowElement);
  };

  allStores.push(this);

};

function makeHeaderRow() {
  var rowElement = document.createElement('tr');

  var headerCell = document.createElement('th');
  headerCell.textContent = 'Stores';
  rowElement.appendChild(headerCell);

  for (var i = 0; i < hours.length; i++) {
    headerCell = document.createElement('th');
    headerCell.textContent = hours[i];
    rowElement.appendChild(headerCell);
  }

  headerCell = document.createElement('th');
  headerCell.textContent = 'Store Total';
  rowElement.appendChild(headerCell);

  salesDataTable.appendChild(rowElement);

};

new Store(23, 65, 6.3, '1st and Pike');
new Store(3, 24, 1.2, 'SeaTac Airport');
new Store(11, 38, 3.7, 'Seattle Center');
new Store(20, 38, 2.3, 'Capitol Hill');
new Store(2, 16, 4.6, 'Alki');

makeHeaderRow();

for (var i = 0; i < allStores.length; ++i) {
  allStores[i].render();
}

function makeFooterRow() {
  var rowElement = document.createElement('tr');

  var headerCell = document.createElement('th'); // far left cells
  headerCell.textContent = 'Hourly Totals';
  rowElement.appendChild(headerCell);

  var dailyTotalAllStores = 0;
  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    for (var j = 0; j < allStores.length; j++) {
      total += allStores[j].totalCookiesSoldPerHour[i];
    }
    headerCell = document.createElement('th');
    headerCell.textContent = total;
    rowElement.appendChild(headerCell);
    dailyTotalAllStores += total;
  }
  headerCell = document.createElement('th'); //far right cells
  headerCell.textContent = dailyTotalAllStores;
  rowElement.appendChild(headerCell);

  salesDataTable.appendChild(rowElement);
};
makeFooterRow();


function handleCommentSubmit(event) {

  event.preventDefault(); //gotta have it for this purpose. prevents page reload on a 'submit' event

  var minCust = event.target.MinCustomerPerHr.value;
  var maxCust = event.target.MaxCustomerPerHr.value;
  var avgCookie = event.target.AverageCookie.value;
  var locName = event.target.locName.value;
  console.log(minCust, maxCust, avgCookie, locName);

  if (minCust === null || maxCust === null || avgCookie === null || locName === null) {
    alert('you  fudge up, Please complete  all sections form! ');
    return;
  }


  var sameNameFound = false;
  for (var i = 0; i < allStores.length; ++i) {
    if (locName === allStores[i].locationName) {
      sameNameFound = true;
      allStores[i].maxCustPerHour = maxCust;
      allStores[i].minCustPerHour = minCust;
      allStores[i].maxCustPerHour = maxCust;
      allStores[i].avgCookiesPerCust = avgCookie;
      break;
    }
  }
  if (sameNameFound === false) {
    new Store(minCust, maxCust, avgCookie, locName);

  }
  var clearTable = document.getElementById('locationjs');
  clearTable.innerHTML = '';


  makeHeaderRow();

  for (var j = 0; j < allStores.length; j++) {
    allStores[j].render();
  };

  makeFooterRow();

};

var newStore = document.getElementById('salesform');
newStore.addEventListener('submit', handleCommentSubmit);
