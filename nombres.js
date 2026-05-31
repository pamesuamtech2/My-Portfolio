const mainSkillsContainer = document.getElementById("mainSkills");

const myMainSkills = [
  {
      id: 1,
      picture: "./assets/free-html-3d-icon-png-download-3640299.webp",
      skillname: "HTML5" 
  },
  {
      id: 2,
      picture: "./assets/png-clipart-blue-and-white-logo-web-development-responsive-web-design-cascading-style-sheets-html-css-blue-angle-thumbnail-removebg-preview.png",
      skillname: "CSS3"   
  },
  {
      id: 3,
      picture: "./assets/javascript-logo-javascript-icon-transparent-free-png.webp",
      skillname: "JavaScript"   
  }
];

let mainSkillsHTML = "";
myMainSkills.forEach(function(skill) { //array que veo, array que itero :))
  mainSkillsHTML += `
      <div class="bg-[#1E293B] dark:bg-[#a35b31] rounded-xl p-6 flex justify-center items-center hover:scale-105 transition duration-300 shadow-lg">
          <img src="${skill.picture}" alt="${skill.skillname}" class="w-16 h-16">
      </div>
    `;
});

mainSkillsContainer.insertAdjacentHTML('afterbegin', mainSkillsHTML); //profe la ia me dijo esto del afterbegin y el insertAdjacentHTML pero me sirvió porque ya aprendí una nueva función :))

//Additional Skills Section ... pd. el primero me ayudó un poco la ia y este segundo ya lo estoy haciendo yo solita (vea que soy honesta xD)
const addSkillsContainer = document.getElementById("addSkills");

const myAddSkills = [
  {
      id: 4,
      picture: "assets/WhatsApp Image 2026-05-09 at 6.11.17 PM.png",
      skillname: "OpenScienceNASA" 
  },
  {
      id: 5,
      picture: "assets/WhatsApp Image 2026-05-09 at 6.59.06 PM.png",
      skillname: "EnglishC2"
  },
  {
      id: 6,
      picture:"assets/1778376452819.png",
      skillname: "PromptEngeneering"   
  },
   {
      id: 7,
      picture: "assets/Illustrator-logo.png",
      skillname: "AdobeIllustrator"   
  }
];

let addSkillsHTML = "";
myAddSkills.forEach(function(skill) {
  addSkillsHTML += `
      <div class="flex flex-row flex-wrap justify-center items-center gap-6 md:gap-8 w-full">
          <img src="${skill.picture}" alt="${skill.skillname}" class="w-55 h-55">
      </div>
    `;
});
