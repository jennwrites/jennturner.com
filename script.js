// 1. Specify the total number of favicons in your folder
const totalFavicons = 37; 

// 2. Generate a random integer between 1 and your total number
const randomNumber = Math.floor(Math.random() * totalFavicons) + 1;

// 3. Target the link tag and swap the path
const favicon = document.getElementById('dynamic-favicon');
favicon.href = `favicons/{randomNumber}.png`;

