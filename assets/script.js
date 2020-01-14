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
    navigation.classList.toggle('open');
};
heading.addEventListener('click', toggleDown)


