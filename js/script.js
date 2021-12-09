'use strict';

const body = document.querySelector('body');
const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');

//=======================1========================

book.forEach((item, i) => {
  item.classList.add(`book-${i + 1}`);
});

const book_1 = document.querySelector('.book-2');
const book_2 = document.querySelector('.book-1');
const book_3 = document.querySelector('.book-5');
const book_4 = document.querySelector('.book-4');
const book_5 = document.querySelector('.book-6');
const book_6 = document.querySelector('.book-3');

books.append(book_1, book_2, book_3, book_4, book_5, book_6);

//=======================2========================

body.setAttribute('style', 'background-image: url("./image/you-dont-know-js.jpg")');

//=======================3========================

book_3.querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

//=======================4========================

const adv = document.querySelector('.adv').remove();

//=======================5========================

const book_2ContentsPage = book_2.querySelector('ul');
const book_2Chapter = book_2.querySelectorAll('li');
const book_5ContentsPage = book_5.querySelector('ul');
const book_5Chapter = book_5.querySelectorAll('li');

book_2Chapter.forEach((item, i) => {
  item.classList.add(`chapter-${i + 1}`);
});

book_5Chapter.forEach((item, i) => {
  item.classList.add(`chapter-${i + 1}`);
});

book_2ContentsPage.prepend(
  book_2.querySelector('.chapter-1'),
  book_2.querySelector('.chapter-2'),
  book_2.querySelector('.chapter-4'),
  book_2.querySelector('.chapter-7'),
  book_2.querySelector('.chapter-9'),
  book_2.querySelector('.chapter-5'),
  book_2.querySelector('.chapter-6'),
  book_2.querySelector('.chapter-8'),
  book_2.querySelector('.chapter-10'),
  book_2.querySelector('.chapter-3'),
  book_2.querySelector('.chapter-11')
);

book_5ContentsPage.prepend(
  book_5.querySelector('.chapter-1'),
  book_5.querySelector('.chapter-2'),
  book_5.querySelector('.chapter-10'),
  book_5.querySelector('.chapter-4'),
  book_5.querySelector('.chapter-5'),
  book_5.querySelector('.chapter-3'),
  book_5.querySelector('.chapter-7'),
  book_5.querySelector('.chapter-8'),
  book_5.querySelector('.chapter-6'),
  book_5.querySelector('.chapter-9'),
  book_5.querySelector('.chapter-11')
);

//=======================6========================

const book_6Chapter = book_6.querySelectorAll('li');

book_6Chapter.forEach((item, i) => {
  item.classList.add(`chapter-${i + 1}`);
});

book_6.querySelector('.chapter-9').insertAdjacentHTML('afterend', '<li class="chapter-11">Глава 8: Метапрограммирование</li>');
