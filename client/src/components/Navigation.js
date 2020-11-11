import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import WorkIcon from '@material-ui/icons/Work';
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Switch, Route, Link, BrowserRouter} from "react-router-dom";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import ContactMe from "./ContactMe";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import NotFound from "./NotFound";
import BannerImage from "../images/coding-background.jpg"

const drawerWidth = 195;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("lg")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        boxShadow: "inset 0 0 0 1000px rgba(10,61,98, .97)",
        backgroundImage:`url(${BannerImage})`,
        border: "none",
        marginLeft: drawerWidth,
        [theme.breakpoints.up("lg")]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("lg")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        display: "flex",
        flexDirection: "row",
        border: "none",
        width: drawerWidth,
        boxShadow: "inset 0 0 0 1000px rgba(10,61,98, .97)",
        backgroundImage:`url(${BannerImage})`,
        alignItems: "center",
        paddingBottom: 80
    },
    content: {
        flex: 1,
        padding: theme.spacing(3)
    },
    socialLinks: {
        display: "flex",
        marginLeft: "auto",
        marginRight: -12
    },
    socialLinkIcon: {
        [theme.breakpoints.down("md")]: {
            fontSize: "smaller"
        },
        fontSize: "larger",
        "&:hover": {
            opacity: 0.5
        },
    }
}));

function ResponsiveDrawer(props) {
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const autoCloseDrawerFromOnClickForMobile = () => {
        if (mobileOpen) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <List>
                <ListItem key={'About'} component={Link} to={"/About"} onClick={autoCloseDrawerFromOnClickForMobile}>
                    <ListItemIcon>
                        <AccountCircle style={{color: "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={'About'} className={'navLink'}/>
                </ListItem>
                <ListItem key={'Experience'} component={Link} to={"/Experience"} onClick={autoCloseDrawerFromOnClickForMobile}>
                    <ListItemIcon>
                        <WorkIcon style={{color: "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={'Experience'} className={'navLink'} onClick={autoCloseDrawerFromOnClickForMobile}/>
                </ListItem>
                <ListItem key={'Projects'} component={Link} to={"/Projects"}>
                    <ListItemIcon>
                        <GitHubIcon style={{color: "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={'Projects'} className={'navLink'} onClick={autoCloseDrawerFromOnClickForMobile}/>
                </ListItem>
                <ListItem key={'Skills'} component={Link} to={"/Skills"} onClick={autoCloseDrawerFromOnClickForMobile}>
                    <ListItemIcon>
                        <CodeIcon style={{color: "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={'Skills'} className={'navLink'}/>
                </ListItem>
                <ListItem key={'Education'} component={Link} to={"/Education"} onClick={autoCloseDrawerFromOnClickForMobile}>
                    <ListItemIcon>
                        <SchoolIcon style={{color: "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={'Education'} className={'navLink'}/>
                </ListItem>
                <ListItem key={'Contact'} component={Link} to={"/Contact"} onClick={autoCloseDrawerFromOnClickForMobile}>
                    <ListItemIcon>
                        <MailIcon style={{color: "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={'Contact'} className={'navLink'}/>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" noWrap className={'nameFont'}>
                        Brandon Nolan
                    </Typography>
                    <div className={classes.socialLinks}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            href={'https://github.com/brandon3123'}
                            target={'_blank'}
                        >
                            <GitHubIcon className={classes.socialLinkIcon}/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            href={'https://linkedin.com/in/brandon-n-0128a144'}
                            target={'_blank'}
                        >
                            <LinkedInIcon className={classes.socialLinkIcon}/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <BrowserRouter>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden mdUp implementation="css">
                        <SwipeableDrawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === "rtl" ? "right" : "left"}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            on
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </SwipeableDrawer>
                    </Hidden>
                    <Hidden mdDown implementation="css">
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
                    <div className={classes.toolbar}/>
                    <Switch>
                        <Route exact path="/" render={() => <About/>}/>
                        <Route exact path="/About" render={() => <About/>}/>
                        <Route path="/Experience" render={() => <Experience/>}/>
                        <Route path="/Projects" render={() => <Projects/>}/>
                        <Route path="/Skills" render={() => <Skills/>}/>
                        <Route path="/Education" render={() => <Education/>}/>
                        <Route path="/Contact" render={() => <ContactMe/>}/>
                        <Route render={() => <NotFound/>}/>
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
