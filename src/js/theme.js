/**
 * 
 * Script Purpose: 
 * 
 * This script allows the user to switch the site theme from light to dark mode and saves their preference for next visit. 
 * 
 * 
 **/

// WEBSITE THEME
let icon = document.getElementById("icon");
let themeContainer = document.getElementById('theme-container');
let postThemeContainer = document.querySelector('#post-page #theme-container');
let currentTheme;
let defaultTheme = themeContainer.href = "css/light.css"

let themeSavedMessage = document.getElementById('theme-message');

function siteTheme() {

    themeContainer.classList.toggle('theme');

    if (themeContainer.classList.contains('theme')) {
        icon.src = '_imgs/icons/light_mode.svg';
        themeContainer.href = "css/light.css";
        currentTheme = 'light-mode';
        showThemeMessage();
    } else {
        icon.src = '_imgs/icons/dark_mode.svg';
        themeContainer.href = "css/dark.css";
        currentTheme = 'dark-mode';
        showThemeMessage();
    }

    function showThemeMessage(){
        themeSavedMessage.classList.toggle('hidden');
        setTimeout(function(){
            themeSavedMessage.classList.toggle('hidden');
        }, 6200);
    }

    // console.log(currentTheme); 

    /* save theme to local storage */
    localStorage.setItem('SiteTheme', JSON.stringify(currentTheme));

}

let getTheme = JSON.parse(localStorage.getItem('SiteTheme'));
console.log(`current saved theme: ${getTheme}`);

if (getTheme === 'dark-mode') {
    themeContainer.classList.toggle('theme');
    themeContainer.href = "css/dark.css";
    defaultTheme = "css/dark.css";

    postThemeContainer.href = 'css/dark.css';
}