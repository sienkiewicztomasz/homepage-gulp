"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

console.log('siema');
const name ='Tomek';
const age = 43;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lata`);

console.log(`Witaj przybyszu`);

const paragraph = document.querySelector('.paragraph__js');

const welcome = (age,name) => {
    console.log('Witaj ' + name +'!!! Masz ' + age + ' lat:)');
}

console.log(welcome(43, 'Tomek'));

paragraph.innerHTML = `Nazywam się ${name} i mam ${age} lata`;

const button = document.querySelector('.header__button--js');
console.log(button);

button.addEventListener('click', (e) => {
    const header = document.querySelector('.header__title--js');
    header.innerHTML = 'Hurra, zmieniłem się - nagłówek';
    header.classList.toggle('header__title--red');
    alert('Hello');
});

const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});