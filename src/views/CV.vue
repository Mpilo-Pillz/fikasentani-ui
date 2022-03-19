<style lang="scss" scoped>
/* 
HTML TAGS
*/
body,
html {
  font-family: "Roboto Mono", monospace;
  font-weight: 300;
  line-height: 3.2rem;
}

a {
  color: #fff;
  text-decoration: none;
}
header {
  background-color: teal;
  color: white;
  padding: 30px;
  text-align: center;
}

main {
  background-color: #fff;
  padding: 20px;
}

/* classes */

.cv-btn {
  border: none;
  background-color: #454747;
  color: #fff;
  font-weight: 900;
  padding: 10px 30px;
  margin: 10px auto 15px auto;
}
.career-img {
  object-fit: contain;
  height: 300px;
  width: 100%;
}

.close {
  display: flex;
  font-size: 32px;
  font-weight: bolder;
  justify-content: flex-end;
}

.contact-details {
  /* Note to self, use this for further styling of detals*/
}

.contact-margin-left {
  margin-left: 1rem;
}

.contact-details--font {
  //   font-size: 0.8rem;
  font-size: 1.3rem;
}

.cv-font--lg {
  //   font-size: 1.3rem;
  font-size: 2.1rem;
}

.cv-margin-bottom--md {
  margin-bottom: 25px;
}

.cv-margin-bottom--sm {
  margin-bottom: 15px;
}

.cv-margin-top--sm {
  margin-top: 15px;
}

.cv-margin-top--md {
  margin-top: 25px;
}

.cv--underline {
  border-bottom: 2px solid teal;
  padding-bottom: 30px;
  margin-bottom: 30px;
}

.cv-work-ul {
  list-style: none;
  padding: 1rem;
}

.employer-app {
  background-color: #454747;
  border-radius: 20px;
  font-size: 12px;
  margin: 10px;
  padding: 0.5px;
}

.employer-applications {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 10px 10px 0;
}

.modal-backdrop {
  display: none;
}

.my-profile {
  background-color: teal;
  color: white;
  display: none;
  left: 0;
  line-height: 2;
  opacity: 0;
  padding: 20px;
  position: absolute;
  top: 0;
}

.next:hover {
  transform: translateY(-3px);
  transition: 0.5s;
}

.portfolio-project {
  background-color: #454747;
  border-radius: 100px;
  color: #fff;
  margin: 1rem;
  padding: 1rem 1.5rem;
}

.portfolio-project > a {
  font-weight: bold;
  text-decoration: none;
}

.portfolio-project:hover {
  background-color: #2b2c2c;
  color: #fff;
  font-size: 18px;
  padding: 5px 12px;
  transition: 0.2s;
}

.profile-image {
  height: 250px;
  width: 250px;
  margin-bottom: 20px;
}

.cv-projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.text-align--center {
  text-align: center;
}

.toggle-view {
  display: block;
  animation: fadeInFromNone 1s ease-in-out;
  opacity: 1;
}

.ul__list-style--inside {
  list-style: inside;
}

.ul__list-style--square {
  list-style: inside square;
}

.ul__padding--sides {
  padding: 0 20px;
}

.view-profile {
  animation: grow ease-in-out 5s;
  border-bottom: 2px dashed #fff;
  color: #fff;
}

@keyframes grow {
  0% {
    border-bottom: 2px dashed #50c4e7;
    color: #50c4e7;
    font-size: 18px;
  }
  25% {
    border-bottom: 2px dashed #fff;
    color: #fff;
    font-size: 15px;
  }
  50% {
    border-bottom: 2px dashed #fff;
    color: #fff;
    font-size: 18px;
  }
  100% {
    border-bottom: 2px dashed #50c4e7;
    color: #50c4e7;
  }
}

@keyframes fadeInFromNone {
  0% {
    display: none;
    left: -10;
    opacity: 0;
  }

  1% {
    display: block;
    left: -10;
    opacity: 0;
  }

  100% {
    display: block;
    left: 13;
    opacity: 1;
  }
}

/* IDs */

#modalBackdrop {
  // background-color: hsla(0, 0%, 0%, 0.69);
  height: 100%;
  position: fixed;
  width: 100%;
}

#next,
#next-bottom {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: teal;
  color: white;
  font-weight: 900;
}
#profile-pic {
  height: 100%;
  width: 100%;
  cursor: pointer;
  object-fit: cover;
}

