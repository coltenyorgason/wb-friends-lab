import { useState, useEffect } from 'react'
import axios from 'axios'
export default function App() {

  const [friends, setFriends] = useState([])
  const [picture, setPicture] = useState("")
  const [name, setName] = useState("")
 
  const addFriend = () => {
  const friendsArr = [...friends]
    friendsArr.push( { picture: picture, name: name } )
    setFriends(friendsArr)
    setPicture("")
    setName("")
  }
  
  async function getSavedFriends() {
const response = await axios.get('/api/friends')
setFriends(response.data)
  }
  useEffect(() => {
getSavedFriends()
  },[])


  const friendInfo = friends.map(friend => {
    return (
    <div> 
      <img src={friend.picture} />
      <span>
        {friend.name}
      </span>
    </div>
    )
  })

  return (
    <div>
      <label htmlFor="picture">Picture</label>
      <input id='picture' value={picture} type='text' onChange={(evt)=>setPicture(evt.target.value)}/>
      
      
      <label htmlFor="name">Name</label>
      <input id='name' type='text' onChange={(evt)=>setName(evt.target.value)}/>
    
    <button onClick={addFriend}>Add Friend</button>
    {friendInfo}
    </div>
  )
} 
