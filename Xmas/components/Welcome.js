import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import LightShow from './Lights.js';


export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;`

export const StyledLink = styled(Link)`
text-decoration: none;
color: red;
:link {
  text-decoration: none;
}
:visited {
  text-decoration: none;
}
:hover {
  text-decoration: underline;
}
:active {
  text-decoration: underline;
}
`

function Welcome(props) {
  return (
    <Fragment>
    <div className="Welcome">
      
    <LightShow/>

    <h2>  Merry Christmas {props.name}! </h2>
  <p>{props.name === 'Erin'? "You know I love you girl! And if you don't you better recognize! Click below to cash in your favor:": "You've been granted one favor from Sean. Click below to redeem."}</p>
  <Button>  <StyledLink to='/guidelines'> Click Here </StyledLink></Button>
    </div>
    </Fragment>
  );
}

export default Welcome;
