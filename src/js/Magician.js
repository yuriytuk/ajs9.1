import Math from './Math';

export default class Magician extends Math {
    constructor(name) {
        super(name);
        this.type ='Magician';
        this.attack = 10;
        this.defence = 40;
    }
}