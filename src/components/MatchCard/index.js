// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props

  return (
    <li className="match-card">
      <img
        className="team-log"
        alt={`competing team ${recentMatches.competingTeam}`}
        src={recentMatches.competingTeamLogo}
      />
      <p>{recentMatches.competingTeam}</p>
      <p>{recentMatches.result}</p>
      <p>{recentMatches.matchStatus}</p>
    </li>
  )
}

export default MatchCard
