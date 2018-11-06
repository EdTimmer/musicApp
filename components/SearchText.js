import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

export class SearchText extends React.Component {

  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  onChange(value) {
    this.setState({value})
  }

  onSubmitSearch() {
    const { submitSearch } = this.props;
    submitSearch(this.state.value);
  }
  render() {
    return (
      <React.Fragment>
        <FormLabel>Search an artist</FormLabel>
        <FormInput onChangeText={(event) => this.onChange(event) } />
        <Button title='Search' onPress={() => this.onSubmitSearch() }/>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})