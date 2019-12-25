import React from 'react';
import styled from 'styled-components';

const Candy = styled.div`
$bg-color: #FAFAFA;
$candy-color: #D33144, #FFFFEE;
$christmas-color: #31D354;
$anim-time: 8s;
$candy-w: 100px;
$candy-h: 300px;


  overflow: hidden;
  display: flex;
  opacity: 0;
  margin: calc(50vh - 150px) auto 0 auto;
  width: $candy-w;
  height: $candy-h;
  border-radius: $candy-w;
  border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;
  background-color: $bg-color;
  box-shadow: 40px 20px 15px -30px rgba(255,0,0,0.1);
  transform: rotate(90deg);
  animation: PARTY $anim-time cubic-bezier(.87,-.41,.19,1.44) infinite;
}


}
`
function Loader(props){
  return (
    <Candy>
    </Candy>
  )
}

export default Loader;
