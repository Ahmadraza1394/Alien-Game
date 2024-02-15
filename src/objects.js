//--- The sprite object

var spriteObject = {
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 64, //sourceWidth and sourceHeight of the sprite on the sprite sheet.
  sourceHeight: 64,
  width: 64, //Width and height of the sprite when rendered on the canvas
  height: 64,
  x: 0, //Current position of the sprite on the canvas
  y: 0,
  vx: 0, //Velocity of the sprite in the x and y directions
  vy: 0,
  visible: true,

  //Getters  Methods
  // centerX(), centerY():Get the x and y coordinates of the center of the sprite
  centerX: function () {
    return this.x + this.width / 2;
  },
  centerY: function () {
    return this.y + this.height / 2;
  },
  halfWidth: function () {
    return this.width / 2;
  },
  halfHeight: function () {
    return this.height / 2;
  },
};

//--- The monster object

monsterObject = Object.create(spriteObject);
monsterObject.sourceX = 128;

//The monster's states
monsterObject.NORMAL = [2, 0];
monsterObject.SCARED = [2, 1];
monsterObject.state = monsterObject.NORMAL;

monsterObject.update = function () {
  this.sourceX = this.state[0] * this.width;
  this.sourceY = this.state[1] * this.height;
};
// // state: Current state of the monster (either NORMAL or SCARED).
// speed: The allowed speed of the monster.
// NONE, UP, DOWN, LEFT, RIGHT: Constants representing different directions.
// validDirections: An array to store valid directions for the monster to move.
// direction: Current direction of the monster.
// hunt: A boolean indicating whether the monster is in hunting mode.

//The monster's allowed speed
monsterObject.speed = 1;

//Properties to help the monster change direction
monsterObject.NONE = 0;
monsterObject.UP = 1;
monsterObject.DOWN = 2;
monsterObject.LEFT = 3;
monsterObject.RIGHT = 4;
monsterObject.validDirections = [];
monsterObject.direction = monsterObject.NONE;
monsterObject.hunt = true;
