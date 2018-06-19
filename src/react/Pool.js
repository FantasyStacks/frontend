import React from 'react'

import { PoolRow } from './PoolRow.js'

export const Pool = ({ pool, addRemove }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>POS</th>
          <th>PLAYER</th>
          <th>GAME</th>
          <th>Points</th>
          <th>SALARY</th>
        </tr>
      </thead>
      <tbody>
        {
          pool.map(player => (
            <PoolRow
              player={player}
              addRemove={addRemove}
            />
          ))
        }
      </tbody>
    </table>
  </div>
)
