import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import StarRating from '../../components/StarRating';
import styles from './style';
import markers from './mock';


const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const CARD_SPACING = width * 0.1 - 10;

const ExploreScreen = () => {

  const initialState = {
    markers,
    region: {
        latitude: 40.729035,
        longitude: -73.996271,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
    },
  };

  const [state, setState] = React.useState(initialState);
  const mapRef = React.useRef(null);
  const viewRef = React.useRef(null);

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = (markerID * CARD_WIDTH) + (markerID * 20); 

    viewRef.current.scrollTo({x: x, y: 0});
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        initialRegion={state.region}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        rotateEnabled={true}
      >
        {state.markers.map((marker, index) => {
          return (
            <Marker key={index} coordinate={marker.coordinate} onPress={(e)=>onMarkerPress(e)} />
          );
        })}
      </MapView>

      

      <ScrollView
        ref={viewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{ top: 0, left: CARD_SPACING, bottom: 0, right: CARD_SPACING }}
      >
        {state.markers.map((marker, index) =>(
          <View style={styles.card} key={index}>
            <Image 
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
                <Text style={styles.cardtitle}>{marker.title}</Text>
              <StarRating ratings={marker.rating} reviews={marker.reviews} />
            </View>

            <View style={styles.buttons}>
            <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[styles.signIn, {
                    borderColor: 'red',
                    borderWidth: 1
                  }]}
                >
                  <Text style={[styles.textSign, {
                    color: 'red'
                  }]}>Check In</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[styles.signIn, {
                    borderColor: 'purple',
                    borderWidth: 1
                  }]}
                >
                  <Text style={[styles.textSign, {
                    color: 'purple'
                  }]}>Reviews</Text>
                </TouchableOpacity>
              </View>
              </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;