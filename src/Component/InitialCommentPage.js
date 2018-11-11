import React from 'react';
import axios from 'axios';
import CommentPage from './CommentPage';
import style from '../CSS/CommentPage.css';
import AddComment from './AddComment.js';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

export default class InitialCommentPage extends React.Component{
 constructor(){
   super();
   this.state = {
         data : []
   }
 }
 componentDidMount = () =>
 {
    
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        };
        axios.get("http://localhost:3000/comments", axiosConfig)
            .then(res => {
                console.log(res.data);
                this.setState({ data: res.data });
                
            });

 }
 render(){
    this.deleteEvent = (index) =>{
        const data = [...this.state.data];
        data.splice(index,1);
        this.setState({
        data : data
        })
         } 
    this.addUser = () =>{

    }
    return(
      <div>
      <h3>Book APPLICTION</h3>
      <table>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>ABOUT</th>
      <th>Removal</th>
    </tr>
    {this.state.data.map((person,index)=> {
       return <CommentPage 
       id = {person.id}
       name = {person.name} 
       about = {person.about}
       delete ={()=>this.deleteEvent(index)}
       />
      })}
      
    </table>

    <Link to="/adduser"><button className="button">Add new User details</button></Link>
    
    
      </div>
    );
  } 
  }


  