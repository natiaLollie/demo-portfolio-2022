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

function filterByDropDown() {

    let dropSelected = dropMenuList.options[dropMenuList.selectedIndex]
        .text
        .replace('Projects', '')
        .replace(' ', '')
        .toLowerCase();

    // console.log(dropSelected);

    chooseTabMenuItem(dropSelected);

    /* then select match on tab menu */
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

tabMenuList.forEach(li => {
    li.onclick = function () {
        tabMenuList.forEach(li => {
            li.className = '';
        })
        li.className = 'active';
        var tabSelected = li.id;
        filterByTab(tabSelected);
    }
})

function filterByTab(dropSelected) {

    // console.log(dropSelected);

    // filter projects
    projectCard.forEach(div => {
        div.style.display = 'none';
        // console.log(div.getAttribute('data-filter'));
        if (div.getAttribute('data-filter') == dropSelected.toLowerCase() || dropSelected == "all") {
            div.style.display = "block";
        }
    })

    /* then select match on dropdown menu */
    if (dropSelected) {

        let setDropDown = tabMenuListArr.indexOf(dropSelected); // return a number value 
        // console.log(setDropDown);
        dropMenuList.selectedIndex = setDropDown;
    }

}

function filterBySkillFolder() {

}


/** ---------------------------- */

function resetTabMenu() {
    // remove active class 
    tabMenuList.forEach(li => {
        tabMenuList.forEach(li => {
            li.className = "";
        })
    })
}

function clearTabDropMenus(){

}

/** ---------------------------- */

function updateUrl() {
    
}




















































