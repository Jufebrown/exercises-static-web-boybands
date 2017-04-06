const bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
const vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
const loopCount = 5;

// Keep track of which band we're on in the loop
let currentBand = "";

// Keep track of which veggie we're on in the loop
let currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
let bandElement = document.querySelector("#boy-bands");

// Get a reference to the appropriate DOM element for vegetables
let veggieElement = document.getElementById("vegetables");

// Start looping
for (let loopTracker = 0; loopTracker < bands.length; loopTracker += 1) {
  // Add the band names into the correct <div>
  let bandPara = document.createElement("p");
  currentBand = bands[loopTracker];
  bandPara.innerText = currentBand;
  bandElement.appendChild(bandPara);

  // Add the veggie names into the correct <div>
  let veggiePara = document.createElement("p");
  currentVeggie = vegetables[loopTracker];
  veggiePara.innerText = currentVeggie;
  veggieElement.appendChild(veggiePara);
}
