import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { contacts } from '../config/data.js';
import colors from '../config/colors';

class Contacts extends Component {
  render() {
    return (
      <FlatList
      style={{ backgroundColor: colors.background }}
        data={contacts}
        renderItem={({ item }) =>
          <View>
            <Text>{item.email}</Text>
          </View>
        }
        keyExtractor={(item) => item.email}
        />
    );
  }
}

export default Contacts;
