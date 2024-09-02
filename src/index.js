import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Content from './Content';
import Nav from './Header';

function Youtube(){
    return(
      <div>
         <App/>
         <Nav/>
         <Content/>
      </div>
    )
}
ReactDOM.render(<Youtube/>,document.getElementById("root"));