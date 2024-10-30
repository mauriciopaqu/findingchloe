let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10;
let img11, img12, img13, img14, img15, img16, img17, img18, img19, img20;
let img21, img22, img23, img24, img25, img26, img27, img28, img29, img30;
let img31, img32, img33, img34;
let gameState = "motel";
let doorClicked = null;
let doors = [];
let message = "";
let currentRoomSound = null; // Track the currently playing room sound
let phoneDialing = false; // State for the phone dialer
let dialedNumber = ""; // To keep track of dialed numbers

function preload() {
  // Load sounds
  doorOpenSound = loadSound("dooropen.mp3");
  doorLockedSound = loadSound("doorlocked.mp3");
  insectSound = loadSound("insects.mp3");
  breakingSound = loadSound("breaking.mp3");
  crySound = loadSound("cry.mp3");
  squeakSound = loadSound("squeak.mp3");
  zombieSound = loadSound("zombie.mp3");
  legBreakSound = loadSound("legbreak.mp3");
  sickSound = loadSound("sick.mp3");
  instrumentSound = loadSound("instrument.mp3");
  sewingSound = loadSound("sewing.mp3");
  vortexSound = loadSound("vortex.mp3");
  music2Sound = loadSound("music2.mp3");
  lipSound = loadSound("lip.mp3");
  musicbSound = loadSound("musicb.mp3");

  // Load images
  img1 = loadImage("MOTEL.png");
  img2 = loadImage("h1.png");
  img3 = loadImage("h2.png");
  img4 = loadImage("h3.png");
  img5 = loadImage("h4.png");
  img6 = loadImage("h5.png");
  img7 = loadImage("h6.png");
  img8 = loadImage("h7.png");
  img9 = loadImage("h8.png");
  img10 = loadImage("h9.png");
  img11 = loadImage("h10.png");
  img12 = loadImage("h11.png");
  img13 = loadImage("h12.png");
  img14 = loadImage("h13.png");
  img15 = loadImage("h14.png");
  img16 = loadImage("h15.png");
  img17 = loadImage("h16.png");
  img18 = loadImage("hoffice.png");
  img19 = loadImage("hphone.png");
  img20 = loadImage("Room.png");
  img21 = loadImage("f1.png");
  img22 = loadImage("f2.png");
  img23 = loadImage("f3.png");
  img24 = loadImage("f4.png");
  img25 = loadImage("f5.png");
  img26 = loadImage("f6.png");
  img27 = loadImage("f7.png");
  img28 = loadImage("f8.png");
  img29 = loadImage("f9.png");
  img30 = loadImage("f10.png");
  img31 = loadImage("f11.png");
  img32 = loadImage("f12.png");
  img33 = loadImage("office.png");
  img34 = loadImage("phone.png");
}

function setup() {
  createCanvas(1024, 768);
  textSize(18);

  // Set background music volume and loop it
  musicbSound.setVolume(0.2);
  musicbSound.loop();

  // Door coordinates and sizes
  doors = [
    { x: 718, y: 580, w: 43, h: 92 },
    { x: 400, y: 580, w: 43, h: 92 },
    { x: 300, y: 580, w: 43, h: 92 },
    { x: 718, y: 443, w: 43, h: 92 },
    { x: 601, y: 443, w: 43, h: 92 },
    { x: 400, y: 443, w: 43, h: 92 },
    { x: 300, y: 443, w: 43, h: 92 },
    { x: 718, y: 302, w: 43, h: 92 },
    { x: 601, y: 302, w: 43, h: 92 },
    { x: 400, y: 302, w: 43, h: 92 },
    { x: 300, y: 302, w: 43, h: 92 },
    { x: 300, y: 164, w: 43, h: 92 },
    { x: 400, y: 164, w: 43, h: 92 },
    { x: 497, y: 164, w: 43, h: 92 },
    { x: 601, y: 164, w: 43, h: 92 },
    { x: 718, y: 164, w: 50, h: 92 },
    { x: 600, y: 600, w: 60, h: 100 },
    { x: 910, y: 550, w: 50, h: 120 }
  ];
}

function draw() {
  background(0);

  if (gameState === "motel") {
    image(img1, 0, 0, width, height);

    for (let i = 0; i < doors.length; i++) {
      if (isMouseOver(doors[i])) highlightDoor(i);
    }

    if (message !== "") {
      fill(255);
      textAlign(CENTER);
      textSize(24);
      text(message, width / 2, height - 50);
    }
  } else if (gameState === "doorScene") {
    showRoom();
  } else if (gameState === "phoneDialer") {
    showPhoneDialer();
  }
}

function showRoom() {
  background(50);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text(`You entered door ${doorClicked + 1}`, width / 2, height / 2);

  // Display specific room content
  switch (doorClicked) {
    case 1:
      image(img20, 0, 0, width, height);
      image(img21, 200, 100);
      text("WHAT IS THAT?! \nIt is saying: LEAVE", width / 2, height - 50);
      break;
    case 17:
      image(img34, 0, 0);
      text("Press the numbers and press call", width / 2, height - 50);
      break;
    // Add other door cases as needed
  }

  // Go Back Button
  fill("rgb(57,68,49)");
  rect(20, 20, 100, 40);
  fill(0);
  textSize(20);
  text("Go Back", 70, 40);
}

