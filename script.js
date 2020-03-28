// Write your JavaScript code here!

//Validation code
window.addEventListener("load", function() {
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[2].name} </li>
               <li>Diameter: ${json[2].diameter}</li>
               <li>Star: ${json[2].star}</li>
               <li>Distance from Earth: ${json[2].distance}</li>
               <li>Number of Moons: ${json[2].moons}</li>
            </ol>
            <img src=${json[2].image} alt="planets">
         `
      })})


   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("Make sure to enter valid information for each field!")
         return;
      }

      if (!isNaN(pilotNameInput.value) || !isNaN(coPilotNameInput.value)){
         alert("Make sure to enter valid information for each field!")
         return;
      }

      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("All fields are required!");
         return;
      }

      let liPilot = document.getElementById("pilotStatus");
      liPilot.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`

      let liCoPilot = document.getElementById("copilotStatus");
      liCoPilot.innerHTML = `Co-pilot ${coPilotNameInput.value} is ready for launch`

      if (fuelLevelInput.value < 10000) {
         //faultyitems to visable 
         document.getElementById("faultyItems").style.visibility = "visible";
         //status: not enough fuel for journey

         let liFuelLevel = document.getElementById("fuelStatus");
         liFuelLevel.innerHTML = `Not enough fuel for journey`
         
         //h2 element launch status "Shuttle not ready for launch"
         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Shuttle not ready for launch";
         //h2 element change to red
         document.getElementById("launchStatus").style.color = "red";
      }

      if (cargoMassInput.value > 10000){
         //faultyitems to visable 
         document.getElementById("faultyItems").style.visibility = "visible";
         
         let liCargoMass = document.getElementById("cargoStatus");
         liCargoMass.innerHTML = `Too much mass for shuttle takeoff`

         //h2 element launch status "Shuttle not ready for launch"
         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Shuttle not ready for launch";
         //h2 element change to red
         document.getElementById("launchStatus").style.color = "red";

      }

      if (cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000){
         //is this needed?
         document.getElementById("faultyItems").style.visibility = "visible";

         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Shuttle is ready for launch";
         //h2 element change to red
         document.getElementById("launchStatus").style.color = "green";
      }
   });



});

