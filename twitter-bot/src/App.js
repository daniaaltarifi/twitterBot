import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./App.css";

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [able, setAble] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [posts, setPosts] = React.useState([]);

  const [finalValue, setFinalValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setAble(false);
    setOpen(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFinalValue(value);
    setAble(true);
  };

  const handlePost = () => {
    setOpen(false);
    setPosts([...posts, finalValue]);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Tweet
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="cancel" onClick={handleClose}>
          X
        </DialogTitle>
        <hr className="hr" />
        <DialogContent style={{ display: "flex" }}>
          <img
            src="https://img.myloview.com/murals/default-avatar-profile-image-vector-social-media-user-icon-400-228654854.jpg"
            alt=""
            height={"10%"}
            width={"10%"}
          />
          <input
            autoFocus
            margin="dense"
            id="name"
            placeholder="What's happening?"
            type="email"
            fullWidth
            variant="standard"
            className="textField"
            onChange={handleChange}
          />
        </DialogContent>
        <div style={{display:"flex"}}>
          <i class="fa-sharp fa-solid fa-earth-americas"style={{ color: " #5fa0e0" ,marginLeft:"6%",marginBottom:"3%",fontWeight:"bold",marginTop:"30px"}}></i>
          <small style={{ color: "#5fa0e0" ,marginLeft:"1%",marginBottom:"3%",fontWeight:"bold",marginTop:"5%"}}>
            Everyone can reply
          </small></div>
        
          <hr className="hr" />

        <div style={{ display: "flex", gap: "3%", marginLeft: "7%" }}>
          <i class="fa-regular fa-image" style={{ color: " #5fa0e0" }}></i>
          <i class="fa-solid fa-gift" style={{ color: " #5fa0e0" }}></i>
          <i class="fa-solid fa-chart-simple" style={{ color: " #5fa0e0" }}></i>
          <i class="fa-regular fa-face-smile" style={{ color: " #5fa0e0" }}></i>
          <i
            class="fa-regular fa-calendar"
            style={{ color: " #5fa0e0" }}
          ></i>{" "} 
          </div>
        
        <DialogActions>
          <button onClick={handlePost} className="subscribeBtn">
            Post
          </button>
        </DialogActions>
      </Dialog>
      <div className="display">
        {posts.map((post, index) => (
          
          <DialogContent key={index} className="post">

            <div style={{ display: "flex"}}>
          <img
            src="https://img.myloview.com/murals/default-avatar-profile-image-vector-social-media-user-icon-400-228654854.jpg"
            alt=""
            height={"3%"}
            width={"3%"}
            style={{marginTop:"1%"}}
          />
          <h4>Dania Altarifi</h4>
            </div>
            <p>{post}</p>
            <div style={{display:"flex",gap:"4%"}}>     
                   <i class="fa-regular fa-comment"style={{ color: " #5fa0e0" }}></i>
                   <i class="fa-solid fa-retweet"style={{ color: " #5fa0e0" }}></i>
                   <i class="fa-regular fa-heart"style={{ color: " #5fa0e0" }}></i>
                   <i class="fa-solid fa-chart-simple" style={{ color: " #5fa0e0" }}></i>

                   <i class="fa-solid fa-arrow-up-from-bracket"style={{ color: " #5fa0e0" }}></i>
</div>
          </DialogContent>
        ))}
      </div>
    </div>
  );
}
