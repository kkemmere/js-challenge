import Claim from "./Claim.js";

const claim1 = new Claim("John Doe", "Specialist", 1100);

const claim2 = new Claim("Jane Doe", "Primary", 100);

const claim3 = new Claim("Joe Johnson", "Emergency", 31000);

const claim4 = new Claim("Sharon Smith", "Emergency", 1300);

const claim5 = new Claim("Steve Wright", "Primary", 770);

let claimArray = [claim1, claim2, claim3, claim4, claim5];

export default claimArray;
