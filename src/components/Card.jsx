import React, {useContext, useState, useEffect} from 'react';
import {QlikContext} from '../context/QlikContext';

export default props => {
  // Store Qlik APP
  const [qlik, setQlik] = useContext (QlikContext);
  if (qlik != null) {
    qlik.app.getObject ('test', 'BaWgx');
  }
  return <div id="test" style={{height: 200}} />;
};
