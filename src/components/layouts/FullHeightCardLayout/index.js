// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

// @ own
import './styles.scss';

const FullHeightCardLayout = ({
  children,
  title,
  compact,
  className,
}) => (
  <section
    className={cn(
      'full-height-card-layout',
      { 'full-height-card-layout--compact': compact },
      className,
    )}
  >
    <Card className="full-height-card-layout__card">
      {
        title && (
          <Typography
            className="full-height-card-layout__title"
            variant={compact ? 'h5' : 'h4'}
            color="primary"
            component="h1"
          >
            {title}
          </Typography>
        )
      }
      {children}
    </Card>
  </section>
);

FullHeightCardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  compact: PropTypes.bool,
  className: PropTypes.string,
};

FullHeightCardLayout.defaultProps = {
  title: undefined,
  compact: false,
  className: '',
};

export default FullHeightCardLayout;
