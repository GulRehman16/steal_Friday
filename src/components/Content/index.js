

import React, { useEffect, useState } from 'react';
import {
    BackHandler,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    TextInput
} from 'react-native';

import { Images } from '../../constants'

import LottieView from 'lottie-react-native';


const Content = ({
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    contentnumber1,
    Number1,
    Number2,
    Number3
}) => {
    return (
        <>
            <View>


                <View style={{

                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 5

                    }}>
                        <View style={{
                            marginVertical: 5
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 16, marginRight: 5
                            }}>Order No:</Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 16, marginRight: 5
                            }}>33324</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 16, marginRight: 10,
                        }}>Products:</Text>
                        <View style={{ width: '90%', borderBottomWidth: 2, borderColor: 'grey', }}>
                        </View>
                    </View>



                </View>
                <View style={{
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 16, marginRight: 10, fontWeight: 'bold'
                        }}>Name</Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 16, marginRight: 10, fontWeight: 'bold'
                        }}>Qty</Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 16, marginRight: 5, fontWeight: 'bold'
                        }}>Price</Text>
                    </View>
                    <View style={{
                        marginVertical: 5
                    }}><View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 5
                    }}>
                            <View style={{}}><Text style={{ color: '#fff', fontSize: 16, }}>Shipping Charges</Text>
                            </View>
                            <View style={{ marginRight: 80 }}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>1</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>$15.99</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 5
                        }}>
                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>$15.99</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>2</Text></View>
                            <View style={{}}><Text style={{ color: '#fff', fontSize: 16, }}>$15.00</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 5
                        }}>
                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>$15.99</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>1</Text></View>
                            <View style={{}}><Text style={{ color: '#fff', fontSize: 16, }}>$15.00</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 16, marginRight: 10,
                        }}>Payment Details:</Text>
                        <View style={{ width: '90%', borderBottomWidth: 2, borderColor: 'grey', }}>
                        </View>
                    </View>
                    <View style={{
                        marginVertical: 5
                    }}><View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 5
                    }}>
                            <View style={{}}><Text style={{ color: '#fff', fontSize: 16, }}>
                                Shipping Charges</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>$15.99</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 5
                        }}>

                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>Total Amount</Text></View>
                            <View style={{}}><Text style={{ color: '#fff', fontSize: 16, }}>$15.00</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 5
                        }}>
                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>Total Amount</Text></View>
                            <View style={{}}><Text style={{ color: '#fff', fontSize: 16, }}>********-000</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 16, marginRight: 10,
                        }}>Shipping Details:</Text>
                        <View style={{ width: '90%', borderBottomWidth: 2, borderColor: 'grey', }}>
                        </View>
                    </View>
                    <View style={{
                        marginVertical: 5
                    }}><View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 5
                    }}>
                            <View style={{}}><Text style={{ color: '#fff', fontSize: 16, }}>
                                Address</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>123 N Creekside Ct</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 5
                        }}>

                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>City</Text></View>
                            <View style={{}}><Text style={{ color: '#fff', fontSize: 16, }}>$15.00</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 5
                        }}>
                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>state</Text></View>
                            <View style={{}}><Text style={{ color: '#fff', fontSize: 16, }}>********-000</Text>
                            </View>

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 5
                        }}>
                            <View style={{}}>
                                <Text style={{ color: '#fff', fontSize: 16, }}>Zip Code</Text></View>
                            <View style={{}}><Text style={{ color: '#fff', fontSize: 16, }}>
                                12345</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            <View>

            </View>
        </>
    )
}

export { Content }

const styles = StyleSheet.create({})