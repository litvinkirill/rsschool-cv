const burger = document.querySelector(".burger");
const close = document.querySelector(".open");
const nav = document.querySelector(".slide-in .nav");
const slideIn = document.querySelector(".slide-in");
const links = document.querySelector(".nav__list");
let open = true;

// function noScroll() {
//   window.scrollTo(0, 0);
// }

function processSlideIn() {
  if (open) {
    slideIn.style.width = "320px";
    nav.style.display = "flex";
    burger.style.transform = "rotate(90deg)"; 
    open = false;
    //window.addEventListener("scroll", noScroll);
  } else {
    slideIn.style.width = "0px";
    nav.style.display = "none";
    burger.style.transform = "rotate(0deg)";
    open = true;
    //window.removeEventListener("scroll", noScroll);
  }
}
function processSlideOut() {
  slideIn.style.width = "0px";
  nav.style.display = "none";
  burger.style.transform = "rotate(0deg)";
  open = true;
 // window.removeEventListener("scroll", noScroll);
}

burger.addEventListener("click", processSlideIn);
close.addEventListener("click", processSlideOut);
links.addEventListener('click',  processSlideOut)


console.log(`Ваша оценка - 130 баллов \n Отзыв по пунктам ТЗ: \n Выполненные пункты: \n 1) студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages \n 2) вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/. Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований \n3) header, main, footer \n 4) элемент nav \n 5) только один заголовок h1 \n 6) заголовки h2 \n 7) в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс. Если ссылка в футере ведёт на курс stage0, это не ошибка. \n 8) для оформления СV используются css-стили \n 9) при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону \n 10) на странице СV есть фото или аватарка автора, пропорции изображения не искажены (т.е. картинка не деформирована, если её размер изменён, сохраняются пропорции исходного изображения), у изображения есть атрибут alt. \n 11) навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a. Также допускается использование нумерованого списка ol > li или ol > li > a \n 12) краткую информацию о себе \n 13) контакты для связи \n 14) перечень навыков \n 15) пример кода. Код добавляется при помощи символов и тегов, а не картинкой \n 16) перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения \n 17) информацию об образовании и уровне английского \n 18) CV выполнено на английском языке \n`);