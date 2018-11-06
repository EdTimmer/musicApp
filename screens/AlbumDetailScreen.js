import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default class AlbumDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Album Detail',
  };

  render() {
    const album = this.props.navigation.getParam('album', {});
    return (
      <ScrollView style={styles.container}>
        <View><Text> {album.title} </Text></View>
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
