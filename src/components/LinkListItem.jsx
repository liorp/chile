import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';


function ListItemLink({ icon, primary, to }) {
  const renderLink = React.useMemo(
    // We need the props inside the forwardRef element declaration
    // eslint-disable-next-line react/jsx-props-no-spreading
    () => React.forwardRef((props, ref) => <RouterLink to={to} ref={ref} {...props} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element.isRequired,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ListItemLink;
