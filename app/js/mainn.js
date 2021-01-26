// Open Entry display and Reg display
const entryButton = document.querySelectorAll(".entry__button");
const entryDisplay = document.querySelector(".entry__display");

entryButton.forEach(element => element.onclick = function () {
    entryDisplay.style.display = 'block';
});


//
const regButton = document.querySelectorAll(".reg__button");
const regDisplay = document.querySelector(".reg__display");

regButton.forEach(element => element.onclick = function () {
    regDisplay.style.display = 'block';
});



// Close Entry display and Reg display
entryDisplay.onclick = function(event) {
    if ( event.target == entryDisplay ) {
        entryDisplay.style.display = 'none';
    };
};


const entryExitCross = document.querySelector(".entry__exit");

entryExitCross.onclick = function () {
    entryDisplay.style.display = 'none';
};


//
regDisplay.onclick = function(event) {
    if ( event.target == regDisplay ) {
        regDisplay.style.display = 'none';
    };
};


const regExitCross = document.querySelector(".reg__exit");

regExitCross.onclick = function () {
    regDisplay.style.display = 'none';
};





