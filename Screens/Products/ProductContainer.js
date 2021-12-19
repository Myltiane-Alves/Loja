import React, { useEffect, useState } from 'react';
import { View,  StyleSheet, FlatList, Dimensions} from 'react-native';
import { Container, Header, Icon, Item, Input, Text} from 'native-base';

import ProductList from './ProductList';
import SearchedProduct from './SearchedProducts';
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';

const data = require('../../assets/data/products.json');
const categories = require('../../assets/data/categories.json');

var { height } = Dimensions.get('window');

const ProductContainer = () => {

    const [products, setProducts ] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        setCategories(categories);
        setActive(-1);
        setInitialState(data);

        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus();
            setCategories([]);
            setActive();
            setInitialState();;
        }
    }, []);

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        );
    };

    
    const openList = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };

    // Categories
    const changeCtg = (ctg) => {
        {
        ctg === "all"
            ? [setProductsCtg(initialState), setActive(true)]
            : [
            setProductsCtg(
                products.filter((i) => i.category._id === ctg),
                setActive(true)
            ),
            ];
        }
    };

    return(
        <Container>
            <Header searchBar rounded>
                <Icon name="ios-search"/>
                <Input
                    placeholder='Pesquisar'
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text) }
                />
                {focus == true ? (
                    <Icon onPress={onBlur} name="ios-close" />
                ) : null}
            </Header>
            {focus == true ? (
                <SearchedProduct 
                    productsFiltered={productsFiltered}
                />
            ) : (
                <View >
                    <View>
                        <Banner />
                    </View>
                    <View>
                        <CategoryFilter 
                            categories={categories}
                            categoryFilter={changeCtg}
                            productsCtg={productsCtg}
                            active={active}
                            setActive={setActive}
                        />
                    </View>
                    <View style={styles.listContainer}>
                        <FlatList 
                            numColumns={2}
                            data={products}
                            renderItem={({item}) => <ProductList
                            key={item.id}
                            item={item}/>}
                            keyExtractor={item => item.name}
                        />

                    </View>
                </View>

            )}
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    listContainer: {
      height: height,
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  

export default ProductContainer;
