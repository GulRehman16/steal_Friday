import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, Overlay } from 'react-native-elements'
import { AppButton, Header } from '../../components'
import { Images } from '../../constants'
import CircularProgress from 'react-native-circular-progress-indicator';

const Overlays = ({
    visible,
    toggleOverlay,
    btn,
    btn1,
    btn2,
    btn3,
    btn4,
    btn5,
    popupwidth,
    popupheight,
    popupcontent,
    popupcontent1 }) => {

    const [isData, setData] = useState({
        ordernumber: "3241",
        orderDate: "12/2/22",
        product: "Nike Limited Collection By Hidden Sole",
        Qty: " 1",
        price: "$12.00",
        DeliveryCharges: "$05.00",
        CardUsed: "********1234",
        TotalAmountPaid: "Total Amount Paid:",
        OrdersStatus: "Pending",
        ShippingDetails: "Street Address: Licolon Street City: NewYork city State: New York Zip Code: 2435132"




    })

    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ borderRadius: 30 }}>

                    {popupcontent && (
                        <View style={{
                            width: 252, height: 248,
                            alignItems: 'center', justifyContent: 'flex-end'
                        }}>
                            {btn && (
                                <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>

                                    <CircularProgress
                                        value={100}
                                        radius={50}
                                        activeStrokeColor={'#000'}
                                        inActiveStrokeColor={'#000'}
                                        inActiveStrokeOpacity={0.5}
                                        inActiveStrokeWidth={10}
                                        activeStrokeWidth={10}

                                    />



                                </View>
                            )}
                            {btn1 && (
                                <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                                    <Image source={Images.Icon.circle} />

                                </View>
                            )}
                            {btn2 && (
                                <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'black', marginVertical: 2 }}>Notice</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 18, color: 'black', marginVertical: 2 }}>
                                        Are you sure, you want to proceed with payment?</Text>
                                </View>

                            )}

                            {btn3 && (
                                <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                                    <Image source={Images.Icon.circle} />
                                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'black', marginVertical: 2 }}>Notice</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 18, color: 'black', marginVertical: 2 }}>Are you sure, you want to proceed with payment?</Text>
                                </View>

                            )}

                            {btn4 && (
                                <View style={{ marginVertical: 5, alignItems: 'center' }}>
                                    <Text style={{ width: '100%', marginVertical: 8 }}>Password Updated!</Text>
                                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <AppButton label="No" text btnWidth={106} btnHeight={40} onPress={() => toggleOverlay(false)} />
                                        <AppButton label="Yes" text backgroundColor="#fff" color="#000" btnWidth={106} btnHeight={40} onPress={() => toggleOverlay(false)} />
                                    </View>

                                </View>

                            )}

                            {btn5 && (
                                <View style={{ marginVertical: 15, alignItems: 'center' }}>
                                    <Text style={{ marginVertical: 8 }}>Password Updated!</Text>
                                    <AppButton label="Close" text btnWidth={137} btnHeight={40} onPress={() => toggleOverlay(false)} />
                                </View>

                            )}

                        </View>
                    )}
                    <View>

                        {popupcontent1 && (

                            <View style={{ width: 320, height: 600, borderRadius: 30 }}>
                                <ScrollView
                                    keyboardShouldPersistTaps="handled"
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{ flexGrow: 1 }}>
                                    <Header
                                        RightIcon RICon2
                                    />
                                    <View style={{ justifyContent: 'center', marginVertical: 20 }}>
                                        <View>
                                            <Text style={{ fontSize: 22, color: 'black', textAlign: 'center' }}> Orders Details</Text>
                                        </View>
                                        <View style={{}}>
                                            <View style={{ width: '80%', alignSelf: 'center', marginVertical: 10 }}>
                                                <View style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.50 }}>
                                                    <Text style={{ marginVertical: 10, fontWeight: 'bold', color: '#000' }}>Order No.</Text>
                                                    <Text>{isData.ordernumber}</Text>
                                                </View>
                                                <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.50 }}>
                                                    <Text style={{ marginVertical: 5, fontWeight: 'bold', color: '#000' }}>orderDate</Text>
                                                    <Text>{isData.orderDate}</Text>
                                                </View>
                                                <View style={{
                                                    width: '100%', marginVertical: 5,
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    borderBottomWidth: 0.50
                                                }}>
                                                    <View style={{ width: '40%' }}>
                                                        <Text style={{ marginVertical: 5, fontWeight: 'bold', color: '#000' }}>Product:</Text>
                                                        <Text>{isData.product}</Text>
                                                    </View>
                                                    <View style={{}}>
                                                        <Text style={{ marginVertical: 5, fontWeight: 'bold', color: '#000' }}>Qty:</Text>
                                                        <Text>{isData.Qty}</Text>
                                                        <Text>{isData.Qty}</Text>
                                                    </View>

                                                    <View>
                                                        <Text style={{ marginVertical: 5, fontWeight: 'bold', color: '#000' }}>Price:</Text>
                                                        <Text>{isData.price}</Text>
                                                        <Text>{isData.price}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.50 }}>
                                                    <Text style={{ marginVertical: 5, fontWeight: 'bold', color: '#000' }}>Delivery Charges:</Text>
                                                    <Text>{isData.DeliveryCharges}</Text>
                                                </View>
                                                <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.50 }}>
                                                    <Text style={{ marginVertical: 5, fontWeight: 'bold', color: '#000' }}>Card Used:</Text>
                                                    <Text>{isData.CardUsed}</Text>
                                                </View>
                                                <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.50 }}>
                                                    <Text style={{ marginVertical: 5, fontWeight: 'bold', color: '#000' }}>Total Amount Paid:</Text>
                                                    <Text>{isData.TotalAmountPaid}</Text>
                                                </View>
                                                <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.50 }}>
                                                    <Text style={{ marginVertical: 5, fontWeight: 'bold', color: '#000' }}>Orders Status</Text>
                                                    <Text>{isData.OrdersStatus}</Text>
                                                </View>
                                                <View style={{ width: '50%', marginVertical: 5, }}>
                                                    <Text style={{ marginVertical: 5, fontWeight: 'bold', color: '#000' }}>Shipping Details:</Text>
                                                    <Text>{isData.ShippingDetails}</Text>
                                                </View>
                                            </View>

                                        </View>
                                    </View>
                                </ScrollView>

                            </View>

                        )}

                    </View>
                </Overlay>
            </ScrollView>
        </View>

    );

}

export { Overlays }

