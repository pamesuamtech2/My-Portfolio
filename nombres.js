const mainSkillsContainer = document.getElementById("mainSkills");

const myMainSkills = [
  {
      id: 1,
      picture: "./assets/htmllogo.webp",
      skillname: "HTML5" 
  },
  {
      id: 2,
      picture: "./assets/css.png",
      skillname: "CSS3"   
  },
  {
      id: 3,
      picture: "./assets/javascriptlogo.jpg",
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
      picture: "/assets/openScienceNasa.png",
      skillname: "OpenScienceNASA", 
  },
  {
      id: 5,
      picture: "/assets/englishC2.png",
      skillname: "EnglishC2",
  },
  {
      id: 6,
      picture:"/assets/1778376452819.png",
      skillname: "PromptEngeneering",   
  },
   {
      id: 7,
      picture: "/assets/Illustrator-logo.png",
      skillname: "AdobeIllustrator"   
  }
];

let addSkillsHTML = "";
myAddSkills.forEach(function(skill) {
  addSkillsHTML += `
          <img src="${skill.picture}" alt="${skill.skillname}" class="w-30 h-30">
    `;
});

addSkillsContainer.innerHTML = addSkillsHTML;