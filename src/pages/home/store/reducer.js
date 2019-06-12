import { fromJS } from "immutable"
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    topicList: [],
    aritcleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
})

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        aritcleList: fromJS(action.aritcleList),
        recommendList: fromJS(action.recommendList),
    })
}

const addArticleList = (state, action) => {
    return state.merge({
        aritcleList: state.get('aritcleList').concat(action.list),
        articlePage: action.nextPage,
    })
}

export default (state = defaultState, action) => {
    switch (action.type) {

        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action)

        case actionTypes.ADD_ARTICLE_LIST:
            return addArticleList(state, action)

        case actionTypes.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll', action.show)

        default:
            return state
    }
}
