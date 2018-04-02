import React from 'react'
import {StyleSheet, Text, View, Modal } from 'react-native'
import RoundedButton from './App/Components/RoundedButton'
import FullButton from './App/Components/FullButton'
import Tabbar from 'react-native-tabbar-bottom'


export default class ServeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <RoundedButton onPress={this.toggleModal}>
          Welcome to the serve screen!
        </RoundedButton>

        <Tabbar
      stateFunc={(tab) => {
        this.props.navigation.navigate(tab.page, {});
      }}
      tabs={[
        {
          page: "Home",
          icon: "md-home",
        },
        {
          page: "Serve",
          icon: "md-heart",
        },
        {
          page: "Encouragement",
          icon: "ios-cafe",
        },
        {
          page: "PostJoin",
          icon: "md-people",
        },
      ]}
    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84C9E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});