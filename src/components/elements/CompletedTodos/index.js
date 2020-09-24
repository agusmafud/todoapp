// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// @ own
import './styles.scss';

const CompletedTodos = ({
  className,
  message,
  expandLabel,
  expanded,
  toggleExpanded,
  children,
}) => (
  <div className={cn('completed-todos', className)}>
    <div
      className="completed-todos__header"
      onClick={toggleExpanded}
      onKeyPress={toggleExpanded}
      role="button"
      tabIndex="0"
    >
      <IconButton
        className={cn(
          'completed-todos__expand',
          { 'completed-todos__expand-open': expanded },
        )}
        onClick={toggleExpanded}
        aria-expanded={expanded}
        aria-label={expandLabel}
      >
        <ExpandMoreIcon />
      </IconButton>
      <Typography
        variant="h6"
        align="left"
        color="primary"
        component="h2"
      >
        {message}
      </Typography>
    </div>
    {children}
  </div>
);

CompletedTodos.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
  expandLabel: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleExpanded: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

CompletedTodos.defaultProps = {
  className: '',
};

export default CompletedTodos;
