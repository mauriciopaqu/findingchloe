let images = [];
let gameState = "motel";
let doorClicked = null;
let doors = [];
let message = "";
let x = 0; // Initial x-position of the character
let y = 300; // Fixed y-position of the character
let speed = 5; // Speed of movement




function preload() {
    doorOpenSound = loadSound("dooropen.mp3");
  doorLockedSound = loadSound("doorlocked.mp3");
  insectSound = loadSound("insects.mp3");
  breakingSound = loadSound("breaking.mp3");
  crySound = loadSound("cry.mp3");
  squeakSound = loadSound("squeak.mp3");
  zombieSound = loadSound("zombie.mp3");
  legBreakSound = loadSound("legbreak.mp3");
  laughSound = loadSound("laugh.mp3");
  instrumentSound = loadSound("instrument.mp3");
  sewingSound = loadSound("sewing.mp3");
  vortexSound = loadSound("vortex.mp3");
  music2Sound = loadSound("music2.mp3");
  lipSound = loadSound("lip.mp3");
  musicbSound = loadSound("musicb.mp3")
  call1Sound = loadSound("111.mp3")
  call2Sound = loadSound("433.mp3")
  call3Sound = loadSound("699.mp3")
  call4Sound = loadSound("999.mp3")
  
    let imageFiles = [
        "MOTEL.png", "h1.png", "h2.png", "h3.png", "h4.png",
        "h5.png", "h6.png", "h7.png", "h8.png", "h9.png",
        "h10.png", "h11.png", "h12.png", "h13.png", "h14.png",
        "h15.png", "h16.png", "hoffice.png", "hphone.png", 
        "Room.png", "f1.png", "f2.png", "f3.png", "f4.png",
        "f5.png", "f6.png", "f7.png", "f8.png", "f9.png",
        "f10.png", "f11.png", "f12.png", "office.png", "phone.png"
    ];
      // Load images into the images array
    for (let i = 0; i < imageFiles.length; i++) {
        images[i] = loadImage(imageFiles[i]);
    }

}

function setup() {
  createCanvas(1024, 768);
  textSize(18);
  
  

 // Set the volume to a lower level (e.g., 0.3) and start looping the background music
  musicbSound.setVolume(0.2);
  musicbSound.loop();  // Play the music in loop mode
  
  
  
  doors = [
    { x: 718, y: 580, w: 43, h: 92 }, // Door 1
    { x: 400, y: 580, w: 43, h: 92 }, // Door 2
    { x: 300, y: 580, w: 43, h: 92 }, // Door 3
    { x: 718, y: 443, w: 43, h: 92 }, // Door 4
    { x: 601, y: 443, w: 43, h: 92 }, // Door 5
    { x: 400, y: 443, w: 43, h: 92 }, // Door 6
    { x: 300, y: 443, w: 43, h: 92 }, // Door 7
    { x: 718, y: 302, w: 43, h: 92 }, // Door 8
    { x: 601, y: 302, w: 43, h: 92 }, // Door 9
    { x: 400, y: 302, w: 43, h: 92 }, // Door 10
    { x: 300, y: 302, w: 43, h: 92 }, // Door 11
    { x: 300, y: 164, w: 43, h: 92 }, // Door 12
    { x: 400, y: 164, w: 43, h: 92 }, // Door 13
    { x: 497, y: 164, w: 43, h: 92 }, // Door 14
    { x: 601, y: 164, w: 43, h: 92 }, // Door 15
    { x: 718, y: 164, w: 50, h: 92 }, // Door 16
    { x: 600, y: 600, w: 60, h: 100 }, // Door 17
    { x: 910, y: 550, w: 50, h: 120 }  // Door 18
  ];
  
  
}

