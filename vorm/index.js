/*jshint esversion:6*/
let firstName;
let lastName;
let email;

window.onload = function(){
  document.querySelector("#saveData").addEventListener('click', saveData);
  document.querySelector("#showData").addEventListener('click', showData);
  document.querySelector("#deleteData").addEventListener('click', deleteData);

  firstName = document.querySelector('#firstName');
  lastName = document.querySelector('#lastName');
  email = document.querySelector('#email');
};

function saveData(){
  let obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  };
  localStorage.setItem('text', JSON.stringify(obj));
}

function deleteData(){
  localStorage.removeItem('text');
  firstName.value = "";
  lastName.value = "";
  email.value = "";
}

function showData(){
  const nimi = localStorage.getItem('text');
  const object = JSON.parse(nimi);
  const enimi = object.firstName;
  const pnimi = object.lastName;
  const em = object.email;
  show.innerHTML = "<br>Eesnimi: " + enimi + "<br>Perenimi: " + pnimi + "<br>Email: " +em;
}
