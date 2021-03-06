import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { actionCreators } from './store/index'
import { actionCreators as loginActionCreators } from '../../pages/login/store/index'

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
} from './style'

class Header extends PureComponent {
    render() {
        const { focused, handleInputFocus, handleInputBlurs, list, login, logout } = this.props
        return (
            <HeaderWrapper>

                <Link to='/'>
                    <Logo />
                </Link>

                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ?
                            <NavItem onClick={logout} className='right'>退出</NavItem> :
                            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                    }
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => { handleInputFocus(list) }}
                                onBlur={handleInputBlurs}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe637;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>

                <Addition>
                    <Link to='/write'>
                        <Button className='writing'>
                            <span className="iconfont">&#xe6a4;</span>
                            &nbsp;写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>

            </HeaderWrapper>
        )
    }

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const jsList = list.toJS()
        const pageList = []
        if (jsList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                            <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage, this.spinIcon) }}>
                            <span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe858;</span>
                            换一批
                            </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlurs() {
            dispatch(actionCreators.searchBlurs())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)