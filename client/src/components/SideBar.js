import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import About from "./About";
import CodeIcon from '@material-ui/icons/Code';
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box pl={25}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabs: {
        // left:0,
        // top:0,
        position: "fixed",
        height: "100%",
        width: 200,
        backgroundColor: "#0a3d62",
        paddingTop: 240,
        borderRight: `2px solid ${theme.palette.divider}`,
    },
    tabLabel: {
        padding: 10,
        opacity: 1,
        color: "#f5f6fa"
    },
    codeIcon: {
        padding: 10,
        alignSelf: "center",
        color: "#f5f6fa"
    }
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <CodeIcon className={classes.codeIcon} fontSize={"large"}/>
                <Tab label="About Me" className={classes.tabLabel} {...a11yProps(6)} />
                <Tab label="Experience" className={classes.tabLabel} {...a11yProps(2)} />
                <Tab label="Projects" className={classes.tabLabel} {...a11yProps(3)} />
                <Tab label="Skills" className={classes.tabLabel} {...a11yProps(4)}/>
                <Tab label="Education" className={classes.tabLabel} {...a11yProps(5)} />
                <Tab label="Contact Me" className={classes.tabLabel} {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={6}>
                <About/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Experience/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Projects/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Skills/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Education/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ContactMe/>
            </TabPanel>
        </div>
    );
}