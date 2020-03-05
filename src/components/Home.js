import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Header, Icon, Card, ListItem, Button,  } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { getRestoList, initRestoDetail } from '../actions';

class Home extends Component {

    componentDidMount=()=>{
        this.props.getRestoList()
        console.log(this.props.resto)
    }

    onRestoPress = (resto) =>{
        this.props.initRestoDetail(resto)
        this.props.navigation.navigate('Detail')
    }

    renderResto = () =>{
        return this.props.resto.listResto.map((item, index) => {
                return (
                <View key={index} style={{width:185, marginHorizontal:2}}>
                    <Card 
                        containerStyle={{width:'100%',alignItems:'center'}}
                        >
                        <Text>{item.restaurant.name}</Text>
                        <Image 
                        source={{uri: `${item.restaurant.featured_image}` }} 
                        style={{height: 125, width: 125, marginTop:10 }}/>
                        <Text>Cost For Two: $ {item.restaurant.average_cost_for_two} </Text>
                        <Text>Ratings: {item.restaurant.user_rating.aggregate_rating} </Text>
                        <Button 
                        title="Detail"
                        onPress={() => this.onRestoPress(item)}
                        buttonStyle={{backgroundColor:'tomato',marginTop:10, width:60, height:30, alignSelf:'center'}}
                        />
                    </Card>
                </View>
                )
        })
    }

    render() {
        return(
        <ScrollView>
        <View style={styles.containerStyle}>
            <Header
                    leftComponent={{
                        icon:'person',
                        color: 'white'
                    }}
                    leftContainerStyle={{flex:3}}
                    containerStyle={{
                        backgroundColor:'tomato',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 :-25,
                        elevation: 2
                    }}
                    rightComponent={{ text: `Hallo, ${this.props.user.username}`, style: { color: '#fff', width:120 } }}
                />
            <View style={{flexDirection:'row', flexWrap: 'wrap', flex: 1, marginTop: 10, width:'100%', alignSelf:'center'}}>
                    <View style={{width: '15%',marginHorizontal:20, borderWidth: 3, height: 45, borderRadius: 290, borderColor:'tomato'}}>
                    <Icon
                        name='credit-card'
                        type='material-community'
                        color="tomato"
                        size={30}
                    />
                    <Text style={{alignSelf:'center', marginTop:10}}>Credit</Text>
                    </View>
                    <View style={{width: '15%',marginHorizontal:20, borderWidth: 3, height: 45, borderRadius: 290, borderColor:'tomato'}}>
                    <Icon
                        name='book'
                        type='material-community'
                        color="tomato"
                        size={30}
                    />
                    <Text style={{alignSelf:'center', marginTop:10}}>Variant</Text>
                    </View><View style={{width: '15%',marginHorizontal:20, borderWidth: 3, height: 45, borderRadius: 290, borderColor:'tomato'}}>
                    <Icon
                        name='food'
                        type='material-community'
                        color="tomato"
                        size={30}
                    />
                    <Text style={{alignSelf:'center', marginTop:10}}>Recipe</Text>
                    </View><View style={{width: '15%',marginHorizontal:20, borderWidth: 3, height: 45, borderRadius: 290, borderColor:'tomato'}}>
                    <Icon
                        name='pin'
                        type='material-community'
                        color="tomato"
                        size={30}
                    />
                    <Text style={{alignSelf:'center', marginTop:10}}>Location</Text>
                    </View> 
            </View>
            <View style={{flexDirection:'row', flexWrap: 'wrap', flex: 1, marginTop: 30, width:'100%', alignSelf:'center'}}>
                    <View style={{width: '15%',marginHorizontal:20, borderWidth: 3, height: 45, borderRadius: 290, borderColor:'tomato'}}>
                    <Icon
                        name='cart'
                        type='material-community'
                        color="tomato"
                        size={30}
                    />
                    <Text style={{alignSelf:'center', marginTop:10}}>Cart</Text>
                    </View>
                    <View style={{width: '15%',marginHorizontal:20, borderWidth: 3, height: 45, borderRadius: 290, borderColor:'tomato'}}>
                    <Icon
                        name='pizza'
                        type='material-community'
                        color="tomato"
                        size={30}
                    />
                    <Text style={{alignSelf:'center', marginTop:10}}>Pizza</Text>
                    </View><View style={{width: '15%',marginHorizontal:20, borderWidth: 3, height: 45, borderRadius: 290, borderColor:'tomato'}}>
                    <Icon
                        name='hamburger'
                        type='material-community'
                        color="tomato"
                        size={30}
                    />
                    <Text style={{alignSelf:'center', marginTop:10}}>Burger</Text>
                    </View><View style={{width: '15%',marginHorizontal:20, borderWidth: 3, height: 45, borderRadius: 290, borderColor:'tomato'}}>
                    <Icon
                        name='more'
                        type='material-community'
                        color="tomato"
                        size={30}
                    />
                    <Text style={{alignSelf:'center', marginTop:10}}>More</Text>
                    </View> 
            </View>

            <View style={{marginTop: 30, flexDirection:'row',flexWrap:'wrap'}}>
            {this.renderResto()}
            </View> 
        </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
  }
})

const mapStateToProps = ( {user, resto} ) =>{
    return { 
        user, 
        resto}
}

export default connect(mapStateToProps,{ getRestoList, initRestoDetail })(Home);