import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Header, Image } from 'react-native-elements';
import { connect } from 'react-redux';
import { onUserLogout } from '../actions';
import {StackActions, NavigationActions, CommonActions} from '@react-navigation/native';

class Setting extends Component {
    componentDidMount=()=>{
        console.log(this.props.restodetail)
    }
    render() {
        return(
        <View style={styles.containerStyle}>
            <Header
                    leftComponent={{ text: `<--`, style: { color: '#fff', width:120 }, onPress: () => this.props.navigation.goBack() }}
                    leftContainerStyle={{flex:3}}
                    containerStyle={{
                        backgroundColor:'tomato',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 :-25,
                        elevation: 2
                    }}
                    rightComponent={{ text: `${this.props.restodetail.restaurant.name}`, style: { color: '#fff', width:120 } }}
                />
                <View style={{alignItems:'center'}}>
                    <Text h3>{this.props.restodetail.restaurant.name}</Text>
                    <Image 
                        source={{uri: `${this.props.restodetail.restaurant.featured_image}` }} 
                        style={{height: 200, width: 300 }}/>
                </View>
                <View style={{marginTop:20}}>
                <Text h5>Address: {this.props.restodetail.restaurant.location.address}</Text>
                <Text h5>Open Time: {this.props.restodetail.restaurant.timings}</Text>
                <Text h5>Cuisines: {this.props.restodetail.restaurant.cuisines}</Text>
                <Text h5>Ratings: {this.props.restodetail.restaurant.user_rating.aggregate_rating} / 5</Text>
                </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        // justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    }
})

const mapStateToProps = ( {restodetail} ) =>{
    return { restodetail }
}

export default connect(mapStateToProps, {})(Setting);