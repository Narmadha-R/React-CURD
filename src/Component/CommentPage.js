import React from 'react';
const CommentPage =(props) =>{
    return(
    <tbody>
    <tr>

      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.about}</td>
      <td><button class="button" onClick={props.delete}>Edit</button> <button class="button" onClick={props.delete}>Delete</button></td>
    
  </tr>
  </tbody>
    )
}
export default CommentPage;