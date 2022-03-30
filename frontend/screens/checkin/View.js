import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, SafeAreaView, Icon, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import BackButton from '../../components/BackButton'
import Button from '../../components/Button'

import styles from './styles';

const checkinInfo = { "created_at": "2022-03-01T23:58:25.500747", "description": "A place in the city", "id": 1, "name": "Rogers Hall" }

export default function Ticket(props) {
  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString())
    }, 1000)
    return () => clearInterval(secTimer);
  }, [])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ zIndex: 2 }}>
        <BackButton navigation={() => { props.navigation.goBack() }} />
      </View>

      <ScrollView style={styles.contain}>
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}>
            CHECK-IN CODE
          </Text></View>
        <View style={styles.codeWrapper}>
          <Text
            style={{ margin: 20, textAlign: 'center', fontSize: 19, fontWeight: 'bold' }}>
            {'At The Entrance, Show The Code'}
          </Text>
          <View style={styles.qrcode}>
            <QRCode
              value={checkinInfo.name + " " + checkinInfo.description}
              size={225}
              color='green'
            />
          </View>
          <Text style={styles.time}>
            {dt}
          </Text>
        </View>
      </ScrollView>

      {/* button */}
      <View style={[styles.buttonWrapper]}>
        <Button text={"Download"} navigation={() => {props.navigation.navigate('VENUE', { id: 1 })}} />        
      </View>
    </SafeAreaView>
  )
};