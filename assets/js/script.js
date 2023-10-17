'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// store the pictures
const pictureList = document.querySelector('[picture-list-js]');

for (var i = 3; i <= 10; i++) {
    var listItem = document.createElement('li');
    listItem.className = 'picture-post-item';

    var anchor = document.createElement('a');
    anchor.href = './assets/images/picture-' + i + '.jpg';

    var figure = document.createElement('figure');
    figure.className = 'picture-banner-box';

    var img = document.createElement('img');
    img.src = './assets/images/picture-' + i + '.jpg';
    img.setAttribute('loading', 'lazy');

    figure.appendChild(img);
    anchor.appendChild(figure);
    listItem.appendChild(anchor);

    pictureList.appendChild(listItem);
}

// store the language i use
const languages = [
    { name: 'Python', image: 'logo-python.svg' },
    { name: 'C++', image: 'logo-cpp.svg' },
    { name: 'C', image: 'logo-c.png' },
    { name: 'Java', image: 'logo-java.svg' },
    { name: 'LaTeX', image: 'logo-latex.svg' },
    { name: 'Racket', image: 'logo-racket.svg' },
    { name: 'CSS', image: 'logo-css.svg' },
    { name: 'HTML', image: 'logo-html.svg' },
    { name: 'JavaScript', image: 'logo-javascript.svg' },
    { name: 'MATLAB', image: 'logo-matlab.png' },
    { name: 'Go', image: 'logo-go.svg' },
];

// get the elements which need to fill
const languagesList = document.getElementById('languages-list-me');

// through the languages list and dynamic create item list
languages.forEach(language => {
    const listItem = document.createElement('li');
    listItem.className = 'languages-item img';

    const img = document.createElement('img');
    img.src = `./assets/images/${language.image}`;
    img.alt = 'language logo';
    img.height = 120;

    listItem.appendChild(img);
    languagesList.appendChild(listItem);
});

// define the software i use list
const languages2 = [
    { name: 'Linux', image: 'logo-linux.svg' },
    { name: 'Ubuntu', image: 'logo-ubuntu.svg' },
    { name: 'Windows', image: 'logo-windows.svg' },
    { name: 'WSL', image: 'logo-wsl.png' },
    { name: 'Git', image: 'logo-git.svg' },
    { name: 'VMware', image: 'logo-vmware.svg' },
    { name: 'Conda', image: 'logo-conda.svg' },
    { name: 'Vim', image: 'logo-vim.svg' },
    { name: 'Neovim', image: 'logo-neovim.svg' },
    { name: 'Spyder', image: 'logo-spyder.svg' },
    { name: 'VS Code', image: 'logo-vscode.svg' },
    { name: 'Conda', image: 'logo-conda.svg' },
];

// get the software elements which i need to fill
const languagesList2 = document.getElementById('languages-list-software');

// through the languages list and dynamic create item list
languages2.forEach(language => {
    const listItem = document.createElement('li');
    listItem.className = 'languages-item img';

    const img = document.createElement('img');
    img.src = `./assets/images/${language.image}`;
    img.alt = 'language logo';
    img.height = 120;

    listItem.appendChild(img);
    languagesList2.appendChild(listItem);
});

// Using the typed.js in http://www.mattboldt.com/
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['欢迎来到我的主页！', "Welcome to Abel's home page!", "About Me"],
        startDelay: 100,
        backSpeed: 50,
        typeSpeed: 60,
        showCursor: false,
    });
});