const testimonialsElement = document.querySelector("#aficionados-container");
const brandBtns = document.querySelectorAll(".brand-btn");
const brandContainer = document.querySelector("#brand-container");

const animationIn = "animate__animated animate__fadeInLeft";
const animationOut = "animate__animated animate__fadeOutRight";
const appendTimer = 1500;

{
}
brandBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
    } else {
      brandBtns.forEach(activeBtn => activeBtn.classList.remove("active"));
      btn.classList.toggle("active");
      brandContainer.childNodes.forEach((node) => {
        node.classList = animationOut;
        setTimeout(() => node.remove(), 1000);
      });

      switch (event.target.id) {
        case "team":
          {
            createTeamArticle();
          }
          break;
        case "origin":
          {
            createOriginArticle();
          }
          break;
        case "quality":
          {
            createQualityArticle();
          }
          break;
        case "trade":
          {
            createTradeArticle();
          }
          break;
      }
    }
  });
});

function createTeamArticle() {
  // Create Image
  const teamImage = document.createElement("img");
  teamImage.src = "/resources/team_masked.svg";
  teamImage.alt = "Our origin working together";
  teamImage.classList = animationIn;
  teamImage.style.borderRadius = "100%";

  // Create Div
  const teamDiv = document.createElement("div");
  teamDiv.classList = animationIn;
  const teamDivh1 = document.createElement("h1");
  teamDivh1.innerText = "The Coffeephilia© company";
  const teamDivP = document.createElement("p");
  teamDivP.innerHTML =
    "Coffeephilia is not simply a company.<br> It is a maxim.<br> We worship coffee like some worship Gods. <br>Hence, it is our goal to bring that lifestyle to you and supply you with everything you desire.";
  teamDiv.appendChild(teamDivh1);
  teamDiv.appendChild(teamDivP);
  setTimeout(() => {
    brandContainer.appendChild(teamImage);
    brandContainer.appendChild(teamDiv);
  }, appendTimer);
}

function createOriginArticle() {
  const originImage = document.createElement("img");
  originImage.src = "/resources/Colombia_masked.svg";
  originImage.alt = "Some raw coffee beans";
  originImage.classList = animationIn;

  // Create Div
  const originDiv = document.createElement("div");
  originDiv.classList = animationIn;
  const originDivh1 = document.createElement("h1");
  originDivh1.innerText =
    "Organic Farms";
  const originDivP = document.createElement("p");
  originDivP.innerText =
    "Our suppliers treat plants with love as they have done for generations. The farms are located in the Columbian highlands, right in the center of the Eje Cafetero (Coffee axis).";
  originDiv.appendChild(originDivh1);
  originDiv.appendChild(originDivP);

  setTimeout(() => {
    brandContainer.appendChild(originImage);
    brandContainer.appendChild(originDiv);
  }, appendTimer);
}

/* <article><img src="/resources/Colombia_masked.svg" alt="Some raw coffee beans"><div><h1>Our beans grow in the hands of ecologically friendly operating farms in Colombia</h1><p>Our suppliers treat the coffee plants with love as they have done for generations. The farms are located in the Columbian highlands, right in the center of the Eje Cafetero (Coffee axis). </p></div></article> */

function createQualityArticle() {
  const beansContainer = document.createElement("div");
  const qualityImage = document.createElement("img");
  qualityImage.src = "/resources/coffee-roasted-mask.svg";
  qualityImage.alt = "The roasted coffee beans";
  qualityImage.classList = animationIn;
  beansContainer.classList = animationIn;

  const qualityDivh1 = document.createElement("h1");
  qualityDivh1.innerText =
    "Guaranteed top-notch quality";
  const qualityDivP = document.createElement("p");
  qualityDivP.innerText =
    "Selected by our farmers' eagle eyes, merely impeccable beans have the honour to be shipped to our roasting manufacture for further processing.";
  beansContainer.appendChild(qualityDivh1);
  beansContainer.appendChild(qualityDivP);

  // Create Div

  setTimeout(() => {
    brandContainer.appendChild(qualityImage);
    brandContainer.appendChild(beansContainer);
  }, appendTimer);
}
function createTradeArticle() {
  const farmerImage = document.createElement("img");
  farmerImage.src = "/resources/coffee-farmer.jpg";
  farmerImage.alt = "A columbian farmer in the coffee paddocks";
  farmerImage.style.width = "25%"
  farmerImage.style.borderRadius = "20px"
  farmerImage.style.marginTop = "-3rem";
  farmerImage.classList = animationIn;
  const farmerDiv = document.createElement("div");
  farmerDiv.classList = animationIn;
  const farmerDivH1 = document.createElement("h1");
  const farmerDivP = document.createElement("p");
  farmerDivH1.innerHTML = "Commitment To Farmers And Fair Trade";
  farmerDivP.innerHTML =
    "The well-being of our farmers is of paramount importance to us. That is why we are committed to fair trade, ensuring that our valued farmers receive a fair share for their hard work.";
  farmerDiv.appendChild(farmerDivH1);
  farmerDiv.appendChild(farmerDivP);

  setTimeout(() => {
    brandContainer.appendChild(farmerImage);
    brandContainer.appendChild(farmerDiv);
  }, appendTimer);
}