function showPhoneDialer() {
  background(200);
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text("Phone Dialer", width / 2, 50);
  
  let buttonSize = 70;
  let xOffset = (width - buttonSize * 3) / 2;
  let yOffset = 100;

  // Create number buttons
  for (let i = 1; i <= 9; i++) {
    let x = xOffset + ((i - 1) % 3) * buttonSize;
    let y = yOffset + Math.floor((i - 1) / 3) * buttonSize;
    fill(255);
    rect(x, y, buttonSize, buttonSize);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(i, x + buttonSize / 2, y + buttonSize / 2);
  }

  // Create 0 button
  fill(255);
  rect(xOffset + buttonSize, yOffset + 3 * buttonSize, buttonSize, buttonSize);
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(0, xOffset + buttonSize + buttonSize / 2, yOffset + 3 * buttonSize + buttonSize / 2);

  // Create Call button
  fill(255);
  rect(xOffset + buttonSize * 2, yOffset + 3 * buttonSize, buttonSize, buttonSize);
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Call", xOffset + buttonSize * 2 + buttonSize / 2, yOffset + 3 * buttonSize + buttonSize / 2);

  // Go Back Button
  fill("rgb(57,68,49)");
  rect(20, 20, 100, 40);
  fill(0);
  textSize(20);
  text("Go Back", 70, 40);
}

function mousePressed() {
  if (gameState === "motel") {
    for (let i = 0; i < doors.length; i++) {
      if (isMouseOver(doors[i])) {
        handleDoorClick(i);
        break;
      }
    }
  } else if (gameState === "phoneDialer") {
    handleDialerClick();
  }
}

function isMouseOver(door) {
  return mouseX > door.x && mouseX < door.x + door.w && mouseY > door.y && mouseY < door.y + door.h;
}

function highlightDoor(index) {
  fill(255, 0, 0, 100);
  rect(doors[index].x, doors[index].y, doors[index].w, doors[index].h);
}

function handleDoorClick(index) {
  doorClicked = index;
  if (index === 1 || index === 6 || index === 7 || index === 14) {
    message = "The lock is broken. Looks like I cannot get in.";
    doorLockedSound.play();
  } else if (index === 17) {
    gameState = "phoneDialer"; // Change to phone dialer state
    dialedNumber = ""; // Reset the dialed number
  } else {
    gameState = "doorScene";
    doorOpenSound.play();
  }
}

function handleDialerClick() {
  let buttonSize = 70;
  let xOffset = (width - buttonSize * 3) / 2;
  let yOffset = 100;

  // Check if a number button was clicked
  for (let i = 1; i <= 9; i++) {
    let x = xOffset + ((i - 1) % 3) * buttonSize;
    let y = yOffset + Math.floor((i - 1) / 3) * buttonSize;
    if (mouseX > x && mouseX < x + buttonSize && mouseY > y && mouseY < y + buttonSize) {
      dialedNumber += i.toString();
      break;
    }
  }

  // Check if the 0 button was clicked
  if (mouseX > xOffset + buttonSize && mouseX < xOffset + buttonSize * 2 && mouseY > yOffset + 3 * buttonSize && mouseY < yOffset + 3 * buttonSize + buttonSize) {
    dialedNumber += "0";
  }

  // Check if the Call button was clicked
  if (mouseX > xOffset + buttonSize * 2 && mouseX < xOffset + buttonSize * 3 && mouseY > yOffset + 3 * buttonSize && mouseY < yOffset + 3 * buttonSize + buttonSize) {
    message = `Dialing: ${dialedNumber}`;
    // Add more functionality to handle calls as needed
    dialedNumber = ""; // Reset after calling
  }
}

function mousePressed() {
  if (gameState === "motel") {
    for (let i = 0; i < doors.length; i++) {
      if (isMouseOver(doors[i])) {
        handleDoorClick(i);
        break;
      }
    }
  } else if (gameState === "phoneDialer") {
    handleDialerClick();
  }
}

function isMouseOver(door) {
  return mouseX > door.x && mouseX < door.x + door.w && mouseY > door.y && mouseY < door.y + door.h;
}

function highlightDoor(index) {
  fill(255, 0, 0, 100);
  rect(doors[index].x, doors[index].y, doors[index].w, doors[index].h);
}

function handleDoorClick(index) {
  doorClicked = index;
  if (index === 1 || index === 6 || index === 7 || index === 14) {
    message = "The lock is broken. Looks like I cannot get in.";
    doorLockedSound.play();
  } else if (index === 17) {
    gameState = "phoneDialer"; // Change to phone dialer state
    dialedNumber = ""; // Reset the dialed number
  } else {
    gameState = "doorScene";
    doorOpenSound.play();
  }
}

function handleDialerClick() {
  let buttonSize = 70;
  let xOffset = (width - buttonSize * 3) / 2;
  let yOffset = 100;

  // Check if a number button was clicked
  for (let i = 1; i <= 9; i++) {
    let x = xOffset + ((i - 1) % 3) * buttonSize;
    let y = yOffset + Math.floor((i - 1) / 3) * buttonSize;
    if (mouseX > x && mouseX < x + buttonSize && mouseY > y && mouseY < y + buttonSize) {
      dialedNumber += i.toString();
      break;
    }
  }

  // Check if the 0 button was clicked
  if (mouseX > xOffset + buttonSize && mouseX < xOffset + buttonSize * 2 && mouseY > yOffset + 3 * buttonSize && mouseY < yOffset + 3 * buttonSize + buttonSize) {
    dialedNumber += "0";
  }

  // Check if the Call button was clicked
  if (mouseX > xOffset + buttonSize * 2 && mouseX < xOffset + buttonSize * 3 && mouseY > yOffset + 3 * buttonSize && mouseY < yOffset + 3 * buttonSize + buttonSize) {
    message = `Dialing: ${dialedNumber}`;
    // Add more functionality to handle calls as needed
    dialedNumber = ""; // Reset after calling
  }
}

function mousePressed() {
  if (gameState === "motel") {
    for (let i = 0; i < doors.length; i++) {
      if (isMouseOver(doors[i])) {
        handleDoorClick(i);
        break;
      }
    }
  } else if (gameState === "phoneDialer") {
    handleDialerClick();
  }
}
