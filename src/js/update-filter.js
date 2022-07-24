/**
 * 
 * Script: Filter Projects 
 * 
 * 1. by dropdown
 * 2. by tabs
 * 3. by skill folder
 * 4. by hashtag menu
 * 
 */

var dropMenuList = document.getElementById('project-dropdown');
var projectCard = document.querySelectorAll('.project-card > div');
var tabMenuList = document.querySelectorAll('#project-filter ul li');
let tabMenuListArr = ['all', 'fun', 'work', 'legacy']
let hashtagMenuItem = document.querySelectorAll("#project-filter-skillset ul li");

// FILTER BY DROPDOWN MENU
function filterByDropDown() {

    let dropSelected = dropMenuList.options[dropMenuList.selectedIndex]
        .text
        .replace('Projects', '')
        .replace(' ', '')
        .toLowerCase();

    // console.log(dropSelected);

    resetHashtagMenu();

    chooseTabMenuItem(dropSelected);

    updateUrl(dropSelected);

    /* THEN MATCH TAB MENU W/ DROPDOWN MENU */
    function chooseTabMenuItem(dropSelected) {

        resetTabMenu();

        // console.log(dropSelected);

        document.getElementById(dropSelected)
            .classList
            .add('active');

        // console.log(dropSelected);

        filterByTab(dropSelected); //fun

    }
}

// FILTER BY TAB MENU
tabMenuList.forEach(li => {
    li.onclick = function () {
        tabMenuList.forEach(li => {
            li.className = '';
        })
        li.className = 'active';
        let tabSelected = li.id;
        filterByTab(tabSelected);
    }
})

function filterByTab(dropSelected) {

    // console.log(dropSelected);

    resetHashtagMenu();

    //* FILTER PROJECTS */
    projectCard.forEach(div => {
        div.style.display = 'none';
        // console.log(div.getAttribute('data-filter'));
        if (div.getAttribute('data-filter') == dropSelected.toLowerCase() || dropSelected == "all") {
            div.style.display = "block";
        }
    })

    /* THEN MATCH DROPDOWN MENU W/ TAB MENU */
    if (dropSelected) {

        let setDropDown = tabMenuListArr.indexOf(dropSelected); // return a number value 
        // console.log(setDropDown);
        dropMenuList.selectedIndex = setDropDown;
    }

    updateUrl(dropSelected);

}

// FILTER BY HASHTAG MENU
hashtagMenuItem.forEach(li => {
    li.onclick = function () {
        hashtagMenuItem.forEach(li => {
            li.className = "";
        })
        li.className = "hashtag-active";
        resetTabMenu();
    }
})

function filterByHashtagMenu() {

    alert('hashtag menu activated');

    // clear active, tab and dropdown menus
    resetTabMenu();

    // set subdirectory url to default 


}

// RESET TAB MENU
function resetTabMenu() {
    // remove active class 
    tabMenuList.forEach(li => {
        tabMenuList.forEach(li => {
            li.className = "";
        })
    })
}

// RESET HASHTAG MENU 
function resetHashtagMenu() {
    // remove active class 
    hashtagMenuItem.forEach(li => {
        hashtagMenuItem.forEach(li => {
            li.className = "";
        })
    })
}

// UPDATE SUBDIRECTORY URL
function updateUrl(dropSelected) {

    // console.log(dropSelected);

    dropSelected += '-projects';

    /* ADD SELECTED PROJECT CATEGORY TO SUBDIRECTORY URL */
    document.getElementById('subdirectory-url').innerHTML = dropSelected;

}











































