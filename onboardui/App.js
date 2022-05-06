import React, { useState } from 'react';
import Home from './components/Home';

import Onboard from './components/Onboard';

const App = () => {
  const [showOnboard, setShowOnboard] = useState(false);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  const handleOnboardStart = () => {
    setShowOnboard(true);
  };

  return (
    <>
      {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
      {!showOnboard && <Home handleBackClick={handleOnboardStart} />}
    </>
  );
};

export default App;
