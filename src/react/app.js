import React, { Component } from 'react'

import { GamesBar } from './GamesBar.js'
import { Lineup } from './Lineup'
import { Lineups } from './Lineups.js'
import { Pool } from './Pool.js'
import { PoolFilter } from './PoolFilter.js'

export const App = ({ gamesBar, poolFilter, lineup, lineups, playerPool, addRemove, filterGame, filterPosition, getLineups, postLineups }) => {

  const saveButton = Object.keys(lineup.lineup)
    .map(pos => lineup.lineup[pos])
    .includes(null)
      ? ''
      : <button onClick={ postLineups }>SAVE LINEUP</button>

  return (
    <div>
      <GamesBar
        games={ gamesBar.games }
        filters={ gamesBar.filters }
        filterGame={ filterGame }
      />
      <PoolFilter
        filters={ poolFilter.filters }
        filterPosition={ filterPosition }
      />
      <div className="row">
        <div className="column">
          <Pool
            pool={ playerPool }
            addRemove={ addRemove }
          />
        </div>
        <div className="column">
          <button onClick={ getLineups }>GET SAVED LINEUPS</button>
          { saveButton }
          <Lineup
            isEditable={ lineup.isEditable }
            lineup={ lineup.lineup }
            points={ lineup.points }
            salary={ lineup.salary }
            addRemove={ addRemove }
          />
          <Lineups
            lineups={ lineups }
          />
        </div>
      </div>
    </div>
  )
}
