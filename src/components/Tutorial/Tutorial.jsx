import React, {Component, Fragment} from 'react';
import Background from '../common/Background/Background';
import './style.less';
import {NavLink, Route, Switch} from "react-router-dom";

export default class Tutorial extends Component {
    componentDidMount() {
        // let menus = $('.js-menu-vertical');
        // menus.each(function () {
        //     let menu = $(this);
        //     menu.find('li').each(function () {
        //         if ($(this).has('ul').length) {
        //             $(this).addClass('has-children');
        //         }
        //     });
        //     menu.tendina({
        //         animate: true,
        //         activeMenu: '.selected'
        //     });
        // });
    }


    render() {
        return (
            <Fragment>
                <Background {...{
                    title: '使用教程'
                }}/>
                <div id='content'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="main-content">
                                    <Switch>
                                        <Route path="/tutorial/grid" exact
                                               component={require('./components/Grid/Grid').default}/>
                                        <Route path="/tutorial/icon" exact
                                               component={require('./components/Icon/Icon').default}/>
                                        <Route path="/tutorial/color" exact
                                               component={require('./components/Color/Color').default}/>
                                        <Route path="/tutorial/button" exact
                                               component={require('./components/Button/Button').default}/>

                                        <Route path="/tutorial/input" exact
                                               component={require('./components/Input/Input').default}/>

                                        <Route path="/tutorial/event" exact
                                               component={require('./components/Event/Event').default}/>
                                    </Switch>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className="sidebar js-sidebar-fixed">
                                    <div className="widget">
                                        <div className="search">
                                            <form action="#">
                                                <input type="text" className="search-input form-control"
                                                       placeholder="search"/>
                                                <i className="fa fa-search search-icon"/>
                                            </form>
                                        </div>
                                    </div>
                                    <nav className="menu-vertical-wrapper">
                                        <ul className="menu-vertical  js-menu-vertical" data-prepend-to=".js-layout"
                                            data-select="Menu">
                                            <li>
                                                <a className='selected'>布局</a>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/tutorial/grid'>栅格系统</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className='selected'>基础</a>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/tutorial/color'>状态颜色</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/icon'>图标</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/button'>按钮</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className='selected'>表单</a>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/tutorial/input'>基础输入</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className='selected'>参考资料</a>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/tutorial/event'>事件系统</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}