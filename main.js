const btn = document.querySelector('#button'); 
const UserName = document.querySelector('#UserName');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const userList = document.querySelector('#users');

btn.addEventListener('click', function(evt) {
    evt.preventDefault();  


    if (UserName.value.trim() === "" || email.value.trim() === "" || phone.value.trim() === "") return;

    const li = document.createElement('li');
    li.textContent = `Imię i nazwisko: ${UserName.value}, Email: ${email.value}, Telefon: ${phone.value}`;


    li.addEventListener('click', function() {
        this.remove();
    });


    userList.appendChild(li);


    UserName.value = "";
    email.value = "";
    phone.value = "";
});