import {INPUT_TEXT, USER_LOGIN, USER_LOGOUT, KEEP_LOGIN} from './types';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const onInputText = (value) => {
    return {
        type: INPUT_TEXT,
        payload: {
            value
        }
    }
}

export const onUserLogin = (value) => {
    return async (dispatch) =>{
        try{
            await AsyncStorage.setItem('username', value)
            dispatch({type: USER_LOGIN})
        } catch(err){   
            console.log(err)
        }
    }
}

export const onUserLogout = (value) => {
    return async (dispatch) =>{
        await AsyncStorage.removeItem('username')
        dispatch({type: USER_LOGOUT})
    }
}

export const userLoginCheck = () =>{
    return async (dispatch) => {
        try{
            const username = await AsyncStorage.getItem('username')
            console.log(username)
            if(!username){
                dispatch({type: USER_LOGOUT})
            }else{
                dispatch({
                    type: KEEP_LOGIN,
                    payload: username
                })
            }
        } catch(err){
            dispatch({type: USER_LOGOUT})
        }
    }
}