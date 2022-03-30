import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, SafeAreaView, Icon, Text } from 'react-native';

import SingleCheckbox from '../../components/SingleCheckbox';
import MultiCheckbox from '../../components/MultiCheckbox';
import Sign from '../../components/Sign';
import DatePicker from '../../components/DatePicker';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button'

import styles from './styles';

export default function Form(props) {
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

      </View>
      <View style={styles.contain}>
        <View>
          <Text style={styles.header}>
            CHECK-IN FORM
          </Text>
          <Text style={{ marginTop: 10 }}>
            Please fill out the following form with accurate information.
          </Text>
          <View style={styles.line} />
          <Text style={styles.text}>
            1. Your temperature:
          </Text>
          <SingleCheckbox
            selectionMode={''}
            optionlist={["≥37.3°C", "<37.3°C"]}
            onSelectSwitch={() => { }}
          />
          <Text style={styles.text}>
            2. Your recent Covid-19 Test result:
          </Text>
          <SingleCheckbox
            selectionMode={''}
            optionlist={["Negative", "Positive", "No test"]}
            onSelectSwitch={() => { }}
          />
          <Text style={styles.text}>
            3. Your date of Covid-19 Test:
          </Text>
          <View style={styles.datePicker}><DatePicker /></View>
          <Text style={styles.text}>
            4. Exposure to people with COVID symptoms:
          </Text>
          <SingleCheckbox
            selectionMode={''}
            optionlist={["No", "Yes, within 14 days", "Others"]}
            onSelectSwitch={() => { }}
          />



          <Text style={styles.text}>
            5. Highly exposed position personnel:
          </Text>
          <MultiCheckbox
            selectionMode={''}
            optionlist={["Clinic/Isolation Ward",
              "Immigration/Customs",
              "people from Pandemic Areas by CDC",
              "Others"]}
            onSelectSwitch={() => { }}
          />
          <Text style={styles.text}>
            6. Clinical symptoms:
          </Text>
          <MultiCheckbox
            selectionMode={''}
            optionlist={["Fever", "Cough", "Sniffle", "Pharyngalgia", "Weakness", "Smell/Taste Recession", "Others"]}
            onSelectSwitch={() => { }}
          />
        </View>
        <View style={styles.sign}>
          <Text style={styles.text}>Sign your name:</Text>
          <Sign /></View>
      </View>

      {/* button */}
      <View style={[styles.buttonWrapper]}>
        <Button text={"Submit"} navigation={() => {props.navigation.navigate('Detail', { id: 1 })}} />        
      </View>
    </SafeAreaView>
  )
};