/* MEDIA QUERRIES */
@media only screen and (min-width: 1070px) {
  /* 
HTML TAGS
*/

  header {
    background-color: teal;
    color: white;
    height: 200px;
    padding: 70px;
    position: relative;
    text-align: left;
  }

  main {
    position: relative;
    padding: 20px 20px 20px 70px;
  }

  /* 
CLASSES
*/

  .about-me {
    max-width: 600px;
  }

  .about-me-heading {
    font-size: 3.2rem;
    padding: 30px;
  }

  .close {
    display: none;
  }

  .cv-font--lg {
    font-size: 3.2rem;
  }

  .my-profile {
    background-color: #454747;
    display: block;
    left: 700px;
    min-height: 90vh;
    opacity: 1;
    padding: 20px 30px 70px 30px;
    position: absolute;
    right: 30px;
    top: 45px;
    width: 350px;
    z-index: 3;
  }

  .cv--underline {
    border-bottom: 2px solid teal;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }

  .cv-wrapper {
    line-height: 3.2rem;
    padding: 30px 0 60px 0;
  }

  .display-none {
    display: none;
  }

  .header--underline-white {
    border-bottom: 2px solid white;
  }

  .job-summary {
    padding: 2rem;
  }

  .link--decoration {
    text-decoration: none;
    border-bottom: 1px solid lightgreen;
    margin-left: 1rem;
  }

  .link--decoration:hover {
    cursor: pointer;
    font-size: 1.6rem;
    color: lightgreen;
  }

  .paper {
    margin: auto;
  }
  .paper--max-width {
    max-width: 1100px;
  }

  .profile-image {
    height: 250px;
    width: 250px;
  }

  .shadow {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  }

  .stack {
    background-color: white;
    color: #454747;
    padding-left: 10px;
  }

  .view-profile {
    display: none;
  }

  /* IDS */

  #modalBackdrop {
    display: none;
  }

  #profile-pic {
    height: 100%;
    width: 100%;
    cursor: pointer;
    border-radius: 100%;
    object-fit: cover;
  }
}

