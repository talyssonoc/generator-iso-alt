import React from 'react';

import Link from 'app/components/Link';

const Home = () => {
  return (
  <div>
    <h1>This is the home page!</h1>
    <div className="pure-g">
      <div className="pure-u-1">
        <Link
          href="/about"
          className="pure-button pure-button-primary"
        >
          About page »
        </Link>
      </div>
    </div>
  </div>);
}

export default Home;
