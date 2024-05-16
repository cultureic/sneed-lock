import React from 'react';
import banner from "./assets/Banner.png"
import sneedlock from './assets/sneedlock.png'

const App = () => {
  return (
    <div className="sneed-page">
      <header>
        <img className="sneed-banner" src={banner} alt="SneedLock Banner" />
        <h1>SneedLock: Empowering Community Projects</h1>
        <img className="sneed-banner" src={sneedlock} alt="SneedLock Banner" />
      </header>
      <section className="sneedlock-section">
        <h2>What is SneedLock?</h2>
        <p>
          SneedLock is a decentralized security protocol that enables community projects and holders to benefit from enhanced security measures provided by the Sneed Network.
        </p>
        <p>
          It ensures token contract safety and LP safety, providing a secure environment for community-driven initiatives.
        </p>
      </section>
      <section className="how-to-sneedlock-section">
        <h2>How to SneedLock</h2>
        <ol>
          <li>Transfer the LP NFT on ICPSwap to the DeFi canister (ok64y-uiaaa-aaaag-qdcbq-cai).</li>
          <li>Add the DAO as the contract controller using Quill and DFX commands.</li>
        </ol>
        <p>
          Detailed instructions for each step can be found in the tutorial below.
        </p>
      </section>
      <section className="tutorial-section">
        <h2>Tutorial: Deploying Tokens on ICP by Forking Sneed</h2>
        <p>
          In this tutorial, you'll learn how to deploy tokens on the Internet Computer by forking Sneed.
        </p>
        <h3>Step 1: Transfer LP NFT</h3>
        <p>Transfer the LP NFT on ICPSwap to the DeFi canister (ok64).</p>
        <h3>Step 2: Add DAO as Controller</h3>
        <p>Add the DAO as the contract controller using Quill and DFX commands:</p>
        <code>
          dfx canister update-settings --add-controller=fp274-iaaaa-aaaaq-aacha-cai TOKEN_CANISTER_ID --network ic
        </code>
      </section>
      <footer>
        <p>For more information, visit <a href="https://github.com/icsneed/sneed">Sneed GitHub Repository</a></p>
      </footer>
    </div>
  );
};

export default App;
