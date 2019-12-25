import React from 'react';
import styled from 'styled-components';
import {Redirect} from "react-router-dom";

// TODO: make private:
const approvedUsers = ['Daneille', 'Wallace', 'Erin', 'Taseri', 'Mike','Michael', 'Tasha', 'Jason', 'Bryant', 'Menasseh', 'Brittney', 'Test']
let text;
let Text2 = styled.p`
color: red;
`;
let error;

function Login(props) {



const checkApproval = (event) => {
  if (event.key === "Enter") {
  let name = event.target.value;
  let value= approvedUsers.includes(name);
  props.setApproval(value);
  props.setSubmission(true);
} else {
  props.setSubmission(false);
}

}

props.name? text = 'Hint: Press Enter to Submit. No Nicknames' : text ='';
!props.approved && props.submitted? error="Whoops look like you're not on  my list :P": error='';

return props.approved && props.submitted? <Redirect to='/welcome' />: (
    <div className="Login">
    <h2> Enter Your First Name: </h2>
      <input type="text" name="name" value={props.name} onChange={(e)=> props.onKeyUp(e)} onKeyPress={(e)=>checkApproval(e)} autoFocus/>
      <p>{text}</p>
      <Text2>{error}</Text2>
    </div>
  )
}

export default Login;
