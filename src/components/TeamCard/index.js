// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetail} = props
  const {name, id, teamImageUrl} = teamDetail
  return (
    <Link to={`/team-matches/${id}`} className="home-links">
      <li className="home-team">
        <img src={teamImageUrl} alt={id} className="team-logo" />
        <h1 className="team-logo-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