/* @media only screen and (max-width: 340px){
.my-profile {
    transform: translate(-13%, -5%);
}
} */
</style>
<template>
  <div
    class="modal-backdrop"
    id="modalBackdrop"
    :class="{ 'toggle-view': showProfile }"
    @click="onHideProfile"
  ></div>
  <article class="cv-wrapper">
    <div class="paper paper--max-width shadow">
      <header>
        <section class="header-name-profession">
          <h1 class="cv-font--lg">MT Fikasentani KN Dlamini</h1>
          <h1 class="cv-margin-bottom--md">Software Engineer</h1>
          <span class="view-profile" id="toggle" @click="onShowProfile"
            >click to view my profile</span
          >
        </section>
        <section
          id="myProfile"
          class="my-profile shadow"
          :class="{ 'toggle-view': showProfile }"
        >
          <div class="close" id="closeIcon" @click="onHideProfile">
            <ion-icon name="close-outline"></ion-icon>
          </div>
          <div class="profile-image">
            <img
              id="profile-pic"
              src="https://lh3.googleusercontent.com/pWGKsbC67uKkiC4xQKOPM4juc2DCUN9oqsBKqaqpRawSTFAeYfPTW-MhTnvFGEUJ3nMJoqsbY3x6rs_uqZb9nts9npWdjgUtI0W3jhDfYd9LuSa7DFj6q9R5apEXi0JyTiuSJqQV=w2400"
              alt="mpilo"
              height="250"
              width="250"
            />
          </div>
          <div class="contact-details contact-details--font cv--underline">
            <h4>
              <ion-icon name="mail-outline"></ion-icon>
              <span class="contact-margin-left">mpilo.pillz@gmail.com</span>
            </h4>
            <h4>
              <ion-icon name="location-outline"></ion-icon>
              <span class="contact-margin-left"
                >Johannesburg, South Africa</span
              >
            </h4>
            <h4>
              <ion-icon name="logo-github"></ion-icon>
              <a href="https://github.com/Mpilo-Pillz/" class="link--decoration"
                >My Github</a
              >
            </h4>
            <h4>
              <ion-icon name="logo-bitbucket"></ion-icon>
              <a
                href="https://bitbucket.org/fikasentani/"
                class="link--decoration"
                >My BitBucket</a
              >
            </h4>
            <h4>
              <ion-icon name="logo-web-component"></ion-icon>
              <a href="https://fikasentech.web.app/" class="link--decoration"
                >My Website</a
              >
            </h4>
            <h4>
              <ion-icon name="logo-linkedin"></ion-icon>
              <a
                href="https://www.linkedin.com/in/mpilo-dlamini-38600b149/"
                class="link--decoration"
                >My LinkedIn</a
              >
            </h4>
            <h4>
              <ion-icon name="call-outline"></ion-icon>
              <a
                href="https://www.linkedin.com/in/mpilo-dlamini-38600b149/"
                class="link--decoration"
                >Please send message via LinkedIn</a
              >
            </h4>
          </div>

          <div class="contact-details--font">
            <h2 class="header--underline-white cv-margin-bottom--md">
              Disciplines
            </h2>
            <h3 class="stack cv-margin-bottom--sm">
              Front End Web Development
            </h3>
            <ul class="ul__list-style--inside ul__padding--sides">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML + CSS</li>
            </ul>

            <h3 class="cv-margin-bottom--sm cv-margin-top--sm">
              Frameworks & libraries
            </h3>
            <ul class="ul__list-style--inside ul__padding--sides">
              <li>Angular</li>
              <li>React</li>
              <li>Vue</li>
              <li>RXJS</li>
              <li>Sass</li>
              <li>JQuery</li>
            </ul>

            <h3 class="stack cv-margin-bottom--sm cv-margin-top--md">
              Back End Web Development
            </h3>
            <ul class="ul__list-style--inside ul__padding--sides">
              <li>Node JS</li>
            </ul>

            <h3 class="cv-margin-bottom--sm cv-margin-top--sm">
              Frameworks & libraries
            </h3>
            <ul class="ul__list-style--inside ul__padding--sides">
              <li>ExpressJS</li>
              <li>NestJS</li>
            </ul>

            <h3 class="stack cv-margin-bottom--sm cv-margin-top--md">
              Databases
            </h3>
            <ul class="ul__list-style--inside ul__padding--sides">
              <li>SQL</li>
              <li>NoSQL</li>
            </ul>

            <h3 class="cv-margin-bottom--sm cv-margin-top--sm">
              Database Management Systems
            </h3>
            <ul class="ul__list-style--inside ul__padding--sides">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>

            <h3 class="stack cv-margin-bottom--sm cv-margin-top--md">
              QA Engineering
            </h3>
            <ul class="ul__list-style--inside ul__padding--sides">
              <li>Java</li>
              <li>C#</li>
              <li>Python</li>
            </ul>

            <h3 class="cv-margin-bottom--sm cv-margin-top--sm">
              Frameworks & libraries
            </h3>
            <ul class="ul__list-style--inside ul__padding--sides">
              <li>Jest</li>
              <li>Mocha</li>
              <li>Chai</li>
              <li>Protractor</li>
              <li>Selenium</li>
              <li>Appium</li>
              <li>Cucumber / SpecFlow</li>
              <li>JMeter</li>
            </ul>

            <h3 class="stack cv-margin-bottom--sm cv-margin-top--md">
              Formal Education
            </h3>
            <h3 class="cv-margin-bottom--sm cv-margin-top--sm">
              Secondary Education
            </h3>
            <ul class="ul__list-style--inside ul__padding--sides">
              <li>
                Sifundzani High School - Internation General Certification of
                Secondary Education (IGCSE)
              </li>
              <li>
                Sifundzani High School - Higher Internation General
                Certification of Secondary Education (HIGCSE)
              </li>
              <li>
                Sifundzani High School - Advanced Subsidiary Level (AS Level)
              </li>
            </ul>
            <h3 class="cv-margin-bottom--sm cv-margin-top--sm">
              Higher and Tertiary Education
            </h3>
            <ul class="ul__list-style--inside ul__padding--sides">
              <li>
                PC Training and Business College - Higher Certificate in
                Information Technology (HCIT)
              </li>
              <li>ISTQB - Certified Testing Foundations</li>
              <li>ISTQB - Certified Agile Tester</li>
            </ul>
          </div>
          <hr class="display-none" />
          <button
            class="cv-btn display-none"
            id="closeBackdrop"
            @click="onHideProfile"
          >
            Close
          </button>
        </section>
      </header>
      <main>
        <section class="about-me">
          <div class="text-align--center">
            <h1 class="about-me-heading cv--underline">Projects</h1>
          </div>
          <div class="cv-projects">
            <span class="portfolio-project"
              ><a href="https://swazi-tunes.web.app/">Swazi Tunes</a></span
            >
            <span class="portfolio-project"
              ><a href="https://clinic-workflow.web.app/"
                >Clinic Workflow</a
              ></span
            >
            <span class="portfolio-project"
              ><a href="https://fikasentech.web.app/">FikasenTech</a></span
            >
            <span class="portfolio-project"
              ><a href="http://time-energy.co.za/">Time Energy</a></span
            >
            <span class="portfolio-project"
              ><a href="https://v101propertyads.netlify.app/"
                >Property Ads</a
              ></span
            >
            <span class="portfolio-project"
              ><a href="https://mpilo-pillz.github.io/osiris-ng-test/"
                >Random User Generator</a
              ></span
            >
            <span class="portfolio-project"
              ><a href="http://villageweb.co.za/">Village Web</a></span
            >
          </div>
        </section>

        <section class="career about-me">
          <div class="text-align--center">
            <h1 class="about-me-heading cv--underline">Career Summary</h1>
          </div>
          <div class="workExperience">
            <div id="imageDisplay"></div>
            <hr />
            <ul class="cv-work-ul">
              <li><strong>Role:</strong> Front End Web Developer</li>
              <li><strong>Company:</strong> Osiris Trading</li>
              <li>
                <strong>Tech Stack:</strong> Angular 2-11, Javascript,
                TypeScript, CSS, HTML, Kentico CMS
              </li>
              <li><strong>Duration:</strong> October 2019 - present</li>
            </ul>
            <hr />
            <div class="job-summary">
              <strong>Responsibilities:</strong>
              <ul class="ul__list-style--square ul__padding--sides">
                <li>
                  Build and maintain Sports betting web app using Angular 2-11.
                </li>
                <li>
                  Render content from Content Management Services onto Angular
                  Web Application.
                </li>
                <li>
                  Consume content from Content Management Systems and render
                  onto Angular Web Applications.
                </li>
                <li>
                  Build and maintain small reusable web view
                  components/widgets/iframes to be consumed by native Android
                  and IOS applications.
                </li>
                <li>
                  Use Angular, HTML, CSS and Javascript to build and maintain
                  web apps that can make CRUD requests onto various APIS for
                  various business problems, such as web apps for marketing
                  company products and promotions.
                </li>
              </ul>
              <br />
              <section>
                <h1>Projects</h1>
                <div class="employer-applications">
                  <a href="https://www.therangers.ug/" class="employer-app"
                    >https://www.therangers.ug/</a
                  >
                  <a href="https://www.betway.co.mz/" class="employer-app"
                    >https://www.betway.co.mz/</a
                  >
                  <a href="https://www.betwaycares.co.za" class="employer-app"
                    >https://www.betwaycares.co.za</a
                  >
                  <a
                    href="https://www.betway.co.za/freedomdayleaderboard/"
                    class="employer-app"
                    >https://www.betway.co.za/freedomdayleaderboard</a
                  >
                  <a
                    href="https://www.betwaypartnersafrica.com/offers/first-deposit/"
                    class="employer-app"
                    >https://www.betwaypartnersafrica.com/offers/first-deposit</a
                  >
                </div>
              </section>
            </div>
            <div id="workExperienceDisplay">
              <hr />
              <ul class="cv-work-ul">
                <li>
                  <strong>Role:</strong> Software Development Engineer in Test
                </li>
                <li><strong>Company:</strong> Osiris Trading</li>
                <li>
                  <strong>Tech Stack:</strong>
                  Selenium, C-sharp, SpecFlow, Appium, Jenkins
                </li>
                <li>
                  <strong>Duration:</strong> November 2018 - September 2019
                </li>
              </ul>
              <hr />
              <div class="job-summary">
                <strong>Responsibilities:</strong>
                <ul class="ul__list-style--square ul__padding--sides">
                  <li>
                    Create and Maintain Automated end to end tests using
                    Selenium to test web applications.
                  </li>
                  <li>
                    Create and Maintain Automated tests that execute on Mobile
                    Native Android iOS Apps and Mobile web browsers using
                    Appium.
                  </li>
                  <li>
                    Create readable and maintainable tests that conform to user
                    acceptance criteria using Gherkin style syntax with SpecFlow
                    and Cucumber.
                  </li>
                  <li>
                    Build and Maintain CI pipeline for automated scheduled
                    execution of regression tests using Jenkins.
                  </li>
                  <li>
                    Train non techncal testers on how to build, maintain and
                    execute automated tests.
                  </li>
                </ul>
              </div>
              <br />
              <section>
                <h1>Projects</h1>
                <div class="employer-applications">
                  <a href="https://www.betway.co.za/" class="employer-app"
                    >https://www.betway.co.za/</a
                  >
                  <a href="https://www.osiristrading.com/" class="employer-app"
                    >https://www.osiristrading.com/</a
                  >
                  <a
                    href="https://www.betway.co.za/offers/live-games"
                    class="employer-app"
                    >https://www.betway.co.za/offers/live-games</a
                  >
                  <a href="https://www.gmgaming.com.mt/" class="employer-app"
                    >https://www.gmgaming.com.mt/</a
                  >
                  <a
                    href="https://www.betway.co.za/offers/signup/"
                    class="employer-app"
                    >https://www.betway.co.za/offers/signup</a
                  >
                </div>
              </section>
              <hr />
              <ul class="cv-work-ul">
                <li><strong>Role:</strong> Test Engineer</li>
                <li><strong>Company:</strong> Standard Bank</li>
                <li>
                  <strong>Tech Stack:</strong>
                  Protractor, Selenium, Python, Cucumber, QTP/UFT
                </li>
                <li><strong>Duration:</strong> May 2013 - November 2018</li>
              </ul>
              <hr />
              <div class="job-summary">
                <strong>Responsibilities:</strong>
                <ul class="ul__list-style--square ul__padding--sides">
                  <li>
                    Create and Maintain automated tests for various bank web
                    applications using Protractor and Selenium.
                  </li>
                  <li>
                    Create and Maintain automated tests for various bank desktop
                    apllications using QTP/UFT.
                  </li>
                  <li>
                    Mentor and train Graduates and Learners on manual and
                    automated testing.
                  </li>
                  <li>
                    Provide detailed test execution reports to various
                    stakeholders.
                  </li>
                  <li>
                    Analyse business requirements documentation to create test
                    requirements, and test cases to be executed manually or
                    automated.
                  </li>
                </ul>
              </div>
              <br />
              <section>
                <h1>Projects</h1>
                <div class="employer-applications">
                  <a
                    href="https://onlinebanking.standardbank.co.za/#/login"
                    class="employer-app"
                    >https://onlinebanking.standardbank.co.za/#/login</a
                  >
                </div>
              </section>
              <hr />
            </div>
          </div>
        </section>
        <section class="about-me">
          <div class="text-align--center">
            <h1 class="about-me-heading cv--underline">About Me</h1>
          </div>
          I would describe myself as an individual that loves to learn. I have
          spent a majority of my career learning how to learn more efficiently
          and effectively and that is my greatest strength. I like to keep an
          open mind. I have worked primarily in the Quality Assurance (Testing)
          side of the Software Development Lifecycle (SDLC). I have spent a
          majority of my career working as a Test Automation Engineer. However
          recently I have switched to work on the Development side of the SDLC
          currently working as a Web Developer. I work as a front-end web
          developer and I enjoy the unique challenges it brings forth on a day
          to day. Outside of work hours, I focus on learning full stack web
          development, and mobile app development. I enjoy learning on Udemy.

          <br />
          <br />
          When I am not in front of my IDE but still in front of my computer, I
          watch a lot of Sitcoms and Japanese Anime. I am a big Marvel, DC and
          Star Wars fan. I am a sports fan, I primarily follow football,
          athletics, boxing and mixed martial arts. I love to exercise, As much
          as I am a fan of functional programming, I am also equally a fan of
          Functional Fitness Training and High Intensity Interval Training.
        </section>
        <section class="about-me">
          <div class="text-align--center">
            <h1 class="about-me-heading cv--underline">References</h1>
            <ul>
              <li>
                Lucky Hlakaza - Senior Developer - BMW <br />
                <strong>website: https://www.luckza.me/ </strong>
              </li>
              <li>
                Ndimphiwe Mayekiso - Developer Tech Lead - Osiris Trading <br />
                <strong>website: https://ndimphiwe.com/ </strong>
              </li>
              <li>
                Siseko Nomavila - Senior Developer - BMW <br />
                <strong>website: https://siseko.me/</strong>
              </li>
            </ul>
          </div>

          <br />
          <br />
        </section>
      </main>
    </div>
  </article>

  <!-- <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script> -->
</template>

<script>
export default {
  name: "CV",
  data() {
    return {
      showProfile: false,
    };
  },
  methods: {
    onShowProfile() {
      this.showProfile = true;
    },
    onHideProfile() {
      this.showProfile = false;
    },
  },
};
</script>
