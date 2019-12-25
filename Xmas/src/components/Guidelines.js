import React from 'react';
import {Button, StyledLink} from './Welcome.js';

function Guidelines() {
  return (
    <div className="Guidelines">
    <h1> Guidelines: </h1>
      <div className="rules">
      <div>
      <span>❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎</span>

      <p>
      First things first, this favor cannot be utilized as a monitary gift.
      I made this website for a reason, we all know what this is. Back into the Holiday Spirit... I wanted to offer everyone the opportunity to receive a gift straight from the heart.
       For what are the holidays for if not to connect you with Family and friends?
       Because I for one don’t believe that it’s truly meant to be the money hungry capitalistic ceremony it has become due to corporate greed and mind altering marketing.
       So if you’re with me to join the revolution and would like to accept my gift, read the rules and submit your favor request on the next page.
      </p>
      <span role='img' >⭐️</span>
      <h3>
      Do:
      </h3>
      <p>
      ✓ Feel free to challenge me
      </p>
      <p>
      ✓ Ask me to fix, design, or build something

      </p>
      <p>
      ✓ Ask me to do something I’ve never done before
      </p>
      <p>
      ✓ Ask me to help you do something to help improve or benefit you
      </p>
      <h3>
      Don't:
      </h3>
      <p>
      ✕This favor cannot be used for anything illegal, so don't bother asking me to take out your enemies.
      </p>
      <p>
      ✕This favor cannot be life threatening. 
      </p>
      <p>
      TLDR; You get to request a favor from me. See the Do’s and Don’ts for the rules.
      </p>
      <span>❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎</span>
      </div>
      </div>
      <Button><StyledLink to='/form'> Proceed </StyledLink></Button>
    </div>
  );
}

export default Guidelines;
