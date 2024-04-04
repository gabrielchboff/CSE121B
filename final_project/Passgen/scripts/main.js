const url =  "https://www.psswrd.net/api/v1/password/";

var copy = document.getElementById('copy');
var generateButton = document.getElementById('generate');
var multiple = document.getElementById('generateMultiple');

const getParam = () => {
    var length = document.getElementById('length').value;
    var char = document.getElementById('char').checked ? 1 : 0;
    var num = document.getElementById('num').checked ? 1 : 0;
    var upper = document.getElementById('upper').checked ? 1 : 0;
    
    return `?length=${length}&lower=1&upper=${upper}&int=${num}&special=${char}`
}

const generatePassword = async (param) => {
    response = await fetch(url + param);
    responseJson = await response.json();
    return responseJson;
}


const generate = async () => {
    var param = getParam();
    var response = await generatePassword(param);
    var password = document.getElementById('password');
    password.value = response.password;
    return response.password;
}

const generateMultiplePass = (passwords) => {
    var multgen = document.getElementById("multgen");
    for (let index = 0; index < passwords.length; index++) {
        var placeholder = document.createElement("div");
        placeholder.className = "uk-placeholder";
        placeholder.setAttribute("id", `custom_${index}`);
        multgen.appendChild(placeholder);
        var holder = document.getElementById(`custom_${index}`);
        holder.innerText = passwords[index];
    }
}

const cleanMultiple = () => {
    var multgen = document.getElementById("multgen");
    multgen.innerHTML = "";
}


generateButton.addEventListener('click', () => {
    cleanMultiple();
    var res = generate();  

    if (res == "undefined"){
        UIkit.notification({
            message: 'Password not generated, error from api',
            status: 'danger',
            pos: 'top-center',
            timeout: 4000
        })

    }
    UIkit.notification({
        message: 'Password generated',
        status: 'success',
        pos: 'top-center',
        timeout: 4000
    });
});

multiple.addEventListener('click', async () => {
    cleanMultiple();
    var passwords = [];
    var gens = 3;
    for (let index = 0; index <= gens; index++) {
        var pass = await generate();
        passwords.push(pass);
    }


    generateMultiplePass(passwords);
    UIkit.notification({
        message: 'Passwords generated',
        status: 'success',
        pos: 'top-center',
        timeout: 4000
    });
});

copy.addEventListener('click', () => {
    var password = document.getElementById('password');
    if (password.disabled) {
        UIkit.notification({
            message: 'Password not generated',
            status: 'danger',
            pos: 'top-center',
            timeout: 4000
        })
        
    } else if (password.value == "****"){
        UIkit.notification({
            message: 'Password not generated',
            status: 'danger',
            pos: 'top-center',
            timeout: 4000
        })
    } else {
        navigator.clipboard.writeText(password.value)
        .then(() => {
            UIkit.notification({
                message: 'Copied to clipboard',
                status: 'primary',
                pos: 'top-center',
                timeout: 4000
            })
        })
        .catch(err => {
            UIkit.notification({
                message: 'Failed to copy',
                status: 'danger',
                pos: 'top-center',
                timeout: 4000
            })
        })

    }
})
