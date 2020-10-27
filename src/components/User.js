import React from 'react'
import axios from 'axios';
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Card = styled.div`
  color: #011529;
  background: #427B71;
  width: 70%;
  margin: 2%;
  padding: 3%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  img {
    border-radius: 20px;
    margin: 3%;
    height: 50vh;
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
      transition: 0.5s;
    }
    transition: 0.5s;
  }
`


const UserCard = (props) => {
  return (
    <Main>
      <Card>
        <img src={props.userData.avatar_url} alt='' />
        <div>
          <h3>{props.userData.name}</h3>
          <p>Username: {props.userData.login}</p>
          <p>Location: {props.userData.location}</p>
          <p>Profile: <a href={props.userData.html_url}>{props.userData.html_url}</a></p>
          <p>Followers: {props.userData.followers}</p>
          <p>Following: {props.userData.following}</p>
          <p>Bio: {props.userData.bio}</p>
        </div>
      </Card>
    </Main>
  )
}

export const FollowerCard = (props) => {
  return (
    <Main>
      {props.followerData.forEach(item => {
        axios.get(item.url)
          .then(res=>{
            console.log(res.data.avatar_url);

          })
          .catch(err=>{debugger})
      })}
      {/* <Card>
        <img src={newFollower.avatar_url} alt='' />
        <div>
          <h3>{newFollower.name}</h3>
          <p>Username: {newFollower.login}</p>
          <p>Location: {newFollower.location}</p>
          <p>Profile: <a href={newFollower.html_url}>{newFollower.html_url}</a></p>
          <p>Followers: {newFollower.followers}</p>
          <p>Following: {newFollower.following}</p>
          <p>Bio: {newFollower.bio}</p>
        </div>
      </Card> */}
    </Main>
  )
}

export default UserCard;