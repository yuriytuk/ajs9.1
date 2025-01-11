import Math from './Math';

export default class Magician extends Math {
    constructor(stoned) {
        super(stoned);
        this.type ='Magician';
        this.attack = 10;
        this.defence = 40;
    }
}