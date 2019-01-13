import Referrer from './Referrer';
import linearScale from 'simple-linear-scale';

// 'this' bound to App. 'innerThis' set to Spellbook via currying.

export default class Spellbook {
  constructor(component, outsideThis) {
    if (outsideThis.props.location === undefined) {
      throw 'Caller must carry location.';
    }

    const r = new Referrer(outsideThis.props);

    this._component = component;
    this._referrer = r.location;

    this.castSpell = this._selectSpellbook(outsideThis);
  }

  _selectSpellbook(outerThis) {
    let spellbook;

    switch (this._component) {
      case 'home':
        spellbook = this._homeComponentSpellbook;
        break;
      default:
        console.log('_selectSpellbook: Keep calm, carry on');
    }

    return spellbook.call(outerThis, this);
  }

  // We curry homeSpellbook b/c it's going to be an event listener.
  // (We can't invoke it when adding it. We want the window to later.)

  _homeComponentSpellbook(innerThis) {
    return (spell, thisFromHome) => () => {
      let stateToUpdate;

      switch (spell) {
        case 'setMagicScale':
          stateToUpdate = innerThis._setMagicScale(this);
          break;
        case 'setMagicOpacity':
          stateToUpdate = innerThis._setMagicOpacity(this);
          break;
        case 'toggleMagicPointer':
          stateToUpdate = innerThis._toggleMagicPointer(this);
          break;
        case 'startPointerSpell':
          stateToUpdate = innerThis._startPointerSpell(this, innerThis);
          break;
        case 'resetTheMagic':
          stateToUpdate = innerThis._resetTheMagic();
          break;
        default:
          console.log('_selectSpellForAppComponent: Keep calm, carry on');
      }

      if (
        stateToUpdate !== null &&
        (spell === 'setMagicOpacity' ||
          spell === 'startPointerSpell' ||
          spell === 'toggleMagicPointer' ||
          spell === 'resetTheMagic')
      ) {
        console.log('s:', spell, stateToUpdate);
        return this.setState(stateToUpdate);
      } else if (spell === 'setMagicScale') {
        return thisFromHome.setState(stateToUpdate);
      }
    };
  }

  _setMagicScale(thisFromApp) {
    const scaleFunction = linearScale([0, 3223], [6, 1.05]);
    const magicScale = Math.max(1, scaleFunction(thisFromApp.scrollTop));

    return { magicScale };
  }

  _setMagicOpacity(thisFromApp) {
    const startTheMagic = thisFromApp.scrollTop >= 2000;
    const resetTheMagic =
      thisFromApp.scrollTop <= 2200 && thisFromApp.state.magicOpacity !== 0;

    if (startTheMagic) {
      const scaleFunction = linearScale([2000, 3223], [0, 1]);
      const magicOpacity = Math.min(1, scaleFunction(thisFromApp.scrollTop));
      return { magicOpacity };
    } else if (resetTheMagic) {
      return { magicOpacity: 0 };
    }

    return null;
  }

  _toggleMagicPointer(thisFromApp) {
    const blockPointer = thisFromApp.state.blockPointer;

    if (thisFromApp.scrollTop >= 3220 && blockPointer) {
      return { blockPointer: false };
    } else if (thisFromApp.scrollTop < 3220 && !blockPointer) {
      return { blockPointer: true };
    }

    return null;
  }

  _startPointerSpell(thisFromApp, innerThis) {
    return innerThis._toggleMagicPointer(thisFromApp);
  }

  _resetTheMagic() {
    return { magicOpacity: 0, blockPointer: false };
  }
}
