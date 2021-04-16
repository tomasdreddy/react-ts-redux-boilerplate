import { withStyles, WithStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import styles from './Component.styles';

type Props = {
  componentProp?: componentType[]
} & WithStyles<typeof styles>;

export const Component: React.FC<Props> = ({
  componentProp = [],
  classes
}) => (
    <div className={classes.comments}>
      { componentProp.map(propItem => 
        <span>
          {propItem.keyName}
        </span>
      )}
    </div>
);

export default withStyles(styles)(Component);
