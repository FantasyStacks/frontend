import dcopy from 'deepcopy';
import playerPool from '../../playerpool.js';

export const games = playerPool.reduce((games, player) => {
  const teams = player.Game.split('@');
  games[teams[0]] = teams[1];
  return games;
}, {});

export const emptyLineup = {
  pg1: null,
  pg2: null,
  sg1: null,
  sg2: null,
  sf1: null,
  sf2: null,
  pf1: null,
  pf2: null,
  c1: null
}

export const defaultState = {
  'playerPool': dcopy(playerPool),
  'lineup': dcopy(emptyLineup),
  'lineups': [],
  'status': '',
  'games': dcopy(games),
  'filters': {
    pos: [],
    team: []
  }
};

