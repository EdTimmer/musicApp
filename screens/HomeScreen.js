import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      width: '90%'
    },
    // headerRight: (<View />),
    // headerLeft: (<View />)
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="navigate to Albums" onPress={() => this.props.navigation.navigate('Albums')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
