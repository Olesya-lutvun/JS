const userForm = document.forms;

userForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const nameValue = userForm.name.value;
    const surnameValue = userForm.surname.value;
    const ageValue = userForm.age.value;
    let obj ={nameValue, surnameValue, ageValue}
    console.log(obj);
    e.target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
})

