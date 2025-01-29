class Speeder extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this) //add to existing scene
        this.points = pointValue //stores point value
        this.moveSpeed = game.settings.speederSpeed //speeder speed in px/frame
    }

    update() {
        //move spaceship left
        this.x -= this.moveSpeed

        //wrap from left to right
        if (this.x <= 0 - this.width) {
            this.x = game.config.width
        }
    }

    //reset position
    reset() {
        this.x = game.config.width
    }
}