import React from 'react';
import axios from 'axios';
class AddComment extends React.Component{
 
   render(){
        this.handleChange =(e) =>{
            this.setState({id: e.target.value});
            console.log("++++this my id+++++"+this.state.id);
        }
        this.addUser = (event) =>{
            event.preventDefault();
            let commentNode={};
            commentNode.id=this.refs.id.value;
            commentNode.name=this.refs.name.value;
            commentNode.detail=this.refs.detail.value;
            document.getElementById("myform").reset();
            alert("data Submitted Successfully");
            axios({
                method: 'post',
                url: 'http://localhost:3000/comments',
                data: commentNode,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    
                },
            })
        }
    return(
        <div class="formData">
        <form id="myform">
          <label for="id">Id</label><br/>
          <input id="input1" type="text"  ref="id" required/>
      
          <label for="name">Name</label><br/>
          <input id="input2" type="text" ref="name" required/>
      
          <label for="detail">Detail</label><br/>
          <textarea  id="input1" ref="detail"></textarea>
          
          <input type="submit" onClick={this.addUser} value="Submit"/>
        </form>
      </div>
    )
    }
    
}
export default AddComment;