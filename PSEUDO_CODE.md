# Pseudo code

The different steps needed to create the game starting from the provided code.

## Classes to write

- Player (character controlled by the player to move and reach the exit)
- Enemy (the computer-controlled character which cross the screen and collide with the payer)
- Collectible (The item the player must take to have additional points)
- Shield (An extra power to collect and which prevent the next collision)

## Class properties and functions

### Player

#### Properties
- [ ] image _(The PNG attached)_
    - **string** initial value: '../images/spaceship_rogue_120X120.png'
- [ ] location _(The current location on the screen)_
- [ ] hasWon _(If the player has reached the exit or not)_
    - **boolean** initial value: false
- [ ] score _(The current score)_
    - **number/ integer** initial value: 0
- [ ] hasShield _(If the player has collected the shield or not)_
    - **boolean** initial value: false
- [ ] collectiblesWon _(The amount of collectible won)_
    - **number/ integer** initial value: 0

### Methods

- [ ] initiatePlayer
    - loading image
    - initial location
- [ ] updatePlayer
    - update location
    - handles collision with the enemies, collectibles and shield
- [ ] renderPlayer
- [ ] handleInputs
    - left / right / up / down
    - do not go off screen
    - win if reaches the exit

### Enemy

#### Properties
- [ ] image _(The PNG attached)_
    - **string** initial value: '../images/Drone1_120X120.png'
- [ ] location _(The current location on the screen)_
- [ ] speed _(The speed for this very enemy)_
    - **number** initial value: 1

#### Methods
- [ ] initiateEnemy
    - loading image
    - initial location
- [ ] updateEnemy
    - update location
    - handles collision with the player
- [ ] renderEnemy

### Collectible

#### Properties
- [ ] image _(The PNG attached)_
    - **string** initial value: '../images/gem.png'
- [ ] location _(The current location on the screen)_

#### Methods
- [ ] initiateCollectible
    - loading image
    - initial location
- [ ] updateCollectible
    - handles collision with the player

### Shield

#### Properties
- [ ] image _(The PNG attached)_
    - **string** initial value: '../images/Shield.png'
- [ ] location _(The current location on the screen)_

#### Methods
- [ ] initiateShield
    - loading image
    - initial location
- [ ] updateShield
    - handles collision with the player

## Project Rubric
- [ ] The game functions correctly and runs error free
- [ ] Player can not move off screen
- [ ] Vehicles cross the screen
- [ ] Vehicle-player collisions happen logically (not too early or too late)
- [ ] Vehicle-player collision resets the game
- [ ] Something happens when player wins
- [ ] Game objects (player and vehicles) are implemented using JavaScript object-oriented programming features
- [ ] A README file is included detailing all steps required to successfully run the application
- [ ] Comments are present and effectively explain longer code procedures. As a rule of thumb: describe what all custom functions and object methods do
- [ ] Code is formatted with consistent, logical, and easy-to-read formatting as described in the [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
