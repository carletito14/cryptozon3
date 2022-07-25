import { View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-elements'

export default function Tag({ title }) {
    return (
            <View style={{
                backgroundColor: '#fff', padding: 15, borderRadius: 10, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.12,
                shadowRadius: 4.65,

                elevation: 6,
            }}>
                <Text style={{ fontFamily: 'light' }}>
                    {title}
                </Text>
            </View>
    )
}