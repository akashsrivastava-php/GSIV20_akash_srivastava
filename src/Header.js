import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from './utils'
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {

  render() {
    const { classes, title, isSearch, searchFunction } = this.props;
    return (
        <>
          <AppBar position="sticky" style={{ background: "#fff" }}>
            <Toolbar>
                <Typography className={classes.headerTitle} variant="h6" noWrap>
                    {title}
                </Typography>
                {
                    isSearch &&
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{ "aria-label": "search" }}
                        onChange={(e)=>searchFunction(e)}
                        />
                    </div>
                }
              <div className={classes.grow} />
              <Link to='/'>
                <IconButton aria-label="search" color="inherit">
                    <div className={classes.searchIcon}>
                    <HomeIcon />
                    </div>
                </IconButton>
            </Link>
            </Toolbar>
          </AppBar>
      </>
    );
  }
}

Header.defaultProps = {
    searchFunction: () => { }
}

export default withStyles(useStyles)(Header);
