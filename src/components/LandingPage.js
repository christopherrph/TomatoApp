import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image, Button, Icon, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { onInputText, onUserLogin, userLoginCheck } from '../actions';
import {StackActions, NavigationActions} from '@react-navigation/native'

class LandingPage extends Component {

    state={
        error:''
    }

    componentDidMount(){
        this.props.userLoginCheck();
    }

    componentDidUpdate(){ // keTrigger bila ada perubahan di state atau props
        if(this.props.user.isLogin == true){
            this.props.navigation.dispatch(StackActions.replace('TabNav')) // Stacknya ga tumpuk, tapi replace
        } // Kalo token terisi maka app akan redirect ke route drawermenu
    } 

    btnEnter = () =>{
        if(!this.props.user.username){
            this.setState({error: 'Please Input Username'})
        }else{
            this.setState({error: ''})
            this.props.onUserLogin(this.props.user.username)
        }
    }

    render() {
        if(this.props.user.isLogin == true){
            return (
                <View style={styles.containerStyle}>
                    <Text h3 style={{marginBottom:40, color:'tomato'}}>TomatoApp</Text>
                    <Icon
                        name='food'
                        size={75}
                        type='material-community'
                        color='tomato'
                    />
                </View>
            )
        }
        if(this.props.user.isLogin == false){
            return(
                <View style={styles.containerStyle}>
                        <Animatable.View animation={'fadeInDown'} duration={2000}>
                                <Text h3 style={{alignSelf:'center', color:"tomato", marginBottom:20}}>TomatoApp</Text>
                        </Animatable.View>
                        <Icon
                             name='food'
                             type='material-community'
                             color="tomato"
                             size={75}
                        />
                        <View style={{width: '70%'}}>
                        <Input
                                placeholder='Username'
                                leftIcon={
                                    <Icon
                                        name='person'
                                        size={24}
                                        color="tomato"
                                    />
                                }
                                onChangeText={(val) => this.props.onInputText(val)}
                            />
                        </View>
        
                        <Text style={{color:'red'}}>{this.state.error}</Text>
                        {/* <Text style={{color:'black'}}>Username: {this.props.user.username}</Text> */}
        
                        <Button
                            title="Enter"
                            containerStyle={{ width: '45%', marginTop: 30 }}
                            buttonStyle={{ backgroundColor: 'tomato' }}
                            onPress={this.btnEnter}
                        />
                </View>
                )
        }
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

const mapStateToProps = ( {user} ) =>{
    return { user }
}

export default connect(mapStateToProps, {userLoginCheck, onInputText, onUserLogin})(LandingPage);