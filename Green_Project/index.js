// Récupération des éléments boutons et paragraphes ainsi que élément à révéler
const eventButtonPara = document.querySelectorAll(".eventButtonPara");
const eventContentPara = document.querySelectorAll(".eventContentPara");
const revealElements = document.querySelectorAll(".reveal");

// Observateur d'insertion pour l'animation du scroll de l'article
const options = {
  root: null,
  rootMargin: "15px",
  threshold: 0.5,
};

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(handleIntersection, options);

eventButtonPara.forEach((button, index) => {
  button.addEventListener("click", () => {
    eventContentPara[index].classList.toggle("eventContentVisible");
    observer.observe(revealElements[index]);
  });
});

// Récupération des éléments images ainsi que que l'élément à révéler
const pictures = document.querySelectorAll(".picture");

// Affichage des images
const option = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

// Valeur du tableau Calendar
const calendar = {
  dayWeeks: [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche",
  ],
  openingRooms: ["07h00", "06h00", "08h00"],
  closingRooms: ["20h00", "22h00", "23h00"],
};
// Récupération des éléments HTML correspondant aux cellules du tableau
const mondayOpening = document.getElementById("mondayOpening");
const mondayClosing = document.getElementById("mondayClosing");
const tuesdayOpening = document.getElementById("tuesdayOpening");
const tuesdayClosing = document.getElementById("tuesdayClosing");
const wednesdayOpening = document.getElementById("wednesdayOpening");
const wednesdayClosing = document.getElementById("wednesdayClosing");
const thursdayOpening = document.getElementById("thursdayOpening");
const thursdayClosing = document.getElementById("thursdayClosing");
const fridayOpening = document.getElementById("fridayOpening");
const fridayClosing = document.getElementById("fridayClosing");
const saturdayOpening = document.getElementById("saturdayOpening");
const saturdayClosing = document.getElementById("saturdayClosing");
const sundayOpening = document.getElementById("sundayOpening");
const sundayClosing = document.getElementById("sundayClosing");

// Récupération des éléments HTML correspondant aux cellule du tableau
const dayOfWeekElems = document.querySelectorAll(".dayOfWeekElems");

// Affichage des jours de la semaine
// Affichage des heures d'ouvertures et de fermetures en fonction du jour de la semaine
for (let i = 0; i < calendar.dayWeeks.length; i++) {
  const dayOfWeek = calendar.dayWeeks[i];
  const dayOfWeekElem = dayOfWeekElems[i];
  dayOfWeekElem.innerHTML = dayOfWeek;

  let openingRooms;
  let closingRooms;

  if (dayOfWeek === "dimanche") {
    closingRooms = calendar.closingRooms[0];
    openingRooms = calendar.openingRooms[1];
  } else if (dayOfWeek === "vendredi" || dayOfWeek === "samedi") {
    closingRooms = calendar.closingRooms[2];
    openingRooms = calendar.openingRooms[2];
  } else {
    closingRooms = calendar.closingRooms[1];
    openingRooms = calendar.openingRooms[0];
  }

  switch (dayOfWeek) {
    case "lundi":
      mondayOpening.innerHTML = openingRooms;
      mondayClosing.innerHTML = closingRooms;
      break;
    case "mardi":
      tuesdayOpening.innerHTML = openingRooms;
      tuesdayClosing.innerHTML = closingRooms;
      break;
    case "mercredi":
      wednesdayOpening.innerHTML = openingRooms;
      wednesdayClosing.innerHTML = closingRooms;
      break;
    case "jeudi":
      thursdayOpening.innerHTML = openingRooms;
      thursdayClosing.innerHTML = closingRooms;
      break;
    case "vendredi":
      fridayOpening.innerHTML = openingRooms;
      fridayClosing.innerHTML = closingRooms;
      break;
    case "samedi":
      saturdayOpening.innerHTML = openingRooms;
      saturdayClosing.innerHTML = closingRooms;
      break;
    case "dimanche":
      sundayOpening.innerHTML = openingRooms;
      sundayClosing.innerHTML = closingRooms;
      break;
  }
}
