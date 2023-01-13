import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";

export default function App() {
  return (
    <div className="aboutus">
      <Grid container>
        <Grid item xs={12} md={12}>
          <h1 id="home-heading"> Welcome to eHealth Tracker</h1>
        </Grid>
      </Grid>

      <Grid item xs={7} md={7}>
        <div class="container">
          <div
            style={{
              height: "20rem",
              marginTop: "4rem",
              marginBottom: "4rem",
              backgroundColor: "white",
            }}
          >
            <div class="container-fluid py-5">
              <h1>We care about your health</h1>
              <h1 class="display-5 fw-bold">
                Have Access to a Health Professional anytime
              </h1>
              <p class="col fs-4">
                The Best Investment You've Ever Make is Your Own Health
              </p>
            </div>
          </div>
        </div>
      </Grid>

      <footer>
        <div class="footer" style={{ marginTop: "1rem" }}>
          <div class="col_1">
            <h2>eHealthTracker</h2>
            <div class="heart">
              <i class="fa-solid fa-angle-down"></i>
              <span>Build with heart</span>
            </div>
            <div class="footer_description">We care about you</div>
            <div class="footer-socialIcon">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </div>

          <div class="col_2">
            <div class="links-container">
              <h4 class="links-heading">Built</h4>
              <div class="divider"></div>
              <div class="links-description">
                <li>
                  <a href="https://reactjs.org/">
                    <span>Reactjs</span>
                  </a>
                </li>
                <li>
                  <a href="https://firebase.google.com/">
                    <span>Firebase</span>
                  </a>
                </li>
                <li>
                  <a href="https://mui.com/">
                    <span>MUI</span>
                  </a>
                </li>
              </div>
            </div>
            <div class="links-container">
              <h4 class="links-heading">Resources</h4>
              <div class="divider"></div>

              <div class="links-description">
                <li>
                  <a href="#">
                    <span>How it works</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Help center</span>
                  </a>
                </li>
                <li>
                  <a href="/blogs">
                    <span>Blog</span>
                  </a>
                </li>
              </div>
            </div>
            <div class="links-container">
              <h4 class="links-heading">Developers</h4>
              <div class="divider"></div>

              <div class="links-description">
                <li>
                  <a href="https://www.linkedin.com/in/usman196298">
                    <span>Muhammad Usman</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/faisal-latif18">
                    <span>Faisal Latif</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ahmad-noor-b762b2213">
                    <span>Ahmad Noor</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/wajeeha-kashif-b49a77213">
                    <span>Wajeeha Kashif</span>
                  </a>
                </li>
              </div>
            </div>
            <div class="links-container">
              <h4 class="links-heading">ContactUs</h4>
              <div class="divider"></div>

              <div class="links-description">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    style={{ color: "#002266" }}
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    style={{ color: "#cc0052" }}
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    style={{ color: "#002266" }}
                  >
                    <LinkedInIcon />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <span>2022 @ eHealthTracker</span>
          <i class="fa-solid fa-circle"></i>
          <span>Terms of Services</span>
          <i class="fa-solid fa-circle"></i>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}
