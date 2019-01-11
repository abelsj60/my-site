import Referrer from './Referrer';
import linearScale from 'simple-linear-scale';

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
      case 'app':
        spellbook = this._appComponentSpellbook;
        break;
      case 'home':
        spellbook = this._homeComponentSpellbook;
    }

    // 'this' bound to App. 'innerThis' set to Spellbook via currying.

    return spellbook.call(outerThis, this);
  }

  _appComponentSpellbook(innerThis) {
    return spell => {
      let stateToUpdate;

      switch (spell) {
        case 'toggleMagicPointer':
          console.log('Running?');
          stateToUpdate = innerThis._toggleMagicPointer(this);
          break;
        default:
          console.log('_selectSpellForAppComponent: Keep calm, carry on');
          break;
      }

      return this.setState(stateToUpdate);
    };
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
        case 'prepPointerSpell':
          stateToUpdate = innerThis._prepPointerSpell(
            this,
            thisFromHome,
            innerThis
          );
          break;
        default:
          console.log('_selectSpellForAppComponent: Keep calm, carry on');
          break;
      }

      if (
        spell === 'setMagicOpacity' ||
        spell === 'prepPointerSpell' ||
        spell === 'toggleMagicPointer'
      ) {
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
  }

  _toggleMagicPointer(thisFromApp) {
    if (thisFromApp.scrollTop >= 3220) {
      return { blockPointer: false };
    } else if (thisFromApp.scrollTop < 3220) {
      return { blockPointer: true };
    }
  }

  _prepPointerSpell(thisFromApp, thisFromHome, innerThis) {
    const isHome = thisFromHome !== undefined;
    const { blockPointer } = thisFromApp.state;

    if (isHome && !blockPointer) {
      innerThis._toggleMagicPointer(thisFromApp);
      return;
    } else if (!isHome && blockPointer) {
      return { blockPointer: false };
    }
  }
}
