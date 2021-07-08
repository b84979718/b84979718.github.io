// Write your code here
import './index.css'

const MatchCard = props => {
  const {match} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = match
  return (
    <li className="match">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="logo-status"
      />
      <h1 className="match-heading">{competingTeam}</h1>
      <p className="match-result">{result}</p>
      <h1 className={matchStatus === 'Won' ? 'won' : 'lost'}>{matchStatus}</h1>
    </li>
  )
}

export default MatchCard
