// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedMatchDetails = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  return (
    <div className="latest-match-card">
      <div className="first">
        <div className="latest-first-section">
          <h1 className="opponent-team-name">
            {updatedMatchDetails.competingTeam}
          </h1>
          <h1 className="date">{updatedMatchDetails.date}</h1>
          <p className="venue">{updatedMatchDetails.venue}</p>
          <p className="venue">{updatedMatchDetails.result}</p>
        </div>
        <img
          src={updatedMatchDetails.competingTeamLogo}
          alt={updatedMatchDetails.competingTeam}
          className="opponent-team-logo"
        />
      </div>
      <div className="latest-second-section">
        <h1 className="second-heading">First Innings</h1>
        <p className="second-description">{updatedMatchDetails.firstInnings}</p>
        <h1 className="second-heading">Second Innings</h1>
        <p className="second-description">
          {updatedMatchDetails.secondInnings}
        </p>
        <h1 className="second-heading">Man of The Match</h1>
        <p className="second-description">
          {updatedMatchDetails.manOfTheMatch}
        </p>
        <h1 className="second-heading">Umpires</h1>
        <p className="second-description">{updatedMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
