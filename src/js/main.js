//AFTER PAGE LOADS
window.onload = function () {
    document.querySelector('body').style.transition = '1.0s';
}

// MAIN MENU CLOCK

function autoDateTimeUpdate() {

    let dateTime = new Date();

    // current date

    let day = dateTime.toLocaleString('en-us', { weekday: 'long' });
    let month = dateTime.toLocaleString('en-us', { month: 'long' });
    let daynum = dateTime.getDate();
    let year = dateTime.getFullYear();

    // current time

    let hours = dateTime.getHours();
    let minutes = String(dateTime.getMinutes()).padStart(2, '0');
    let seconds = String(dateTime.getSeconds()).padStart(2, '0');

    let period = document.getElementById('period');

    if (hours >= 12) {
        period.innerHTML = 'PM';
    } else {
        period.innerHTML = 'AM';
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    // console.log(period);

    document.getElementById('hours').innerHTML = hours + ':';
    document.getElementById('minutes').innerHTML = minutes + ':';
    document.getElementById('seconds').innerHTML = seconds;

    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = month;
    document.getElementById('daynum').innerHTML = daynum + ',';
    document.getElementById('year').innerHTML = year;


}

setInterval(autoDateTimeUpdate, 1);


// GREETING TOOLBOX 


document.querySelectorAll('.tool').forEach(item => {
    item.addEventListener('click', event => {
        // log the selected element
        let selectedTool = item.alt
        console.log(selectedTool);

        document.getElementById('selected-tool').innerHTML = selectedTool.replace('tool', '');
        // set element state to selected 
        // when selected apply css class to invert color 

    })
})

document.getElementById('exit').addEventListener('click', function(){
    // console.log('exit greeting popup');
    document.getElementById('greeting-popup').classList.toggle('hidden');
    document.getElementById('prompt').classList.toggle('hidden');
})

document.getElementById('prompt').addEventListener('click', function(){
    // console.log('show greeting popup')
    document.getElementById('prompt').classList.toggle('hidden');
    document.getElementById('greeting-popup').classList.toggle('hidden');
})


// SKILLS 

let seeAllTags = document.querySelectorAll('.see-all');
let tagsHidden = document.querySelectorAll('.tags-hidden');

for (let i = 0; i < seeAllTags.length; i++) {
    seeAllTags[i].addEventListener('click', function(){
        // console.log('see all tags in project button clicked');
        tagsHidden[i].classList.toggle('tags-hidden');
    })
}


// CONTACT FORM

const formBtn = document.getElementById('submit-btn');
formBtn.disabled = true;

document.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('input', function(e){

        const nameRequired = document.querySelectorAll('.input-field')[0].value;
        const emailRequired = document.querySelectorAll('.input-field')[3].value;
        const messageRequired = document.querySelectorAll('.input-field')[4].value;

        if (nameRequired == "" || emailRequired == "" || messageRequired == "") {
            // console.log('a required field is empty');
            formBtn.style.opacity = 0.5;
            formBtn.disabled = true;
        } else {
            // console.log('all required fields have been filled');
            formBtn.style.opacity = 1;
            formBtn.disabled = false;
        }
    })
})

function showSubmissionMessage(){
    console.log('the email has been sent');

    // hide resume link
    document.getElementById('resume-link').classList.toggle('hidden');
    // show submission message
    document.getElementById('submission-message').classList.remove('hidden');
    // reset form 
    document.getElementById("contact-form").reset();    

    setTimeout(function () {
        document.getElementById('submission-message').className = 'hidden';
        document.getElementById('resume-link').classList.toggle('hidden');
    }, 5000);

}


// SETTINGS MENU







