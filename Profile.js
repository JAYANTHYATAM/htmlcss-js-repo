import React from "react";

import { useNavigate,useParams } from "react-router-dom";

const Profile=()=>{

let navigate=useNavigate();

let {username, age}=useParams();

return(

    <div>

        <h1>This is a Profile Page for {username} and age is {age}</h1>

        <button onClick={()=>{navigate("/BakeryPage")}}> Go to Bakery Page</button>

    </div>

)

}

export default Profile;