import Math from './Math';

export default class Daemon extends Math {
    constructor(stoned) {
        super(stoned);
        this.type ='Daemon';
        this.attack = 10;
        this.defence = 40;
    }
}