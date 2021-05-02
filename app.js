'use strict';

// first location :

let Seattle = {
    locName: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    customGenerated: 0,
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    allCookies: [],
    img: 'http://saulfein.github.io/cookie-stand/img/salmon.png',

    custPerhour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    cookiesPerhour: function () {
        for (let i = 0; i < this.workHour.length; i++) {
            let result = this.avgCookie * this.custPerhour(this.minCust, this.maxCust);
            this.allCookies.push(result);
        }
    },
};


Seattle.cookiesPerhour();
console.log(Seattle.allCookies);

//creating h2


let container = document.getElementById('locationName');
let h2El = document.createElement('h2');
container.appendChild(h2El);
h2El.textContent = Seattle.locName ;


//Creating the lists

let divEl = document.getElementById('location1');
let ulEl = document.createElement('ul');
divEl.appendChild(ulEl);

for (let i = 0; i < Seattle.workHour.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = Seattle.workHour[i];
    ulEl.appendChild(liEl);
   
  for(let index = 0; index < Seattle.allCookies.length ; index++){
    let liEl = document.createElement('li');
    liEl.textContent = Seattle.allCookies[index];
    ulEl.appendChild(liEl);
  }
}

let container2 = document.getElementById('image');
let imgEl = document.createElement('img');
container2.appendChild(imgEl);
imgEl.setAttribute('src', `${Seattle.img}`)



// second location :

let Tokyo = {
    locName : 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    customGenerated: 0,
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    allCookies: [],
    custPerhour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    cookiesPerhour: function () {
        for (let i = 0; i < this.workHour.length; i++) {
            let result = this.avgCookie * this.custPerhour(this.minCust, this.maxCust);
            this.allCookies.push(result)
        }
    }
}
Tokyo.cookiesPerhour();
console.log(Tokyo.allCookies);

//creating h2

let container3 = document.getElementById('locationName1');
let h2El1 = document.createElement('h2');
container3.appendChild(h2El1);
h2El1.textContent = Tokyo.locName ;


//Creating the lists

let divEl1 = document.getElementById('location2');
let ulEl1 = document.createElement('ul');
divEl1.appendChild(ulEl1);

for (let i = 0; i < Tokyo.workHour.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = Tokyo.workHour[i];
    ulEl.appendChild(liEl);
   
  for(let index = 0; index < Tokyo.allCookies.length ; index++){
    let liEl = document.createElement('li');
    liEl.textContent = Tokyo.allCookies[index];
    ulEl.appendChild(liEl);
  }
}

// third location

let Dubai = {
    locName: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    customGenerated: 0,
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    allCookies: [],
    custPerhour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    cookiesPerhour: function () {
        for (let i = 0; i < this.workHour.length; i++) {
            let result = this.avgCookie * this.custPerhour(this.minCust, this.maxCust);
            this.allCookies.push(result)
        }
    }
}
Dubai.cookiesPerhour();
console.log(Dubai.allCookies);


//creating h2

let container4 = document.getElementById('locationName2');
let h2El2 = document.createElement('h2');
container4.appendChild(h2El2);
h2El2.textContent = Dubai.locName ;


//Creating the lists

let divEl2 = document.getElementById('location3');
let ulEl2 = document.createElement('ul');
divEl1.appendChild(ulEl2);

for (let i = 0; i < Dubai.workHour.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = Dubai.workHour[i];
    ulEl.appendChild(liEl);
   
  for(let index = 0; index < Dubai.allCookies.length ; index++){
    let liEl = document.createElement('li');
    liEl.textContent = Dubai.allCookies[index];
    ulEl.appendChild(liEl);
  }

}


// fourth location

let Paris = {
    locName : 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    customGenerated: 0,
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    allCookies: [],
    custPerhour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    cookiesPerhour: function () {
        for (let i = 0; i < this.workHour.length; i++) {
            let result = this.avgCookie * this.custPerhour(this.minCust, this.maxCust);
            this.allCookies.push(result)
        }
    }
}
Paris.cookiesPerhour();
console.log(Paris.allCookies);


//creating h2

let container5 = document.getElementById('locationName3');
let h2El3 = document.createElement('h2');
container5.appendChild(h2El3);
h2El3.textContent = Paris.locName ;


//Creating the lists

let divEl3 = document.getElementById('location4');
let ulEl3 = document.createElement('ul');
divEl3.appendChild(ulEl3);

for (let i = 0; i < Paris.workHour.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = Paris.workHour[i];
    ulEl.appendChild(liEl);
   
  for(let index = 0; index < Paris.allCookies.length ; index++){
    let liEl = document.createElement('li');
    liEl.textContent = Paris.allCookies[index];
    ulEl.appendChild(liEl);
  }

}


// fifth location

let Lima = {
    locName: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    customGenerated: 0,
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    allCookies: [],
    custPerhour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    cookiesPerhour: function () {
        for (let i = 0; i < this.workHour.length; i++) {
            let result = this.avgCookie * this.custPerhour(this.minCust, this.maxCust);
            this.allCookies.push(result)
        }
    }
}
Lima.cookiesPerhour();
console.log(Lima.allCookies);

//creating h2

let container6 = document.getElementById('locationName4');
let h2El4 = document.createElement('h2');
container6.appendChild(h2El4);
h2El4.textContent = Lima.locName ;


//Creating the lists

let divEl4 = document.getElementById('location5');
let ulEl4 = document.createElement('ul');
divEl3.appendChild(ulEl4);

for (let i = 0; i < Lima.workHour.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = Lima.workHour[i];
    ulEl.appendChild(liEl);
   
  for(let index = 0; index < Lima.allCookies.length ; index++){
    let liEl = document.createElement('li');
    liEl.textContent = Lima.allCookies[index];
    ulEl.appendChild(liEl);
  }

}



