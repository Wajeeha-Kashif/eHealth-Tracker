import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function News() {
  return (
    <div id="news">
      <Grid container justifyContent="center" alignItems="center">
        <Grid xs={10}>
          <br></br>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={require('./n1.jpg')}
              alt="protein"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Why is protein important for building muscle?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Protein is made up of amino acids that act as building blocks for cells and tissues in the body.
                There are 20 amino acids that combine to form proteins. When a person eats protein, it is digested and broken down into amino acids, which are involved in many processes in the body, 
                including tissue growth and repair, immune function, and energy production.
              </Typography>
            </CardContent>
          </Card>
          <br></br>

          <Card >
          <CardMedia
            component="img"
            height="140"
            image={require('./n2.jpg')}
            alt="heart"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Can zero-calorie sweeteners raise your risk for cardiovascular disease?
            </Typography>
            <Typography variant="body2" color="text.secondary">
            While artificial sweeteners may seem like a good alternative to sugar to reduce caloric intake, 
            a study published in The BMJTrusted Source suggests there may be a connection between such sweeteners and an increased risk 
            for cardiovascular disease (CVD), including stroke.
            </Typography>
          </CardContent>
          </Card>

          <br></br>
          <Card >
            <CardMedia
              component="img"
              height="140"
              image={require('./n3.jpeg')}
              alt="Diabetes"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Diabetes: Why a gut bacteria protein may provide a new pathway for treatments
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A new study published in Cell Metabolism shows that a protein called beta cell expansion factor
                A (BefA) secreted by gut bacteria could induce the replication of insulin-producing beta cells in neonatal mice.
                The study also provides a potential explanation of how the gut microbiome could play a role in the development of diabetes.
              </Typography>
            </CardContent>
            <br></br>
          </Card>

          <br></br>
          <Card >
            <CardMedia
              component="img"
              height="140"
              image={require('./n4.png')}
              alt="heart app"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Could a phone app become an easy, at-home heart monitor?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Everyone is familiar with the “lub-dub… lub-dub” sounds the heart makes. 
                The reason that the heart makes these sounds is related to its function of circulating blood throughout the body.
                The heart muscle pumps blood by continuously contracting and relaxing. 
                During contraction of the heart, we hear the “lub” sound, known as the first heart sound, S1, and during relaxation of the heart, we hear the “dub” sound —the second heart sound, S2.
              </Typography>
            </CardContent>
          </Card>
          <br></br>

          <Card >
            <CardMedia
              component="img"
              height="140"
              image={require('./n5.jpeg')}
              alt="covid"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Covid protection may be boosted by genes, study shows
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Some people with "lucky genes" or certain DNA may get extra strong protection after Covid jabs, say scientists from University of Oxford.
                The researchers found people with a version of a gene called HLA-DQB1*06 had a bigger antibody response following vaccination than others.
                About 30 to 40% of the UK population have this type.
                The preliminary work appears in Nature Medicine. More research is needed to confirm it.
              </Typography>
            </CardContent>
          </Card>
          <br></br><br></br><br></br>
        </Grid>
      </Grid>
    </div>
  )
}

export default News
