export default class Spell {
  constructor(homeStateUpdater, appStateUpdater) {
    this.score = 0;
    this.pattern = [];
    this.goal = 5;
    this.activePulser = 0;
    this.turnTimeoutId = undefined;
    this.timeoutLength = 5000;
    this.text = '';
    this.done = false;
    this.homeStateUpdater = homeStateUpdater;
    this.appStateUpdater = appStateUpdater;
    this.cleanUp = false;
  }

  setActivePulser() {
    this.activePulser = this.pattern.shift();
    return true;
  }

  startCasting() {
    this.createSpellPattern();
    // this.turnTimeoutId = setTimeout(
    //   () => this.failSpell(), // Too late, cancel spell
    //   this.timeoutLength
    // );
    // this.text = 'Cast';
    return this.setActivePulser();
  }

  createSpellPattern() {
    for (let i = 0; i <= this.goal; i++) {
      let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

      if (i > 0) {
        while (this.pattern[i - 1] === randomNum) {
          randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        }
      }

      this.pattern.push(randomNum);
    }

    return true;
  }

  addOne() {
    this.score++;
    return true;
  }

  handleClickOnPulser(num) {
    if (this.activePulser === num) {
      this.turn();
      return true;
    } else {
      this.failSpell();
    }
  }

  turn() {
    this.addOne();
    this.done = this.score === this.goal;
    this.setActivePulser();
    this.homeStateUpdater(true, false, this.score); // Forces re-render
    clearTimeout(this.turnTimeoutId);

    // Should be pattern.length > 0
    if (this.turnTimeoutId > 0) {
      this.turnTimeoutId = setTimeout(
        () => this.failSpell(),
        this.timeoutLength
      );
    }

    if (this.pattern.length === 0) {
      this.finishCasting();
    }

    return true;
  }

  failSpell() {
    console.log('fail');
    return this.resetSpell();
  }

  finishCasting() {
    // Don't call resetSpell() yet b/c we're not done
    // (we're done after calling cleanupAfterCasting).
    const cast = true;
    const magic = true;
    this.appStateUpdater('swapBackground');
    console.log('finishCasting');
    this.homeStateUpdater(cast, magic, this.score);
  }

  cancelSpell() {
    console.log('cancel');
    return this.resetSpell();
  }

  cleanupAfterCasting() {
    this.score = 0;
    console.log('clean-up');
    return this.resetSpell();
  }

  resetSpell() {
    // We add a flag to 'this' so we know we've already toggled
    // isCasting on appState. Othewise it runs twice in a row
    // inside 'transitionend' event (why? dunno).
    console.log('clean-up TEST:', this.cleanUp);
    if (!this.cleanUp) {
      this.cleanUp = true;
      clearTimeout(this.turnTimeoutId);
      this.homeStateUpdater(false, false, this.score);

      return true;
    }


    return false;
  }
}
