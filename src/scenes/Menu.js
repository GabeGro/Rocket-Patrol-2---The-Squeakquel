class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        //load images and tile sprites
        this.load.image('rocket', './assets/rocket.png')
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('starfield', './assets/starfield.png')
        this.load.bitmapFont('Orbitron', './assets/Orbitron/Orbitron.png', './assets/Orbitron/Orbitron.xml')
        //load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })
        //load 2nd spaceship
        this.load.spritesheet('speeder', './assets/spaceship2.png', {
            frameWidth: 32,
            frameHeight: 16,
            startFrame: 0,
            endFrame: 3
        })
        //load audio
        this.load.audio('sfx-select', './assets/sfx-select.wav')
        this.load.audio('sfx-explosion1', './assets/sfx-explosion1.wav')
        this.load.audio('sfx-explosion2', './assets/sfx-explosion2.wav')
        this.load.audio('sfx-explosion3', './assets/sfx-explosion3.wav')
        this.load.audio('sfx-explosion4', './assets/sfx-explosion4.wav')
        this.load.audio('sfx-explosion5', './assets/sfx-explosion5.wav')
        this.load.audio('sfx-shot', './assets/sfx-shot.wav')
        this.load.audio('bgMusic', './assets/bgMusic.mp3')
    }

    create() {
        //animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { 
                start: 0, 
                end: 9, 
                first: 0
            }),
            frameRate: 30
        })
        this.anims.create({
            key: 'afterburner',
            frames: this.anims.generateFrameNumbers('speeder', { 
                start: 0, 
                end: 3, 
                first: 0
            }),
            frameRate: 3
        })

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '24px',
            //backgroundColor: '#F3B141',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        //starfield bg
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0)
        //display menu text
        this.add.bitmapText(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Orbitron', 'ROCKET PATROL', 60).setOrigin(0.5)
        //titleText.setCharacterTint(0, -1, false, 65);
        this.add.text(game.config.width/2, game.config.height/2 + 30, 'Use <--> arrows to move and [F] to Fire', menuConfig).setOrigin(0.5)
        //menuConfig.backgroundColor = '#00FF00'
        menuConfig.fontSize = '20px'
        this.add.text(game.config.width/2, game.config.height/2 + 70, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5)
        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            //easy mode
            game.settings = {
                spaceshipSpeed: 3,
                speederSpeed: 5,
                gameTimer: 60000
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            //hard mode
            game.settings = {
                spaceshipSpeed: 4,
                speederSpeed: 6,
                gameTimer: 45000
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }
        //update starfield
        this.starfield.tilePositionX -= 1
    }
}