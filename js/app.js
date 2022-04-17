
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

const seattle = {
  title: "Seattle",
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function () {
    // generate values to populate randomCookiesPerHour
    // array should have slots for 6am through 7pm (and maybe totals)
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    // get on screen
    const containerElem = document.getElementById('cookie-stand-locations');

    // article
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    // heading
    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    // ul
    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // list items
    for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = hours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }

    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;

  }
};



seattle.generateRandomCookiesPerHour();
seattle.render();

const lima = {
  title: "Lima",
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function () {
    // generate values to populate randomCookiesPerHour
    // array should have slots for 6am through 7pm (and maybe totals)
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    // get on screen
    const containerElem = document.getElementById('cookie-stand-locations');

    // article
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    // heading
    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    // ul
    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // list items
    for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = hours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }

    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;

  }
};

lima.generateRandomCookiesPerHour();
lima.render();

const tokyo = {
  title: "Tokyo",
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function () {
    // generate values to populate randomCookiesPerHour
    // array should have slots for 6am through 7pm (and maybe totals)
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    // get on screen
    const containerElem = document.getElementById('cookie-stand-locations');

    // article
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    // heading
    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    // ul
    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // list items
    for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = hours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }

    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;

  }
};

tokyo.generateRandomCookiesPerHour();
tokyo.render();

function randomInRange(min, max) {
  const span = max - min + 1;
  const randInSpan = Math.floor(Math.random() * span);
  return min + randInSpan;
}

const dubai = {
  title: "Dubai",
  minCustomers:11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function () {
    // generate values to populate randomCookiesPerHour
    // array should have slots for 6am through 7pm (and maybe totals)
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    // get on screen
    const containerElem = document.getElementById('cookie-stand-locations');

    // article
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    // heading
    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    // ul
    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // list items
    for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = hours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }

    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;

  }
};

dubai.generateRandomCookiesPerHour();
dubai.render();

function randomInRange(min, max) {
  const span = max - min + 1;
  const randInSpan = Math.floor(Math.random() * span);
  return min + randInSpan;
}

const paris = {
  title: "Paris",
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function () {
    // generate values to populate randomCookiesPerHour
    // array should have slots for 6am through 7pm (and maybe totals)
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    // get on screen
    const containerElem = document.getElementById('cookie-stand-locations');

    // article
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    // heading
    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    // ul
    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // list items
    for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = hours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }

    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;

  }
};

paris.generateRandomCookiesPerHour();
paris.render();

function randomInRange(min, max) {
  const span = max - min + 1;
  const randInSpan = Math.floor(Math.random() * span);
  return min + randInSpan;
}

// const tokyo = {
//   city: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2
// };

// const dubai = {
//   city: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7
// };

// const paris = {
//   city: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3
// };

// const lima = {
//   city: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6
// };


