class Volunteer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="volunteer-wrapper">
            <div class="volunteer-card">
                <a target="_blank" href="https://www.womenwhocode.com/"><img class="card-image"
                    src="_imgs/thumbnails/volunteer/women-who-code1.png" alt="Women Who Code"></a>
            </div>
            <div class="volunteer-card">
                <a target="_blank" href="https://seattlegivecamp.org/"><img class="card-image"
                    src="_imgs/thumbnails/volunteer/seattle-give-camp1.png" alt="Seattle Give Camp"></a>
            </div>
        </div>
        `
    }
}

class Rights extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer-rights">
            <p><a target="_blank" href="https://github.com/natiaLollie"><b>github.com/</b>natiaLollie</a></p>
            <!--<p>Portfolio designed and developed by Natia Lollie | github.com/natiaLollie</p>-->
            <p class="mobile-resume" style="font-size: 12px; padding-top: 10px;"><a target="_blank" href="#"><em>Download Resume</em></a></p>
        </div>
        `
    }
}


customElements.define('volunteer-icons', Volunteer);
customElements.define('footer-rights', Rights);