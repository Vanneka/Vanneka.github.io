// NEW TOGGLE 
let htmlBody = document.body;

//DESKTOP
let sunDesk = document.querySelector('.sunDesk');
let moonDesk = document.querySelector('.moonDesk');
let theBallDesk = document.querySelector('.ball-desk');

// console.log(sunDesk)
sunDesk.addEventListener('click', ()=> {
            htmlBody.classList.remove('dark-body');
            theBallDesk.classList.remove('ball-desk-active')
})
moonDesk.addEventListener('click', ()=> {
    htmlBody.classList.add('dark-body');
    theBallDesk.classList.add('ball-desk-active')
})


//MOBILE
let sunMob = document.querySelector('.sunMob');
let moonMob = document.querySelector('.moonMob');
let theBallMob = document.querySelector('.ball-mobile');

// console.log(sunDesk)
sunMob.addEventListener('click', ()=> {
            htmlBody.classList.remove('dark-body');
            theBallMob.classList.remove('ball-mobile-active')
})
moonMob.addEventListener('click', ()=> {
    htmlBody.classList.add('dark-body');
    theBallMob.classList.add('ball-mobile-active')
})



// FUNCTIONS FOR NAVIGATION MOBILE AND DESKTOP
// FOR DESKTOP NAV
let deskNavs = document.querySelectorAll('.desktop-nav__links');
deskNavs.forEach(desknav => {
    desknav.addEventListener('click', ()=> {
        deskNavs.forEach(desknav => {
            desknav.classList.remove('active')
        });
        desknav.classList.add('active')
    })
});

// FOR MOBILE NAV, LIGHT MODE
let mobNavs = document.querySelectorAll('.mobile-nav__links');
mobNavs.forEach(mobnav => {
    mobnav.addEventListener('click', ()=> {
        mobNavs.forEach(mobnav => {
            mobnav.classList.remove('active')
        });
        mobnav.classList.add('active')
    })
});


// FOR MOBILE NAV, DARK MODE
// let mobNavs = document.querySelectorAll('.dark .mobile-nav__links');
// mobNavs.forEach(mobnav => {
//     mobnav.addEventListener('click', ()=> {
//         mobNavs.forEach(mobnav => {
//             mobnav.classList.remove('active')
//         });
//         mobnav.classList.add('active')
//     })
// });