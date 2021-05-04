'use strict';

//location #1 :

// let workHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// function random(minCust, maxCust) {
//     var randomValue = Math.random();
//     return Math.floor(randomValue * (maxCust - minCust + 1) + minCust);
// }

// let Seattle = {
//     locName: 'Seattle',
//     minCustperHr: 23,
//     maxCustperHr: 65,
//     avgCookies: 6.3,
//     randomCustom: [],
//     salesCookies: [],
//     totalSum: 0,


//     custPerhour: function () {
//         for (let hour = 0; hour < workHour.length; hour++) {

//             this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));
//         }
//         console.log(this);
//     },

//     cookiesPerhour: function () {

//         this.custPerhour();
//         for (let i = 0; i < workHour.length; i++) {

//             this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

//             this.totalSum += this.salesCookies[i];

//         }

//     },
//     render: function () {
//         let container = document.getElementById('cookies');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.locName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < workHour.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${workHour[hour]} : ${this.salesCookies[hour]} cookies `;

//         }
//         let liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total : ${this.totalSum} cookies`
//     }
// }

// Seattle.custPerhour();
// Seattle.cookiesPerhour();
// Seattle.render();


// //location #2 :


// let Tokyo = {
//     locName: 'Tokyo',
//     minCustperHr: 3,
//     maxCustperHr: 24,
//     avgCookies: 1.2,
//     randomCustom: [],
//     salesCookies: [],
//     totalSum: 0,


//     custPerhour: function () {
//         for (let hour = 0; hour < workHour.length; hour++) {

//             this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));
//         }
//         console.log(this);
//     },

//     cookiesPerhour: function () {

//         this.custPerhour();
//         for (let i = 0; i < workHour.length; i++) {

//             this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

//             this.totalSum += this.salesCookies[i];

//         }

//     },
//     render: function () {
//         let container = document.getElementById('cookies');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.locName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < workHour.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${workHour[hour]} : ${this.salesCookies[hour]} cookies `;

//         }
//         let liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total : ${this.totalSum} cookies`
//     }
// }

// Tokyo.custPerhour();
// Tokyo.cookiesPerhour();
// Tokyo.render();

// // location #3 :


// let Dubai = {
//     locName: 'Dubai',
//     minCustperHr: 11,
//     maxCustperHr: 38,
//     avgCookies: 3.7,
//     randomCustom: [],
//     salesCookies: [],
//     totalSum: 0,


//     custPerhour: function () {
//         for (let hour = 0; hour < workHour.length; hour++) {

//             this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));
//         }
//         console.log(this);
//     },

//     cookiesPerhour: function () {

//         this.custPerhour();
//         for (let i = 0; i < workHour.length; i++) {

//             this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

//             this.totalSum += this.salesCookies[i];

//         }

//     },
//     render: function () {
//         let container = document.getElementById('cookies');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.locName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < workHour.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${workHour[hour]} : ${this.salesCookies[hour]} cookies `;

//         }
//         let liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total : ${this.totalSum} cookies`
//     }
// }

// Dubai.custPerhour();
// Dubai.cookiesPerhour();
// Dubai.render();

// //location #4 :



// let Paris = {
//     locName: 'Paris',
//     minCustperHr: 20,
//     maxCustperHr: 38,
//     avgCookies: 2.3,
//     randomCustom: [],
//     salesCookies: [],
//     totalSum: 0,


//     custPerhour: function () {
//         for (let hour = 0; hour < workHour.length; hour++) {

//             this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));
//         }
//         console.log(this);
//     },

//     cookiesPerhour: function () {

//         this.custPerhour();
//         for (let i = 0; i < workHour.length; i++) {

//             this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

//             this.totalSum += this.salesCookies[i];

//         }

//     },
//     render: function () {
//         let container = document.getElementById('cookies');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.locName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < workHour.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${workHour[hour]} : ${this.salesCookies[hour]} cookies `;

//         }
//         let liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total : ${this.totalSum} cookies`
//     }
// }

// Paris.custPerhour();
// Paris.cookiesPerhour();
// Paris.render();

// //location #5 :



// let Lima = {
//     locName: 'Lima',
//     minCustperHr: 2,
//     maxCustperHr: 16,
//     avgCookies: 4.6,
//     randomCustom: [],
//     salesCookies: [],
//     totalSum: 0,


