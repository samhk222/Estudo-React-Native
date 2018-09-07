import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class Robot extends React.Component {
  render() {
    return (
      
      //<Image source={{ uri: "http://vcbela.com/wp-content/uploads/2015/05/peso_5.jpg" }} style={{ height: 400, width: 300 }}></Image> 
      <Image source={ require('../assets/img/call_of_duty.jpg') } style={{ height: 400, width: 300 }}></Image> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
