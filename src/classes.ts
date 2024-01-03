class Player {

   constructor(public firstName: string, public lastName: string, protected _score: number) {}

   get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
   }

   get score(): number {
      return this._score;
   }

   set score(newScore: number) {
      if(newScore < 0) throw new Error("Score must be greater than zero")
      this._score = newScore
   }
}

class SuperPlayer extends Player {
   public isAdmin: boolean = true;
   maxScore() {
      this._score = 9999999;
   }
}


const playerOne = new Player("mac", "angel", 5);

console.log(playerOne.fullName);
console.log(playerOne.score = 50);