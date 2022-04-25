
'use strict';



const Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '12pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



function CookieStand(cookieStandLocation, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationCity = cookieStandLocation;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalCookiesPerHourPerLocation = [];
  this.randomCookieSales = this.createRandomCookieSales();
}

CookieStand.prototype.createRandomCookieSales = function () {
  let total = 0;
  for (let i = 0; i < Hours.length; i++) {
    const randomCustPerHour = randomInRange(this.minCustPerHour, this.maxCustPerHour);
    const randomSales = Math.ceil(randomCustPerHour * this.avgCookiesPerCust);
    this.totalCookiesPerHourPerLocation.push(randomSales);
    total += randomSales;
  }
  this.totalCookiesSoldPerLocation = total;
};

let newCookieStands = [
  new CookieStand('Seattle', 23, 65, 6.3),
  new CookieStand('Tokyo', 3, 24, 1.2),
  new CookieStand('Dubai', 11, 38, 3.7),
  new CookieStand('Paris', 20, 38, 2.3),
  new CookieStand('Lima', 2, 16, 4.6)
];


const containerElem = document.getElementById('locations');
const tableBodyElem = document.createElement('table');
containerElem.appendChild(tableBodyElem);
const tablebodyElem = document.createElement('tbody');
tableBodyElem.appendChild(tablebodyElem);



function createFooterRow() {
  const tableFootElement = document.createElement('tfoot');
  tableBodyElem.appendChild(tableFootElement);
  const footerRowElem = document.createElement('tr');
  tableFootElement.appendChild(footerRowElem);
  const emptyFooterRowElem = document.createElement('th');
  footerRowElem.appendChild(emptyFooterRowElem);
  emptyFooterRowElem.textContent = 'Totals';
  let totalSalesData = getHourlyTotalsAcrossShops();
  let grandTotal = 0;
  for (let i = 0; i < Hours.length; i++) {
    const footerCellElem = document.createElement('th');
    footerRowElem.appendChild(footerCellElem);
    footerCellElem.textContent = totalSalesData[i];
    grandTotal += totalSalesData[i];
  }

  const grandTotalOfHoursandLocationsElem = document.createElement('td');
  footerRowElem.appendChild(grandTotalOfHoursandLocationsElem);
  grandTotalOfHoursandLocationsElem.textContent = grandTotal;
}



function createHeaderRow() {
  const theadElem = document.createElement('thead');
  tableBodyElem.appendChild(theadElem);

  const tr = document.createElement('tr');
  theadElem.appendChild(tr);

  const emptyHeaderRowElem = document.createElement('th');
  theadElem.appendChild(emptyHeaderRowElem);
  
  emptyHeaderRowElem.textContent = '';
  for (let i = 0; i < Hours.length; i++) {
    const theadHoursHeadingElem = document.createElement('th');
    theadElem.appendChild(theadHoursHeadingElem);
    theadHoursHeadingElem.textContent = Hours[i];
  }

  const dailyTotalCookies = document.createElement('th');
  theadElem.appendChild(dailyTotalCookies);
  dailyTotalCookies.textContent = 'Daily Total Cookies';
}

createHeaderRow();


createFooterRow();


function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function getHourlyTotalsAcrossShops() {
  let hourlyTotalAcrossShops = [];
  for (let j = 0; j < Hours.length; j++) {
    let total = 0;
    for (let i = 0; i < newCookieStands.length; i++) {
      let currentStore = newCookieStands[i];
      let hourCookiesSold = currentStore.totalCookiesPerHourPerLocation[j];
      total += hourCookiesSold;
    }
    hourlyTotalAcrossShops.push(total);
  }
  return hourlyTotalAcrossShops;
}



CookieStand.prototype.render = function () {

  const rowElem = document.createElement('tr');
  tableBodyElem.appendChild(rowElem);

  const locationElem = document.createElement('td');
  rowElem.appendChild(locationElem);
  locationElem.textContent = this.locationCity;

  let locationDailySales = 0;
  for (let i = 0; i < this.totalCookiesPerHourPerLocation.length; i++) {
    const salesElem = document.createElement('td');
    rowElem.appendChild(salesElem);
    salesElem.textContent = this.totalCookiesPerHourPerLocation[i];
    locationDailySales += this.totalCookiesPerHourPerLocation[i];
  }
  const dailyLocationTotals = document.createElement('td');
  rowElem.appendChild(dailyLocationTotals);
  dailyLocationTotals.textContent = locationDailySales;

};

for (let i = 0; i < newCookieStands.length; i++) {
  newCookieStands[i].render();
}



const newLocationFormElem = document.getElementById('add-a-location');
newLocationFormElem.addEventListener('submit', function (event) {
  event.preventDefault();
  let name = event.target.locationCity.value;
  let minCustomersPerHour = parseInt(event.target.minimumCustomers.value);
  let maxCustomersPerHour = parseInt(event.target.maximumCustomers.value);
  let avgCookiesPerCustomer = parseInt(event.target.avgCookiesPerCustomer.value);
  let addedLocation = new CookieStand(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer);
  addedLocation.render();
});