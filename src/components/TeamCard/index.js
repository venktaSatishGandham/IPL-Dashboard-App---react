// Write your code here

import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamCard} = props
  const {id, name, teamImageUrl} = teamCard
  return (
    <Link className="card-link" to={`/team-matches/${id}`}>
      <div className="each-card">
        <div className="each-card-center-div">
          <img className="each-card-team-img" alt={name} src={teamImageUrl} />
          <p className="each-card-team-name">{name}</p>
        </div>
      </div>
    </Link>
  )
}

export default TeamCard
