const SUSHI_MONSTER_IMAGE = new Image();
SUSHI_MONSTER_IMAGE.src = '../assets/lickitung.gif';

export default class SushiMonster {
  constructor(pos) {
    this.pos = pos;
  }

  createSushiMonster(context) {
    context.drawImage(SUSHI_MONSTER_IMAGE, this.pos[0], this.pos[1], 100, 100);
  }
  // creates SushiMonster piece
}
