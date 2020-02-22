import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <Image size='large' circular src="/images/landing.png"/>
          </Grid.Column>

          <Grid.Column width={8}>
            <h1>Welcome to Wombo</h1>
            <p>Wombo is a simple socializing website for you to make friends</p>
          </Grid.Column>

        </Grid>
        
    );
  }
}

export default Landing;
