import { IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Redirect, RouteComponentProps, Route } from 'react-router';
import Tab1 from './Tab1';

const Tab1Container: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet>
      <Route path={`${match.url}/home`} exact={true} component={Tab1} />
      <Redirect from={`${match.url}`} to={`${match.url}/home`} exact={true} />
    </IonRouterOutlet>
  );
};

export default Tab1Container;
