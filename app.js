const rgbGame = {};

// grab elements from the dom

// initialize array to store colors
rgbGame.colourArray = [];

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

// for each colour block randomly generate 3 numbers between 0 and 255

// push the colour to the array

// function to choose random color from array

// store randomly chosen colour in a variable

// grab dom element and dislpay the image to the player

// on click function
// determine of the colour clicked matches the colour that is requested

// function to determine the maximum length of the array (3 or 6)

// function to generate new colours

const init = () => {
  rgbGame.colourGenerator();
};

init();
