// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamParticularDetails: {}}

  componentDidMount() {
    this.getParticularDetails()
  }

  getParticularDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const {recentMatches} = updateData
    const updatedRecentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    updateData.recentMatches = updatedRecentMatches
    this.setState({isLoading: false, teamParticularDetails: updateData})
  }

  render() {
    const {isLoading, teamParticularDetails} = this.state
    const {teamBannerUrl, recentMatches} = teamParticularDetails
    const {match} = this.props
    const {params} = match
    const {id} = params
    let background
    switch (id) {
      case 'RCB':
        background = 'RCB'
        break
      case 'KKR':
        background = 'KKR'
        break
      case 'CSK':
        background = 'CSK'
        break
      case 'MI':
        background = 'MI'
        break
      case 'SH':
        background = 'SH'
        break
      case 'RR':
        background = 'RR'
        break
      case 'KXP':
        background = 'KXP'
        break
      default:
        background = 'DC'
        break
    }
    return (
      <div className={`team-background ${background}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <img src={teamBannerUrl} alt={id} className="team-image" />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <LatestMatch
              latestMatchDetails={teamParticularDetails.latestMatchDetails}
            />
            <ul className="match-details">
              {recentMatches.map(each => (
                <MatchCard match={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
