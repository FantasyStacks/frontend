import dcopy from 'deepcopy'
import { defaultState, emptyLineup } from '../store/defaultState.js'
import { addRemove } from '../lib/helpers.js'

export const reducers = (state = defaultState, action) => {
  state = dcopy(state)

  switch (action.type) {
    case 'POST_LINEUPS_PENDING':
      return Object.assign(
        {},
        state,
        {status: 'pending'}
      )

    case 'POST_LINEUPS_FULFILLED':
      return Object.assign(
        {},
        state,
        {lineup: emptyLineup},
        {lineups: [].concat(state.lineups, [state.lineup])},
        {status: 'Lineup Saved!'}
      )

    case 'POST_LINEUPS_REJECTED':
      return Object.assign(
        {},
        state,
        {status: 'error!'}
      )

    case 'GET_LINEUPS_PENDING':
      return Object.assign(
        {},
        state,
        {status: 'saving...'}
      )

    case 'GET_LINEUPS_FULFILLED':
      return Object.assign(
        {},
        state,
        {lineups: action.payload.data}
      )

    case 'GET_LINEUPS_REJECTED':
      console.log('error getting lineups!')
      return state

    case 'FILTER_GAME':
      if (state.filters.team.includes(action.payload)) {
        const index = state.filters.team.indexOf(action.payload)
        state.filters.team.splice(index, 1)
        return dcopy(state)
      } else {
        state.filters.team.push(action.payload)
        return dcopy(state)
      }

    case 'FILTER_POSITIONS':
      if (state.filters.pos.includes(action.payload)) {
        const index = state.filters.pos.indexOf(action.payload)
        state.filters.pos.splice(index, 1)
        return dcopy(state)
      } else {
        state.filters.pos.push(action.payload);
        return dcopy(state)
      }

    case 'ADD_REMOVE':
      return Object.assign(
        state,
        {lineup: addRemove(state.lineup, action.payload)}
      )

    default:
      return state
  }
}

