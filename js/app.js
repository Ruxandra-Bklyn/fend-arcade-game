// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/Drone1_120X120.png';
    // Take the position from the parameter
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  // Define the initial sprite to be used
  this.sprite = 'images/spaceship_rogue_120X120.png';
  // Take the position from the parameter
  this.x = x;
  this.y = y;
};

Player.prototype.update = function(dt) {
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function() {
};

// Now instantiate your objects.
let player = new Player(240, 600);

let enemy1 = new Enemy(-120, 120);
let enemy2 = new Enemy(-360, 120);
let enemy3 = new Enemy(-120, 120);
let enemy4 = new Enemy(-240, 240);
let enemy5 = new Enemy(-360, 240);
let enemy6 = new Enemy(-120, 240);
let enemy7 = new Enemy(-480, 360);
let enemy8 = new Enemy(-240, 360);
// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8];
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
