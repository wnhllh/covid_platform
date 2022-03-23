import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Signature from "react-native-signature-canvas";


const Sign = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  return (
      <View style={{height: 125}}>
        <Signature
          onOK={(img) => console.log(img)}
          onBegin={() => setScrollEnabled(false)}
          onEnd={() => setScrollEnabled(true)}
          descriptionText="Sign"
          clearText="Clear"
          confirmText="Save"
          imageType="image/jpeg"
        />
      </View>
  );
};

export default Sign;