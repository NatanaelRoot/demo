/* Preloader de la pagina web */

let preloader = document.querySelector(".preloader-container");

let mostrarLoader = () => {
    preloader.classList.add("open-loader");
}

let ocultarLoader = () => {
    preloader.classList.remove("open-loader");
}

/* Elementos del preloader */

let preloaderImage = document.querySelector(".preloader__img");

let loader = document.querySelector(".loader");

window.addEventListener('DOMContentLoaded', () => {
    mostrarLoader();
    loaderExit();
});

let loaderExit = () => {

    setTimeout(() => {

        preloaderImage.classList.add('img-active');

        loader.classList.add('loader-exit');

    }, 1000);

}

window.addEventListener('load', () => {

    setTimeout(() => {
        ocultarLoader();
    }, 2000);

})




/* YouTube Kids Wallpaper */

let body = document.querySelector("#body");

let optionKids = document.querySelector("#option-kids");

optionKids.addEventListener('mouseover', () => {
    body.classList.add("kids");
});

optionKids.addEventListener('mouseout', () => {
    body.classList.remove("kids");
})





/* Agregar cuenta de Youtube */

let addAccount = document.querySelector(".add-account");

let openAddAccount = document.querySelector("#open-add-account").addEventListener('click', () => {
    addAccount.classList.add("active-account");
})

let closeAddAccount = document.querySelector(".add-account__arrow");

let closeAccountMobile = document.querySelector(".add-account__arrow--x");



function cerrarAddAccount() {
    addAccount.classList.remove("active-account");
}


closeAddAccount.addEventListener('click', () => {
    cerrarAddAccount();
})

closeAccountMobile.addEventListener('click', () => {
    cerrarAddAccount();
})





/* CONTENIDO DE LA PAGINA WEB */

let titlePageUser = document.querySelector(".user-youtube__text").innerHTML = "¿Quién está mirando?";

let btnAddAccount = document.querySelector(".user-youtube__option__text--a").innerHTML = "Agregar una cuenta";

let btnConKid = document.querySelector(".user-youtube__option__text--b").innerHTML = "Configurar YouTube Kids";


/* DATOS DE LOS USUARIOS */

/* User 1 */

var nameUser1 = document.getElementById('userName1').innerHTML = String("Fexxo");

var emailUser1 = document.getElementById('userEmail1').innerHTML = String("@ferxxogamer");

/* User 2 */

var nameUser2 = document.getElementById('userName2').innerHTML = String("Natanael");

var emailUser2 = document.getElementById('userEmail2').innerHTML = String("@natavasquez");

/* User 3 */

var nameUser3 = document.getElementById('userName3').innerHTML = String("Billie Eilish");

var emailUser3 = document.getElementById('userEmail3').innerHTML = String("@billie");

/* Clave Usuarios */

var passUser1 = String("root1");

var passUser2 = String("root2");

var passUser3 = String("root3");

/* Loader de Login */

let loaderUser = document.querySelector(".user-loader");

var loaderUserContainer = document.querySelector(".user-loader__container-element");

var loaderIcon = document.createElement('img');

loaderIcon.setAttribute('class', 'user-loader__icon');

loaderUserContainer.appendChild(loaderIcon);

var loaderUserName = document.querySelector(".user-loader__data-name");

let loaderName = (e) => {
    loaderUserName.innerHTML = "Te damos la bienvenida, " + e;
}

let loaderUserTime = () => {

    login.close();

    loaderUser.classList.add('user-loader__active');

    setTimeout(() => {
        loaderUser.classList.remove('user-loader__active');
        window.location.href = 'main.html';
    }, 5000);
}

/* Login de las cuentas */


let pass = document.getElementById('pass'),
    eyes = document.getElementById('eyes');

eyes.addEventListener('click', () => {
    if(pass.type === "password") {
        pass.type = "text";
        eyes.classList.remove('fa-eye');
        eyes.classList.add('fa-eye-slash');
    } else {
        pass.type = "password";
        eyes.classList.remove('fa-eye-slash');
        eyes.classList.add('fa-eye');
    }
});

var login = document.getElementById('login-js');

let btnOpenlogin = document.querySelectorAll('.user-youtube__icon');

/* Datos del usuario en el login */

var loginIconContainer = document.querySelector(".login__icon-container");

var loginIcon = document.createElement('img');

loginIcon.setAttribute('class', 'login__icon');

loginIconContainer.appendChild(loginIcon);

var loginName = document.getElementById('login-name');

var loginEmail = document.getElementById('login-email');

var btnCloseLogin = document.querySelector(".login__btn-close").addEventListener('click', (event) => {
    event.preventDefault();
    login.close();
    pass.value = "";
    notValidate.classList.remove('not-validate__active');
});


let loginIndex;

btnOpenlogin.forEach((tabLogin, i) => {
    
    tabLogin.addEventListener('click', () => {
        
        login.showModal();

        loginIndex = i;

        if(loginIndex === 0) {
            loginIcon.setAttribute('src', 'img/perfil-1.jpg');
            loginName.innerHTML = "Hello " + nameUser1;
            loginEmail.innerHTML = emailUser1;
        }else if(loginIndex === 1) {
            loginIcon.setAttribute('src', 'img/perfil-2.jpg');
            loginName.innerHTML = "Hello " + nameUser2;
            loginEmail.innerHTML = emailUser2;
        }else if(loginIndex === 2) {
            loginIcon.setAttribute('src', 'img/user3.jpg');
            loginName.innerHTML = "Hello " + nameUser3;
            loginEmail.innerHTML = emailUser3;
        }else if(loginIndex === 3) {
            loaderUserTime();
            login.close();
        }

    });

});

