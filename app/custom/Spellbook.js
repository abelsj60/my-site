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
      let stateToUpdate = {};

      switch (spell) {
        case 'setMagicScale':
          stateToUpdate.magicScale = innerThis._setMagicScale(this);
          break;
        case 'setMagicOpacity':
          stateToUpdate.magicOpacity = innerThis._setMagicOpacity(this);
          break;
        case 'toggleMagicPointer':
          stateToUpdate.blockPointer = innerThis._toggleMagicPointer(this);
          break;
        case 'startPointerSpell':
          stateToUpdate.blockPointer = innerThis._startPointerSpell(
            this,
            innerThis
          );
          break;
        case 'resetTheMagic':
          stateToUpdate = innerThis._resetTheMagic();
          break;
        default:
          console.log('_selectSpellForAppComponent: Keep calm, carry on');
      }

      if (
        spell === 'setMagicOpacity' ||
        spell === 'startPointerSpell' ||
        spell === 'toggleMagicPointer' ||
        spell === 'resetTheMagic'
      ) {
        return this.setState(() => {
          const noObject = stateToUpdate === null;

          if (!noObject) {
            const keysForState = Object.keys(stateToUpdate).filter(
              k => stateToUpdate[k] !== null
            );
            const stateNeedsUpdate = keysForState.length > 0;

            if (stateNeedsUpdate) {
              return stateToUpdate;
            }
          }

          return null;
        });
      } else if (spell === 'setMagicScale') {
        return thisFromHome.setState(stateToUpdate);
      }
    };
  }

  _setMagicScale(thisFromApp) {
    const setScale = linearScale([0, 3223], [6, 1.05]);
    const magicScale = Math.max(1, setScale(thisFromApp.scrollTop));

    return magicScale;
  }

  _setMagicOpacity(thisFromApp) {
    const castTheSpell = thisFromApp.scrollTop >= 2000;
    const resetTheMagic =
      thisFromApp.scrollTop <= 2200 &&
      thisFromApp.state.magicOpacity !== 0 &&
      thisFromApp.state.magicOpacity !== null;

    if (castTheSpell) {
      const setScale = linearScale([2000, 3223], [0, 1]);
      const magicOpacity = Math.min(1, setScale(thisFromApp.scrollTop));

      return magicOpacity;
    } else if (resetTheMagic) {
      return 0;
    }

    return null;
  }

  _toggleMagicPointer(thisFromApp) {
    const blockPointer = thisFromApp.state.blockPointer;

    if (thisFromApp.fullyScrolled && blockPointer) {
      return false;
    } else if (!thisFromApp.fullyScrolled && !blockPointer) {
      return true;
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
