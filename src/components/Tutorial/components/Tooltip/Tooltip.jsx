import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom";

import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";
import Note from '../../../common/Note/Note';
import APITable from "../../../common/APITable/APITable";

import {Col, Row, Tooltip, Button} from 'shined';

import './style.less';

export default class extends Component {
    constructor(props) {
        super(props);
        this.initState = {
            apiTooltip: false,
        };
        this.state = this.initState;
    }

    render() {
        const me = this;
        return (
            <Fragment>
                <Info {...{
                    title: "文字提示",
                    description: '用于在鼠标聚焦时对用户进行提示。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>当用户移动鼠标指针在某个元素上时，出现提示信息窗口用来显示额外信息。提示内容可以包含任何文字或者 HTML 元素。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础文字提示</p>
                    <p>文字提示组件是一个容器组件，必须嵌套唯一的<NavLink
                        to="/tutorial/button">按钮组件</NavLink>的实例才能生效，可以通过设置 <code>placement</code> 控制提示文字展示方向。</p>
                    <Example {...{
                        className: ['demo-tooltip'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Tooltip {...{
                                            title: 'This is a tooltip!',
                                            placement: 'top'
                                        }}>
                                            <Button {...{
                                                value: 'Top',
                                                color: 'brand',
                                                isWide: true
                                            }}/>
                                        </Tooltip>
                                        <Tooltip {...{
                                            title: 'This is a tooltip!',
                                            placement: 'right'
                                        }}>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'info',
                                                isWide: true
                                            }}/>
                                        </Tooltip>
                                        <Tooltip {...{
                                            title: 'This is a tooltip!',
                                            placement: 'bottom',
                                            isWide: true
                                        }}>
                                            <Button {...{
                                                value: 'Bottom',
                                                color: 'accent',
                                                isWide: true
                                            }}/>
                                        </Tooltip>
                                        <Tooltip {...{
                                            title: 'This is a tooltip!',
                                            placement: 'left'
                                        }}>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'danger',
                                                isWide: true
                                            }}/>
                                        </Tooltip>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/tooltip/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <Note {...{
                        type: 'info',
                        message: <Fragment>
                            <p className="helper mb0">默认情况下，提示文字会使用 <code>auto</code> 方式展示，即按照空间大小自动设置展示方向。</p>
                        </Fragment>
                    }}/>
                    <p className='title'>背景</p>
                    <p>文字提示组件支持黑色和白色两种背景色，通过设置 <code>skin</code> 属性可以变更背景。</p>
                    <Example {...{
                        className: ['demo-tooltip'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={6}>
                                        <Tooltip {...{
                                            title: 'This is a tooltip!',
                                            placement: 'top',
                                            skin: 'light'
                                        }}>
                                            <Button {...{
                                                value: 'Light',
                                                color: 'info',
                                                isWide: true,
                                                className: ['helper', 'mb0']
                                            }}/>
                                        </Tooltip>
                                        <Tooltip {...{
                                            title: 'This is a tooltip!',
                                            placement: 'top',
                                            skin: 'dark'
                                        }}>
                                            <Button {...{
                                                value: 'Dark',
                                                color: 'danger',
                                                isWide: true,
                                                className: ['helper', 'mb0']
                                            }}/>
                                        </Tooltip>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/tooltip/skin').default,
                            language: 'jsx'
                        }
                    }}/>

                    <p className='title'>HTML文字</p>
                    <p>
                        文字提示组件支持在 <code>title</code> 属性中显示 HTML
                        代码段，当设置 <code>isHtml</code> 为 <code>true</code> 时，代码段会被解析成 DOM 元素。
                    </p>
                    <Example {...{
                        className: ['demo-tooltip'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Tooltip {...{
                                            title: 'This is a <span style="color: red">tooltip</span>!',
                                            placement: 'top',
                                            isHtml: true
                                        }}>
                                            <Button {...{
                                                value: 'HTML',
                                                color: 'brand',
                                                isWide: true,
                                                className: ['helper', 'mb0']
                                            }}/>
                                        </Tooltip>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/tooltip/html').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>触发行为</p>
                    <p>
                        文字提示组件提供了多种触发行为展示提示文字的方式，目前支持通过 <code>click</code> 、 <code>hover</code> 、 <code>focus</code> 和 <code>manual</code> 方式触发，支持传入一个或多个触发行为。
                    </p>
                    <Example {...{
                        className: ['demo-tooltip'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Tooltip {...{
                                            title: 'This is a tooltip!',
                                            placement: 'top',
                                            trigger: 'hover'
                                        }}>
                                            <Button {...{
                                                value: 'Hover',
                                                color: 'info',
                                                isWide: true,
                                                className: 'helper mb0'
                                            }}/>
                                        </Tooltip>
                                        <Tooltip {...{
                                            title: 'This is a tooltip!',
                                            placement: 'top',
                                            trigger: 'click'
                                        }}>
                                            <Button {...{
                                                value: 'Click',
                                                color: 'info',
                                                isWide: true,
                                                className: 'helper mb0'
                                            }}/>
                                        </Tooltip>
                                        <Tooltip {...{
                                            title: 'This is a tooltip!',
                                            placement: 'top',
                                            trigger: 'focus'
                                        }}>
                                            <Button {...{
                                                value: 'Focus',
                                                color: 'info',
                                                isWide: true,
                                                className: 'helper mb0'
                                            }}/>
                                        </Tooltip>
                                        <Tooltip {...{
                                            title: 'This is a tooltip!',
                                            placement: 'top',
                                            trigger: 'manual'
                                        }}>
                                            <Button {...{
                                                value: 'Manual',
                                                color: 'info',
                                                isWide: true,
                                                className: 'helper mb0'
                                            }}/>
                                        </Tooltip>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/tooltip/trigger').default,
                            language: 'jsx'
                        }
                    }}/>
                    <Note {...{
                        type: 'info',
                        message: <Fragment>
                            <p className="helper mb0"><code>manual</code> 是通过 API 触发的一种方式，见下文。</p>
                        </Fragment>
                    }}/>
                    <p className='title'>API 触发</p>
                    <p>
                        除了预设的触发行为方式，文字提示组件还支持通过 <code>API</code> 方式触发，只需设置 <code>isOpen</code> 属性即可实现在自定义时机触发展示和隐藏。
                    </p>
                    <Example {...{
                        className: ['demo-tooltip'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <div>
                                            <Button {...{
                                                value: '隐藏',
                                                color: 'outline-info',
                                                className: ['helper', 'mb20', 'mr10', 'mt0', 'ml0'],
                                                callbacks: {
                                                    onClick: () => {
                                                        me.setState({
                                                            ...me.initState,
                                                            apiTooltip: false
                                                        })
                                                    }
                                                }
                                            }}/>
                                            <Button {...{
                                                value: '显示',
                                                color: 'outline-success',
                                                className: ['helper', 'mb20', 'mt0', 'ml0'],
                                                callbacks: {
                                                    onClick: () => {
                                                        me.setState({
                                                            ...me.initState,
                                                            apiTooltip: true
                                                        })
                                                    }
                                                }
                                            }}/>
                                        </div>
                                        <Tooltip {...{
                                            isOpen: me.state.apiTooltip,
                                            title: 'This is a tooltip!',
                                            placement: 'top',
                                            trigger: 'manual'
                                        }}>
                                            <Button {...{
                                                value: 'Manual',
                                                color: 'info',
                                                isWide: true,
                                                className: 'helper mb0'
                                            }}/>
                                        </Tooltip>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/tooltip/api').default,
                            language: 'jsx'
                        }
                    }}/>
                    <Note {...{
                        type: 'info',
                        message: <Fragment>
                            <p className="helper mb0">只有当 <code>trigger</code> 属性值为 <code>manual</code> 时，<code>isOpen</code> 属性才会生效。
                            </p>
                        </Fragment>
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['isOpen', <Fragment>
                                定义文字提示是否展示，仅当 <code>trigger</code> 属性为 <code>manual</code> 时生效
                            </Fragment>, 'Boolean', 'true / false', 'false'],
                            ['title', '定义文字提示内容', 'String ／ HTML', '-', '-'],
                            ['trigger', '定义如何触发文字提示', 'String', 'click / hover / focus / manual', '-'],
                            ['skin', '定义文字提示显示的背景颜色', 'String', 'light / dark', 'light'],
                            ['placement',
                                <Fragment>定义文字提示的定位方式，当指定为 <code>auto</code> 时，会动态调整提示工具</Fragment>, 'String', 'top / bottom / left / right / auto', 'auto'],
                            ['delay',
                                <Fragment>延迟显示和隐藏文字提示组件的毫秒数，当 <code>trigger</code> 属性为 <code>manual</code> 时无效。如果提供的是一个数字，那么延迟将会应用于显示和隐藏。如果提供的是对象，结构如下表所示</Fragment>, 'Number / Object', '-', '-'],
                            ['isHtml', '定义文字提示组件是否以 DOM 形式展示', 'Boolean', 'true / false', 'false'],
                            ['isAutoWidth', '定义文字提示组件是否自动适配宽度', 'Boolean', 'true / false', 'true'],
                            ['isAnimate', '定义文字提示组件是否显示动画', 'Boolean', 'true / false', 'true'],
                            ['onBeforeOpen', '生命周期函数，文字提示组件即将打开前触发', 'Function', '-', '-'],
                            ['onOpened', '生命周期函数，文字提示组件打开完成后触发', 'Function', '-', '-'],
                            ['onBeforeClose', '生命周期函数，文字提示组件即将关闭前触发', 'Function', '-', '-'],
                            ['onClosed', '生命周期函数，文字提示组件关闭后触发', 'Function', '-', '-']
                        ],
                        className: false
                    }}/>
                    <p className='title'>延迟对象</p>
                    <APITable {...{
                        data: [
                            ['show', '定义展示时延迟毫秒数', 'Number', '-', '-'],
                            ['hide', '定义隐藏时延迟毫秒数', 'Number', '-', '-']
                        ],
                        className: false
                    }}/>
                </Info>
            </Fragment>
        );
    }
}