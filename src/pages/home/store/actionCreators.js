import { fromJS } from 'immutable'
import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    aritcleList: result.aritcleList,
    recommendList: result.recommendList,
})

const addHomeList = (result, nextPage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    list: fromJS(result),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result))
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            page++
            dispatch(addHomeList(result, page))
        })
    }
}

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    show
})

