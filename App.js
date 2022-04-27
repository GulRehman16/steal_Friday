import React from 'react';
import MyStack from './src/navigation/stack';
import ActiveDeals from './src/screens/homes/activeDeals';
import Notification from './src/screens/homes/notification';

const App = props => {
  return <MyStack {...props} />;

  // <ActiveDeals />;
};

export default App;
