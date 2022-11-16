// // Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  //   const {competingTeam} = latestMatch
  console.log(latestMatch)

  return (
    <div className="latest-matches-container">
      <div className="first">
        <p>{latestMatch.competingTeam}</p>
        <p>{latestMatch.date}</p>
        <p>{latestMatch.venue}</p>
        <p>{latestMatch.result}</p>
      </div>
      <img
        className="second"
        alt={`latest match ${latestMatch.competingTeam}`}
        src={latestMatch.competingTeamLogo}
      />
      <div className="third">
        <p>firstInnings</p>
        <p>{latestMatch.firstInnings}</p>
        <p>secondInnings</p>
        <p>{latestMatch.secondInnings}</p>
        <p>manOfTheMatch</p>
        <p>{latestMatch.manOfTheMatch}</p>
        <p>umpires</p>
        <p>{latestMatch.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
