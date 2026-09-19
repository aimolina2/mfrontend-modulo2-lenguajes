console.log("************** DELIVERABLE 05 *********************");

// 1. SLOT MACHINE

const getRandomBoolean = (): boolean => Math.random() >= 0.5;

class SlotMachine {
  coins: number;

  constructor() {
    this.coins = 0;
  }

  play(): void {
    this.coins++;
    const result = [getRandomBoolean(), getRandomBoolean(), getRandomBoolean()];
    if (result[0] && result[1] && result[2]) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlotMachine();
console.log("******** MACHINE 1 ********");
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();

const machine2 = new SlotMachine();
console.log("******** MACHINE 2 ********");
machine2.play();
machine2.play();
machine2.play();
machine2.play();
machine2.play();
machine2.play();
machine2.play();
machine2.play();
machine2.play();
machine2.play();
