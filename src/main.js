/*
Gabriel Groenwold
Rocket Patrol 2: The Squeakquel
Time working: 6-7 hours
Mods: Countdown timer (3 pts), Time reward for hit (5), New title screen (3), new enemy (5), background music
*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
//reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT