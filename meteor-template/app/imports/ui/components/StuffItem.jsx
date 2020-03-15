import React from 'react';
import { Card, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  render() {
    return (
        <Card>
          <Image src={this.props.stuff.image}/>
          <Card.Content>
            <Card.Header>{this.props.stuff.name}</Card.Header>
            <Card.Meta>{this.props.stuff.age}</Card.Meta>
            <Card.Description> {this.props.stuff.name} is a {this.props.stuff.occupation}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.stuff.gender}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItem);
