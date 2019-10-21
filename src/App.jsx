import React, {useEffect, useContext} from 'react';
import {QlikProvider} from './context/QlikContext';

import Card from './components/Card';

const App = () => {
  return (
    <QlikProvider>
      <main className="mashup">
        <div className="mashup__content"></div>
        <Card></Card>
      </main>
    </QlikProvider>
  );
};

export default App;
