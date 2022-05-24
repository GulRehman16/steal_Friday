import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Overlays } from '../../../components';
import { DataTable } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const optionsPerPage = [2, 3, 4];

const MyOrder = (props) => {

    const [visible, setVisible] = useState(false);
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <>
            <SafeAreaView style={styles.screenContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <StatusBar
                        backgroundColor={'transparent'}
                        barStyle="dark-content"
                        translucent={true}
                    />

                    <View style={{
                        marginTop: 45, width: '90%', alignSelf: 'center'

                    }}>
                        <View style={{}}>
                            <Header
                                headerText
                                leftIcon
                                lIconClr={'#fff'}
                                leftIconProps={() => {
                                    props.navigation.goBack();
                                }}
                            />


                        </View>
                        <View style={{
                            alignSelf: 'center',
                            marginVertical: 30
                        }}>
                            <Text style={{
                                color: 'black', fontSize: 22,
                                fontWeight: 'bold'
                            }}>My Orders</Text>
                        </View>

                        <View style={{}}>

                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title><Text style={{ color: 'black', fontWeight: 'bold' }}>Order No.</Text></DataTable.Title>
                                    <DataTable.Title numeric>  <Text style={{ color: 'black', fontWeight: 'bold' }}>Order No.</Text></DataTable.Title>
                                    <DataTable.Title numeric>  <Text style={{ color: 'black', fontWeight: 'bold' }}>Date</Text></DataTable.Title>
                                    <DataTable.Title numeric>  <Text style={{ color: 'black', fontWeight: 'bold' }}>Status</Text></DataTable.Title>
                                    <DataTable.Title numeric>  <Text style={{ color: 'black', fontWeight: 'bold' }}>Total</Text></DataTable.Title>
                                    <DataTable.Title numeric>  <Text style={{ color: 'black', fontWeight: 'bold' }}>Action</Text></DataTable.Title>

                                </DataTable.Header>
                                <DataTable.Row>
                                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                                    <DataTable.Cell numeric>159</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell onPress={() => setVisible(!visible)} numeric >
                                        <Text style={{ color: 'green' }}>View</Text>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                                    <DataTable.Cell numeric>159</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell onPress={() => setVisible(!visible)} numeric >
                                        <Text style={{ color: 'blue' }}>View</Text>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                                    <DataTable.Cell numeric>159</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell onPress={() => setVisible(!visible)} numeric >
                                        <Text style={{ color: 'blue' }}>View</Text>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                                    <DataTable.Cell numeric>159</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell onPress={() => setVisible(!visible)} numeric >
                                        <Text style={{ color: 'blue' }}>View</Text>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                                    <DataTable.Cell numeric>159</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell onPress={() => setVisible(!visible)} numeric >
                                        <Text style={{ color: 'blue' }}>View</Text>
                                    </DataTable.Cell>

                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                                    <DataTable.Cell numeric>159</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell onPress={() => setVisible(!visible)} numeric >
                                        <Text style={{ color: 'blue' }}>View</Text>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                                    <DataTable.Cell numeric>159</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell onPress={() => setVisible(!visible)} numeric >
                                        <Text style={{ color: 'blue' }}>View</Text>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                                    <DataTable.Cell numeric>159</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    <DataTable.Cell onPress={() => setVisible(!visible)} numeric >
                                        <Text style={{ color: 'blue' }}>View</Text>
                                    </DataTable.Cell>
                                </DataTable.Row>
                                <View style={{ alignSelf: 'center' }}>
                                    <DataTable.Pagination
                                        page={page}
                                        numberOfPages={3}
                                        label="1-2 of 6"
                                        onPageChange={page => setPage(page)}
                                        optionsPerPage={optionsPerPage}
                                        setItemsPerPage={setItemsPerPage}
                                        selectPageDropdownLabel={'Rows per page'}
                                    />

                                </View>
                            </DataTable>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
            <Overlays popupcontent1 visible={visible} toggleOverlay={() => setVisible(false)} />
        </>

    );
};

export default MyOrder;

const styles = StyleSheet.create({
    // screenContainer: {
    //     flex: 1,
    //     backgroundColor: 'white',

    // },
});
