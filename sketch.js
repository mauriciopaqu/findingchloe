let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10;
let img11, img12, img13, img14, img15, img16, img17, img18, img19, img20;
let img21, img22, img23, img24, img25, img26, img27, img28, img29, img30;
let img31, img32, img33, img34;
let gameState = "motel";
let doorClicked = null;
let doors = [];
let message = "";



function preload() {
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
  musicbSound = loadSound("musicb.mp3")
  
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
  img21 = loadImage("f1.png"); // Figure 1
  img22 = loadImage("f2.png"); // Figure 2
  img23 = loadImage("f3.png"); // Figure 3
  img24 = loadImage("f4.png"); // Figure 4
  img25 = loadImage("f5.png"); // Figure 5
  img26 = loadImage("f6.png"); // Figure 6
  img27 = loadImage("f7.png"); // Figure 7
  img28 = loadImage("f8.png"); // Figure 8
  img29 = loadImage("f9.png"); // Figure 9
  img30 = loadImage("f10.png"); // Figure 10
  img31 = loadImage("f11.png"); // Figure 11
  img32 = loadImage("f12.png"); // Figure 12
  img33 = loadImage("office.png"); // Door 17
  img34 = loadImage("phone.png"); // Door 18
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
    image(img1, 0, 0, width, height);
    
    

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
} else if (gameState === "doorScene") {
    background(50);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(`You entered door ${doorClicked + 1}`, width / 2, height / 2);

    // Show specific images based on the door clicked
    if (doorClicked === 1) {  // Door 2 (index 1)
      image(img20, 0, 0, width, height);  // Room background
      image(img21, 200, 100);  // Figure 1 (f1.png)
      text("WHAT IS THAT?! \nIt is saying: LEAVE", width / 2, height - 50);
    } else if (doorClicked === 2) {  // Door 3 (index 2)
      image(img20, 0, 0, width, height);  // Room background
      image(img22, 300, 150);  // Figure 2 (f2.png)
      text("Is that a calamar? \nIt says: She's looking you.", width / 2, height - 50);
    } else if (doorClicked === 3) {  // Door 4 (index 3)
      image(img20, 0, 0, width, height);  // Room background
      image(img23, 250, 100);  // Figure 3 (f3.png)
      text("What are they doing? \n They are asking me to call a number: 433", width / 2, height - 50);
    } else if (doorClicked === 4) {  // Door 5 (index 4)
      image(img20, 0, 0, width, height);  // Room background
      image(img24, 250, 100);  // Figure 4 (f4.png)
      text("Those birds are huge. They gave me a note that says: \nLook for the moon man.", width / 2, height - 50);
    } else if (doorClicked === 5) {  // Door 6 (index 5)
      image(img20, 0, 0, width, height);  // Room background
    } else if (doorClicked === 6) {  // Door 7 (index 6)
      image(img20, 0, 0, width, height);  // Room background
    } else if (doorClicked === 7) {  // Door 8 (index 7)
      image(img20, 0, 0, width, height);  // Room background
      image(img25, 250, 100);  // Figure 5 (f5.png)
      text("This room smells like death. That thing asks me to leave", width / 2, height - 50);
    } else if (doorClicked === 8) {  // Door 9 (index 8)
      image(img20, 0, 0, width, height);  // Room background
      image(img26, 250, 100);  // Figure 6 (f6.png)
      text(" A doctor. He is says:\nBreaking bones, like you break her heart.", width / 2, height - 50);
    } else if (doorClicked === 9) {  // Door 10 (index 9)
      image(img20, 0, 0, width, height);  // Room background
      image(img27, 250, 100);  // Figure 7 (f7.png)
      text("What a creepy clown… He gave me a note: Call me maybe 699 xoxo", width / 2, height - 50);
    } else if (doorClicked === 10) {  // Door 11 (index 10)
      image(img20, 0, 0, width, height);  // Room background
      image(img28, 250, 100);  // Figure 8 (f8.png)
      text("What… she is saying:\nOh dear. You didn't got for her birthday, but you here.\nShe's right. I regret it Chloe.", width / 2, height - 50);
    } else if (doorClicked === 11) {  // Door 12 (index 11)
      image(img20, 0, 0, width, height);  // Room background
      image(img29, 250, 100);  // Figure 9 (f9.png)
      text("Those things are coming closer. There's is a note in their belly button:\n999",width / 2, height - 50);
    } else if (doorClicked === 12) {  // Door 13 (index 12)
      image(img20, 0, 0, width, height);  // Room background
      image(img30, 250, 100);  // Figure 10 (f10.png)
      text("What is that thing? It doesn't talk but i feel what it says:\nYou need to stop doing it. Help her.", width / 2, height - 50);
    } else if (doorClicked === 13) {  // Door 14 (index 13)
      image(img20, 0, 0, width, height);  // Room background
    } else if (doorClicked === 14) {  // Door 15 (index 14)
      image(img20, 0, 0, width, height);  // Room background
      image(img31, 250, 100);  // Figure 11 (f11.png)
      text("That weird lady says:\nI love turning sounds into music.\nBut you… Do you love turning yourself into dust?", width / 2, height - 50);
    } else if (doorClicked === 15) {  // Door 16 (index 15)
      image(img20, 0, 0, width, height);  // Room background
      image(img32, 250, 100);  // Figure 12 (f12.png)
      text("An astronaut. The moon man. He says:\n111. Call for help to get our of here and find her.", width / 2, height - 50);
    } else if (doorClicked === 16) {  // Door 17 (index 16)
      image(img33, 0, 0);  // Office image (img33)
      text("It's empty, but there's a note that says:\nCall our numbers for more information.", width / 2, height - 50);
    } else if (doorClicked === 17) {  // Door 18 (index 17)
      image(img34, 0, 0);  // Phone image (img34)
      text("Press the numbers and press call", width / 2, height - 50);
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

}

let currentRoomSound = null; // Variable para rastrear el sonido actual

function mousePressed() {
  if (gameState === "motel") {
    for (let i = 0; i < doors.length; i++) {
      if (isMouseOver(doors[i])) {
        doorClicked = i;

        if (i === 0 || i === 5 || i === 6 || i === 13) {
          message = "The lock is broken. Looks like I cannot get in.";
          doorLockedSound.play(); // Sonido de puerta bloqueada
          doorClicked = null; // Evitar cambio de escena
        } else if (i === 16) {  // Door 17 (office)
          doorOpenSound.play(); // Sonido de puerta abierta
          gameState = "doorScene";
          currentRoomSound = null; // Reset sound
          playRoomSound(i); // Play sound for door 17
        } else if (i === 17) {  // Door 18 (phone)
          doorOpenSound.play(); // Sonido de puerta abierta
          gameState = "doorScene";
          currentRoomSound = null; // Reset sound
          playRoomSound(i); // Play sound for door 18
        } else {
          doorOpenSound.play(); // Sonido de puerta abierta
          gameState = "doorScene"; // Cambia al estado de la habitación
          playRoomSound(i); // Reproduce el sonido de la habitación inmediatamente
        }
      }
    }
  } else if (gameState === "doorScene") {
    if (mouseX >= 20 && mouseX <= 120 && mouseY >= 20 && mouseY <= 60) {
      stopAllRoomSounds(); // Detener todos los sonidos al salir de la habitación
      gameState = "motel"; // Regresar al menú del motel
      message = ""; // Limpiar mensaje
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
      currentRoomSound = sickSound;
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

// 2. Función para detener todos los sonidos de las habitaciones
function stopAllRoomSounds() {
  let allSounds = [
    insectSound, breakingSound, crySound, squeakSound, zombieSound,
    legBreakSound, sickSound, instrumentSound, sewingSound,
    vortexSound, music2Sound, lipSound
  ];

  allSounds.forEach(sound => {
    if (sound.isPlaying()) {
      sound.stop(); // Detener cualquier sonido en reproducción
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