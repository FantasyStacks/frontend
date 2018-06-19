import dcopy from 'deepcopy'

export const addRemove = (lineup, player) => {
  if (inLineup(lineup, player)) {
    return removePlayer(lineup, player)
  } else {
    return addPlayer(lineup, player)
  }
}

const inLineup = (lineup, player) => {
  const nickname = player.Nickname

  switch (player.Position) {
    case 'PG':
      if (lineup.pg1 && lineup.pg1.Nickname === nickname) {
        return true
      } else if (lineup.pg2 && lineup.pg2.Nickname === nickname) {
        return true
      }
      break
    case 'SG':
      if (lineup.sg1 && lineup.sg1.Nickname === nickname) {
        return true
      } else if (lineup.sg2 && lineup.sg2.Nickname === nickname) {
        return true
      }
      break
    case 'SF':
      if (lineup.sf1 && lineup.sf1.Nickname === nickname) {
        return true
      } else if (lineup.sf2 && lineup.sf2.Nickname === nickname) {
        return true
      }
      break
    case 'PF':
      if (lineup.pf1 && lineup.pf1.Nickname === nickname) {
        return true
      } else if (lineup.pf2 && lineup.pf2.Nickname === nickname) {
        return true
      }
      break
    case 'C':
      if (lineup.c1 && lineup.c1.Nickname === nickname) {
        return true
      }
      break
  }
  return false
}

const addPlayer = (lineup, player) => {
  switch (player.Position) {
    case 'PG':
      if (lineup.pg1 === null) {
        return Object.assign(dcopy(lineup), {pg1: player})
      } else if (lineup.pg2 === null) {
        return Object.assign(dcopy(lineup), {pg2: player})
      }
      break
    case 'SG':
      if (lineup.sg1 === null) {
        return Object.assign(dcopy(lineup), {sg1: player})
      } else if (lineup.sg2 === null) {
        return Object.assign(dcopy(lineup), {sg2: player})
      }
      break
    case 'SF':
      if (lineup.sf1 === null) {
        return Object.assign(dcopy(lineup), {sf1: player})
      } else if (lineup.sf2 === null) {
        return Object.assign(dcopy(lineup), {sf2: player})
      }
      break
    case 'PF':
      if (lineup.pf1 === null) {
        return Object.assign(dcopy(lineup), {pf1: player})
      } else if (lineup.pf2 === null) {
        return Object.assign(dcopy(lineup), {pf2: player})
      }
      break
    case 'C':
      if (lineup.c1 === null) {
        return Object.assign(dcopy(lineup), {c1: player})
      }
      break
  }
  return lineup
}

const removePlayer = (lineup, player) => {
  const nickname = player.Nickname

  switch (player.Position) {
    case 'PG':
      if (lineup.pg1 && lineup.pg1.Nickname === nickname) {
        return Object.assign(dcopy(lineup), {pg1: null})
      } else if (lineup.pg2 && lineup.pg2.Nickname === nickname) {
        return Object.assign(dcopy(lineup), {pg2: null})
      }
      break;
    case 'SG':
      if (lineup.sg1 && lineup.sg1.Nickname === nickname) {
        return Object.assign(dcopy(lineup), {sg1: null})
      } else if (lineup.sg2 && lineup.sg2.Nickname === nickname) {
        return Object.assign(dcopy(lineup), {sg2: null})
      }
      break
    case 'SF':
      if (lineup.sf1 && lineup.sf1.Nickname === nickname) {
        return Object.assign(dcopy(lineup), {sf1: null})
      } else if (lineup.sf2 && lineup.sf2.Nickname === nickname) {
        return Object.assign(dcopy(lineup), {sf2: null})
      }
      break
    case 'PF':
      if (lineup.pf1 && lineup.pf1.Nickname === nickname) {
        return Object.assign(dcopy(lineup), {pf1: null})
      } else if (lineup.pf2 && lineup.pf2.Nickname === nickname) {
        return Object.assign(dcopy(lineup), {pf2: null})
      }
      break
    case 'C':
      if (lineup.c1 && lineup.c1.Nickname === nickname) {
        return Object.assign(dcopy(lineup), {c1: null})
      }
      break
  }
  return lineup
}