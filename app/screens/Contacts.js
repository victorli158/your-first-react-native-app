import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { contacts } from '../config/data.js';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

class Contacts extends Component {
  handleRowPress(item) {
    return null;
  }

  render() {
    return (
      <FlatList
      style={{ backgroundColor: colors.background }}
        data={contacts}
        renderItem={({ item }) =>
          <ListItem contact={item} onPress={() => this.handleRowPress(item)}/>
        }
        keyExtractor={(item) => item.email}
        />
    );
  }
}

export default Contacts;
