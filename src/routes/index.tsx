import React, { useEffect } from 'react';

import Colors from '../styles/colors.json';

import { useSelector } from 'react-redux';
import AuthRoutes from './AuthRoute';
import MainRoutes from './MainRoute';


const Routes: React.FC = () => {
  const { signedIn } = useSelector(state => state.auth);

  return(
    <>
      {signedIn ? <MainRoutes />:<AuthRoutes />}
    </>
  )
};

export default Routes;