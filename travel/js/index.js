console.log(
    'Part 1:\nВёрстка валидная: 10\nВёрстка семантическая: 20\nВёрстка соответствует макету: 48\nТребования к css: 12\nИнтерактивность, реализуемая через css: 10\nОценка: 100'
);

console.log(
    'Part 2:\nВёрстка соответствует макету: 48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: 15\nНа ширине экрана 390рх и меньше реализовано адаптивное меню: 22\nОценка: 85'
);

console.log(
    'Part 3:\nСлайдер изображений в секции destinations: 50\nНажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап: 50\nНажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). : 25\nОценка: 125'
);


// BURGER MENU

const burgerMenu = document.querySelector('.header__burger');

if (burgerMenu) {
    const navMenu = document.querySelector('.header__menu');
    const cross = document.querySelector('.header__cross');
    const menuLink = document.querySelectorAll('.menu__link');

    burgerMenu.addEventListener('click', function(e) {
        navMenu.classList.toggle('_active');
    });

    cross.addEventListener('click', function(e) {
        navMenu.classList.toggle('_active');
    });

    for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].addEventListener('click', function(e) {
            navMenu.classList.toggle('_active');
        })
    };

    document.addEventListener('click', function(e) {
        let target = e.target;
        let its_menu = target == navMenu || navMenu.contains(target);
        let its_hamburger = target == burgerMenu || burgerMenu.contains(target);
        let menu_is_active = navMenu.classList.contains('_active');
        
        if (!its_menu && !its_hamburger && menu_is_active) {
            navMenu.classList.toggle('_active')
        }
      })
} 


// POP UP

// Pop-up toggle
const popup = document.querySelector('.login__pop_up')
const popupBody = document.querySelector('.login__sign_in')
const loginButton = document.querySelector('.header_button')
const accountButton = document.getElementById('account_button')

loginButton.addEventListener('click', () => {
    popup.classList.toggle('_active')
    popupBody.classList.toggle('_active')
} )

accountButton.addEventListener('click', () => {
    popup.classList.toggle('_active')
    popupBody.classList.toggle('_active')

} )

popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('login__pop_up') && popup.classList.contains('_active')) {
        popup.classList.toggle('_active')
        popupBody.classList.toggle('_active')
    }
} )



// Alert
const signInButton = document.querySelector('.login__sign_in__form__button')
const emailData = document.getElementById('email_input')
const passwordData = document.querySelector('.sign_in__input__password')

signInButton.addEventListener('click', (e) => {
    alert(`Email: ${emailData.value}\nPassword: ${passwordData.value}`)
    emailData.value = ''
    passwordData.value = ''
})


// Register form

const regButton = document.getElementById('login__sign_in__register__button')
const formTitle = document.querySelector('.login__sign_in__title')
const loginButtons = document.querySelector('.login__buttons')
const recoveryButton = document.querySelector('.login__sign_in__password__recovery')
const registerDiv = document.querySelector('.login__sign_in__register')


regButton.addEventListener('click', (e) => {
    if (regButton.innerHTML === 'Register') {
        regButton.innerHTML = 'Log in'
        formTitle.innerHTML = 'Create account'
        signInButton.innerHTML = 'Sign Up'
        loginButtons.style.display = 'none'
        recoveryButton.style.display = 'none'
        registerDiv.firstChild.innerHTML = 'Already have an account?' 
    } else {
        regButton.innerHTML = 'Register'
        formTitle.innerHTML = 'Log in to your account'
        signInButton.innerHTML = 'Sign In'
        loginButtons.style.display = 'block'
        recoveryButton.style.display = 'block'
        registerDiv.firstChild.innerHTML = "Don't have an account?"
    }
})


// Destinations Slider

const carousel = document.querySelector('.destinations__content')

const leftDiv = document.querySelector('.destinations__image_1')
const activeDiv = document.querySelector('.destinations__image_2')
const rightDiv = document.querySelector('.destinations__image_3')

const arrowLeft = document.querySelector('.destinations__arrow.arrow1')
const arrowRight = document.querySelector('.destinations__arrow.arrow2')

const slideIcons = document.querySelectorAll('.destinations__icon')

const insertedElementLeft = document.createElement('div')
insertedElementLeft.classList.add('destinations__image')
insertedElementLeft.insertAdjacentHTML('afterbegin', rightDiv.innerHTML)

const insertedElementRight = document.createElement('div')
insertedElementRight.classList.add('destinations__image')
insertedElementRight.insertAdjacentHTML('afterbegin', leftDiv.innerHTML)

carousel.insertBefore(insertedElementLeft,carousel.firstChild)
carousel.insertBefore(insertedElementRight,rightDiv.nextSibling)

const moveLeft = () => {
    carousel.classList.add('transition-left')
    if (slideIcons[1].classList.contains('_active')) {
        slideIcons[1].classList.remove('_active')
        slideIcons[0].classList.add('_active')
    } else if (slideIcons[0].classList.contains('_active')) {
        slideIcons[0].classList.remove('_active')
        slideIcons[2].classList.add('_active')
    }
    else {
        slideIcons[2].classList.remove('_active')
        slideIcons[1].classList.add('_active')
    }
    leftDiv.removeEventListener('click', moveLeft)
    rightDiv.removeEventListener('click', moveRight)
    arrowLeft.removeEventListener('click', moveLeft)
    arrowRight.removeEventListener('click', moveRight)
}

const moveRight = () => {
    carousel.classList.add('transition-right')
    if (slideIcons[1].classList.contains('_active')) {
        slideIcons[1].classList.remove('_active')
        slideIcons[2].classList.add('_active')
    } else if (slideIcons[2].classList.contains('_active')) {
        slideIcons[2].classList.remove('_active')
        slideIcons[0].classList.add('_active')
    }
    else {
        slideIcons[0].classList.remove('_active')
        slideIcons[1].classList.add('_active')
    }
    leftDiv.removeEventListener('click', moveLeft)
    rightDiv.removeEventListener('click', moveRight)
    arrowLeft.removeEventListener('click', moveLeft)
    arrowRight.removeEventListener('click', moveRight)
}

leftDiv.addEventListener('click', moveLeft)
rightDiv.addEventListener('click', moveRight)

arrowLeft.addEventListener('click', moveLeft)
arrowRight.addEventListener('click', moveRight)


carousel.addEventListener('animationend', (e) => {
    const leftContent = document.querySelector('.destinations__image_1').innerHTML
    const centerContent = document.querySelector('.destinations__image_2').innerHTML
    const rightContent = document.querySelector('.destinations__image_3').innerHTML
    
    if (e.animationName === 'move-left') {
        carousel.classList.remove('transition-left')
        activeDiv.innerHTML = leftContent
        rightDiv.innerHTML = centerContent
        leftDiv.innerHTML = rightContent 
        insertedElementLeft.innerHTML = centerContent
        insertedElementRight.innerHTML = rightContent
    }

    if (e.animationName === 'move-right') {
        carousel.classList.remove('transition-right')
        activeDiv.innerHTML = rightContent
        rightDiv.innerHTML = leftContent
        leftDiv.innerHTML = centerContent
        insertedElementRight.innerHTML = centerContent
        insertedElementLeft.innerHTML = leftContent
    }
    leftDiv.addEventListener('click', moveLeft)
    rightDiv.addEventListener('click', moveRight)
    arrowLeft.addEventListener('click', moveLeft)
    arrowRight.addEventListener('click', moveRight)
})