var heading = document.querySelector('.headingDiv');
var navigation = document.querySelector('.navDiv');
var home = document.querySelector('.homeNav')
var portfolio = document.querySelector('.portNav')
var contacts = document.querySelector('.contNav')
var linked = document.querySelector('.linked');
var pdf = document.querySelector('.resume');
var github = document.querySelector('.github');
var home =document.querySelector('.home')
var portfolio =document.querySelector('.portfolio')
var contacts =document.querySelector('.contacts')


// Nav Bar
function toggleDown() {
    console.log('yippe');
    navigation.classList.toggle('open');
};
heading.addEventListener('click', toggleDown)


// Social Media and resume
function linkedIn() {
    window.open("https://www.linkedin.com/in/mccabe-northup-2b76b885/", "_blank")
};
function resume() {
    window.open('', "_blank")
};
function git() {
    window.open('https://github.com/mnorthup2207', "_blank")
};
linked.addEventListener('click', linkedIn)
github.addEventListener('click', git)

// nav open new tabs
// function homePage() {
//     window.open('index.html')
// };
// function portfolioPage() {
//     window.open('portfolio.html')
// };
// function contactsPage() {
//     window.open('contacts.html')
// };
// home.addEventListener('click', homePage)
// portfolio.addEventListener('click', portfolioPage)
// contacts.addEventListener('click', contactsPage)
