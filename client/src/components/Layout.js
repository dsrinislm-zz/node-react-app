import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';
import { Outlet } from 'react-router-dom-next';
import Navbar from './Navbar';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: '5px',
    right: theme.spacing(2),
    zIndex: 9999,
  },
  table: {
    marginTop: theme.spacing(2),
  },
  container: {
    marginBottom: theme.spacing(6),
  },
  menuBar: {
    top: 'auto',
    bottom: 0,
  },
}));
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (
      event.target.ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.root}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Layout = (props) => {
  const classes = useStyles();
  const { title } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Grid
          container
          spacing={3}
          className={classes.container}
        >
          <Outlet />
        </Grid>
      </Container>
      <ScrollTop {...props}>
        <Fab
          color="secondary"
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <AppBar
        position="fixed"
        color="primary"
        className={classes.menuBar}
      >
        <Navbar />
      </AppBar>
    </React.Fragment>
  );
};

export default Layout;
