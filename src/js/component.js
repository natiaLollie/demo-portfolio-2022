class Volunteer extends HTMLElement {
    connectedCallback() {
        // super();
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
            <p><b>github.com/</b>natiaLollie</p>
            <!--<p>Portfolio designed and developed by Natia Lollie | github.com/natiaLollie</p>-->
        </div>
        `
    }
}

customElements.define('volunteer-icons', Volunteer);
customElements.define('footer-rights', Rights);