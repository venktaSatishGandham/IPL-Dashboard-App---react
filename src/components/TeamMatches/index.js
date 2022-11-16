// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getEachTeamDetails()
  }

  getEachTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedObject = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const updatedLatestMatchDetails = {
      competingTeam: updatedObject.latestMatchDetails.competing_team,
      date: updatedObject.latestMatchDetails.date,
      result: updatedObject.latestMatchDetails.result,
      competingTeamLogo: updatedObject.latestMatchDetails.competing_team_logo,
      firstInnings: updatedObject.latestMatchDetails.first_innings,
      id: updatedObject.latestMatchDetails.id,
      manOfTheMatch: updatedObject.latestMatchDetails.man_of_the_match,
      matchStatus: updatedObject.latestMatchDetails.match_status,
      secondInnings: updatedObject.latestMatchDetails.second_innings,
      umpires: updatedObject.latestMatchDetails.umpires,
      venue: updatedObject.latestMatchDetails.venue,
    }
    const updatedRecentMatchDetails = updatedObject.recentMatches.map(each => ({
      competingTeam: each.competing_team,
      date: each.date,
      result: each.result,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    const finalList = {
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatchDetails,
      teamBannerUrl: data.team_banner_url,
    }
    console.log(finalList)
    this.setState({teamDetails: finalList, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading} = this.state
    const {recentMatches, latestMatchDetails} = teamDetails
    // console.log(`this is from  render ${latestMatchDetails}`)
    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-container">
            <img
              className="team-matches-banner"
              alt="team banner"
              src={teamDetails.teamBannerUrl}
            />
            <p className="above-latest-matches-container">Latest Matches</p>
            <LatestMatch latestMatch={latestMatchDetails} />
            <ul className="matchCard-container">
              {recentMatches.map(each => (
                <MatchCard key={each.id} recentMatches={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
