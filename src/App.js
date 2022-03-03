// import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {addUser, deleteUser, upDateUsername} from './features/Users'
import { useState } from 'react';

function App() {
  const dispatch=useDispatch();
  const userList=useSelector((state)=>state.users.value)

  const[name, setName]=useState("");
  const[username, setUserame]=useState("");
  const[newUsername, setNewusername]=useState("");

  return (
    <div className="App">
      {" "}
<div className="addUser">
  <input className='input' type="text" placeholder='Name...' onChange={(event)=>{setName(event.target.value)}}/>
  <input className='input' type="text" placeholder='Username...' onChange={(event)=>{setUserame(event.target.value)}}/>
  <button className="Add" onClick={()=>{
    dispatch(addUser({
      id:userList[userList.length-1].id+1,
      name,
      username}))}}>Add User</button>
</div>
<div className="dispalyUsers">
{
  
  userList.map((user)=>{
    console.log(user.name)
    return (
      <div className="card">
        <h3>name: {user.name}</h3>
        <h4>username: {user.username}</h4>
        <input className='input' type="text" placeholder='New Username...' onChange={(event)=>{
          setNewusername(event.target.value);
          // event.target.value="";
          }}/>
  
      <button className='Edit' onClick={

        ()=>{dispatch(upDateUsername({id:user.id, username: newUsername}))}
      }>Update name</button>
      <button className='delete'onClick={()=>{dispatch(deleteUser({id:user.id}))}}>Delete</button>
      </div>
    
    )
  })
}

</div>
    </div>
  );
}

export default App;
