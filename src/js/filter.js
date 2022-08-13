/**
 * 
 * Script Purpose: 
 * 
 * This script provides four ways for users to filter portfolio projects.
 * 
 * 1. filter by dropdown menu
 * 2. filter by main tab menu
 * 3. filter by sub menu (hashtag menu)
 * 4. filter by skillset folders 
 *
 * 
 **/

var dropMenuList = document.getElementById('project-dropdown');
var projectCard = document.querySelectorAll('.project-card > div');
var tabMenuList = document.querySelectorAll('#project-filter ul li');
let tabMenuListArr = ['all', 'fun', 'work', 'legacy'];
let defaultSubDirectory = document.getElementById('subdirectory-url').innerHTML;
let hashtagMenuItem = document.querySelectorAll("#project-filter-skillset ul li");


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

    // FILTER PROJECTS
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

// FILTER BY SKILL FOLDERS
document.querySelectorAll('.skills-folder').forEach(item => {
    item.addEventListener('click', events => {
        let selectedFolder = item.alt
        // console.log(selectedFolder);
        filterBySkillsFolder(selectedFolder);
    })
})

function filterBySkillsFolder(selectedFolder) {

    document.getElementById('projects').scrollIntoView();

    selectedFolder = selectedFolder.toString().toLowerCase();

    console.log(`selected skills folder: ${selectedFolder}`);

    document.getElementById(selectedFolder).click();

}


// FILTER BY HASHTAG MENU
hashtagMenuItem.forEach(li => {
    li.onclick = function () {
        hashtagMenuItem.forEach(li => {
            li.className = "";
        })
        li.className = "hashtag-active";
        let hashtagValue = li.textContent;
        resetTabMenu();
        filterByHashtagMenu(hashtagValue);
    }
})

function filterByHashtagMenu(hashtagValue) {

    resetTabMenu();

    console.log(`hashtag menu item ${hashtagValue} was selected`);

    // FILTER PROJECTS
    projectCard.forEach(div => {
        div.style.display = 'none';

        let hashtagAtt = div.getAttribute('tag-filter');

        // console.log(`tag attributes: ${hashtagAtt}`);

        let hashtagAttArray = new Array(hashtagAtt)
            .toString()
            .split(" ");

        if (hashtagAttArray.includes(hashtagValue)) {
            div.style.display = "block";
        }
    })
}

// RESET TAB MENU
function resetTabMenu() {
    tabMenuList.forEach(li => {
        tabMenuList.forEach(li => {
            li.className = "";
        })

        /* SET SUBDIRECTORY URL TO DEFAULT */
        document.getElementById('subdirectory-url').innerHTML = defaultSubDirectory;

        /* SET DROPDOWN MENU URL TO DEFAULT */
        dropMenuList.selectedIndex = 0;

    })
}

// RESET HASHTAG MENU 
function resetHashtagMenu() {
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











































