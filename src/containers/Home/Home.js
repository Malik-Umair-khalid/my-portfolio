import profileImage from "../../assets/images/profile.png"
import { Button } from "@mui/material";
function Profile() {
    return(
        <>
        <div className = "container">
            <div className="row">
                <div className="col-lg-7 col-sm-12 p-5">
                   <h1>Hello!</h1>
                   <p>My Name Is Malik Umair Khalid. I am a Stududent of <b> saylani mass It Training Program. </b>  I Am Professional <b>MERN Stack Developer</b>
                    .I as a skillful feb developer. I Can Make Websites Mobile Hybrid Apps. You Can See My Prjects.
                    <br />
                    <br />
                    <Button variant="outlined">My Projects</Button>
                   </p> 
                </div>
                <div className="col-lg-5 col-sm-12">
                    <img src= {profileImage} alt="" width = "500" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;