const baseURI = "resources/testimonials/";
const aficionados = [
  {
    Name: "Birolina Altun",
    Text: "I have never had better coffee in my entire life.",
    image: baseURI + "biroline.jpg",
  },
  {
    Name: "Rocco Chiera",
    Text: "I love the variety of coffee sorts that coffeephilia offers!",
    image: baseURI + "photo-1547425260-76bcadfb4f2c.jpg",
  },
  {
    Name: "Florent Fejzulahu",
    Text: "A morning without coffeephilia coffee is like Adam without Eve.",
    image: baseURI + "photo-1570612861542-284f4c12e75f.jpg",
  },
  {
    Name: "Fabienne Krüger",
    Text:
      "I have been a long term customer of CP and I got never disappointed. 100% worth the money!",
    image: baseURI + "tina-guina-obV_LM0KjxY-unsplash.jpg",
  },
  {
    Name: "Klaus Heder",
    Text: "Just two words are necessary to explain CP. Delicious. Coffee. Plain and simple.",
    image: baseURI + "klaus.jpg",
  },
  {
    Name: "Melissa Graetz",
    Text:
      "For most part of my life I was not very fond of coffee, CP convinced me otherwise and now I drink coffee on a daily basis.",
    image: baseURI + "melissa.jpg",
  },
  {
    Name: "Philip Shepherd",
    Text:
      "Although my English is not very good, I know how to describe CP: My life",
    image: baseURI + "philip.jpg",
  },
  {
    Name: "Mister Fitz",
    Text:
      "There are plenty of coffee brands out there, but just one sticks out to me - Coffeephilia",
    image: baseURI + "fitz.jpg",
  },
];

const testimonialsContainer = document.querySelector("#aficionados-container");

let count = 0;
let styleApplied = false;
function injectAficionados() {
  const newAficionadoDiv = document.createElement("div");
  const aficionadoName = document.createElement("h1");
  aficionadoName.innerText = aficionados[count].Name;
  const aficionadoText = document.createElement("p");
  aficionadoText.innerText = aficionados[count].Text;
  const aficionadoImage = document.createElement("img");
  aficionadoImage.src = aficionados[count].image;
  if(window.matchMedia("(max-width: 500px)").matches&&!styleApplied){
    console.log("Matches")
    // const mainSection = document.querySelector("")
   testimonialsContainer.style.width = "100%";
  //  testimonialsContainer.style.padding = "1rem";
   testimonialsContainer.style.display = "flex";
    testimonialsContainer.style.flexDirection = "column";
    newAficionadoDiv.style.display.margin = "0 auto"
    // newAficionadoDiv.style.display.margin = "0"
    styleApplied = true;
  }
  newAficionadoDiv.appendChild(aficionadoName);
  newAficionadoDiv.appendChild(aficionadoImage);
  newAficionadoDiv.appendChild(aficionadoText);
  newAficionadoDiv.classList = animationIn;
  testimonialsContainer.appendChild(newAficionadoDiv);
}





const navbar = document.body.querySelector("#nav-bar");
function navBarFlex ( ) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.left = "0";
    // navbar.style.borderBottom = "2px solid black"
};
function navBarDisappear() {
  navbar.style.position = "absolute";
  navbar.style.top = "0";
  navbar.style.left = "0";
}

function scrollUpAppear(){
  btnUp.style.display = "flex";
  scrollUpTrigger = true;
}

function scrollUpDisappear(){
  btnUp.style.display = "none";
  scrollUpTrigger = false;
}


let last_scroll_position = 0;
let moving = false;
let brandTriggered = false;
let aficionadosTriggered = false;
let navbarFixed = false;
let scrollUpTrigger = false;


function triggerInjection(scrollPosition) {
  if(scrollPosition>0&&!navbarFixed){
    navBarFlex();
    navbarFixed = true;
  }

  if(scrollPosition>600&&navbarFixed){
    navBarDisappear();
    navbarFixed = false;
  }
  

  if(scrollPosition >= 190 && !brandTriggered){
    brandBtns[0].click()
    brandTriggered = true;
  }

  if(scrollPosition < 1500 && scrollUpTrigger){scrollUpDisappear()
  }
  if(scrollPosition >= 1500 && !scrollUpTrigger){
      scrollUpAppear();
      scrollUpTrigger = true;
  }
  
  if(scrollPosition >= 2000 && !aficionadosTriggered){
    aficionadosTriggered = true;
const injectionInterval = setInterval(() => {
  injectAficionados();
  count += 1;
  if (count === aficionados.length) {
    clearInterval(injectionInterval);
  }
}, 1000);
  }
}

window.addEventListener("scroll", () => {
  last_scroll_position = window.scrollY;
  

  if (!moving) {
    window.requestAnimationFrame(() => {
      triggerInjection(last_scroll_position);
      moving = false;
    });
    moving = true;
  }
});

const btnUp = document.body.querySelector("#btn-up-container")
btnUp.addEventListener("click", () => scrollTo(0,0))
