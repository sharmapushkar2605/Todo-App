import { Link } from "react-router-dom"
const Header=()=>{
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<Link to='home'>
  <a class="navbar-brand" href="home">Home</a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  </Link>
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
  <Link to='add'>
    
      <li class="nav-item ">
        <a class="nav-link" href="add">Add Course </a>
        </li>
       </Link>
       <Link to='view'>
      <li class="nav-item">
        <a class="nav-link" href="#">View Course</a>
        </li>
        </Link>
    </ul>
  </div>
</nav>
    )
}
export default Header