import React from "react";
import { ImYoutube2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { TbMathGreater } from "react-icons/tb";
import { GoHistory } from "react-icons/go";
import { RiPlayList2Fill } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

function App(){
   return(
    <div class="section">
      <div class="sec class=">
    <div id="headicon">
     <i id="head"><FaYoutube /></i>
     <i id="head"><ImYoutube2 /></i>
     </div>
     <div class="side">
      <p>
      <a><IoMdHome /></a>
        
        
        
        Home</p>
     </div>
     <div class="side">
      <p>
      <a><SiYoutubeshorts /></a>
        Shorts
        </p>
     </div>
     <div class="side">
      <p>
      <a><MdSubscriptions /></a>
        
        Subcription</p>
     </div>
     <hr></hr>
     <div class="side">
      <p>
        
        You
        
      <a><TbMathGreater /></a>
        </p>
     </div>
     <div class="side">
      <p>
      <a><GoHistory /></a>
        
        Histroy</p>
     </div>
     <div class="side">
      <p>
      <a><RiPlayList2Fill /></a>
        
        Playlists</p>
     </div>
     <div class="side">
      <p>
      <a><CiYoutube /></a>
        
        Your videos</p>
     </div>
     <div class="side">
      <p>
      <a><MdOutlineWatchLater /></a>
        
        Watch later</p>
     </div>
     <div class="side">
      <p>
      <a><AiOutlineLike /></a>
        
        Liked videos</p>
     </div>
     </div>
     </div>
   )
}
export default App;