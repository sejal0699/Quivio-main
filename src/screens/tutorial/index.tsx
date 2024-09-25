import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import styles from './styles';
const { width } = Dimensions.get('window');

class TutorialScreen extends Component {
  state = {
    activeSlide: 0,
  };
  

  handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const currentSlide = Math.round(scrollPosition / width);
    this.setState({ activeSlide: currentSlide });
  };

  handleContinue = () => {
    this.props.navigation.replace('login'); 
  };

  render() {
    const { activeSlide } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.handleScroll}
          scrollEventThrottle={16}
        >
          
          <View style={styles.screen}>
            <Image source={require('../../assets/images/onboard.jpg')} style={styles.image} />
            <Text style={styles.title}>Welcome to the Tutorial</Text>
            <Text style={styles.description}>
              Learn how to use our app with this brief tutorial. We'll guide you through the main features and help you get started.
            </Text>
          </View>

         
          <View style={styles.screen}>
            <Image source={require('../../assets/images/tuto.jpg')} style={styles.image} />
            <Text style={styles.title}>Discover New Features</Text>
            <Text style={styles.description}>
              Explore more advanced features and get the most out of our app. Get Started!
            </Text>
          </View>
        </ScrollView>

        <View style={styles.pagination}>
          <View style={[styles.dot, activeSlide === 0 ? styles.activeDot : null]} />
          <View style={[styles.dot, activeSlide === 1 ? styles.activeDot : null]} />
        </View>

      
        <TouchableOpacity style={styles.button} onPress={this.handleContinue}>
          <Text style={styles.buttonText}>
            {activeSlide === 1 ? 'Get Started' : 'Swipe'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default TutorialScreen;
