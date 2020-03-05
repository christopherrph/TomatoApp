import {FILL_LIST_RESTO, INIT_RESTO_DETAIL} from './types';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


export const getRestoList = () => {
    return async (dispatch) => {
        try{
            const res = await Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=4&sort=rating',{
                headers:{
                    "user-key":"49047250fd076e5ec7360e19453591e7"
                }
            })    
            console.log(res.data)
            dispatch({
                type: FILL_LIST_RESTO,
                payload: res.data.restaurants
            })
        } catch(err){
            console.log('ERRORRRRR')
            console.log(err)
        }
    }
}

export const initRestoDetail = (post) => {
    return {
        type: INIT_RESTO_DETAIL,
        payload: post
    }
}