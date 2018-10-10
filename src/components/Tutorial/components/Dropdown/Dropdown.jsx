import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";

import {Col, Row, Dropdown} from 'shined';
import './style.less';
import APITable from "../../../common/APITable/APITable";
import Note from '../../../common/Note/Note';
import {NavLink} from "react-router-dom";

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "下拉按钮组",
                    description: '用于封装一系列按钮的复合组件。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>下拉按钮组允许多个按钮组件被隐藏在一个按钮上。通过鼠标操作事件触发显示（隐藏）按钮组件。可以通过 <code>Dropdown</code> 组件创建按钮组，并修改默认样式行为。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础下拉按钮组</p>
                    <p>使用 <code>Dropdown</code> 组件可以创建下拉按钮组，<code>button</code> 属性可以指定触发操作的按钮样式，<code>items</code> 属性用于设置菜单按钮样式。
                    </p>
                    <Example {...{
                        className: ['demo-dropDown'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Dropdown {...{
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'primary'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                        <Dropdown {...{
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'danger'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                        <Dropdown {...{
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'success'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/dropdown/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>方向</p>
                    <p>使用 <code>direction</code> 属性可以设置下拉菜单显示方向，支持 <code>up</code>、<code>down</code>、<code>left</code>、<code>right</code> 方向。
                    </p>
                    <Example {...{
                        className: ['demo-dropDown'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Dropdown {...{
                                            direction: 'up',
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'primary'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                        <Dropdown {...{
                                            direction: 'left',
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'danger'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                        <Dropdown {...{
                                            direction: 'right',
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'success'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                        <Dropdown {...{
                                            direction: 'down',
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'accent'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/dropdown/direction').default,
                            language: 'jsx'
                        }
                    }}/>
                    <Note {...{
                        type: 'info',
                        message: (<Fragment>
                            <p className='helper mb0'>若当前方向空间不足以展开菜单时，会自动调整展示方向，如上例 <code>direction</code> 为 <code>up</code> 的示例。
                            </p>
                        </Fragment>)
                    }}/>
                    <p className='title'>分割</p>
                    <p>分割的下拉按钮组使用与下拉菜单按钮大致相同的样式，但是对下拉按钮组添加了原始的功能。分割按钮的左边是原始的功能，右边是显示下拉菜单的切换。使用 <code>isSplit</code> 属性可以设置是否分割。
                    </p>
                    <Example {...{
                        className: ['demo-dropDown'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Dropdown {...{
                                            isSplit: true,
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'primary'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                        <Dropdown {...{
                                            isSplit: true,
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'danger'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                        <Dropdown {...{
                                            isSplit: true,
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'success'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/dropdown/split').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>分隔 & 标题</p>
                    <p>下拉按钮组 <code>items</code> 属性除了支持 <code>Button</code> 实例，还支持标题与分隔线，只需指定 <code>type</code> 属性为 <code>divider</code> 或 <code>header</code>。
                    </p>
                    <Example {...{
                        className: ['demo-dropDown'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Dropdown {...{
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'primary'
                                            },
                                            items: [
                                                {
                                                    type: 'header',
                                                    value: 'This is a header'
                                                },
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    type: 'divider'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/dropdown/divider').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>对齐方式</p>
                    <p>下拉按钮组菜单项支持指定对齐方式，使用 <code>align</code> 属性可以设置左对齐或右对齐。
                    </p>
                    <Example {...{
                        className: ['demo-dropDown'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Dropdown {...{
                                            align: 'left',
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'primary'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1'
                                                },
                                                {
                                                    value: 'Dropdown-2'
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                        <Dropdown {...{
                                            align: 'right',
                                            button: {
                                                value: 'DropDown',
                                                isWide: true,
                                                color: 'primary'
                                            },
                                            items: [
                                                {
                                                    value: 'Dropdown-1',
                                                    isDisabled: true
                                                },
                                                {
                                                    value: 'Dropdown-2',
                                                    isActive: true
                                                },
                                                {
                                                    value: 'Dropdown-3'
                                                }
                                            ]
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/dropdown/align').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['direction', '定义下拉按钮组展示方向，当该方向空间不足时会自适应调整', 'String', 'up / down / left  /right', 'down'],
                            ['button', (<Fragment>
                                定义触发下拉按钮的交互按钮配置，该属性参考<NavLink to='/tutorial/button'>按钮组件</NavLink>
                            </Fragment>), 'Object', '-', '-'],
                            ['align', '定义下拉按钮组对齐方式', 'String', 'left / right', 'right'],
                            ['items', '定义下拉按钮组配置项，支持多个类型，见下表', 'Array', '-'],
                            ['isSplit', '定义是否分隔普通按钮和交互按钮，交互按钮将沿用普通按钮样式', 'Boolean', 'true / false', 'false'],
                            ['alignContent', '定义存在多根轴线时的对齐方式，当只有一根轴线时，该属性无效', 'String', 'nowrap / wrap-reverse / wrap', '-']
                        ],
                        attribute: true
                    }}/>
                    <p className='title'>配置项</p>
                    <APITable {...{
                        data: [
                            ['type', '定义当前配置项类型，支持按钮、分隔线和标题', 'String', 'button ／ header / divider', 'button'],
                            ['value', '定义当前配置项值，仅按钮类型或标题类型时支持', '任意', '-', '-'],
                            ['isActive', <Fragment>定义配置项是否显示激活状态样式，该属性参考<NavLink to='/tutorial/button'>按钮组件</NavLink></Fragment>, 'Boolean', 'true / false', 'false'],
                            ['isDisabled', <Fragment>定义配置项是否显示禁用状态样式，该属性参考<NavLink to='/tutorial/button'>按钮组件</NavLink></Fragment>, 'Boolean', 'true / false', 'false'],
                        ],
                        attribute: true,
                        callback: true
                    }}/>
                </Info>
            </Fragment>
        );
    }
}