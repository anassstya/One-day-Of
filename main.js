const menuBurger = document.querySelector('.header__burger-menu');
const popup = document.querySelector('.popup');
const body = document.querySelector('body');

menuBurger.addEventListener('click', () => {
  popup.classList.add('popup__active');
  menuBurger.classList.add('burger__hide'); // Скрыть бургер-меню при открытии попапа
  body.classList.add('fade'); // Применить затемнение фона body
});

const popupClose = document.querySelector('.popup__close');

popupClose.addEventListener('click', () => {
  popup.classList.remove('popup__active');
  menuBurger.classList.remove('burger__hide'); // Показать бургер-меню при закрытии попапа
  body.classList.remove('fade'); // Убрать затемнение фона body
});
