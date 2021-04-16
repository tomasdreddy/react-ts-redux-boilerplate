import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './App.styles';
import Component from './components/Component'

type Props = {} & WithStyles<typeof styles>;

const App: React.FC<Props> = ({classes}) => (
  <div className={classes.app}>
    <Component />
  </div>
);


export default withStyles(styles)(App);
