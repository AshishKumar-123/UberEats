import { View, Text, TouchableOpacity, Dimensions, Modal, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'

const DEVICE_HEIGHT = Dimensions.get('window').height

const ViewCartButton = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const {items,restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
    console.log(restaurantName)
    const total = items
            .map((item) => Number(item.price.replace('$', '')))
            .reduce((prev, curr) => prev + curr, 0)

    const totalUSD = total.toLocaleString("en",  {
        style:"currency",
        currency:"USD"
    })


    const checkOutModal = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        <ScrollView>
                            {items.map((item, index) => (
                                <OrderItem key={index} item={item}/>
                            ))}
                            <View style={styles.subtotalContianer}>
                                <Text style={styles.subtotalText}>Subtotal</Text>
                                <Text style={{color:'black'}}>${totalUSD}</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                                <TouchableOpacity style={{
                                    marginTop:20,
                                    backgroundColor:'black',
                                    alignItems:'center',
                                    padding:13,
                                    borderRadius:30,
                                    width:300,
                                    position:'relative',
                                }} onPress={() => setModalVisible(false)}>
                                    <Text style={{color:'white', fontWeight:'700',fontSize:20}}>Checkout</Text>
                                    <Text style={{color:'white',position:'absolute', right:20, fontSize:15, top:17}}>${total?totalUSD:""}</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </>
        )
    }

  return (
      <>
        <Modal
            animationType='slide'
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
        >
            {checkOutModal()}
        </Modal>
        {total ?( <View 
            style={{
                flex:1,
                alignItems:'center',
                flexDirection:'row',
                position:'absolute',
                top:DEVICE_HEIGHT - 80,
                zIndex:999,
                justifyContent:'center'
            }}
        >
            <View style={{
                flexDirection:'row',
                justifyContent:'center',
                width:'100%',
            }}>
                <TouchableOpacity 
                    style={{
                        marginTop:20,
                        backgroundColor:'black',
                        alignItems:'center',
                        padding:13,
                        borderRadius:30,
                        width:300,
                        position:'relative',
                        flexDirection:'row',
                        justifyContent:'flex-end'
                    }}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{color:'white', fontSize:20,marginRight:40}}>View Cart</Text>
                    <Text style={{color:'white', fontSize:20}}>${totalUSD}</Text>
                </TouchableOpacity>
            </View>
        </View>):
        (<></>)
        }
      </>
  )
}

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'rgba(0,0,0,0.7)'
    },
    modalCheckoutContainer:{
        backgroundColor:'white',
        padding:16,
        height:500,
        borderWidth:1   
    },
    restaurantName:{
        textAlign:'center',
        fontWeight:'700',
        fontSize:18,
        marginBottom:10,
        color:'black'
    },
    subtotalContianer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
    },
    subtotalText:{
        textAlign:'left',
        fontWeight:'700',
        fontSize:15,
        marginBottom:10,
        color:'black'
    }
})

export default ViewCartButton