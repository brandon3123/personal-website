import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from "./components/About";
import Skills from "./components/Skills";
import Grid from "@material-ui/core/Grid";
import SideBar from "./components/SideBar";

function App() {
  return (
      <div>
          <SideBar />
        {/*  <Grid spacing={1} container justify={"center"}>*/}
        {/*      <Grid item lg={6}>*/}
        {/*          <About />*/}
        {/*      </Grid>*/}
        {/*      <Grid item lg={6}>*/}
        {/*          <Skills />*/}
        {/*      </Grid>*/}
        {/*  </Grid>*/}
        {/*  <Experience />*/}
        {/*<Projects />*/}
      </div>
  );
}

export default App;
