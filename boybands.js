var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction", "Backstreet Boys", "O-Town"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash", "Potato", "Onion", "Green Pepper"];

// The number of loops to perform (what if the array changes?)
var bandCount = bands.length;
var veggieCount = vegetables.length;
// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < bandCount; loopTracker += 1) {
      
  // Add the band names into the correct <div>
  currentBand = bandElement.innerHTML += "<div>" + bands[loopTracker];
}
for (var loopTracker = 0; loopTracker < veggieCount; loopTracker += 1) {
  // // Add the veggie names into the correct <div>
  currentVeggie = veggieElement.innerHTML += "<div>" + vegetables[loopTracker];

}

// Loop through the two arrays provided (bands and vegetables)
//  and output each element in the arrays into their
//  corresponding HTML <div> element.
//  Ensure that each item is in a block element (e.g. li, div, p. etc...)