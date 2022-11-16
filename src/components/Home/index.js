// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getEachTeam()
  }

  getEachTeam = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedList = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="app-container">
            <div className="home-container-details">
              <img
                className="ipl-logo"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="home-container-ipl-name">IPL Dashboard</h1>
            </div>
            <div className="team-card-container">
              {teamsList.map(each => (
                <TeamCard key={each.id} teamCard={each} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home
