import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { onUserLogout } from '../actions';
import {StackActions, NavigationActions, CommonActions} from '@react-navigation/native';

class Setting extends Component {

    componentDidUpdate() {
        if(this.props.user.isLogin == false) {
            const resetAction = CommonActions.reset({
                index: 0,
                routes:[
                    {name: 'Login'}
                ]
            });
            this.props.navigation.dispatch(resetAction)
        }
    }

    render() {
        return(
        <View style={styles.containerStyle}>
                <Button
                    title="Logout"
                    containerStyle={{ width: '45%', marginVertical: 300, marginHorizontal: 15, }}
                    buttonStyle={{ backgroundColor: 'tomato' }}
                    onPress={this.props.onUserLogout}
                />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const mapStateToProps = ( {user} ) =>{
    return { user }
}

export default connect(mapStateToProps, {onUserLogout})(Setting);