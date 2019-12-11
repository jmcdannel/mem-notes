import { notesConfig } from '../Notes/config';

const pirateIpsum = [`
    Transom scuppers nipperkin handsomely cable starboard stern capstan. Weigh anchor mutiny clipper gangway spirits brigantine fathom maroon. Splice the main brace rigging me bounty long boat reef sails walk the plank cable.
  `,`
    Hang the jib squiffy rope's end ahoy hogshead lateen sail fathom come about. Gally landlubber or just lubber lad run a rig grog blossom mutiny come about fore. Starboard boom gunwalls belay mizzenmast wench grog log.
  `,`
    Doubloon spyglass galleon ballast sutler wench sheet nipperkin. Starboard log chantey lass tender yawl American Main man-of-war. Tender hulk belay main sheet rutters pillage capstan shrouds.
  `,`
    Brig bilged on her anchor Letter of Marque chase handsomely gangplank yardarm driver. Piracy lateen sail provost chandler spanker main sheet list bilge rat. Nipperkin chase guns lateen sail tender draft gibbet Spanish Main lass.
  `,`
    Sink me bilge rat ahoy salmagundi knave shrouds fire in the hole driver. Spanker Pirate Round black jack crow's nest league fathom bilge fluke. Spirits chase guns maroon brig haul wind hornswaggle rum careen.
  `,`
    Lass gabion topsail Jack Ketch mizzenmast landlubber or just lubber Shiver me timbers Pieces of Eight. Sail ho keel rum pirate transom spirits jib sloop. Shrouds parley bilge nipperkin yard man-of-war Jack Ketch knave.
  `,`
    Case shot lugsail boatswain lad ballast pink rigging gangplank. Bounty run a rig loot nipperkin belaying pin yawl gally Spanish Main. To go on account ballast hulk spirits yard booty gun Jolly Roger.
  `,`
    Hail-shot cackle fruit Cat o'nine tails jury mast pinnace clap of thunder loot overhaul. Smartly Davy Jones' Locker lad measured fer yer chains me jib scuttle mizzen. Come about snow Jack Ketch gangway piracy cog Nelsons folly long clothes.
  `,`
    Corsair tender bilge jack Spanish Main rope's end marooned crimp. Mutiny ye barque hang the jib long clothes yardarm blow the man down lass. Sheet bilge rat yard crack Jennys tea cup aft bucko scuttle gangplank.
  `,`
    Case shot league mizzen Nelsons folly scurvy gabion execution dock Spanish Main. Draft rum Privateer maroon overhaul brig jib sloop. Man-of-war fire in the hole marooned mizzen sloop Plate Fleet heave to black spot.
`];

const notes = pirateIpsum.map((text, id) => { return {
    text,
    id,
    type: 'reminder'
  };
}).reverse();

const noteTypes = notesConfig.types;

export const initialState = { notes, noteTypes };

function notesReducer(state, action) {
  switch (action.type) {
    case 'add':
      state.notes.unshift(action.payload);
      return { ...state };
    case 'remove':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload.id)
      };
    default:
      return state;
  }
  
}

export default notesReducer;
