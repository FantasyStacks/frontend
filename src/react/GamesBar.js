import React from 'react';

import { Game } from './Game.js'

export const GamesBar = ({ filters, games, filterGame }) => {

  games = Object.keys(games)
    .map(away => {
      const home = games[away]
      const homeClass = filters.includes(home) ? 'filtered' : ''
      const awayClass = filters.includes(away) ? 'filtered' : ''
      return <Game
        home={ home }
        away={ away }
        homeClass={ homeClass }
        awayClass={ awayClass }
        filterGame={ filterGame }
      />
    })

  return (
    <div className="games-bar">
      { games }
    </div>
  )
}
