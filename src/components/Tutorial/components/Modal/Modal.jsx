import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";

import {Col, Row, Modal, Button} from 'shined';
import './style.less';
import APITable from "../../../common/APITable/APITable";
import {NavLink} from "react-router-dom";

export default class extends Component {
    constructor(props) {
        super(props);
        this.initState = {
            defaultModal: false,
            smallModal: false,
            largeModal: false,
            centerModal: false,
            actionModal: false,
            lifeModal: false
        };
        this.state = this.initState;
    }


    render() {
        const me = this;
        const _renderEvent = (message) => {
            const _dom = document.querySelector('.displayBox');
            _dom.innerHTML += ('<p>' + (new Date()).format('yyyy-MM-dd hh:mm:ss') + '您触发了' + message + '事件' + '</p>');
            _dom.scrollTop = _dom.scrollHeight;
        };
        return (
            <Fragment>
                <Info {...{
                    title: "模态框",
                    description: '用于创建一个独立空间或对话框。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>模态框组件是覆盖在父窗体上的子窗体。通常，目的是显示来自一个单独的源的内容，可以在不离开父窗体的情况下有一些互动。子窗体可提供信息、交互等。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础模态框</p>
                    <p>使用 <code>Modal</code> 组件可以创建一个模态框，设置 <code>isOpen</code> 属性可以控制模态框的显示。
                    </p>
                    <Example {...{
                        className: ['demo-modal'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Button {...{
                                            color: 'brand',
                                            value: "基础",
                                            isWide: true,
                                            callbacks: {
                                                onClick() {
                                                    me.setState({
                                                        ...me.initState,
                                                        defaultModal: true
                                                    })
                                                }
                                            }
                                        }}/>
                                        <Modal {...{
                                            isOpen: me.state.defaultModal,
                                            title: '林语堂语录'
                                        }}>
                                            <p>孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，可都和你无关，这就叫孤独。</p>
                                        </Modal>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/modal/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>模态框尺寸</p>
                    <p>使用 <code>size</code> 属性可以显示不同尺寸的模态框。
                    </p>
                    <Example {...{
                        className: ['demo-modal'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Button {...{
                                            color: 'metal',
                                            value: "小尺寸",
                                            isWide: true,
                                            callbacks: {
                                                onClick() {
                                                    me.setState({
                                                        ...me.initState,
                                                        smallModal: true
                                                    })
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            color: 'accent',
                                            value: "大尺寸",
                                            isWide: true,
                                            callbacks: {
                                                onClick() {
                                                    me.setState({
                                                        ...me.initState,
                                                        largeModal: true
                                                    })
                                                }
                                            }
                                        }}/>
                                        <Modal {...{
                                            isOpen: me.state.smallModal,
                                            title: '林语堂语录',
                                            size: 'sm'
                                        }}>
                                            <p>孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，可都和你无关，这就叫孤独。</p>
                                        </Modal>
                                        <Modal {...{
                                            isOpen: me.state.largeModal,
                                            title: '林语堂语录',
                                            size: 'lg'
                                        }}>
                                            <p>孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，可都和你无关，这就叫孤独。</p>
                                        </Modal>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/modal/size').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>垂直居中</p>
                    <p>模态框默认垂直于顶部对齐，使用 <code>isCentered</code> 属性可以将模态框垂直居中对齐。
                    </p>
                    <Example {...{
                        className: ['demo-modal'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Button {...{
                                            color: 'brand',
                                            value: "垂直",
                                            isWide: true,
                                            callbacks: {
                                                onClick() {
                                                    me.setState({
                                                        ...me.initState,
                                                        centerModal: true
                                                    })
                                                }
                                            }
                                        }}/>
                                        <Modal {...{
                                            isOpen: me.state.centerModal,
                                            title: '林语堂语录',
                                            isCentered: true
                                        }}>
                                            <p>孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，可都和你无关，这就叫孤独。</p>
                                        </Modal>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/modal/center').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>操作</p>
                    <p>模态框组件支持自定义底部按钮样式及事件，使用 <code>action</code> 属性传入按钮列表即可实现自定义操作。
                    </p>
                    <Example {...{
                        className: ['demo-modal'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Button {...{
                                            color: 'warning',
                                            value: "操作",
                                            isWide: true,
                                            callbacks: {
                                                onClick() {
                                                    me.setState({
                                                        ...me.initState,
                                                        actionModal: true
                                                    })
                                                }
                                            }
                                        }}/>
                                        <Modal {...{
                                            isOpen: me.state.actionModal,
                                            title: '林语堂语录',
                                            actions: [
                                                <Button {...{
                                                    color: 'brand',
                                                    value: '确认'
                                                }} />, <Button {...{
                                                    color: 'secondary',
                                                    attributes: {
                                                        'data-dismiss': 'modal'
                                                    },
                                                    value: '自定义关闭'
                                                }} />
                                            ]
                                        }}>
                                            <p>孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，可都和你无关，这就叫孤独。</p>
                                        </Modal>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/modal/action').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>生命周期</p>
                    <p>在模态框组件提供了显示和隐藏的生命周期函数，你可以在不同的生命周期对模态框或数据进行相关操作，共支持 <code>onBeforeOpen</code>、<code>onOpened</code>、<code>onBeforeClose</code> 、 <code>onClosed</code> 四个生命周期。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={2}>
                                        <Button {...{
                                            color: 'danger',
                                            value: '打开',
                                            callbacks: {
                                                onClick: () => {
                                                    me.setState({
                                                        ...me.initState,
                                                        lifeModal: true
                                                    })
                                                }
                                            }
                                        }}/>
                                        <Modal {...{
                                            isOpen: me.state.lifeModal,
                                            title: '林语堂语录',
                                            onBeforeOpen() {
                                                _renderEvent('onBeforeOpen');
                                            },
                                            onOpened() {
                                                _renderEvent('onOpened');
                                            },
                                            onBeforeClose() {
                                                _renderEvent('onBeforeClose');
                                            },
                                            onClosed() {
                                                _renderEvent('onClosed');
                                            },
                                            actions: [
                                                <Button {...{
                                                    color: 'brand',
                                                    value: '确认'
                                                }} />, <Button {...{
                                                    color: 'secondary',
                                                    attributes: {
                                                        'data-dismiss': 'modal'
                                                    },
                                                    value: '自定义关闭'
                                                }} />
                                            ]
                                        }}>
                                            <p>孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，可都和你无关，这就叫孤独。</p>
                                        </Modal>
                                    </Col>
                                    <Col part={12}>
                                        <div className='displayBox'/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/modal/life').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['isOpen', '定义模态框是否展示，', 'Boolean', 'true / false', 'true'],
                            ['size', '定义模态框的大小尺寸', 'String', 'lg / sm / md', 'md'],
                            ['title', '定义模态框的标题展示文字', 'String', '-', '-'],
                            ['isCloseable', '定义模态框是否显示关闭按钮', 'Boolean', 'true / false', 'true'],
                            ['isCentered', '定义模态框是否垂直居中显示', 'Boolean', 'true / false', 'false'],
                            ['actions',
                                <Fragment>定义模态框自定义操作按钮，支持传入多个按钮实例，若需要传入自动关闭功能按钮，需要提供 <code>attributes</code> 属性为 <code>data-dismiss="modal"</code></Fragment>, 'Component',
                                <Fragment>可选项<NavLink to='/tutorial/button'>按钮组件</NavLink></Fragment>, '-'],
                            ['onBeforeOpen', '生命周期函数，模态框即将打开前触发', 'Function', '-', '-'],
                            ['onOpened', '生命周期函数，模态框打开完成后触发', 'Function', '-', '-'],
                            ['onBeforeClose', '生命周期函数，模态框即将关闭前触发', 'Function', '-', '-'],
                            ['onClosed', '生命周期函数，模态框关闭后触发', 'Function', '-', '-']
                        ],
                        attribute: true,
                        callback: true
                    }}/>
                </Info>
            </Fragment>
        );
    }
}