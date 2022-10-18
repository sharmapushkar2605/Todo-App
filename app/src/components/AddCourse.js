/*import axios from "axios";
import React, { useState } from "react"
const AddCourse=()=>{
    const[user,setUser]=useState({
    course:"",
    duration:""
    })
    const {course,duration}=user; 
    const onInputChange=e=>{
     setUser( {...user,[e.target.course]:e.target.value}) 
    }
    const onSubmit=async e=>{
        e.preventDefault()
       await axios.post("http://localhost:3003/users",user)
    }
    return(
        
        <form onSubmit={e=>onSubmit(e)}>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Course</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Course"
    name="course"
    value={course}
    onChange={e=>onInputChange(e)}
   />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Enter Duration</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Duration"
    name="duration"
    value={duration}
  onChange={e=>onInputChange(e)}
 />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    )
    
}
export default AddCourse
*/
import React, { useState } from "react";
import axios from 'axios'
//import { useHistory } from "react-router-dom";

const AddCourse = () => {
  //let history = useHistory();
  const [user, setUser] = useState({
    name:"",
    duration: "",
    
  });

  
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    //history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Course</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Course"
              name="name"
              value={user.name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Duration"
              name="duration"
              value={user.duration}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          
         
          <button className="btn btn-primary btn-block">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
