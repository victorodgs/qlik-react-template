import React, {createContext, useState, useEffect} from 'react';
import qlikLoader, {config} from '../qlik';

export const QlikContext = createContext ();

export const QlikProvider = props => {
  const [qlik, setQlik] = useState (null);

  useEffect (() => {
    qlikLoader.then (resp => {
      const app = resp.openApp ('Vendas Tempo Real.qvf', config);
      setQlik ({app});
    });
  }, []);

  return (
    <QlikContext.Provider value={[qlik, setQlik]}>
      {props.children}
    </QlikContext.Provider>
  );
};
