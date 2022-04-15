'use strict';

/* TO DO
 
Create/add a table
create/add a header row to table 
create/add a footer row to table
need a cookiestand constuctor functin + methods



const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let tableElem = null;

function createTable() {
constcontainerElem + document.getElementById('sales-data');
tableElem = document.createElement ('table');
containerElem.appendChild(tableElem);
}

function createHeaderRow() {
const headerRowElem = document.createElement('tr');
tableElem.appendChild(headerRowElem);
for(let i=0; i < hours.length; i++) {
  const headerCellElem = document.createElement('th');
  headerRowElem.appendChild(headerCellElem);
  headerCellElem.textContent = hours[i];
}

}

function createFooterRow() {
const footerRowElem = document.createElement('tr');
tableElem.appendChild(footerRowElem);
for(let i=0; i<hours.length; i++) {
  const footerCellElem = document.createElement('th');
  footerRowElem.appendChild(footerCellElem);
  footerCellEllem.textContent = getHourlyTotalsAcrossShops(); //TODO: Need real values
}
}

//start
createTable();
createHeaderRow();
createFooterRow(); */

// some things happe
console.log('I happened when page loaded');

// wire up event listeners
const buttonElem1 = document.getElementById('btn-1');
const buttonElem2 = document.getElementById('btn-2');

function clickHandler() {
  alert("I was clicked and am in named function");
}

buttonElem1.addEventListener('click', clickHandler);

buttonElem2.addEventListener('click', function () {
  alert("I was clicked and am in anonymous function");
});


// form event handling
function handleSubmit(event) {
  event.preventDefault();
  const userNameInputElem = event.target.userName;
  const userAgeInputElem = event.target.age;
  const userAgeValueAsInt = parseInt(userAgeInputElem.value);
}

const formElem = document.getElementById('my-form');
formElem.addEventListener('submit', handleSubmit);


const cookieFormElem = document.getElementById('cookie-stand-form');
cookieFormElem.addEventListener('submit', function (event) {
  event.preventDefault();
  const location = event.target.location.value;
  const minCustomers = parseInt(event.target.minCustomers.value);
  const maxCustomers = parseInt(event.target.maxCustomers.value);
  const avgCookiesPerCustomer = parseFloat(event.target.avgCookies.value);
  console.log(location, minCustomers, maxCustomers, avgCookiesPerCustomer)
});

console.log('I also happened when page loaded');
