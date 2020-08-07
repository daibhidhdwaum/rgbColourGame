const rgbGame = {};

// grab elements from the dom
rgbGame.easyButton = document.querySelector(".easy");
rgbGame.hardButton = document.querySelector(".hard");

// initialize array to store colors
rgbGame.colourArray = [
  { id: 1, colour: null },
  { id: 2, colour: null },
  { id: 3, colour: null },
  { id: 4, colour: null },
  { id: 5, colour: null },
  { id: 6, colour: null },
];
rgbGame.card;

// function to determine colours
rgbGame.colourGenerator = () => {
  // create variables to store colour values
  const colourValues = [
    { value: null, colour: "red" },
    { value: null, colour: "green" },
    { value: null, colour: "blue" },
  ];

  const assignedValues = colourValues.map((colour) => {
    const randomNumber = Math.floor(Math.random() * 256);
    return randomNumber;
  });

  return assignedValues;
};

rgbGame.colourCardTemplate = () => {
  rgbGame.card = `<div></div>`;
  return rgbGame.card;
};

// for each colour block randomly generate 3 numbers between 0 and 255
rgbGame.assignColours = () => {
  console.log(rgbGame.colourArray);
  rgbGame.colourArray.forEach((colour) => {
    const newColour = rgbGame.colourGenerator();
    colour.colour = newColour;
  });
};
// push the colour to the array

// function to choose random color from array

// store randomly chosen colour in a variable

// grab dom element and dislpay the image to the player

// on click function
// determine of the colour clicked matches the colour that is requested

// function to determine the maximum length of the array (3 or 6)
// rgbGame.difficulty = () => {
//   document.addEventListener("click", () => {
//     if (event.target.matches(".easy")) {
//     } else if (event.target.matches(".hard")) {
//     }
//   });
// };

// function to generate new colours

const init = () => {
  rgbGame.colourGenerator();
  //   rgbGame.difficulty();
  rgbGame.assignColours();
  console.log(rgbGame.colourArray);
};

init();
