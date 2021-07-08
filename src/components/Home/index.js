// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamDetails: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teams = await response.json()
    const updatedTeams = teams.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updatedTeams)
    this.setState({teamDetails: updatedTeams, isLoading: false})
  }

  render() {
    const {isLoading, teamDetails} = this.state
    return (
      <div className="home-background">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <div className="ipl-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl-logo"
                className="ipl-logo"
              />
              <h1 className="ipl-logo-heading">IPL Dashboard</h1>
            </div>
            <ul className="home-teams-container">
              {teamDetails.map(each => (
                <TeamCard teamDetail={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
