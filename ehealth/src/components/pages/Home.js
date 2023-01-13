import React from 'react'
import Grid from '@mui/material/Grid';

function Home() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <h1 id="home-heading" style={{color:"white"}}>Welcome to eHealth Tracker</h1>
        </Grid>
      </Grid>

      <Grid container spacing={0}>

        <Grid item xs={7} md={7}>
          <div class="container">
              <div class="p-5 mt-5 bg-light rounded-3 text-center jumbot">
                  <div class="container-fluid py-5">
                      <h1 class="display-5 fw-bold">Have Access to a Health Professional anytime</h1>
                      <p class="col fs-4">
                        The Best Investment You've Ever Make is Your Own Health
                      </p>
                      <a href="/signup" class="btn btn-success btn-lg">Signup!</a>
                  </div>
              </div>
          </div>

        </Grid>

        <Grid item xs={5} md={5}>
          <div class="container-1">
            <div class="p-5 mt-5 bg-light rounded-3 text-center jumborton">
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home