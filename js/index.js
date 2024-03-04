const all_h1 = document.querySelectorAll("h1");
const all_h2 = document.querySelectorAll("h2");
const all_h3 = document.querySelectorAll("h3");
const all_h4 = document.querySelectorAll("h4");
const all_h5 = document.querySelectorAll("h5");
const all_h6 = document.querySelectorAll("h6");

const all_strong = document.querySelectorAll("strong");

const all_p = document.querySelectorAll("p");

const all_span = document.querySelectorAll("span");

const all_anchor = document.querySelectorAll("a");

function translate(arr_el) {
  arr_el.forEach((el) => (el.innerText = pt_br_translations[el.innerText]));
}

translate(all_h1);
translate(all_h2);
translate(all_h3);
translate(all_h4);
translate(all_h5);
translate(all_h6);
translate(all_strong);
translate(all_p);
translate(all_span);
translate(all_anchor);
