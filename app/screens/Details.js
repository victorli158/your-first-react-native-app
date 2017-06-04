import React, { Component, PropTypes} from 'react';
import { ScrollView } from 'react-native';
import { Header, Actions, Info, UserDetails } from '../components/UserDetails';
import colors from '../configs/colors';

class Details extends Component {
  render() {
    const contact = this.props.navigation.state.params;
    return (
      <View>
        <UserDetails {...contact} />
      </View>
    );
  }
}

Details.propTypes = {
  navigation: PropTypes.object,
};

export default Details;