let notValidate = document.querySelector(".login__not-valide");

let btnLoginOpen = document.querySelector(".login__btn-login");

btnLoginOpen.addEventListener('click', (e) => {

    e.preventDefault();

    if(loginIndex === 0) {
        
        if(pass.value === passUser1) {
            loaderIcon.setAttribute('src', 'img/perfil-1.jpg');
            loaderName(nameUser1);
            loaderUserTime();
        } else {
            notValidate.classList.add('not-validate__active');
        }

    }else if(loginIndex === 1) {

        if(pass.value === passUser2) {
            loaderIcon.setAttribute('src', 'img/perfil-2.jpg');
            loaderName(nameUser2);
            loaderUserTime();
        } else {
            notValidate.classList.add('not-validate__active');
        }

    }else if(loginIndex === 2) {
        if(pass.value === passUser3) {
            loaderIcon.setAttribute('src', 'img/user3.jpg');
            loaderName(nameUser3);
            loaderUserTime();
        } else {
            notValidate.classList.add('not-validate__active');
        }
    }

});



/* Quitar Cuenta Datos */

let removeAccount = document.querySelector(".remove-account");

let removeAccountClose = document.querySelector(".remove-account__btn-close").addEventListener('click', () => {
    removeAccount.classList.remove('active-remove');
});

var removeAccountName = document.querySelector(".remove-account__name-user");

var removeAccountEmail = document.querySelector(".remove-account__email-user");

var removeAccountIcon = document.querySelector(".remove-account__user-icon");

/* Evento click en los botones de cada usuario para quitar la cuenta */

let tabUsers = document.querySelectorAll('.user-youtube__btn');

var usuario1 = document.querySelector("#user01");

var usuario2 = document.querySelector("#user02");

var usuario3 = document.querySelector("#user03");

/* Pocision de cada usuario */

let currentIndex;

tabUsers.forEach((tabUser, i) => {
    tabUser.addEventListener('click', () => {

        const id = tabUser.id;

        currentIndex = i;

        removeAccount.classList.add("active-remove");

        if (currentIndex === 0) {
            removeAccountIcon.style.backgroundImage = 'url(img/perfil-1.jpg)';
            removeAccountName.innerHTML = nameUser1;
            removeAccountEmail.innerHTML = emailUser1;
        } else if (currentIndex === 1) {
            removeAccountIcon.style.backgroundImage = 'url(img/perfil-2.jpg)';
            removeAccountName.innerHTML = nameUser2;
            removeAccountEmail.innerHTML = emailUser2;
        } else if (currentIndex === 2) {
            removeAccountIcon.style.backgroundImage = 'url(img/user3.jpg)';
            removeAccountName.innerHTML = nameUser3;
            removeAccountEmail.innerHTML = emailUser3;
        }
    });
});

var closeMain = document.querySelector(".close-main");

var removeAccountNext = document.querySelector(".remove-account__btn");

/* Introduciendo etiquetas de icon perfil */

var closeMainIconContainer = document.querySelector('.close-main__img-container');

var closeMainIcon = document.createElement('img');

closeMainIcon.setAttribute('class', 'close-main__img');

closeMainIconContainer.appendChild(closeMainIcon);



let btnCloseMain = document.querySelector('.close-main__btn-remove');

btnCloseMain.addEventListener('click', () => {
    closeMain.classList.remove('close-main__active');
})

let closeMainCancel = document.querySelector('.close-main__btn--cancelar');

closeMainCancel.addEventListener('click', () => {
    closeMain.classList.remove('close-main__active');
    removeAccount.classList.remove('active-remove');
})

removeAccountNext.addEventListener('click', () => {
    if (currentIndex === 0) {
        closeMain.classList.add('close-main__active');
        btnCloseMain.classList.add('close-main__btn-active');
        closeMainIcon.setAttribute('src', 'img/perfil-1.jpg');
    } else if (currentIndex === 1) {
        closeMain.classList.add('close-main__active');
        btnCloseMain.classList.add('close-main__btn-active');
        closeMainIcon.setAttribute('src', 'img/perfil-2.jpg');
    } else if (currentIndex === 2) {
        closeMain.classList.add('close-main__active');
        btnCloseMain.classList.add('close-main__btn-active');
        closeMainIcon.setAttribute('src', 'img/user3.jpg');
    }
});

let closeMainClick = document.querySelector('.close-main__btn--click');

closeMainClick.addEventListener('click', () => {
    if (currentIndex === 0) {
        usuario1.classList.add('exitUser');
        closeMain.classList.remove('close-main__active');
        removeAccount.classList.remove('active-remove');
    } else if (currentIndex === 1) {
        usuario2.classList.add('exitUser');
        closeMain.classList.remove('close-main__active');
        removeAccount.classList.remove('active-remove');
    } else if (currentIndex === 2) {
        usuario3.classList.add('exitUser');
        closeMain.classList.remove('close-main__active');
        removeAccount.classList.remove('active-remove');
    }
});




//".close-main__img"















let abrir = document.querySelector("#abrir");

abrir.addEventListener('click', function () {
    Hola();
})

function Hola() {
    // Captura el contenido de la etiqueta con id "source"
    var nombre = document.querySelector("#name").innerHTML;

    // Guarda el contenido en localStorage
    localStorage.setItem('contenidoTrasladado', nombre);

    // Redirige a la segunda página
    window.location.href = 'segunda.html';
}


//var caja = document.querySelector(".remove-account__data-container");

//let imagenZ = document.createElement('img');

//imagenZ.setAttribute('src', 'img/perfil-3.jpg');

//imagenZ.setAttribute('class', 'remove-account__user-icon');

//caja.appendChild(imagenZ);