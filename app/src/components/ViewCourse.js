import React,{useState,useEffect} from "react";
import axios from "axios";
const ViewCourse=()=>{
const [users,setUser]=useState([]);
useEffect(()=>{
    loadUsers();
    },[]);
 const loadUsers=async()=>{
 const result=await axios.get("http://localhost:3003/users")  
 setUser(result.data); 
 }     
 const deleteUser=async id =>{
 await axios.delete(`http://localhost:3003/users/${id}`)
 loadUsers();
 } 
    return(
//<h1>You can view Courses from here</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Course</th>
      <th scope="col">Duration (In years)</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
  users.map((user,index)=>(
    <tr>
   <th scope="row">{index+1}</th>
   <td>{user.name}</td>  
   <td>{user.duration}</td>
   <td>
   <button type="button" class="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</button>
   </td>
   </tr>
  ))}
  </tbody>
</table>
    )
}
export default ViewCourse