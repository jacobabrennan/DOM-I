const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//-- Load image files into img elements ----------
const imageLogo   = document.getElementById('logo-img'  );
const imageCta    = document.getElementById('cta-img'   );
const imageMiddle = document.getElementById('middle-img');

imageLogo  .setAttribute('src', siteContent['nav'         ]['img-src'       ]);
imageCta   .setAttribute('src', siteContent['cta'         ]['img-src'       ]);
imageMiddle.setAttribute('src', siteContent['main-content']['middle-img-src']);

//-- Setup main nav links ------------------------
const navLinks = document.querySelectorAll('.container header nav a');
navLinks.forEach((element, index) => {
  var navProperty = `nav-item-${index+1}`;
  element.innerText = siteContent.nav[navProperty];
});

//-- Call To Action ------------------------------
document.querySelector('.cta-text h1'    ).innerHTML = siteContent['cta']['h1'    ].replace(/ /g, '<br />');
document.querySelector('.cta-text button').innerText = siteContent['cta']['button'];

//-- Text Content --------------------------------
const textContentNodes = document.querySelectorAll('.text-content');
const sections = ['features', 'about', 'services', 'product', 'vision'];
textContentNodes.forEach((element, index) => {
  const section = sections[index];
  element.getElementsByTagName('h4')[0].innerText = siteContent['main-content'][`${section}-h4`     ];
  element.getElementsByTagName('p' )[0].innerText = siteContent['main-content'][`${section}-content`];
});

//-- Contact -------------------------------------
document.querySelector('.contact h4').innerText = 'Contact';
const contactLines = document.querySelectorAll('.contact p');
contactLines[0].innerHTML = siteContent['contact']['address'].replace('et So', 'et<br />\n So');
contactLines[1].innerText = siteContent['contact']['phone'];
contactLines[2].innerText = siteContent['contact']['email'];
document.querySelector('footer p').innerText = siteContent['footer']['copyright'];

//-- Make Links Green / Prepend & Append ---------
let firstAnchor = document.createElement('a');
let lastAnchor  = document.createElement('a');
firstAnchor.href = "#";
lastAnchor.href  = "#";
firstAnchor.innerText = "First";
lastAnchor.innerText  = "Last";
document.querySelector('header nav').prepend(firstAnchor);
document.querySelector('header nav').append ( lastAnchor);

document.querySelectorAll('header nav a').forEach(element => {
  element.style.color = 'green';
});

//== Stretch - (Also, see stretch project) =======================================

const flipButton = document.createElement('button');
flipButton.innerText = 'Flip it!'
document.querySelector('.cta-text').appendChild(flipButton);
flipButton.addEventListener('click', flipIt);

function flipIt (clickEvent) {
  flipButton.style.display = 'none';
  let container = document.querySelector('.container');
  container.style.display = 'flex';
  container.style.flexDirection = 'column-reverse';
  document.querySelector('.cta').style.flexDirection = 'row';
  document.querySelector('.cta-text').style.margin = '0 0 0 82px';
  document.querySelector('nav').style.flexDirection = 'row';
  document.querySelector('header').style.flexDirection = 'row';
  document.querySelector('.top-content').style.flexDirection = 'row';
  document.querySelector('.bottom-content').style.flexDirection = 'row';
  document.querySelector('#logo-img').style.margin = '28px 91px 0 0';
  document.querySelector('.main-content').style.display = 'flex';
  document.querySelector('.main-content').style.flexDirection = 'column-reverse';
  document.body.style.direction = 'rtl';
  document.body.style.color = 'white';
  document.body.style.backgroundColor = 'black';
  document.querySelectorAll('img').forEach(element => {
    element.style.filter = 'invert(1)';
  })
}
