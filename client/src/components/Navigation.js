import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WorkIcon from '@material-ui/icons/Work';
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import ContactMe from "./ContactMe";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#0a3d62"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem key={'About Me'} component={Link} to={"/About Me"}>
                    <ListItemIcon>
                        <AccountCircle style={{color: "white"}} />
                    </ListItemIcon>
                    <ListItemText primary={'About Me'} />
                </ListItem>
                <ListItem key={'Experience'} component={Link} to={"/Experience"}>
                    <ListItemIcon>
                        <WorkIcon style={{color: "white"}} />
                    </ListItemIcon>
                    <ListItemText primary={'Experience'} />
                </ListItem>
                <ListItem key={'Projects'} component={Link} to={"/Projects"}>
                    <ListItemIcon>
                        <CodeIcon style={{color: "white"}} />
                    </ListItemIcon>
                    <ListItemText primary={'Projects'} />
                </ListItem>
                <ListItem key={'Skills'} component={Link} to={"/Skills"}>
                    <ListItemIcon>
                        <AccountCircle style={{color: "white"}} />
                    </ListItemIcon>
                    <ListItemText primary={'Skills'} />
                </ListItem>
                <ListItem key={'Education'} component={Link} to={"/Education"}>
                    <ListItemIcon>
                        <SchoolIcon style={{color: "white"}} />
                    </ListItemIcon>
                    <ListItemText primary={'Education'} />
                </ListItem>
                <ListItem key={'Contact Me'} component={Link} to={"/Contact Me"}>
                    <ListItemIcon>
                        <MailIcon style={{color: "white"}} />
                    </ListItemIcon>
                    <ListItemText primary={'Contact Me'} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Brandon Nolan
                    </Typography>
                </Toolbar>
            </AppBar>
            <BrowserRouter>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === "rtl" ? "right" : "left"}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>

                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    <Switch>
                        <Route exact path="/" render={() => <About />} />
                        <Route exact path="/About Me" render={() => <About />} />
                        <Route path="/Experience" render={() => <Experience />} />
                        <Route path="/Projects" render={() => <Projects />} />
                        <Route path="/Skills" render={() => <Skills />} />
                        <Route path="/Education" render={() => <Education />} />
                        <Route path="/Contact Me" render={() => <ContactMe />} />
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    )
};

export default ResponsiveDrawer;
