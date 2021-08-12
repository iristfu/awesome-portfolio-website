AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Intern",
    cardImage: "assets/images/experiences/curis-experience.gif",
    place: "Stanford Human Computer Interaction Lab",
    time: "(Apr, 2021 - present)",
    desp: "<p>I am an undergraduate research intern through the CURIS program this summer. Specifically, I'm building out a narrative-based augmented reality tutor, which integrates AI-generated narratives with AR learning activities. I'm using Unity and C# to create interactive features such as a 3D planet model and a 3D diary that stores text and image input from users. </p>",
  },
  {
    title: "Frontend Engineer",
    cardImage: "assets/images/experiences/virtuali-experience.gif",
    place: "Virtuali LLC",
    time: "(Dec 2020 - Apr, 2021)",
    desp: "<p>When campus shut down, Virtuali turned virtual. At Virtuali, I helped build a gamified Stanford campus (think Club Penguin, but Stanford!). I picked up on React, React Native, Firebase, Figma, and HTML/CSS along the way. This was my first 'real' software engineering experience on a team, and it was so fun to 'hack' features together, Google for answers, and get users to test our product! The platform is now available to students at all universities on https://virtuali.co/home </p>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experiences/curis-experience.gif",
    place: "Stanford Human Computer Interaction Lab",
    time: "(Apr, 2021 - present)",
    desp: "<p>I am an undergraduate research intern through the CURIS program this summer. Specifically, I'm building out a narrative-based augmented reality tutor, which integrates AI-generated narratives with AR learning activities. I'm using Unity and C# to create interactive features such as a 3D planet model and a 3D diary that stores text and image input from users. </p>",
  },
  {
    title: "Frontend Engineer",
    cardImage: "assets/images/experiences/virtuali-experience.gif",
    place: "Virtuali LLC",
    time: "(Dec 2020 - Apr, 2021)",
    desp: "<p>When campus shut down, Virtuali turned virtual. At Virtuali, I helped build a gamified Stanford campus (think Club Penguin, but Stanford!). I picked up on React, React Native, Firebase, Figma, and HTML/CSS along the way. This was my first 'real' software engineering experience on a team, and it was so fun to 'hack' features together, Google for answers, and get users to test our product! The platform is now available to students at all universities on https://virtuali.co/home </p>",
  },
  // {
  //   title: "Full Stack Engineer",
  //   cardImage: "assets/images/experiences/virtuali-experience.gif",
  //   place: "Harvard University Glassman Lab",
  //   time: "(Jul, 2021 - present)",
  //   desp:"<p>I was a full stack engineer building out a data visualization tool at the Glassman Lab at Harvard University. Within a 5000+ line code base, I designed an additional feature using a Java backend and a Javascript/HTML/CSS frontend that allows users to filter into a specific time window to understand the timeline between a condition's diagnosis and symptoms. I also got to mentor a high school research intern along the way, so after I figured out how to build a component, I had the opportunity to show him my thought process, including what led me to write the code that I did, and what effect that code had on the final product. </p>",
  // },
  //   title: "Head of Events",
  //   cardImage: "assets/images/experiences/virtuali-experience.gif",
  //   place: "HackOR Hackathon",
  //   time: "(Nov, 2020 - March 2021)",
  //   desp:"<p>I grew up in Oregon, a state with little tech/software infrastructure. Therefore, my friend Joy (who I met at the Yale Young Global Scholars program during sophomore year of high school) and I decided to organize the first-ever student-led Hackathon for Oregon. We were sponsored by Major League Hacking, NVIDIA, Wolfram Language, MongoDB, among others, and we proudly hosted 650+ registrants across 300 educational institutions during our inaugural event. We learned a lot about hosting virtual events, and I can't wait to help organize more hackathons in the future! </p>",
  // },
  // //   title: "Lead Computer Science Instructor",
  // //   cardImage: "assets/images/experiences/blue-ivy-learning-logo.jpg",
  // //   place: "Blue Ivy Learning",
  // //   time: "(Nov, 2020 - Jun 2021)",
  // //   desp:"<p>I believe that teaching leads to mastery. After completing the introductory computer science course CS106A at Stanford, I had the opportunity to design my own introductory Python curriculum for Blue Ivy Learning. In my course, I included key concepts I learned in CS106A, such as strings, dictionaries, and the principles of writing clean, readable code. By articulating these concepts to a group of 30+ students and answering any points of confusion, I gained a stronger understanding of core computer science fundamentals. </p>",
  // // },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Metor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  }
  

];

// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, subtitle, desp}) =>
//       (output += `  
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="#" class="blog-slider__button">Read More</a>   
//         </div>
//       </div>
//       `)
//   );
//   hackathonsection.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
