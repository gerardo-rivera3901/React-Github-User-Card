import React from 'react'
import './App.css';
import axios from 'axios';
import UserCard, {FollowerCard} from './components/User'

class App extends React.Component {
  state = {
    userData: [],
    followerData: [],
    newFollower: []
  }

  fetchFollower = () => {
    axios.get('https://api.github.com/users/JuniorDugue/followers')
      .then(res=>{
        this.setState({followerData: res.data})
        this.state.followerData.forEach(item=>{
          axios.get(item.url)
            .then(res=>{
              this.state.newFollower.push(res.data)
              this.setState({followerData: this.state.newFollower})
            })
            .catch(err=>{debugger})
        })
      })
      .catch(err=>{debugger})
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
        <UserCard userData={this.state.userData} />
        {this.state.followerData.map(user => <FollowerCard followerData={user} key={user.id} />)}
        {/* {this.state.followerData.map(user => <FollowerCard followerData={user} key={user.id} />)} */}
      </div>  
    )
  }
}

export default App;
