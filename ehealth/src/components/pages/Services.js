import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Services() {
  return (
    <div id="service" style={{ backgroundColor: "#61c7dc" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid xs={10}>
          <br></br>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={require("./s1.jpg")}
              alt="protein"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                You can search a Hospital near You
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We provide a service of search a hospital. You can search a
                hospital you want in lahore
              </Typography>
            </CardContent>
          </Card>
          <br></br>

          <Card>
            <CardMedia
              component="img"
              height="250"
              image={require("./s2.jpg")}
              alt="Search Hospital"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                We provide home service at every door step
              </Typography>
              <Typography variant="body2" color="text.secondary">
                If you can't come to hospital then you don't need to worry
                because we are providing home services. To get that you just
                have to send your address or you can call us at this number.
              </Typography>
            </CardContent>
          </Card>

          <br></br>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={require("./eye.jpg")}
              alt="Home Service"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                We are intorducing a tool developed with Ai
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Now disease detection is so easy. We are introducing an
                Artifical Intelligence tool that can detect different
                multi-diseases through the FUNDUS image of your eye.
              </Typography>
            </CardContent>
          </Card>

          <br></br>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={require("./s3.jpg")}
              alt="Ai Disease Detection Tool"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                You can contact us on Social Media as well.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Now you can contact us on Social Media platform such as Instagram, Facebook and Twitter
              </Typography>
            </CardContent>
          </Card>
          <br></br>
          <br></br>
        </Grid>
      </Grid>
    </div>
  );
}
