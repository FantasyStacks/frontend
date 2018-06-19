import dcopy from 'deepcopy';

export const mapStateToProps = (state) => ({
  gamesBar: mapGame(state),
  playerPool: mapPlayerPool(state),
  poolFilter: mapPoolFilter(state),
  lineup: mapLineup(state),
  lineups: mapLineups(state)
})

const mapGame = (state) => ({
  games: dcopy(state.games),
  filters: dcopy(state.filters.team)
})

const mapPoolFilter = (state) => ({
  filters: dcopy(state.filters.pos)
})

const mapPosition = (state) => ({
  filters: dcopy(state.filters.pos)
})

const mapPlayerPool = (state) => {
  const displayed =
    state.playerPool
      .filter(
        (player) =>
          (state.filters.pos.includes(player.Position)
          || state.filters.pos.length === 0)
          &&
          (state.filters.team.includes(player.Team)
          || state.filters.team.length ===0)
  )

  const lineupNames = positionStrings
    .map(position => state.lineup[position])
    .filter(player => player !== null)
    .map(player => player.Nickname);

  const withStatus = displayed.map(
    player =>
      lineupNames.includes(player.Nickname)
      ? Object.assign({inLineup: true, isEditable: true}, player)
      : Object.assign({inLineup: false, isEditable: true}, player)
  )

  return withStatus
}

const mapLineup = (state, isEditable = true) => ({
  isEditable: isEditable,
  lineup: dcopy(state.lineup),
  salary: positionStrings
    .map(position => state.lineup[position])
    .filter(player => player !== null)
    .reduce((total, player) => total + Number(player.Salary), 0),
  points: Math.round(positionStrings
    .map(position => state.lineup[position])
    .filter(player => player !== null)
    .reduce((total, player) => total + Number(player.FPPG), 0))
})

const mapLineups = (state) => {
  return state.lineups.map(
    lineup => ({
      isEditable: false,
      lineup: dcopy(lineup),
      salary: positionStrings
        .map(position => lineup[position])
        .filter(player => player !== null)
        .reduce((total, player) => total + Number(player.Salary), 0),
      points: Math.round(positionStrings
        .map(position => lineup[position])
        .filter(player => player !== null)
        .reduce((total, player) => total + Number(player.FPPG), 0))
    })
  ).reverse()
}

const positionStrings = [
  'pg1',
  'pg2',
  'sg1',
  'sg2',
  'sf1',
  'sf2',
  'pf1',
  'pf2',
  'c1'
]
