//rfns
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Tag from '../../components/Tag'
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from 'react-navigation'


export default function Review() {
    return (
        <SafeAreaView>
            <View style={styles.container}>

                {/* image div */}
                <View style={styles.imageDiv}>
                    {/* <Text style={{ textAlign: 'center', marginTop: '50%' }}>div imagen</Text> */}
                    <Image
                        source={require('../../assets/img/ej1.jpg')}
                        style={styles.image}
                    />
                </View>
                {/* end image div */}

                {/* text review div */}
                <View style={styles.textReview}>
                    <Text style={{ textAlign: 'center', paddingTop: 25, fontFamily: 'bold', fontSize: 35 }}>Woldsend Cottages</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '85%', height: 'auto', paddingTop: 20 }}>
                        <Image
                            source={require('../../assets/icons/pin_drop.png')}
                        />
                        <Text style={{ fontFamily: 'light', fontSize: 15, marginTop: '3%', position: 'relative', right: 15 }}>Wakefield, England</Text>
                        <Image
                            source={require('../../assets/icons/single_bed.png')}
                            style={{ position: 'relative', left: 15 }}
                        />
                        <Text style={{ fontFamily: 'light', fontSize: 15, marginTop: '3%' }}>6 sleeps</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '75%', height: 'auto', paddingTop: 15 }}>
                        <Text style={{ fontFamily: 'light', fontSize: 15, marginTop: '3%' }}>
                            Prueba de texto donde el negocio pone un texto acerca de lo que puede hacer en su local, da su valoración,
                            los detalles que puede hacer allí, etc..
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '85%', height: 'auto', paddingTop: 15 }}>
                        {/* 3 tags as maximun. Need to validate this one */}
                        <Tag
                            title={'Hot Tubs'}
                        />
                        <Tag
                            title={'Lakes & Rivers'}
                        />
                        <Tag
                            title={'Party 😎'}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '85%', height: 'auto', paddingTop: 15 }}>
                        <Text style={{ fontFamily: 'bold', fontSize: 25, paddingTop: 8 }}>€150</Text>



                        <CustomButton
                            title={'Book'}
                            paddingVertical={12}
                            paddingHorizontal={45}
                            borderRadius={12}
                            backgroundColor={'black'}
                            textColor={'white'}
                            fontFamily={'bold'}
                            fontSize={15}
                            hasShadow={true}
                        />
                    </View>

                </View>
                {/* end text review div */}

            </View >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    imageDiv: {
        height: '55%'
    },
    image: {
        width: 'auto',
        height: '100%'
    },
    textReview: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        // height: '20%',
        bottom: '4%',
        borderRadius: 35,

    }
})