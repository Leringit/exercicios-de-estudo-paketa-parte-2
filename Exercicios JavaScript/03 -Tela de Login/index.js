function validate() {
    if (user.value == 0 || user.value.length < 6) {
        document.getElementById('error').innerHTML = 'Minímo de 06 caracteres';
        return false;       
    }else if (pass.value == 0 || pass.value.length < 6) {
        document.getElementById('error').innerHTML = 'Minímo de 06 caracteres';
        return false;  
    }else {   
        let a1 = document.querySelector("#user");
        let a2 = a1.value;
        let a3 = document.querySelector("#pass");
        let a4 = a3.value;
        alert(`O usuário é ${a2} e a senha é ${a4}`);      
    }
}