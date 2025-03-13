// CURSOR




// PAGE 1
var h1 = document.querySelector("#page-1 h1");
var h1Text = h1.textContent; 
var splittedText = h1Text.split(""); 
var newText = splittedText
  .map(letter => `<span class="a">${letter}</span>`)
  .join(""); 
h1.innerHTML = newText; 


gsap.from(h1.querySelectorAll(".a"), {
  y: 100, 
  opacity: 0,
  duration: 0.9,
  delay: 0.5,
  stagger: 0.1,
  ease: "power2.out"
});


var letters = document.querySelectorAll(".a");

letters.forEach(letter => {
    document.body.style.backgroundColor = "white";
  letter.addEventListener("mouseenter", function () {
    this.style.color = "white"; 
    document.body.style.backgroundColor = "black"; 
  });

  letter.addEventListener("mouseleave", function () {
    this.style.color = "black"; 
    document.body.style.backgroundColor = "white"; 
  });
});

// PAGE 2
var page2h1 = document.querySelector(".about-me h1");

if (page2h1) {
  gsap.to(page2h1, { opacity: 1, duration: 0 }); // Ensure it starts at 0
  gsap.from(page2h1, {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
  });

  page2h1.addEventListener("mouseenter", function () {
    gsap.to(this, { color: "black", backgroundColor: "white", duration: 0.5, ease: "power2.out" });
  });

  page2h1.addEventListener("mouseleave", function () {
    gsap.to(this, { color: "white", backgroundColor: "black", duration: 0.5, ease: "power2.out" });
  });
}



var page2p = document.querySelector(".about-me p");
gsap.from(page2p, {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.15,
  ease: "power2.out"
})

var teaicon = document.querySelector(".page2-box1 i");
gsap.from(teaicon, {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1.6,
  stagger: 0.15,
  ease: "power2.out"
})

// PAGE 3
var techstack = document.querySelector(".tech-stack");
var skills = document.querySelector(".skills");
var hobbies = document.querySelector(".hobbies");
var page3content = document.querySelector(".page3-content");

// TECH STACK
const originalContent = page3content.innerHTML;

