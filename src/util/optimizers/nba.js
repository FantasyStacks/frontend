const FantasyLineup = function(salaryCap, rosterSpots, roster = []) {
  this.salaryCap = salaryCap
  this.rosterSpots = rosterSpots
  
  this.roster = Object.freeze(roster)
  
  this.salary = this.total('salary')
  this.fantasyPoints = this.total('projection')
  
  this.isComplete = roster.length === rosterSpots
  
  Object.freeze(this)

  if (this.salary > this.salaryCap) {
    throw new Error('exceeded salary cap!')
  }
  
  if (this.roster.length > this.rosterSpots) {
    throw new Error('too many players!')
  }
}


FantasyLineup.prototype.total = function(stat) {
  return this.roster.reduce((total, player) => total + player[stat], 0)
}

FantasyLineup.prototype.add = function(player) {
  return new FantasyLineup(this.salaryCap, this.rosterSpots, [...this.roster, player])
}

FantasyLineup.prototype.combine = function(fantasyLineup) {
  const newRoster = [...this.roster]
  const playersFrom = [...fantasyLineup.roster]

  while (newRoster.length < this.roster.rosterSpots) {
    newRoster.push(playersFrom.pop())
  }

  return new FantasyLineup(this.salaryCap, this.rosterSpots, newRoster)
}

const Memoizer = function() {
  this.memoized = {}
}

Memoizer.prototype.createKey = function(playersLeft, salaryLeft, rosterSpotsLeft) {
  return `playersLeft: ${playersLeft} salaryLeft: ${salaryLeft} rosterSpots: ${rosterSpotsLeft}`
}

Memoizer.prototype.isMemoized = function(playersLeft, salaryLeft, rosterSpotsLeft) {
  return this.memoized[this.createKey(playersLeft, salaryLeft, rosterSpotsLeft)] !== undefined
}

Memoizer.prototype.lineup = function(playersLeft, salaryLeft, rosterSpotsLeft) {
  const key = this.createKey(playersLeft, salaryLeft, rosterSpotsLeft)
  return this.memoized[key]
}

Memoizer.prototype.memoize = function(playersLeft, salaryLeft, rosterSpotsLeft, lineup) {
  const key = this.createKey(playersLeft, salaryLeft, rosterSpotsLeft)
  this.memoized[key] = lineup
  return this
}

const optimizer = () => {
  const lineup = new FantasyLineup(SALARY_CAP, ROSTER_SPOTS)
  const pool = Object.keys(PLAYER_POOL)
  let memoizer = new Memoizer()

  let recursion = 0

  const recursiveStep = (currentPoolIndex = 0, currentLineup = lineup) => {
    if (currentLineup.isComplete) {
      return currentLineup
    
    } else if (currentPoolIndex >= pool.length) {
      return INVALID_LINEUP

    }

    const playersLeft = pool.length - currentPoolIndex
    const salaryLeft = SALARY_CAP - currentLineup.salary
    const rosterSpotsLeft = ROSTER_SPOTS - currentLineup.roster.length

    const isMemoized = memoizer.isMemoized(playersLeft, salaryLeft, rosterSpotsLeft)
  
    if (isMemoized) {
      const memoized = memoizer.lineup(playersLeft, salaryLeft, rosterSpotsLeft)
      if (memoized.roster === INVALID_LINEUP) {
        return INVALID_LINEUP
      }
      const combinedLineup = currentLineup.combine(memoized)

      return combinedLineup
    }

    let lineupIfPass = recursiveStep(currentPoolIndex + 1, currentLineup)

    
    let lineupIfTake 
    const currentPlayer = {name: pool[currentPoolIndex], ...PLAYER_POOL[pool[currentPoolIndex]]}
    let takePlayer
    try {
      takePlayer = currentLineup.add(currentPlayer)
      lineupIfTake = recursiveStep(currentPoolIndex + 1, takePlayer)
    }
    catch(err) {
      lineupIfTake = INVALID_LINEUP
    } 

    let optimalLineup

    if (lineupIfTake === INVALID_LINEUP) {
      optimalLineup = lineupIfPass
    } else if (lineupIfPass === INVALID_LINEUP) {
      optimalLineup = lineupIfTake
    
    } else {
      optimalLineup = lineupIfPass.fantasyPoints > lineupIfTake.fantasyPoints
        ? lineupIfPass
        : lineupIfTake
    }

    memoizer.memoize(playersLeft, salaryLeft, rosterSpotsLeft, optimalLineup)

    return optimalLineup
  
  }
  const out = recursiveStep()
  return out
}

export default optimizer