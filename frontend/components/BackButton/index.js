import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';

import Feather from 'react-native-vector-icons/Feather'
import styles from './styles';

const BackButton = ({navigation}) => {
    return (
    <TouchableOpacity onPress={navigation}>
          <View style={[styles.backButton, { position: 'absolute', top: 5, left: 20, }]}>
            <Feather name="chevron-left" color="white" size={26}></Feather>
          </View>
        </TouchableOpacity>
    )
}

export default BackButton;