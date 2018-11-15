import React, {Component, Fragment} from 'react';
import Background from '../common/Background/Background';
import './style.less';
import {NavLink, Route, Switch} from "react-router-dom";

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Background {...{
                    title: '组件文档'
                }}/>
                <div id='content'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="main-content">
                                    <Switch>
                                        <Route path="/tutorial/" exact
                                               component={require('./components/index').default}/>

                                        <Route path="/tutorial/grid" exact
                                               component={require('./components/Grid/Grid').default}/>
                                        <Route path="/tutorial/icon" exact
                                               component={require('./components/Icon/Icon').default}/>
                                        <Route path="/tutorial/color" exact
                                               component={require('./components/Color/Color').default}/>
                                        <Route path="/tutorial/typography" exact
                                               component={require('./components/Typography/Typography').default}/>
                                        <Route path="/tutorial/button" exact
                                               component={require('./components/Button/Button').default}/>
                                        <Route path="/tutorial/dropDown" exact
                                               component={require('./components/Dropdown/Dropdown').default}/>

                                        <Route path="/tutorial/input" exact
                                               component={require('./components/Input/Input').default}/>
                                        <Route path="/tutorial/check" exact
                                               component={require('./components/Check/Check').default}/>
                                        <Route path="/tutorial/symbolInput" exact
                                               component={require('./components/SymbolInput/SymbolInput').default}/>
                                        <Route path="/tutorial/switch" exact
                                               component={require('./components/Switch/Switch').default}/>
                                        <Route path="/tutorial/datepicker" exact
                                               component={require('./components/DatePicker/DatePicker').default}/>

                                        <Route path="/tutorial/progress" exact
                                               component={require('./components/Progress/Progress').default}/>
                                        <Route path="/tutorial/badge" exact
                                               component={require('./components/Badge/Badge').default}/>

                                        <Route path="/tutorial/event" exact
                                               component={require('./components/Event/Event').default}/>
                                        <Route path="/tutorial/group" exact
                                               component={require('./components/Group/Group').default}/>
                                        <Route path="/tutorial/alert" exact
                                               component={require('./components/Alert/Alert').default}/>
                                        <Route path="/tutorial/divider" exact
                                               component={require('./components/Divider/Divider').default}/>
                                        <Route path="/tutorial/modal" exact
                                               component={require('./components/Modal/Modal').default}/>
                                        <Route path="/tutorial/tooltip" exact
                                               component={require('./components/Tooltip/Tooltip').default}/>
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
                                                <a className='selected bolder'>基础</a>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/tutorial/grid'>Layout 布局</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/color'>Color 色彩</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/typography'>Typography 字体</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/icon'>Icon 图标</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className='selected bolder'>按钮</a>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/tutorial/button'>Button 按钮</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/group'>Group 按钮组</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/dropDown'>Dropdown 下拉按钮组</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className='selected bolder'>表单</a>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/tutorial/input'>Input 基础输入</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/check'>Radio 单复选框</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/symbolInput'>Symbol 标志输入</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/switch'>Switch 开关</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/datepicker'>DatePicker 日期选择器</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className='selected bolder'>数据</a>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/tutorial/progress'>Progress 进度条</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/badge'>Badge 标记</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className='selected bolder'>通知</a>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/tutorial/alert'>Alert 警告</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className='selected bolder'>其他</a>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/tutorial/modal'>Modal 模态框</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/divider'>Divider 分隔线</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/tooltip'>Tooltip 文字提示</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className='selected bolder'>参考资料</a>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/tutorial/event'>事件系统</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/tutorial/' exact={true}>设计理念</NavLink>
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