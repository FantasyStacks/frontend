import { bindActionCreators } from 'redux'
import axios from 'axios'
import dcopy from 'deepcopy'

import { store } from '../store/index.js'

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    postLineups: (lineup) => ({
      type: 'POST_LINEUPS',
      payload: axios.post('/lineups', {
        lineups: dcopy(store.getState().lineups).concat([store.getState().lineup])
      }),
    }),

    getLineups: () => ({
      type: 'GET_LINEUPS',
      payload: axios.get('/lineups')
    }),

    addRemove: (player) => ({
      type: 'ADD_REMOVE',
      payload: player
    }),

    filterGame: (filter) => ({
      type: 'FILTER_GAME',
      payload: filter
    }),

    filterPosition: (filter) => ({
      type: 'FILTER_POSITIONS',
      payload: filter
    })

  }, dispatch)
)
