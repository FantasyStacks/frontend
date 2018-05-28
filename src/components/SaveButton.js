import React from 'react'
import propTypes from 'prop-types'


const saveButton = Object.keys(lineup.lineup)
    .map(pos => lineup.lineup[pos])
    .includes(null) 
      ? ''
      : <button onClick={postLineups}>SAVE LINEUP</button>