function draw() {
  background(0);

  if (gameState === "motel") {
        image(images[0], 0, 0, width, height); // Display the first image (MOTEL.png)
    
    
    

    for (let i = 0; i < doors.length; i++) {
      if (isMouseOver(doors[i])) {
        highlightDoor(i);
      }
    }

    if (message !== "") {
      fill(255);
      textAlign(CENTER);
      textSize(24);
      text(message, width / 2, height - 50);
      
      
    }
    
            // Help Button
    fill("rgb(57,68,49)");
    rect(900, 20, 100, 40);  // Position and size of the help button
    fill(0);
    textFont("Times New Roman");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Help", 950, 40);  // Text for the help button
} else if (gameState === "doorScene") {
    background(50);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(`You entered door ${doorClicked + 1}`, width / 2, height / 2);

    // Show specific images based on the door clicked
    if (doorClicked === 1) {  // Door 2 (index 1)
      image(images[19], 0, 0, width, height);  // Room background
      image(images[20], 0, 0, width, height);  // Figure 1 (f1.png)
      text("WHAT IS THAT?! \nIt is saying: LEAVE", width / 2, height - 50);
    } else if (doorClicked === 2) {  // Door 3 (index 2)
      image(images[19], 0, 0, width, height);  // Room background
      image(images[21], 0, 0, width, height);  // Figure 2 (f2.png)
      text("Is that a calamar? \nIt says: She's looking you.", width / 2, height - 50);
    } else if (doorClicked === 3) {  // Door 4 (index 3)
      image(images[19], 0, 0, width, height);  // Room background
      image(images[22], 0, 0, width, height);  // Figure 3 (f3.png)
      text("What are they doing? \n They are asking me to call a number: 433", width / 2, height - 50);
    } else if (doorClicked === 4) {  // Door 5 (index 4)
      image(images[19], 0, 0, width, height);  // Room background
      image(images[23], 0, 0, width, height);  // Figure 4 (f4.png)
      text("Those birds are huge. They gave me a note that says: \nLook for the moon man.", width / 2, height - 50);
    } else if (doorClicked === 5) {  // Door 6 (index 5)
      image(images[19], 0, 0, width, height);  // Room background
    } else if (doorClicked === 6) {  // Door 7 (index 6)
      image(images[19], 0, 0, width, height);  // Room background
    } else if (doorClicked === 7) {  // Door 8 (index 7)
      image(images[19], 0, 0, width, height);  // Room background
      image(images[24], 0, 0, width, height);  // Figure 5 (f5.png)
      text("This room smells like death. That thing asks me to leave", width / 2, height - 50);
    } else if (doorClicked === 8) {  // Door 9 (index 8)
      image(images[19], 0, 0, width, height);  // Room background
      image(images[25], 0, 0, width, height);  // Figure 6 (f6.png)
      text(" A doctor. He is says:\nBreaking bones, like you break her heart.", width / 2, height - 50);
    } else if (doorClicked === 9) {  // Door 10 (index 9)
      image(images[19], 0, 0, width, height);  // Room background
 // Move the img19 (images[26]) from left to right for Door 10
x += speed;  // Move image horizontally by the speed
// Reset position if character goes off the screen
if (x > width) {
  x = -600;  // Start again from the left outside the screen
}
// Display img19 at the (x, y) position
image(images[26], x, 50, width, height);  // Use x for horizontal position
      text("What a creepy clown… He gave me a note:\nCall me maybe 699 xoxo", width / 2, height - 50);
    } else if (doorClicked === 10) {  // Door 11 (index 10)
      image(images[19], 0, 0, width, height);  // Room background
      image(images[27], 0, 0, width, height);  // Figure 8 (f8.png)
      text("What… she is saying:\nOh dear. You didn't got for her birthday, but you here.\nShe's right. I regret it Chloe.", width / 2, height - 50);
    } else if (doorClicked === 11) {  // Door 12 (index 11)
      image(images[19], 0, 0, width, height);  // Room background
// Move the img19 (images[28]) from left to right for Door 10
x += speed;  // Move image horizontally by the speed
// Reset position if character goes off the screen
if (x > width) {
  x = -800;  // Start again from the left outside the screen
}
// Display img19 at the (x, y) position
image(images[28], x,50, width, height);  // Use x for horizontal position
      text("Those things are coming closer. There's is a note in their belly button:\n999",width / 2, height - 50);
    } else if (doorClicked === 12) {  // Door 13 (index 12)
      image(images[19], 0, 0, width, height);    // Room background
      image(images[29], 0, 0, width, height);  // Figure 10 (f10.png)
      text("What is that thing? It doesn't talk but i feel what it says:\nYou need to stop doing it. Help her.", width / 2, height - 50);
    } else if (doorClicked === 13) {  // Door 14 (index 13)
      image(images[19], 0, 0, width, height);  // Room background
    } else if (doorClicked === 14) {  // Door 15 (index 14)
      image(images[19], 0, 0, width, height);  // Room background
      image(images[30], 0, 0, width, height);  // Figure 11 (f11.png)
      text("That weird lady says:\nI love turning sounds into music.\nBut you… Do you love turning yourself into dust?", width / 2, height - 50);
    } else if (doorClicked === 15) {  // Door 16 (index 15)
      image(images[19], 0, 0, width, height);  // Room background
      image(images[31], 0, 0, width, height);  // Figure 12 (f12.png)
      text("An astronaut. The moon man. He says:\n111. Call for help to get out of here and find her.", width / 2, height - 50);
    } else if (doorClicked === 16) {  // Door 17 (index 16)
      image(images[32], 0, 0, width, height);  // Office image (img32)
      text("It's empty, but there's a note that says:\nCall our numbers for more information.", width / 2, height - 50);
    }   if (doorClicked === 17) {
      image(images[33], 0, 0, width, height);
      text("Press the buttons to call", width / 2, height - 50);
// Call 111 Button
fill("rgb(57,68,49)"); 
rect(20, 100, 150, 40); // Fixed width and height
fill(0);
textFont("Times New Roman");
textSize(20);
textAlign(CENTER, CENTER);
text("Call 111", 95, 100 + 20); // Centered in the button

// Call 433 Button
fill("rgb(57,68,49)");
rect(20, 160, 150, 40); // Fixed width and height
fill(0);
text("Call 433", 95, 160 + 20); // Centered in the button

// Call 699 Button
fill("rgb(57,68,49)");  
rect(20, 220, 150, 40); // Fixed width and height
fill(0);
text("Call 699", 95, 220 + 20); // Centered in the button

// Call 999 Button
fill("rgb(57,68,49)");  
rect(20, 280, 150, 40); // Fixed width and height
fill(0);
text("Call 999", 95, 280 + 20); // Centered in the button
} 
    
    // Go Back Button
    fill("rgb(57,68,49)");
    rect(20, 20, 100, 40);
    fill(0);
    textFont("Times New Roman");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Go Back", 70, 40);
  
  
  }
// Function to play the corresponding sound
function callNumber(sound) {
  sound.play();
}

 
}

