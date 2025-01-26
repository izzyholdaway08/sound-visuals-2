// Variables for sounds and animations
let sound1, sound2, sound3, sound4, sound5, sound6;

function preload() {
  sound1 = loadSound('isabelle sound 15.mp3');
  sound2 = loadSound('isabelle sound 16.mp3');
  sound3 = loadSound('isabelle sound 32.mp3');
  sound4 = loadSound('isabelle sound 8.mp3'); // Replace with actual file
  sound5 = loadSound('isabelle sound 6.mp3'); // Replace with actual file
  sound6 = loadSound('isabelle sound 14.mp3'); // Replace with actual file
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(40);

  // Display text only when no sound is playing
  if (!sound1.isPlaying() && !sound2.isPlaying() && !sound3.isPlaying() && !sound4.isPlaying() && !sound5.isPlaying() && !sound6.isPlaying()) {
    fill(255);
    textAlign(CENTER);
    textSize(15);
    text("Press Q to play Sound 1", width / 2, height / 2);
    text("Press A to play Sound 2", width / 2, height / 2 + 30);
    text("Press W to play Sound 3", width / 2, height / 2 + 60);
    text("Press E to play Sound 4", width / 2, height / 2 + 90);
    text("Press R to play Sound 5", width / 2, height / 2 + 120);
    text("Press T to play Sound 6", width / 2, height / 2 + 150);
  }

  // Sound 1 Animation
  if (sound1.isPlaying()) {
    let j = map(sound1.currentTime(), 0, sound1.duration(), 0, height);
    fill(105, 100);
    rect(0, 0, width / 3, j);
  }

  // Sound 2 Animation
  if (sound2.isPlaying()) {
    let x = map(sound2.currentTime(), 0, sound2.duration(), 0, width);
    fill(135, 100);
    rect(width / 3, height / 2, x, 20);
  }

  // Sound 3 Animation
  if (sound3.isPlaying()) {
    let l = map(sound3.currentTime(), 0, sound3.duration(), 0, height);
    fill(165, 100);
    rect((2 * width) / 3, 0, width / 3, l);
  }

  // Sound 4 Animation (circular expansion)
  if (sound4.isPlaying()) {
    let m = map(sound4.currentTime(), 0, sound4.duration(), 0, height);
    fill(195, 100);
    ellipse(width / 2, height / 2, m, m);
  }

  // Sound 5 Animation (horizontal expanding bar)
  if (sound5.isPlaying()) {
    let n = map(sound5.currentTime(), 0, sound5.duration(), 0, width);
    fill(225, 100);
    rect(width / 4, height / 4, n, 30);
  }

  // Sound 6 Animation (growing rectangle)
  if (sound6.isPlaying()) {
    let o = map(sound6.currentTime(), 0, sound6.duration(), 0, width);
    fill(255, 150, 150);
    rect(width / 2 - o / 2, height / 2 - o / 2, o, o);
  }
}

function keyPressed() {
  if (key == 'q') sound1.play();
  if (key == 'a') sound2.play();
  if (key == 'w') sound3.play();
  if (key == 'e') sound4.play();
  if (key == 'r') sound5.play();
  if (key == 't') sound6.play();
}

