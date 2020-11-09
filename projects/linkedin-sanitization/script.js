const pfp = document.getElementById('pfp');
const experience = document.getElementById('experience');
const about = document.querySelector('.about');
const title = document.querySelector('title')
const name = document.querySelector('.name');
const job = document.querySelector('.job');
const city = document.getElementsByClassName('city');
const hThree = document.querySelectorAll('h3');



function activate() {
  pfp.src = 'images/pfp2.jpg';
  experience.innerHTML = '';
  about.textContent = 'Hello I am Jane Smith. I am just a normal American girl. Thank you.';
  name.textContent = 'REDACTED';
  job.textContent = 'REDACTED';
  city[0].textContent = 'REDACTED';
  title.textContent = 'ERROR 404';
  for (let i = 0; i < hThree.length; i++) {
    hThree[i].remove();
  }
  pfp.addEventListener('mouseover', function(){tease()});
  pfp.addEventListener("mouseout", function(){untease()});

  }


function tease() {
  pfp.src="images/haruhi.jpg";
  pfp.style.width = '200px';
}

function untease() {
  pfp.src='images/pfp2.jpg';
}

const security = document.getElementById('security');

security.addEventListener("click", function(){activate()});

pfp.style.height = '200px';
pfp.style.width = '200px';
pfp.style.borderRadius = '50%';

// message = document.getElementById('message');
// more = document.getElementById('more')