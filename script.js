// Write your JavaScript code here!

//Validation code
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("The Fuel Level and Cargo Mass fields need to be numbers")
         event.preventDefault();
      }
      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("All fields are required!");
         event.preventDefault();
      }

      if (fuelLevelInput.value < 10000) {
         //faultyitems to visable 
         document.getElementById("faultyItems").style.visibility = "visible"
         //status: not enough fuel for journey
         let fuelStatus = "Not enough fuel for the journey"
         //h2 element launch status "Shuttle not ready for launch"
         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Shuttle not ready for launch";
         //h2 element change to red
         document.getElementById("launchStatus").style.color = "red";
      }
   });




   


});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
