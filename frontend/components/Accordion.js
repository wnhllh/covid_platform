import React, { useState, useEffect } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Easing,
  TouchableOpacity
} from "react-native";

import { windowHeight, windowWidth } from '../assets/constants/Dimensions';
import Foundation from 'react-native-vector-icons/Foundation'

const Accordion = ({ children, press, childFunc }) => {
  const [childrenAnimation] = useState(new Animated.Value(0));
  const [expanded, setExpanded] = useState(false);

  React.useEffect(() => {
    childFunc.current = continueAnimation;
  }, []);
  

  const childrenInterpolate = childrenAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 500]
  });

  const childrenStyles = {
    maxHeight: childrenInterpolate
  };

  function startAnimation  ()  {
      Animated.timing(childrenAnimation, {
        toValue: expanded ? 0 : 1,
        duration: 0,
        useNativeDriver: false,
        easing: Easing.linear
      }).start(() => {
      setExpanded(!expanded);
    });
  };

  function continueAnimation () {
    Animated.timing(childrenAnimation, {
      toValue: expanded ? 1 : 0,
      duration: 0,
      useNativeDriver: false,
      easing: Easing.linear
    }).start(() => {
    setExpanded(expanded);
  });
  }

  const multiAnimation = () => {
    startAnimation();
    press();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.headingContainer}
        onPress={multiAnimation}
      >
        <Foundation name="list" size={22} color={'gray'} />
      </TouchableOpacity>
      <Animated.View style={[styles.children, childrenStyles]}>
        {children}
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: "#ECECEC40",
    borderRadius: 5
  },
  headingContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    left: windowWidth - 45,
    top: -45,
    width: 25,
    height: 25,
  },
  children: {
    overflow: "hidden",
    backgroundColor: 'white',
    top: -35,
    borderRadius: 7,
  }
});
