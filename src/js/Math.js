import Character from './Character';

export default class Math extends Character {
    constructor (name) {
        super(name);
        this.stoned = false;
    }
    get stoned() {
        return this._stoned;
    }
    set stoned(value) {
        this._stoned = value;
    }
    get attack() {
        if (this.x > 5) {
            return "Вы слишком далеко!";
        }

        let hit = this._attack - (this.x * this._attack / 10);
        if (this._stoned) {
            hit -=Math.log2(this.x) * 5;
        }
        return hit;
    }
    set attack(value) {
        this._attack = value;
    }
}
    