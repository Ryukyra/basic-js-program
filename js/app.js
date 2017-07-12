const buttons = document.getElementsByTagName("button");
const nameInput = document.getElementById("pullName");
const ageInput = document.getElementById("pullAge");
const section = document.getElementsByTagName('section')[0];

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function enterKey(input) {
  input.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode == 13) {
      buttons[0].click();
      nameInput.focus();
    }
  });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.addEventListener('click', (e) => {
  if (e.target === buttons[0]) {
    const name = nameInput.value;
    const age = ageInput.value;
    if (isNumber(name) || name == '') {
      alert('Input a Name');
    } else if (age == '' || isNumber(age) == false) {
      alert('Input an Age');
    } else if (age >= 130 || age < 0) {
      alert('Impossible');
    } else {
      const p = document.createElement('P');
      const remove = document.createElement('BUTTON');
      p.textContent = capitalizeFirstLetter(name.toLowerCase()) + ' is ' + age + ' years old';
      remove.textContent = 'Remove';
      remove.id = 'removeMe';
      section.appendChild(p);
      p.appendChild(remove);
      nameInput.value = "";
      ageInput.value = "";
      nameInput.focus();
    }
  }
});

document.addEventListener('click', (ev) => {
  for (i = 1; i < buttons.length; i ++) {
    if (ev.target == buttons[i]) {
      let deleteMe = ev.target.parentNode;
      deleteMe.remove();
    }
  }
})

enterKey(nameInput);
enterKey(ageInput);
