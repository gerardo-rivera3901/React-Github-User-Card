import React from 'react'
import './App.css';
import axios from 'axios';
import UserCard, {FollowerCard} from './components/User'

class App extends React.Component {
  state = {
    userData: [],
    followerData: []
  }

  fetchFollower = () => {
    axios.get('https://api.github.com/users/JuniorDugue/followers')
      .then(res=>{
        this.setState({followerData: res.data})
      })
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/gerardo-rivera3901')
      .then(res=>{
        this.setState({userData: res.data})
      })
      .catch(err=>{debugger})
    
    this.fetchFollower()
  }

  render() {
    return (
      <div>
        {/* {this.state.userData.map(user => <UserCard userData={user} />)} */}
        <UserCard userData={this.state.userData} />
        <FollowerCard followerData={this.state.followerData} />
      </div>  
    )
  }
}

export default App;
