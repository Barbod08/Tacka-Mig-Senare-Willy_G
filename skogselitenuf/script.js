/* =========================================================
   SCROLL-ANIMATIONER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const elementsToAnimate = document.querySelectorAll(
        "main h1, main h2, main h3, main p, main img, main .button, main .section-line, main .about-line, main li"
    );

    elementsToAnimate.forEach((element, index) => {

        element.classList.add("scroll-reveal");

    });


    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    elementsToAnimate.forEach((element) => {
        observer.observe(element);
    });


    /* =====================================================
       COOKIE-BANNER
    ===================================================== */

    createCookieBanner();

});


/* =========================================================
   COOKIE-BANNER
========================================================= */

function createCookieBanner() {

    const cookieChoice = localStorage.getItem("skogseliten-cookie-choice");

    if (cookieChoice) {
        return;
    }


    const banner = document.createElement("div");

    banner.className = "cookie-banner";

    banner.innerHTML = `
        <div class="cookie-content">

            <div class="cookie-text">
                <h2>Cookies</h2>

                <p>
                    Vi använder nödvändiga cookies för att
                    hemsidan ska fungera korrekt.
                </p>
            </div>

            <div class="cookie-buttons">

                <button class="cookie-accept">
                    Tillåt alla
                </button>

                <button class="cookie-necessary">
                    Tillåt endast nödvändiga
                </button>

            </div>

        </div>
    `;


    document.body.appendChild(banner);


    const acceptButton = banner.querySelector(".cookie-accept");
    const necessaryButton = banner.querySelector(".cookie-necessary");


    acceptButton.addEventListener("click", () => {

        localStorage.setItem(
            "skogseliten-cookie-choice",
            "all"
        );

        closeCookieBanner();

    });


    necessaryButton.addEventListener("click", () => {

        localStorage.setItem(
            "skogseliten-cookie-choice",
            "necessary"
        );

        closeCookieBanner();

    });


    function closeCookieBanner() {

        banner.classList.add("cookie-hidden");

        setTimeout(() => {
            banner.remove();
        }, 400);

    }

}