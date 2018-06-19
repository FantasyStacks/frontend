import React from 'react'

import { Lineup } from './Lineup.js'

export const Lineups = ({ lineups }) =>
  lineups
    .map(lineup => (
      <Lineup
        isEditable={false}
        lineup={lineup.lineup}
        points={lineup.points}
        salary={lineup.salary}
      />
    ))
