import React from 'react';
import styled from 'styled-components';

const Lights = styled.ul`
$globe-width:   12px;
$globe-height:  28px;
$globe-spacing: 40px;
$globe-spread: 3px;
$light-off-opacity: 0.4;

text-align: center;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  margin: -15px 0 0 0;
  padding: 0;
  pointer-events: none;
  width: 100%;
  li {
    position: relative;
    animation-fill-mode: both;
    animation-iteration-count:infinite;
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    width: $globe-width;
    height: $globe-height;
    border-radius: 50%;
    margin: $globe-spacing/2;
    display: inline-block;
    background: rgba(0,247,165,1);
    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0,247,165,1);
    animation-name: flash-1;
    animation-duration: 2s;
    &:nth-child(2n+1) {
      background: rgba(0,255,255,1);
      box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0,255,255,0.5);
      animation-name: flash-2;
      animation-duration: 0.4s;
    }
    &:nth-child(4n+2) {
      background: rgba(247,0,148,1);
      box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(247,0,148,1);
      animation-name: flash-3;
      animation-duration: 1.1s;
    }
    &:nth-child(odd) {
      animation-duration: 1.8s;
    }
    &:nth-child(3n+1) {
      animation-duration: 1.4s;
    }
    &:before {
      content: "";
      position: absolute;
      background: #222;
      width: ($globe-width - 2);
      height: $globe-height/3;
      border-radius: 3px;
      top: (0 - ($globe-height/6));
      left: 1px;
    }
    &:after {
      content: "";
      top: (0 - $globe-height/2);
      left: $globe-width - 3;
      position: absolute;
      width: $globe-spacing + 12;
      height: ($globe-height/3 * 2);
      border-bottom: solid #222 2px;
      border-radius: 50%;
    }
    &:last-child:after {
      content: none;
    }
    &:first-child {
      margin-left: -$globe-spacing;
    }
  }
}
@keyframes flash-1 {
    0%, 100% { background: rgba(0,247,165,1);
    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0,247,165,1);}
    50% { background: rgba(0,247,165,$light-off-opacity);
    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0,247,165,0.2);}
}
@keyframes flash-2 {
    0%, 100% { background: rgba(0,255,255,1);
    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0,255,255,1);}
    50% { background: rgba(0,255,255,$light-off-opacity);
    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(0,255,255,0.2);}
}
@keyframes flash-3 {
    0%, 100% { background: rgba(247,0,148,1);
    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(247,0,148,1);}
    50% { background: rgba(247,0,148,$light-off-opacity);
    box-shadow: 0px $globe-height/6 $globe-width*2 $globe-spread rgba(247,0,148,0.2);}
}
`

function LightShow(props){
  return (
    <Lights>
    <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
    </Lights>
  )
}

export default LightShow;
