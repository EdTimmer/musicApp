import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';
import { CardList } from '../components/CardList';
import { SearchText } from '../components/SearchText';

import * as actions from '../actions';

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      width: '75%'
      // flex: 1
    },
  };
  constructor() {
    super();
    this.state = {
      albums: []
    };    
  }

  searchTracks(artist) {
    actions.searchTracks(artist).then(albums => this.setState({ albums }));
  }


  render() {
    const { albums } = this.state;
    return (
      <ScrollView style={styles.container}>
        <SearchText submitSearch={this.searchTracks}> </SearchText>
        <CardList
          data={albums}
          imageKey={"cover_big"}
          titleKey={"title"}
          buttonText={"see the details"}
        ></CardList>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});