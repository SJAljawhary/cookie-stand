'use strict';

//location #1 :


function random(minCust, maxCust) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxCust - minCust + 1) + minCust);
}

let Seattle = {
    locName: 'Seattle',
    minCustperHr: 23,
    maxCustperHr: 65,
    avgCookies: 6.3,
    randomCustom: [],
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    salesCookies: [],
    totalSum: 0,

  
    custPerhour: function () {
        for (let hour = 0; hour < this.workHour.length; hour++) {

            this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));

           
        }
        console.log(this);
        console.log(this.randomCustom);


    },
    
    cookiesPerhour: function () {

        this.custPerhour();
        for (let i = 0; i < this.workHour.length; i++) {

            this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

            this.totalSum += this.salesCookies[i];

        }

    },
    render: function () {
        let container = document.getElementById('cookies');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.locName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < this.workHour.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.workHour[hour]} : ${this.salesCookies[hour]} cookies `;

        }
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total : ${this.totalSum} cookies`
    }
}

Seattle.custPerhour();
Seattle.cookiesPerhour();
Seattle.render();


//location #2 :


let Tokyo = {
    locName: 'Tokyo',
    minCustperHr: 3,
    maxCustperHr: 24,
    avgCookies: 1.2,
    randomCustom: [],
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    salesCookies: [],
    totalSum: 0,


    custPerhour: function () {
        for (let hour = 0; hour < this.workHour.length; hour++) {

            this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));
        }
        console.log(this);
    },

    cookiesPerhour: function () {

        this.custPerhour();
        for (let i = 0; i < this.workHour.length; i++) {

            this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

            this.totalSum += this.salesCookies[i];

        }

    },
    render: function () {
        let container = document.getElementById('cookies');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.locName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < this.workHour.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.workHour[hour]} : ${this.salesCookies[hour]} cookies `;

        }
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total : ${this.totalSum} cookies`
    }
}

Tokyo.custPerhour();
Tokyo.cookiesPerhour();
Tokyo.render();

// location #3 :


let Dubai = {
    locName: 'Dubai',
    minCustperHr: 11 ,
    maxCustperHr: 38 ,
    avgCookies: 3.7 ,
    randomCustom: [],
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    salesCookies: [],
    totalSum: 0,


    custPerhour: function () {
        for (let hour = 0; hour < this.workHour.length; hour++) {

            this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));
        }
        console.log(this);
    },

    cookiesPerhour: function () {

        this.custPerhour();
        for (let i = 0; i < this.workHour.length; i++) {

            this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

            this.totalSum += this.salesCookies[i];

        }

    },
    render: function () {
        let container = document.getElementById('cookies');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.locName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < this.workHour.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.workHour[hour]} : ${this.salesCookies[hour]} cookies `;

        }
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total : ${this.totalSum} cookies`
    }
}

Dubai.custPerhour();
Dubai.cookiesPerhour();
Dubai.render();

//location #4 :



let Paris = {
    locName: 'Paris',
    minCustperHr: 20 ,
    maxCustperHr: 38 ,
    avgCookies: 2.3 ,
    randomCustom: [],
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    salesCookies: [],
    totalSum: 0,


    custPerhour: function () {
        for (let hour = 0; hour < this.workHour.length; hour++) {

            this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));
        }
        console.log(this);
    },

    cookiesPerhour: function () {

        this.custPerhour();
        for (let i = 0; i < this.workHour.length; i++) {

            this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

            this.totalSum += this.salesCookies[i];

        }

    },
    render: function () {
        let container = document.getElementById('cookies');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.locName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < this.workHour.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.workHour[hour]} : ${this.salesCookies[hour]} cookies `;

        }
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total : ${this.totalSum} cookies`
    }
}

Paris.custPerhour();
Paris.cookiesPerhour();
Paris.render();

//location #5 :



let Lima = {
    locName: 'Lima',
    minCustperHr: 2,
    maxCustperHr: 16,
    avgCookies: 4.6,
    randomCustom: [],
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    salesCookies: [],
    totalSum: 0,


    custPerhour: function () {
        for (let hour = 0; hour < this.workHour.length; hour++) {

            this.randomCustom.push(random(this.minCustperHr, this.maxCustperHr));
        }
        console.log(this);
    },

    cookiesPerhour: function () {

        this.custPerhour();
        for (let i = 0; i < this.workHour.length; i++) {

            this.salesCookies.push(Math.ceil(this.randomCustom[i] * this.avgCookies));

            this.totalSum += this.salesCookies[i];

        }

    },
    render: function () {
        let container = document.getElementById('cookies');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.locName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < this.workHour.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.workHour[hour]} : ${this.salesCookies[hour]} cookies `;

        }
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total : ${this.totalSum} cookies`
    }
}

Lima.custPerhour();
Lima.cookiesPerhour();
Lima.render();