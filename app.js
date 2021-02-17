"use strict";

let currentCharacterName = document.querySelector('.CharacterName').value;
let currentRaceSelect = document.querySelector(".myRace");
let currentClassSelect = document.querySelector(".myClass");

/*
document.querySelector('.ok').addEventListener('click', function() {
    currentCharacterName = document.querySelector('.CharacterName').value;
    
    console.log(`Olá ${currentCharacterName}, você é um ${currentRaceSelect.value} ${currentClassSelect.value} `);
    switchRace();
}); 
*/


function switchRace() {
    switch(currentRaceSelect.value) {
        case "human":
            document.querySelector('.humanStatus').style.display ="block";
            document.querySelector('.dwarfStatus').style.display ="none";
            document.querySelector('.elfStatus').style.display ="none";
            document.querySelector('.halflingStatus').style.display ="none";
        break;

        case "dwarf":
            document.querySelector('.humanStatus').style.display ="none";
            document.querySelector('.dwarfStatus').style.display ="block";
            document.querySelector('.elfStatus').style.display ="none";
            document.querySelector('.halflingStatus').style.display ="none";
        break;

        case "elf":
            document.querySelector('.humanStatus').style.display ="none";
            document.querySelector('.dwarfStatus').style.display ="none";
            document.querySelector('.elfStatus').style.display ="block";
            document.querySelector('.halflingStatus').style.display ="none";
        break;

        case "halfling":
            document.querySelector('.humanStatus').style.display ="none";
            document.querySelector('.dwarfStatus').style.display ="none";
            document.querySelector('.elfStatus').style.display ="none";
            document.querySelector('.halflingStatus').style.display ="block";
        break;
    }
}