let currentRoomSound = null; // Variable para rastrear el sonido actual

function mousePressed() {
  if (gameState === "motel") {
    for (let i = 0; i < doors.length; i++) {
      if (isMouseOver(doors[i])) {
        doorClicked = i;

        if (i === 0 || i === 5 || i === 6 || i === 13) {
          message = "It's locked. Looks like I cannot get in.";
          doorLockedSound.play(); // Sonido de puerta bloqueada
          doorClicked = null; // Evitar cambio de escena
        } else if (i === 16) {  // Door 17 (office)
          doorOpenSound.play(); // Sonido de puerta abierta
          gameState = "doorScene";
          currentRoomSound = null; // Reset sound
          playRoomSound(i); // Play sound for door 17
        } else {
          doorOpenSound.play(); // Sonido de puerta abierta
          gameState = "doorScene"; // Cambia al estado de la habitación
          playRoomSound(i); // Reproduce el sonido de la habitación inmediatamente
              }
 
  
function mousePressed() {

}

}
          if (mouseX >= 900 && mouseX <= 1000 && mouseY >= 20 && mouseY <= 60) {
      window.open("https://studenthealth.ucf.edu/recovery/", "_blank"); // Replace with your URL
    }
    }
  } else if (gameState === "doorScene") {
    if (mouseX >= 20 && mouseX <= 120 && mouseY >= 20 && mouseY <= 60) {
      stopAllRoomSounds(); // Detener todos los sonidos al salir de la habitación
      gameState = "motel"; // Regresar al menú del motel
      message = ""; // Limpiar mensaje
    }
  }
  // Handle button clicks for Door 18 call buttons
  if (doorClicked === 17 && gameState === "doorScene") {
   stopAllRoomSounds(); // Ensure no other room sounds play
    if (mouseX > 20 && mouseX < 170) {
      if (mouseY > 100 && mouseY < 140) {
        call1Sound.play();  // Call 111 button
      } else if (mouseY > 160 && mouseY < 210) {
        call2Sound.play();  // Call 433 button
      } else if (mouseY > 220 && mouseY < 260) {
        call3Sound.play();  // Call 699 button
      } else if (mouseY > 280 && mouseY < 320) {
        call4Sound.play();  // Call 999 button
      }
    }
  }

}


// 1. Función para reproducir el sonido específico de la habitación
function playRoomSound(doorIndex) {
  stopAllRoomSounds(); // Asegura que no haya sonidos anteriores activos

  switch (doorIndex) {
    case 1:
      currentRoomSound = insectSound;
      break;
    case 2:
      currentRoomSound = breakingSound;
      break;
    case 3:
      currentRoomSound = crySound;
      break;
    case 4:
      currentRoomSound = squeakSound;
      break;
    case 7:
      currentRoomSound = zombieSound;
      break;
    case 8:
      currentRoomSound = legBreakSound;
      break;
    case 9:
      currentRoomSound = laughSound;
      break;
    case 10:
      currentRoomSound = instrumentSound;
      break;
    case 11:
      currentRoomSound = sewingSound;
      break;
    case 12:
      currentRoomSound = vortexSound;
      break;
    case 14:
      currentRoomSound = music2Sound;
      break;
    case 15:
      currentRoomSound = lipSound;
      break;
  }

  if (currentRoomSound) {
    currentRoomSound.loop(); // Reproduce el sonido seleccionado

}
}



function stopAllRoomSounds() {
  console.log("Stopping all sounds");  // Debugging log
  let allSounds = [
    insectSound, breakingSound, crySound, squeakSound, zombieSound,
    legBreakSound, laughSound, instrumentSound, sewingSound,
    vortexSound, music2Sound, lipSound, call1Sound, call2Sound, call3Sound, call4Sound
  ];

  allSounds.forEach(sound => {
    if (sound.isPlaying()) {
      sound.stop();
    }
  });
}



function isMouseOver(door) {
  return (
    mouseX > door.x &&
    mouseX < door.x + door.w &&
    mouseY > door.y &&
    mouseY < door.y + door.h
  );
}

function highlightDoor(index) {
  fill(255, 0, 0, 150); // Highlight color
  rect(doors[index].x, doors[index].y, doors[index].w, doors[index].h);
}