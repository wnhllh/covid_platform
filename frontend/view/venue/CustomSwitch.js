import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function xx({selectionMode,
    optionlist, onSelectSwitch}) {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

    return (
        <View 
        // style={{flexDirection: 'row', justifyContent: 'center', height: 35, width:'100%', backgroundColor:'#e4e4e4', borderRadius:10, borderColor:'#ad40af'}}
        style={[styles.listWrapper]}
        >
            {optionlist.map((category, index) => (
                <TouchableOpacity 
                key={index}
                activeOpacity={1}
                onPress={() => updateSwitchData(index+1)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == index+1 ? '#7d7d7d' : '#e4e4e4',
                    borderRadius: 7,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 30,
                }}
                >
                <Text 
                    // style={{
                    //     color: getSelectionMode == index+1 ? '#e4e4e4' : '#007aff' }}
                    style={[styles.listText, (index+1) == getSelectionMode && styles.activeListText]}
                    // style={ getSelectionMode == index+1 ? styles.listText : styles.activeListText }
                        >
                        {category}</Text>
                </TouchableOpacity> 
            ) )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    listWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 35, width:'100%', backgroundColor:'#e6e6e6', borderRadius:7, borderColor:'#ad40af'
    },
    listText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'gray',
    },
    activeListText: {
        color: 'white',
        borderBottomWidth: 1,
        // textDecorationLine: 'underline'
    }
})