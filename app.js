"use strict";

let currentCharacterName = document.querySelector('.CharacterName').value;
let currentRaceSelect = document.querySelector(".myRace");
let currentClassSelect = document.querySelector(".myClass");
let raceFor = 0;
let raceDes = 0;
let raceCon = 0;
let raceSab = 0;
let raceInt = 0;
let raceCar = 0;
let currentFor = document.querySelector(".for").value;
let currentDes = document.querySelector(".des").value;
let currentCon = document.querySelector(".con").value;
let currentSab = document.querySelector(".sab").value;
let currentInt = document.querySelector(".int").value;
let currentCar = document.querySelector(".car").value;




/*
document.querySelector('.ok').addEventListener('click', function() {
    currentCharacterName = document.querySelector('.CharacterName').value;
    
    console.log(`Olá ${currentCharacterName}, você é um ${currentRaceSelect.value} ${currentClassSelect.value} `);
    switchRace();
}); 
*/

function modifiers(value) {
    switch(value) {
        case 1:
            return -5;
        break;
        case 2:
            return -4;
        break;
        case 3:
            return -4;
        break;
        case 4:
            return -3;
        break;
        case 5:
            return -3;
        break;
        case 6:
            return -2;
        break;
        case 7:
            return -2;
        break;
        case 8:
            return -1;
        break;
        case 9:
            return -1;
        break;
        case 10:
            return 0;
        break;
        case 11:
            return 0;
        break;
        case 12:
            return 1;
        break;
        case 13:
            return 1;
        break;
        case 14:
            return 2;
        break;
        case 15:
            return 2;
        break;
        case 16:
            return 3;
        break;
        case 17:
            return 3;
        break;
        case 18:
            return 4;
        break;
        case 19:
            return 4;
        break;
        case 20:
            return 5;
        break;
        case 21:
            return 5;
        break;
        case 22:
            return 6;
        break;
        case 23:
            return 6;
        break;
        case 24:
            return 7;
        break;
        case 25:
            return 7;
        break;
        case 26:
            return 8;
        break;
        case 27:
            return 8;
        break;
        case 28:
            return 9;
        break;
        case 29:
            return 9;
        break;

    }
}

function updateMod() {
    currentFor = document.querySelector(".for").value;
    document.querySelector(".forMod").value = modifiers(currentFor);
    console.log(currentFor);
}
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

function switchClass() {
    switch(currentClassSelect.value) {
        case "hda":
            document.querySelector('.hdaStatus').style.display ="block";
            document.querySelector('.mageStatus').style.display ="none";
            document.querySelector('.clericStatus').style.display ="none";
            document.querySelector('.thiefStatus').style.display ="none";
        break;

        case "mage":
            document.querySelector('.hdaStatus').style.display ="none";
            document.querySelector('.mageStatus').style.display ="block";
            document.querySelector('.clericStatus').style.display ="none";
            document.querySelector('.thiefStatus').style.display ="none";
        break;

        case "cleric":
            document.querySelector('.hdaStatus').style.display ="none";
            document.querySelector('.mageStatus').style.display ="none";
            document.querySelector('.clericStatus').style.display ="block";
            document.querySelector('.thiefStatus').style.display ="none";
        break;

        case "thief":
            document.querySelector('.hdaStatus').style.display ="none";
            document.querySelector('.mageStatus').style.display ="none";
            document.querySelector('.clericStatus').style.display ="none";
            document.querySelector('.thiefStatus').style.display ="block";
        break;
    }
}