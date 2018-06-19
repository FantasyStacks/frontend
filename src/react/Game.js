import React from 'react'

export const Game = ({ home, away, homeClass, awayClass, filterGame }) => (
  <div className="games-bar">
    <button
      onClick={ () => filterGame(away) }
      className={ awayClass + " filter-button" }
    >
      { away }
    </button>
    <button
      onClick={ () => filterGame(home) }
      className={ homeClass + " filter-button" }
    >
      { '@' + home }
    </button>
  </div>
)
