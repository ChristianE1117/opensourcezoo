let gameTops = null;
let gameBottoms = null;
let head = null;
let par = null;

if (typeof document !== 'undefined') {
    gameTops = document.querySelectorAll('.gameT');
    gameBottoms = document.querySelectorAll('.gameB');
    head = document.getElementById('correctHead');
    par = document.getElementById('correctPar');

    gameTops.forEach(game => {
    game.addEventListener('click', () => {
            colorTopItems(game);
    })
    });

    gameBottoms.forEach(game => {
    game.addEventListener('click', () => {
            colorBottomItems(game);
    })
    });
}

let topSelected = '';
let bottomSelected = '';



function colorTopItems(selected)
{
    gameTops.forEach(game => {
    game.style.backgroundColor = '#2196F3';
    });

    selected.style.backgroundColor = 'lightblue';
    topSelected = selected;

    head.innerHTML = 'Animal Habitat Matching Game';
    par.innerHtml = 'Match the animal to its proper habitat to learn more about them.';

    let answer = answerCheck(topSelected.id, bottomSelected.id);

    if (answer === true)
    {
        correctAnswer(topSelected, bottomSelected);
    }
};



function colorBottomItems(selected)
{
    gameBottoms.forEach(game => {
    game.style.backgroundColor = '#2196F3';
    });

    selected.style.backgroundColor = 'lightblue';
    bottomSelected = selected;

    let answer = answerCheck(topSelected.id, bottomSelected.id);

    if (answer === true)
    {
        correctAnswer(topSelected, bottomSelected);
    }
};

function answerCheck(topSelect, bottomSelect)
{
    let result = false;

    if (typeof document !== 'undefined')
    {
        head.innerHTML = 'Animal Habitat Matching Game';
        par.innerHTML = 'Match the animal to its proper habitat to learn more about them.';
    }

    // Penguin
    if (topSelect === 'topGame1' && bottomSelect === 'bottomGame5')
    {
        if (typeof document !== 'undefined')
        {
            head.innerHTML = 'Penguin';
            par.innerHTML = "Of the 18 species of penguins, all but one species of penguin (the Galapagos penguin) live in the Southern Hemisphere, and around ten live either in the Antarctic or in the sub-Antarctic. ";
        }
        result = true;
    }
    // Ocelot
    else if(topSelect === 'topGame2' && bottomSelect === 'bottomGame1')
    {
        if (typeof document !== 'undefined')
        {
            head.innerHTML = 'Ocelot';
            par.innerHTML = "Ocelots live in tropical rainforests, savannas, thorn forests, and mangrove swamps. These cats prefer living in dense vegetation, as it provides them with additional cover to stalk prey. They can occasionally be seen hunting in open areas.";
        }
        result = true;
    }
    // Rhino
    else if(topSelect === 'topGame3' && bottomSelect === 'bottomGame4')
    {
        if (typeof document !== 'undefined')
        {
            head.innerHTML = 'Rhino';
            par.innerHTML = "Rhinoceroses are native to Subharan Africa, Southeast Asia, Indian subcontinent, depending on their species. They live in a variety of habitats, including tropical and subtropical grasslands, savannas and shrublands, tropical moist forests, and deserts and xeric shrublands.";
        }
        result = true;
    }
    // Black Bear
    else if(topSelect === 'topGame4' && bottomSelect === 'bottomGame3')
    {
        if (typeof document !== 'undefined')
        {
            head.innerHTML = 'Black Bear';
            par.innerHTML = "Black bears can be found in a variety of habitats across North America from Canada to Mexico. They predominantly live in forests, where they can find ample food, water, shelter, and protection. Black bears tend to thrive in rugged, high-elevation terrain, like mountain ranges.";
        }
        result = true;
    }
    // Camel
    else if(topSelect === 'topGame5' && bottomSelect === 'bottomGame6')
    {
        if (typeof document !== 'undefined')
        {
            head.innerHTML = 'Camel';
            par.innerHTML = "Bactrian camels live in Central Asia, while dromedary camels live in North Africa and the Middle East. Wild bactrian camels live in south Mongolia and northern China. They are all typically found in desert regions, although they may also live in other similar environments like prairies.";
        }
        result = true;
    }
    // Orca
    else if(topSelect === 'topGame6' && bottomSelect === 'bottomGame2')
    {
        if (typeof document !== 'undefined')
        {
            head.innerHTML = 'Orca Whale';
            par.innerHTML = "The killer whale has a patchy distribution in all oceans, from the polar ice caps to the Equator, where large prey such as tuna, salmon, and seals are abundant. Other food sources are squids, sea lions, penguins, whales, and porpoises. In the North Pacific several populations live along the Alaskan coast, in the intracoastal waterways of British Columbia and Washington, and off the coast of Baja California. In the North Atlantic they can be found from the waters off Newfoundland and Labrador to Iceland, Norway, and the British Isles. In the Southern Hemisphere killer whales can be seen off the coasts of Argentina, South Africa, New Zealand, and the Galapagos Islands.";
        }
        
        result = true;
    }

    return result;
};

function correctAnswer(top, bottom)
{
    top.style.backgroundColor = "green";
    bottom.style.backgroundColor = "green";

    top.classList.add("correct");
    bottom.classList.add("correct");
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { answerCheck };
}