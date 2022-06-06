import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import FoodImage from './image'
import FoodInfo from './info'
import { useDispatch, useSelector } from 'react-redux'

const foods = [
    {
        title:'Lasanga',
        description:'With butter lettuce, tomato and sauce bechamel',
        price:'$13.59',
        image:'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
    },
    {
        title:'Pasta',
        description:'Amazing Chinese fast food with hot chillie and spices',
        price:'$5.89',
        image:'https://www.inspiredtaste.net/wp-content/uploads/2019/04/Vegetable-Baked-Pasta-Recipe-1200.jpg'
    },
    {
        title:'Dosa',
        description:'Most famous South Indian dish made up of rice and potato with chutney',
        price:'$18.88',
        image:'https://holycowvegan.net/wp-content/uploads/2022/03/dosa-recipe-featured-image.jpg'
    },
    {
        title:'Chaumin',
        description:'Amazing Chinese & Indian fast food with hot chillie and spices',
        price:'$2.89',
        image:'https://zaykarecipes.com/wp-content/uploads/2019/10/Desi-Chowmein-Recipe.jpg'
    },
    {
        title:'Samosa',
        description:'Made up of flour and potato with bitter spices, a North Indian dish',
        price:'$1.59',
        image:'https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900'
    },
    {
        title:'Lasanga',
        description:'With butter lettuce, tomato and sauce bechamel',
        price:'$13.59',
        image:'https://www.simplyrecipes.com/thmb/YuOMkKKjH9ezQGCetN7yAmVFANc=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-1-6173a71bfd1347aa8d7659150e87b8f4.jpg'
    },
    {
        title:'Samosa',
        description:'Made up of flour and potato with bitter spices, a North Indian dish',
        price:'$1.59',
        image:'https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900'
    },
    {
        title:'Chaumin',
        description:'Amazing Chinese & Indian fast food with hot chillie and spices',
        price:'$2.89',
        image:'https://zaykarecipes.com/wp-content/uploads/2019/10/Desi-Chowmein-Recipe.jpg'
    },
    {
        title:'Lasanga',
        description:'With butter lettuce, tomato and sauce bechamel',
        price:'$13.59',
        image:'https://www.simplyrecipes.com/thmb/YuOMkKKjH9ezQGCetN7yAmVFANc=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-1-6173a71bfd1347aa8d7659150e87b8f4.jpg'
    },
]


const Menu = ({restaurantName}) => {
    const dispatch = useDispatch();

    const selectItem = (item,checkboxValue) => {
        dispatch({
            type:"ADD_TO_CART",
            payload:{...item, 
                restaurantName:restaurantName, 
                checkboxValue:checkboxValue},
        })
    }

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );

    const isFoddInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title == food.title))
    
  return (
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:310}}>
                {
                    foods.map((food,index) => (
                            <View key={index} style={styles.menueItems}>
                                <BouncyCheckbox 
                                    fillColor='green' 
                                    onPress={(checkboxValue) => {selectItem(food,checkboxValue)}} 
                                    isChecked={isFoddInCart(food,cartItems)}
                                    />
                                <FoodInfo food={food}/>
                                <FoodImage food={food}/>
                            </View>
                    ))
                }
          </ScrollView>
  )
}

const styles = StyleSheet.create({
    menueItems:{
        flexDirection:'row',
        justifyContent:'space-around',
        borderBottomColor:'grey',
        borderBottomWidth:0.9,
        paddingVertical:12,
        marginHorizontal:20
    },
})

export default Menu