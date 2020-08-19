import React from 'react'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles =  makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
    },
  }),
);

const ButtonAppBar = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ToolBar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>Top</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/about" className={classes.link}>About</Link>
          </Button>
          <Button color="inherit">
            <Link to="/user" className={classes.link}>User</Link>
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default ButtonAppBar