import React from 'react'
import { View, Image } from 'react-native'

export default function BannerSlider({data}) {
    return (
        <View style={{ flex: 1 }}>
            <Image source={data.image} style={{height:90,width:300,borderRadius:10, marginTop: 10}}></Image>
        </View>
    )
}