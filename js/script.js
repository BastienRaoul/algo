const cards = document.querySelector('.cards');
const form = document.querySelector('#main_form')
const form_field = document.querySelector('#form_field')
const form_answer = document.querySelector('#form_answer')

let idCard = "0";

data.forEach((element, index) => {
  cards.insertAdjacentHTML('beforeend', `<li><div class="card" id="${index}"><h1>${element.name}</h1></div></li>`);
});

document.querySelectorAll('.card').forEach(element => {
  element.addEventListener('click', event => {
    idCard = event.currentTarget.id;
  })
});

form.addEventListener('submit', event => {
  event.preventDefault();
  form_answer.innerHTML = switchFunctions(idCard, form_field.value);
  form_answer.style.display = "block";
  form_field.value = '';
})

function switchFunctions(index, value) {
  switch (index) {
    case "0":
      return palindrome(value) ? `"${value}" est un palindrome` : `"${value}" n'est pas un palindrome`;
      break;
    case "1":
      return Number.isInteger(parseInt(value, 10)) ? `${value} = ${convertToRoman(value)}` : `Veuillez renseigner un nombre`;
      break;
    case "2":
      return !Number.isInteger(parseInt(value, 10)) ? `${value} 🠊 ${rot13(value.toUpperCase())}` : `Veuillez renseigner un mot`;
      break;
    case "3":
      return Number.isInteger(parseInt(value, 10)) ? `${value} 🠊 ${fiboEvenSum(value)}` : `Veuillez renseigner un nombre`;
      break;
    case "4":
      return telephoneCheck(value) ? `"${value}" est un numéro valide` : `"${value}" n'est pas un numéro valide`;
      break;
    case "5":
      return multiplesOf3and5(value);
      break;
  }
}