//     custPerhour: function () {
//         for (let hour = 0; hour < workHour.length; hour++) {

//             this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));
//         }
//         console.log(this);
//     },

//     cookiesPerhour: function () {

//         this.custPerhour();
//         for (let i = 0; i < workHour.length; i++) {

//             this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

//             this.totalSum += this.salesCookies[i];

//         }

//     },
//     render: function () {
//         let container = document.getElementById('cookies');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.locName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < workHour.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${workHour[hour]} : ${this.salesCookies[hour]} cookies `;

//         }
//         let liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total : ${this.totalSum} cookies`
//     }
// }

// Lima.custPerhour();
// Lima.cookiesPerhour();
// Lima.render();







//Lab 07 :


let workHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let divEl = document.getElementById('cookies');
let tableEl = document.createElement('table');
divEl.appendChild(tableEl);


function random(minCust, maxCust) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxCust - minCust + 1) + minCust);


}


let locations = [];
function store(locName, minCustperHr, maxCustPerHr, avgCookies) {

    this.locName = locName;
    this.minCustperHr = minCustperHr;
    this.maxCustperHr = maxCustPerHr;
    this.avgCookies = avgCookies;
    this.randomCustom = [];
    this.salesCookies = [];
    this.totalSum = 0;

    locations.push(this)


    store.prototype.custPerhour = function () {

        for (let hour = 0; hour < workHour.length; hour++) {

            this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));
        }
        console.log(this);
    },

        store.prototype.cookiesPerhour = function () {


            this.custPerhour();
            for (let i = 0; i < workHour.length; i++) {

                this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

                this.totalSum += this.salesCookies[i];

            }
        };
    store.prototype.render = function () {
        let tableR = document.createElement('tr');
        tableEl.appendChild(tableR);
        let tableData = document.createElement('td') ;
        tableR.appendChild(tableData);
        tableData.textContent = this.locName;
        for (let i = 0; i < workHour.length; i++) {
            let tabledata = document.createElement('td');
            tableR.appendChild(tabledata);
            tabledata.textContent = this.salesCookies[i];

        }
        let tabledata1 = document.createElement('td');
        tableR.appendChild(tabledata1);
        tabledata1.textContent = this.totalSum;
    }
}

let Seattle = new store('Seattle', 23, 65, 6.3);
let Tokyo = new store('Tokyo', 3, 24, 1.2);
let Dubai = new store('Dubai', 11, 38, 3.7);
let Paris = new store('Paris', 20, 38, 2.3);
let Lima = new store('Lima', 2, 16, 4.6);




function headerRow() {

    let tableRow1 = document.createElement('tr');
    tableEl.appendChild(tableRow1);
    let tableheading = document.createElement('th');
    tableRow1.appendChild(tableheading);
    tableheading.textContent = null;

    for (let index = 0; index < workHour.length; index++) {
        let tableheading = document.createElement('th');
        tableRow1.appendChild(tableheading);
        tableheading.textContent = workHour[index];

    }

    let tableCell = document.createElement('th');
    tableRow1.appendChild(tableCell);
    tableCell.textContent = "Daily Location Total"
}

function footerRow() {
    let tableR2 = document.createElement('tr');
    tableEl.appendChild(tableR2);
    let tabledata = document.createElement('td');
    tableR2.appendChild(tabledata);
    tabledata.textContent = 'Totals';
    let totalAllhours = 0;
    for (let i = 0; i < workHour.length; i++) {
        let totalPerhours =0;
        for(let j=0 ; j < locations.length ; j++){
            totalPerhours += locations[j].salesCookies[i];
            totalAllhours += locations[j].salesCookies[i];
        }
        
    
    let tablehdata2 = document.createElement('td');
    tableR2.appendChild(tablehdata2);
    tablehdata2.textContent = totalPerhours;
}
let tableCell = document.createElement('td');
tableR2.appendChild(tableCell);
tableCell.textContent = totalAllhours;
}
headerRow();
Seattle.custPerhour();
Seattle.cookiesPerhour();
Seattle.render();
Tokyo.custPerhour();
Tokyo.cookiesPerhour();
Tokyo.render();
Dubai.custPerhour();
Dubai.cookiesPerhour();
Dubai.render();
Paris.custPerhour();
Paris.cookiesPerhour();
Paris.render();
Lima.custPerhour();
Lima.cookiesPerhour();
Lima.render();
footerRow();




