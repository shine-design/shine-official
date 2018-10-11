import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';
import {NavLink} from "react-router-dom";

import {Col, Row, Alert, Button, Group} from 'shined';

export default class extends Component {
    constructor(props) {
        super(props);
        this.initState = {
            actionAlert: true,
            closeableAlert: true,
        };
        this.state = this.initState;
    }

    render() {
        const me = this;
        return (
            <Fragment>
                <Info {...{
                    title: "警告框",
                    description: '用于页面中展示重要的提示信息。',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        警告框（Alert）消息大多是用来向终端用户显示诸如警告或确认消息的信息，通过设置不同属性，可以个性化定制警告框样式。通过提供一些灵活的预定义消息，为常见的用户动作提供反馈消息。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础警告框</p>
                    <p>使用 <code>Alert</code> 组件可以直接创建一个基础的警告框，也可以通过指定 <code>color</code> 属性设置不同的色彩，我们建议为警告框使用统一的状态配色方案。
                    </p>
                    <Example {...{
                        className: ['demo-alert'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Alert {...{
                                            color: 'success',
                                            title: 'Well done! ',
                                            message: 'You successfully read this important alert message。'
                                        }}/>
                                        <Alert {...{
                                            color: 'info',
                                            title: 'Heads up! ',
                                            message: 'This alert needs your attention, but it\'s not super important.'
                                        }}/>
                                        <Alert {...{
                                            color: 'warning',
                                            title: 'Warning! ',
                                            message: 'Better check yourself, you\'re not looking too good.'
                                        }}/>
                                        <Alert {...{
                                            color: 'danger',
                                            title: 'Oh snap! ',
                                            message: 'Change a few things up and try submitting again.'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-success',
                                            title: 'Well done! ',
                                            message: 'You successfully read this important alert message。'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-info',
                                            title: 'Heads up! ',
                                            message: 'This alert needs your attention, but it\'s not super important.'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-warning',
                                            title: 'Warning! ',
                                            message: 'Better check yourself, you\'re not looking too good.'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-danger',
                                            title: 'Oh snap! ',
                                            message: 'Change a few things up and try submitting again.'
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/alert/basic').default,
                            language: 'markup'
                        }
                    }}/>
                    <Note {...{
                        type: 'info',
                        message: <Fragment>
                            <p className='helper mb0'>通常情况下，警告框不提供默认状态，你有必要通过设置 <code>color</code> 属性为警告框显式指定一种状态。</p>
                        </Fragment>
                    }}/>
                    <p className='title'>可关闭的警告框</p>
                    <p>通过指定 <code>isCloseable</code> 属性可以在警告框右侧显示一个提供关闭警告框操作的按钮，也可以通过 <code>isOpen</code> 属性控制警告框的展示与隐藏。
                    </p>
                    <Example {...{
                        className: ['demo-alert'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Alert {...{
                                            color: 'success',
                                            title: 'Well done! ',
                                            message: 'You successfully read this important alert message。',
                                            isCloseable: true
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-danger',
                                            title: 'Oh snap! ',
                                            message: 'Change a few things up and try submitting again.',
                                            isCloseable: true
                                        }}/>
                                        <Button {...{
                                            value: '隐藏',
                                            color: 'outline-info',
                                            className: ['helper', 'mb20', 'mr10'],
                                            callbacks: {
                                                onClick: () => {
                                                    me.setState({
                                                        ...me.initState,
                                                        closeableAlert: false
                                                    })
                                                }
                                            }
                                        }}/>
                                        <Button {...{
                                            value: '显示',
                                            color: 'outline-success',
                                            className: ['helper', 'mb20'],
                                            callbacks: {
                                                onClick: () => {
                                                    me.setState({
                                                        ...me.initState,
                                                        closeableAlert: true
                                                    })
                                                }
                                            }
                                        }}/>
                                        <Alert {...{
                                            isOpen: me.state.closeableAlert,
                                            color: 'outline-info',
                                            title: 'Heads up! ',
                                            message: 'This alert needs your attention, but it\'s not super important.',
                                            isCloseable: true
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/alert/closeable').default,
                            language: 'markup'
                        }
                    }}/>
                    <p className='title'>双轮廓</p>
                    <p>使用双倍宽度的轮廓可以加强警告作用，使警告以更高的对比度展示，通过指定 <code>isDoubleOutline</code> 属性可以设置双倍的轮廓边框。
                    </p>
                    <Example {...{
                        className: ['demo-alert'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={6}>
                                        <Alert {...{
                                            color: 'outline-success',
                                            title: 'Well done! ',
                                            message: 'You successfully read this important alert message。'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-info',
                                            title: 'Heads up! ',
                                            message: 'This alert needs your attention, but it\'s not super important.'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-warning',
                                            title: 'Warning! ',
                                            message: 'Better check yourself, you\'re not looking too good.'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-danger',
                                            title: 'Oh snap! ',
                                            message: 'Change a few things up and try submitting again.'
                                        }}/>
                                    </Col>
                                    <Col part={6}>
                                        <Alert {...{
                                            color: 'outline-success',
                                            title: 'Well done! ',
                                            message: 'You successfully read this important alert message。',
                                            isDoubleOutline: true
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-info',
                                            title: 'Heads up! ',
                                            message: 'This alert needs your attention, but it\'s not super important.',
                                            isDoubleOutline: true
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-warning',
                                            title: 'Warning! ',
                                            message: 'Better check yourself, you\'re not looking too good.',
                                            isDoubleOutline: true
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-danger',
                                            title: 'Oh snap! ',
                                            message: 'Change a few things up and try submitting again.',
                                            isDoubleOutline: true
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/alert/double').default,
                            language: 'markup'
                        }
                    }}/>
                    <p className='title'>警告框样式</p>
                    <p>目前警告框支持圆角矩形和直角矩形两种样式，通过设置 <code>alertStyle</code> 属性可以切换警告框样式。
                    </p>
                    <Example {...{
                        className: ['demo-alert'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={6}>
                                        <Alert {...{
                                            color: 'warning',
                                            title: 'Warning! ',
                                            message: 'Better check yourself, you\'re not looking too good.'
                                        }}/>
                                        <Alert {...{
                                            color: 'danger',
                                            title: 'Oh snap! ',
                                            message: 'Change a few things up and try submitting again.'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-success',
                                            title: 'Well done! ',
                                            message: 'You successfully read this important alert message。'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-info',
                                            title: 'Heads up! ',
                                            message: 'This alert needs your attention, but it\'s not super important.'
                                        }}/>
                                    </Col>
                                    <Col part={6}>
                                        <Alert {...{
                                            color: 'warning',
                                            title: 'Warning! ',
                                            alertStyle: 'square',
                                            message: 'Better check yourself, you\'re not looking too good.'
                                        }}/>
                                        <Alert {...{
                                            color: 'danger',
                                            title: 'Oh snap! ',
                                            alertStyle: 'square',
                                            message: 'Change a few things up and try submitting again.'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-success',
                                            title: 'Well done! ',
                                            alertStyle: 'square',
                                            message: 'You successfully read this important alert message。'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-info',
                                            title: 'Heads up! ',
                                            alertStyle: 'square',
                                            message: 'This alert needs your attention, but it\'s not super important.'
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/alert/style').default,
                            language: 'markup'
                        }
                    }}/>
                    <p className='title'>阴影效果</p>
                    <p>通过设置 <code>isAir</code> 属性可以使警告框产生阴影效果。
                    </p>
                    <Example {...{
                        className: ['demo-alert'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={6}>
                                        <Alert {...{
                                            color: 'info',
                                            title: 'Heads up! ',
                                            message: 'This alert needs your attention, but it\'s not super important.'
                                        }}/>
                                        <Alert {...{
                                            color: 'danger',
                                            title: 'Oh snap! ',
                                            message: 'Change a few things up and try submitting again.'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-success',
                                            title: 'Well done! ',
                                            message: 'You successfully read this important alert message。'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-info',
                                            title: 'Heads up! ',
                                            message: 'This alert needs your attention, but it\'s not super important.'
                                        }}/>
                                    </Col>
                                    <Col part={6}>
                                        <Alert {...{
                                            color: 'info',
                                            title: 'Heads up! ',
                                            isAir: true,
                                            message: 'This alert needs your attention, but it\'s not super important.'
                                        }}/>
                                        <Alert {...{
                                            color: 'danger',
                                            title: 'Oh snap! ',
                                            isAir: true,
                                            message: 'Change a few things up and try submitting again.'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-success',
                                            title: 'Well done! ',
                                            isAir: true,
                                            message: 'You successfully read this important alert message。'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-info',
                                            title: 'Heads up! ',
                                            isAir: true,
                                            message: 'This alert needs your attention, but it\'s not super important.'
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/alert/air').default,
                            language: 'markup'
                        }
                    }}/>
                    <p className='title'>图标</p>
                    <p>在警告框中使用图标可以更直观的显示警告状态，只需使用属性 <code>iconName</code> 设置图标名称。
                    </p>
                    <Example {...{
                        className: ['demo-alert'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Alert {...{
                                            color: 'danger',
                                            title: 'Oh snap! ',
                                            isAir: true,
                                            message: 'Change a few things up and try submitting again.',
                                            iconName: 'sh-icon-warning'
                                        }}/>
                                        <Alert {...{
                                            color: 'outline-danger',
                                            title: 'Oh snap! ',
                                            isAir: true,
                                            message: 'Change a few things up and try submitting again.',
                                            iconName: 'sh-icon-warning'
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/alert/icon').default,
                            language: 'markup'
                        }
                    }}/>
                    <p className='title'>自定义操作</p>
                    <p>警告框默认提供了关闭按钮，若无法满足需求，可以通过 <code>action</code> 属性设置相关实例。
                    </p>
                    <Example {...{
                        className: ['demo-alert'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Alert {...{
                                            isOpen: me.state.actionAlert,
                                            color: 'info',
                                            title: 'Heads up! ',
                                            isAir: true,
                                            message: 'This alert needs your attention, but it\'s not super important.',
                                            actions: [
                                                <Button {...{
                                                    value: 'Action',
                                                    color: 'accent',
                                                    callbacks: {
                                                        onClick() {
                                                            alert('Click me!');
                                                        }
                                                    }
                                                }}/>,
                                                <Button {...{
                                                    value: 'Dismiss',
                                                    color: 'outline-secondary',
                                                    callbacks: {
                                                        onClick() {
                                                            me.setState({
                                                                ...me.initState,
                                                                actionAlert: false
                                                            })
                                                        }
                                                    }
                                                }}/>
                                            ]
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/alert/action').default,
                            language: 'markup'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['title', '定义警告框标题', '任意类型', '-', '-'],
                            ['message', '定义警告框内容', '任意类型', '-', '-'],
                            ['color',
                                <Fragment>定义警告框前景色，支持常规颜色或轮廓颜色（以 <code>outline-</code> 修饰）</Fragment>, 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>色彩</NavLink></Fragment>, 'default'],
                            ['iconName', '定义警告框显示的图标修饰符，若不设置，则隐藏图标', 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/icon'>图标</NavLink></Fragment>, '-'],
                            ['alertStyle', '定义警告框的外观样式，支持直角矩形，圆角矩形', 'String', 'square / pill', 'pill'],
                            ['actions', '定义警告框自定义按钮', 'Array', <Fragment>
                                <NavLink to='/tutorial/button'>按钮</NavLink>组件实例
                            </Fragment>, '-'],
                            ['isCloseable', '定义警告框是否显示关闭按钮', 'Boolean', 'true / false', 'false'],
                            ['isOpen', '定义警告框是否展示', 'Boolean', 'true / false', 'true'],
                            ['isDoubleOutline', <Fragment>
                                定义警告框是否以双倍轮廓显示，仅 <code>color</code> 属性设置为 <code>outline-*</code> 时生效。
                            </Fragment>, 'Boolean', 'true / false', 'false'],
                            ['isAir', '定义警告框是否显示阴影', 'Boolean', 'true / false', 'false'],
                            ['onBeforeClose', '生命周期函数，警告框即将关闭前触发', 'Function', '-', '-'],
                            ['onClosed', '生命周期函数，警告框关闭后触发', 'Function', '-', '-']
                        ],
                        attribute: true
                    }}/>
                </Info>
            </Fragment>
        );
    }
}
