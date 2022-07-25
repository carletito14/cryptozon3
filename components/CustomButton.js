import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({ title, paddingVertical, paddingHorizontal, textColor, fontFamily, borderRadius, backgroundColor, fontSize, hasShadow }) {

    return (
        <TouchableOpacity style={!hasShadow ? styles(paddingVertical,
            paddingHorizontal, backgroundColor, borderRadius, hasShadow).appButtonContainer : styles(paddingVertical,
                paddingHorizontal, backgroundColor, borderRadius, hasShadow).appButtonContainerWithShadow}>
            <Text
                style={{ color: textColor, fontFamily: fontFamily, fontSize: fontSize }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = (paddingVertical, paddingHorizontal, backgroundColor, borderRadius) => StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        width: 'auto',
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        paddingVertical: paddingVertical,
        paddingHorizontal: paddingHorizontal,
    },
    appButtonContainerWithShadow: {
        elevation: 8,
        width: 'auto',
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        paddingVertical: paddingVertical,
        paddingHorizontal: paddingHorizontal,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.65,
        elevation: 5,
    }
});