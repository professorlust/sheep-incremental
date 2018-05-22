import IDiscoveryTemplate from '../classes/discovery/IDiscoveryTemplate';
import IDiscoveryState from '../classes/discovery/IDiscoveryState';

type DiscoveryData = {
  template: IDiscoveryTemplate,
  startingState: IDiscoveryState
}

let advancements: DiscoveryData[] = [
{
  template: {
    id: 'pyrotechnology',
    name: "Pyrotechnology",
    desc: "The tribe discovers new way to create, control and use fire.",
    type: "discovery",
    branch: "construction",
    buyVerb: "Burn!",
    rawCost: { advancement: 1 },
    unlocks: ['pyrotechnology']
  },
  startingState: {
    done: false,
    locks: ['__prestige__']
  }
}];

export default advancements;
