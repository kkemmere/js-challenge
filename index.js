import Claim from "./components/Claim.js";
import claimArray from "./components/claimdata.js";

const claim6 = new Claim("Kevin K", "Specialist", 1200);
const claim7 = new Claim("Bob Joe", "Emergency", 2000);
const claim8 = new Claim("Joe John", "Primary", 800);
const claim9 = new Claim("John Swift", "Primary", 200);
const claim10 = new Claim("Michael Smith", "Emergency", 1200);

claimArray.push(claim6, claim7, claim8, claim9, claim10);

const percentageFunc = (Claim) => {
  let ourDept = Claim.type;
  let percentageVal = 0;

  switch (ourDept) {
    case "Specialist":
      percentageVal = 0.1;
      break;
    case "Emergency":
      percentageVal = 0.1;
      break;
    case "Primary":
      percentageVal = 0.5;
      break;
    case "Optical":
      percentageVal = 0.0;
      break;
  }

  return percentageVal;
};

const amountCovered = (percentage, cost) => {
  return Math.round(percentage * cost);
};

// Callback function passing in percentageFunc straight to amountCovered function
const claimAmount = (Claim) => {
  let temp = amountCovered(percentageFunc(Claim), Claim.cost);
  return `paid out $${temp} for ${Claim.patientName}`;
};

const content = claimArray.map((Claim) => {
  let claimArticle = document.createElement("article");
  claimArticle.classList.add("claim");

  claimArticle.innerHTML = `
  <h1 class="patient_name">${Claim.patientName}</h1>
    <ul class="additional_info">
        <li class="info patient_seeing">This patient went to see: ${
          Claim.type
        }</li>
        <li class="info patient_cost">Total cost of visit: $${Claim.cost}</li>
        <li class="info patient_covered"> Insurance ${claimAmount(Claim)}</li>
    </ul>
  `;

  return claimArticle;
});

let main = document.querySelector("main");

content.forEach((Claim) => {
  main.append(Claim);
});
