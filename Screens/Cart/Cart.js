import React from 'react';
import { View, Dimensions, StyleSheet, Button,  TouchableOpacity, } from 'react-native';

import {
    Container,
    Text,
    Left,
    Right,
    H1
} from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import CartItem from './CartItem'

import Icon from "react-native-vector-icons/FontAwesome";

import { connect } from 'react-redux';
import * as actions from "../../Redux/Actions/cartActions";
import { Thumbnail } from 'native-base';

var { height, width } = Dimensions.get("window");

const Cart = (props) => {
    var total = 0;
    props.cartItems.forEach(cart => {
        return (total += cart.product.price)
    });
    
    return (
        <>
            {props.cartItems.length ? (
                <Container>
                  <H1 style={{ alignSelf: 'center'}}>Carrinho</H1>
                  {props.cartItems.map(data => {
                      return (
                        <ListItem
                          style={styles.listItem}
                          key={Math.random}
                          avatar
                        >
                           <Left>
                                <Thumbnail 
                                    source={{
                                        uri: data.product.image 
                                         ? data.product.image 
                                         : 'https://www.freepngimg.com/thumb/fifa/11-2-fifa-png-images.png'
                                    }}
                                />    
                           </Left> 
                           <Body style={styles.body}>
                               <Left>
                                   <Text>{data.product.name}</Text>
                               </Left>
                               <Right>
                                   <Text>R$ {data.product.price}</Text>
                               </Right>
                           </Body>
                        </ListItem>
                      );
                  })}
                  <View style={styles.bottomContainer}>
                    <Left>
                        <Text style={styles.price}>R$ {total}</Text>
                    </Left>
                    <Right>
                        <Button title="Remover" />
                    </Right>
                    <Right>
                        <Button
                         title="Checkout"
                         onPress={() => props.navigation.navigate('Checkout')} 
                        />
                    </Right>
                  </View>  
                </Container>  
            ) : (
                <Container style={styles.emptyContainer}>
                    <Text>Parece que seu carrinho está vazio</Text>
                    <Text>Adicione produtos ao seu carrinho para começar</Text>
                </Container>
            )}
        </>

    )
}

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems,
    }
}

const styles = StyleSheet.create({
    emptyContainer: {
      height: height,
      alignItems: "center",
      justifyContent: "center",
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        elevation: 20
    },
    price: {
        fontSize: 18,
        margin: 20,
        color: 'red'
    },
    hiddenContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      flexDirection: 'row'
    },
    hiddenButton: {
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 25,
      height: 70,
      width: width / 1.2
    }
     
})

  
export default connect(mapStateToProps, null)(Cart);