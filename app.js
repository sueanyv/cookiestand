'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allLocations = [];
var salesDataTable = document.getElementById('locationjs');

function Location(minCustPerHour, maxCustPerHour, avgCookiesPerCust, locationName) {

  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randCustomersPerHour = [];
  this.totalCookiesSoldPerHour = [];
  this.totalDailyCookiesSold = 0;
  this.locationName = locationName;
  this.calcRandCustomersPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);

    }
  };
  this.calctotalCookiesSoldPerHour = function() {
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
    var dataCell = document.createElement('th');
    dataCell.textContent = this.totalDailyCookiesSold;
    rowElement.appendChild(dataCell);
    salesDataTable.appendChild(rowElement);
  };
  allLocations.push(this);

  };


  function makeHeaderRow() {
    var rowElement = document.createElement('tr');

    var headerCell = document.createElement('th');
    headerCell.textContent = 'Locations';
    rowElement.appendChild(headerCell);

    for (var i = 0; i < hours.length; i++) {
      headerCell = document.createElement('th');
      headerCell.textContent = hours[i];
      rowElement.appendChild(headerCell);
    }
