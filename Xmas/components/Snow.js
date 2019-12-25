import React from 'react'
import styled from 'styled-components';

const Flake = styled.div`
$c--background: #333;

$s--near: 10s;
$s--mid: ($s--near * 2);
$s--far: ($s--near * 3);

$ease--out-quad: cubic-bezier(.25,.46,.450,.94);


%on-top {
  z-index: 100;
  pointer-events: none;
}


.winter-is-coming {
  @extend %on-top;
  overflow: hidden;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  max-width: 100%;
  background: $c--background;
}


.snow {
  @extend %on-top;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  animation: falling linear infinite both;
  transform: translate3D(0,-100%,0);
    
  &--near {
    animation-duration: $s--near;
    background-image: url('https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-large-075d267ecbc42e3564c8ed43516dd557.png');
    background-size: contain;
    
    & + .snow--alt {
      animation-delay: ($s--near / 2);
    }
  }
    
  &--mid {
    animation-duration: $s--mid;
    background-image: url('https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-medium-0b8a5e0732315b68e1f54185be7a1ad9.png');
    background-size: contain;
    
    & + .snow--alt {
      animation-delay: ($s--mid / 2);
    }
  }
    
  &--far {
    animation-duration: $s--far;
    background-image: url('https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-small-1ecd03b1fce08c24e064ff8c0a72c519.png');
    background-size: contain;
    
    & + .snow--alt {
      animation-delay: ($s--far / 2);
    }
  }
}
      
@keyframes falling {
  0% {
    transform: translate3D(-7.5%,-100%, 0);
  }
      
  100% {
    transform: translate3D(7.5%,100%, 0);
  }  
}
`


function Snow(props){
    return(
        <Flake>
        <div className="winter-is-coming">
  <div className="snow snow--near"></div>
  <div className="snow snow--near snow--alt"></div>
  
  <div className="snow snow--mid"></div>
  <div className="snow snow--mid snow--alt"></div>
  
  <div className="snow snow--far"></div>
  <div className="snow snow--far snow--alt"></div>
</div>
</Flake>
    )
}

export default Snow;
