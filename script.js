// //pfp hover change
const pfp = document.getElementById('pfp')
pfp.style.transitionDuration = "1s";
pfp.addEventListener('mouseover', function(){
  pfp.src = 'images/emma2.jpg'
});
pfp.addEventListener('mouseout', function(){
  pfp.src = 'images/emma.jpeg'
});

//name hover change to email
const name = document.getElementById('name');
name.addEventListener('mouseover', function(){
  name.style.transitionDuration = '1s';
  name.style.textAlign = 'left'
  name.style.fontSize = '40px'
  name.style.width = '450.367px';
  name.innerHTML = 'erdesilva25@gmail.com';
})
name.addEventListener('mouseout', function(){
  name.style.fontSize = '50px'
  name.innerHTML = 'EMMA DE SILVA';
})

//title hover change to bio
const bio = document.getElementById('bio');
bio.addEventListener('mouseover', function() {
  bio.style.transitionDuration = '1s';
  bio.style.width = '450.367px';
  bio.style.fontFamily = "'Slabo 27px', serif";
  bio.style.fontSize = '14px';

  bio.innerHTML = "Hello! I'm a trans woman and Army veteran currently studying full-stack software development at Code Platoon! My pronouns are she/her. I love coding because it is a way to challenge myself through finding creative solutions to real-world problems, and I get to learn new things about technology every day. Aside from the coding itself, my favorite thing about coding is working closely with other members on a team towards a mutual goal, developing great friendships along the way."
});
bio.addEventListener('mouseout', function(){
  bio.style.fontFamily = "'Archivo Black', sans-serif";
  bio.style.fontSize = '20px';
  bio.innerHTML = 'Full-Stack Web Developer';
})


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}