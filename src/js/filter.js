/**
 * 
 * Script Purpose:
 * 
 * This script provides three ways for users to filter portfolio projects.
 * 
 * 1. filter by tabs within the project section
 * 2. filter by skillset folders within the skills section
 * 3. filter by dropdown menu within the project section
 *
 **/


// Script: Filter by Main Tabs within Project Section 

let menuItem = document.querySelectorAll("#project-filter ul li");
let projectItem = document.querySelectorAll(".project-card > div");

menuItem.forEach(li => {
    li.onclick = function () {

        // active selected menu item
        menuItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";

        /*
        const activeMainMenu = document.querySelector(".active").id.toString(); 
            console.log(activeMainMenu);

            */

        // filter the projects
        let value = li.textContent;
        projectItem.forEach(div => {
            div.style.display = 'none';
            console.log(div.getAttribute('data-filter'));
            if (div.getAttribute('data-filter') == value.toLowerCase() || value == "All") {
                div.style.display = "block";
            }
        })

        // reset url to default
        fullUrl.innerHTML = originalUrl;
        // update url 
        document.getElementById('url').innerHTML = projectType;

        

    }
})

// Script: Filter by Skillset Folders within the Skills Section

function filterProjects(selectedFolder) {

    let projectType = project.options[project.selectedIndex].text.replace('Projects', '').replace(' ', '').concat('-projects');
    let fullUrl = document.getElementById('full-url');

    if (selectedFolder) {
        // reset url to default 
        fullUrl.innerHTML = originalUrl;
        // add 'all-projects' to url
        document.getElementById('url').innerHTML = projectType;
        // add the selected skills-folder value to end of url 
        fullUrl.innerHTML = fullUrl.innerHTML.concat(`/${selectedFolder}`);
        // psuedo-click selected hashtag skill inside project folder
        document.getElementById(selectedFolder.toLowerCase()).click();
    }

// Script: Filter by Dropdown Menu within Project Section

     else {
        // reset url to default
        fullUrl.innerHTML = originalUrl;
        // set the url to the selected project type 
        document.getElementById('url').innerHTML = projectType;
        // pseudo-click selected project type on main menu
        let rawProjectType = projectType.toLowerCase().replace('-projects', '');
        // console.log(rawProjectType);
        document.getElementById(rawProjectType).click();
    }
}

// Script: Filter by hashtags within the projects section 

let hashtagMenuItem = document.querySelectorAll("#project-filter-skillset ul li");

hashtagMenuItem.forEach(li => {
    li.onclick = function () {
        console.log('function entered');

        // active selected menu item
        hashtagMenuItem.forEach(li => {
            li.className = "";
        })
        li.className = "hashtag-active";

        // filter the projects by hashtag
        projectItem.forEach(div => {
            div.style.display = 'none';

            let hashtagValue = li.textContent
                .toLowerCase();

            console.log(`hashtag ${hashtagValue} was selected`);

            let hashtagAtt = div.getAttribute('tag-filter');

            console.log(`tag attributes: ${hashtagAtt}`);

            let hashtagAttArray = new Array(hashtagAtt)
                .toString()
                .split(" ");

            if (hashtagAttArray.includes(hashtagValue)) {
                div.style.display = "block";
            }
        })
    }

})
