
 class ArrayExtension {
    static randomItem<T>(array: T[]): { index: number, value: T } {
        const index = Math.floor(Math.random() * array.length);
        return { index, value: array[index] };
    }
}

 type Input = number[];

 interface BullCow {
  bull: number;
  cow: number;
}

 class Game {
  public step: number = 0;
  private guess: Input;

  get losed() {
    return this.step >= 10 ? this.guess : null;
  }

  constructor() {
    this.guess = this.reset();
  }

  reset() {
    this.step = 0;

    return this.guess = Game.generateInput();
  }

  // Возвращает все возможные варианты ввода
  static getInputs(size: number = 4): Input[] {
    const numbers: Input[] = [];

    function getDigit(value: number, index: number) {
      return Math.floor(value / Math.pow(10, index)) % 10;
    }

    for (let digits = 0; digits < Math.pow(10, size); digits++) {
      const number: Input = Array(size)
        .fill(0)
        .map((_, index) => getDigit(digits, size - index - 1));

      const set = new Set(number);
      if (set.size === size) {
        numbers.push(number);
      }
    }

    return numbers;
  }

  static generateInput() {
    const number = new Set<number>();

    while (number.size < 4) {
      number.add(Math.floor(Math.random() * 10));
    }

    return Array.from(number);
  }
  
  static compare(target: Input, source: Input): BullCow {
    let bull = 0;
    let cow = 0;

    for (let i = 0; i < target.length; i++) {
      if (target[i] === source[i]) {
        bull++;
      } else if (target.includes(source[i])) {
        cow++;
      }
    }

    return { bull, cow };
  }

  input(input: Input) {
    this.step++;

    return Game.compare(this.guess, input);
  }
}

/*
Описание игры: компьютер загадывает четырехзначное число, а человек угадывает его.
Быки (Bull) - количество цифр, которые находятся в правильном месте;
Коровы (Cow) - количество цифр, которые находятся в неправильном месте.

Guess: 0123
Input: 4567 => { bull: 0, cow: 0 }
Input: 1234 => { bull: 0, cow: 3 }
Input: 0135 => { bull: 2, cow: 1 }
Input: 0123 => { bull: 4, cow: 0 }

Требуется составить алгорит для угадывания четырехзначного числа.
*/

class Bot {
  public guess = Game.generateInput();
  public possibleNumbers: Input[];

  constructor() {
    this.possibleNumbers = Game.getInputs()
  }

  input(bc: BullCow): Input { // Писать алгоритм внутри тела метода - ЗДЕСЬ!
    this.guess = Game.generateInput();
    // console.log(this.guess)
    return this.guess;
  }
}

const game = new Game();
const bot = new Bot();

while (game.losed === null) {
  const bc = game.input(bot.guess);
  console.log(bot.guess, bc);

  if (bc.bull === 4) {
    console.log(`Вы выиграли за ${game.step} ходов!`);
    break;
  }

  bot.input(bc);
}

if (game.losed !== null) {
  console.log(`Вы проиграли :(\nЗагаданное число:`, game.losed);
}