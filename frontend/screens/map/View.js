import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions,
  Animated,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import { TextInput } from 'react-native-gesture-handler';

import StarRating from '../../components/Rating';
import styles from './style';
import markers from '../../data/mapData';

import { Ionicons } from 'react-native-vector-icons';

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const CARD_SPACING = width * 0.1 - 10;

const Map = () => {

  const initialState = {
    markers,
    region: {
      latitude: 40.729035,
      longitude: -73.996271,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    },
  };

  const [state, setState] = useState(initialState);

  let index = 0;
  let mapAnimation = new Animated.Value(0);

  const mapRef = useRef(null);
  const viewRef = useRef(null);

  // //////////////////////////////////////////////////////////////////

  useEffect(() => {
    console.log(index.value)
  })

  // //////////////////////////////////

  mapAnimation.addListener(({ value }) => {
    index = Math.floor(value / CARD_WIDTH + 0.3);
    if (index >= state.markers.length) {
      index = state.markers.length - 1;
    }
    if (index <= 0) {
      index = 0;
    }
    console.log(index);

    clearTimeout(regionTimeout);

    const regionTimeout = setTimeout(() => {
      const { coordinate } = state.markers[index];
      mapRef.current.animateToRegion(
        {
          ...coordinate,
          latitudeDelta: state.region.latitudeDelta,
          longitudeDelta: state.region.longitudeDelta,
        },
        350
      );
    }, 10);
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = (markerID * CARD_WIDTH) + (markerID * 20);
    viewRef.current.scrollTo({ x: x, y: 0 });
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
            <Marker key={index} coordinate={marker.coordinate} onPress={(e) => onMarkerPress(e)} />
          );
        })}
      </MapView>

      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search"
          autoCapitalize='none'
        />
        <Ionicons name="ios-search" size={20} color='#d1d1d1' />
      </View>

      <Animated.ScrollView
        ref={viewRef}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{ top: 0, left: CARD_SPACING, bottom: 0, right: CARD_SPACING }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                }
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {state.markers.map((marker, index) => (
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
                  onPress={() => { }}
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
                  onPress={() => { }}
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
      </Animated.ScrollView>
    </View>
  );
};

export default Map;