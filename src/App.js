import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from "./components/About";
import Skills from "./components/Skills";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
      <div>
          <Grid spacing={1} container justify={"center"}>
              <Grid item lg={6}>
                  <About />
              </Grid>
              <Grid item lg={6}>
                  <Skills />
              </Grid>
          </Grid>
        <Projects />
      </div>
  );
}

export default App;