const message = () => {
  const techStackItems = [
    "React", "JavaScript", "HTML", "CSS", "Node.js", 
    "Express", "MongoDB", "Git", "Filmora", "Adobe PhotoShop"
  ];

  page3content.innerHTML = `<ul style="color: white;">${techStackItems.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

techstack.addEventListener("mouseenter", function () {
    page3content.style.backgroundColor = "black"; 
    message();
});


techstack.addEventListener("mouseleave", function () {
    page3content.style.backgroundColor = "white"; 
    page3content.innerHTML = originalContent;
});

const message2 = () => {
  const skillsList = [
    "Problem-Solving", "Critical Thinking", "Communication", 
    "Collaboration & Teamwork", "Time Management", 
    "Adaptability", "Leadership & Initiative"
  ];

  page3content.innerHTML = `<ul style="color: white;">${skillsList.map(skill => `<li>${skill}</li>`).join("")}</ul>`;
}

skills.addEventListener("mouseenter", function () {
    page3content.style.backgroundColor = "black"; 
    message2();
});

skills.addEventListener("mouseleave", function () {
    page3content.style.backgroundColor = "white";
    page3content.innerHTML = originalContent; 
});

const message3 = () => {
  const hobbiesList = ["Reading", "Coding", "Photography", "Gaming", "Traveling", "Eating", "Drinking Tea"];

  page3content.innerHTML = `<ul style="color: white;">${hobbiesList.map(hobby => `<li>${hobby}</li>`).join("")}</ul>`;
}

hobbies.addEventListener("mouseenter", function () {
    page3content.style.backgroundColor = "black"; 
    message3();
});

hobbies.addEventListener("mouseleave", function () {
    page3content.style.backgroundColor = "white"; 
    page3content.innerHTML = originalContent;
});


gsap.from(techstack, {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.15,
  ease: "power2.out"
})

gsap.from(skills, {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.15,
  ease: "power2.out"
})

gsap.from(hobbies, {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1.5,
  stagger: 0.15,
  ease: "power2.out"
})


// PAGE 4
var page4head = document.querySelector(".page4-heading h1");
gsap.from(page4head, {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.15,
  ease: "power2.out"
})

var page4box1 = document.querySelector(".page4-box1");
var page4box2 = document.querySelector(".page4-box2");
var page4box3 = document.querySelector(".page4-box3");
var sundownStudio = document.querySelector(".website-1");
var restaurant = document.querySelector(".website-2");
var rockpaperscissorGame = document.querySelector(".game-1");
var tictactoeGame = document.querySelector(".game-2");
var quizGame = document.querySelector(".game-3");



sundownStudio.addEventListener('click', function(){
  window.open('https://aagoshrajsri.github.io/Sundown-Studio-Clone/', "_blank");
})

restaurant.addEventListener('click', function(){
  window.open("https://aagoshrajsri.github.io/RAJ/", "_blank");
})

rockpaperscissorGame.addEventListener('click', function(){
  window.open("https://aagoshrajsri.github.io/Rock-Paper-Scissors/", "_blank");
})

tictactoeGame.addEventListener('click', function(){
  window.open('https://aagoshrajsri.github.io/Tic-Tac-Toe/', "_blank");
})

quizGame.addEventListener('click', function(){
  window.open('https://aagoshrajsri.github.io/QUIZ/', "_blank");
})


gsap.from(page4box1, {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.25,
  ease: "power2.out"
})

gsap.from(page4box2, {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1.5,
  stagger: 0.25,
  ease: "power2.out"
})

gsap.from(page4box3, {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 2,
  stagger: 0.25,
  ease: "power2.out"
})

gsap.from(".website-content div", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  delay: 1.5,
  stagger: 0.15, // Delays each element slightly
  ease: "power2.out"
});



gsap.from(".game-content div", {
  y: 100,
  opacity: 0,
  duration: 0.6,
  delay: 1.9,
  stagger: 0.15, // Delays each element slightly
  ease: "power2.out"
});

gsap.from(".text-content div", {
  y: 100,
  opacity: 0,
  duration: 0.7,
  delay: 2.3,
  stagger: 0.15, // Delays each element slightly
  ease: "power2.out"
});

var futurePlan = document.querySelector(".future-plan h1");
var words = futurePlan.textContent.split(" "); // Split by words
var newText = words.map(word => `<span class="word">${word}</span>`).join(" "); // Wrap each word

futurePlan.innerHTML = newText; // Replace original text with wrapped words

// Animate each word separately
gsap.from(futurePlan.querySelectorAll(".word"), {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.15, // Stagger each word
  ease: "power2.out"
});



function animateText(selector, delay) {
  let element = document.querySelector(selector);
  let text = element.textContent.split("")
    .map(letter => `<span class="a">${letter}</span>`)
    .join("");

  element.innerHTML = text;

  gsap.from(element.querySelectorAll(".a"), {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 1.5,
    stagger: 0.01,
    ease: "power2.out"
  });
}

animateText(".framework p", 0.5);
animateText(".blockchain p", 0.7);
animateText(".flutter p", 0.9);


// PAGE 6
function rotateIconOnHover(sectionClass) {
  let icon = document.querySelector(`${sectionClass} i`);
  let section = document.querySelector(sectionClass);

  section.addEventListener("mouseenter", () => {
    gsap.to(icon, { rotate: 180, duration: 0.5 });
  });

  section.addEventListener("mouseleave", () => {
    gsap.to(icon, { rotate: 0, duration: 0.5 });
  });
}


[".framework", ".blockchain", ".flutter"].forEach(rotateIconOnHover);







window.addEventListener("load", () => {
  gsap.set("h1", { clearProps: "all" }); 
});
