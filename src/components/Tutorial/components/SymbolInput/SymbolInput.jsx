import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';

import {Col, Row, Form, SymbolInput, Icon, Button, Input} from 'shined';
import {NavLink} from "react-router-dom";

export default class extends Component {

    _renderEvent(e) {
        const _dom = document.querySelector('.displayBox');
        _dom.innerHTML += ('<p>' + (new Date()).format('yyyy-MM-dd hh:mm:ss') + '您触发了' + e.type + '事件，输入内容为' + e.target.value + '</p>');
        _dom.scrollTop = _dom.scrollHeight;
    }

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "标志输入",
                    description: '扩展基础输入，向基于文本的输入框追加前缀和后缀。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        标志输入扩展自 <NavLink to='/tutorial/input'>基础输入</NavLink>，在此基础上，可以很容易地向基于文本的输入框添加作为前缀和后缀的文本或按钮。例如，您可以添加美元符号，或者在
                        Twitter 用户名前添加 @，或者应用程序接口所需要的其他公共的元素。
                    </p>
                </Info>
                <Note {...{
                    type: 'danger',
                    message:
                        <p className='helper mb0'>标志输入仅支持 <code>type</code> 属性为文本类型的基础输入组件，暂不支持 <code>select</code>、<code>button</code>、<code>file</code>、<code>radio</code>和<code>checkbox</code> 等类型。
                        </p>
                }}/>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>文字标志</p>
                    <p>使用 <code>SymbolInput</code> 组件可以在基础输入组件前缀或后缀插入文字。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Form>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '前缀标志',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                prepend: '@'
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '后缀标志',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                append: '@example.com'
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '两端标志',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                prepend: '#',
                                                append: 'px'
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '多个标志',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                prepend: ['Amount', '0'],
                                                append: ['.00', '$']
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/symbol/text').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>图标标志</p>
                    <p>与 <code>Icon</code> 组件配合或直接添加 <code>DOM</code> 可标志图标，图标列表见<NavLink
                        to='/tutorial/icon'>图标</NavLink>。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Form>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '前缀图标',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                prepend: <i className="sh-icon-exclamation-triangle"/>
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '后缀图标',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                append: <i className="sh-icon-group"/>
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '两端图标',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                prepend: <Icon className="sh-icon-bar-chart"/>,
                                                append: <Icon className="sh-icon-registered"/>
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '多个图标',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                prepend: [
                                                    <Icon className="sh-icon-bar-chart"/>,
                                                    <i className="sh-icon-exclamation-triangle"/>
                                                ],
                                                append: [
                                                    <Icon className="sh-icon-registered"/>,
                                                    <i className="sh-icon-group"/>
                                                ]
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/symbol/icon').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>按钮标志</p>
                    <p>与 <code>Button</code> 组件组合可以在基础输入组件前缀或后缀插入按钮。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Form>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '前缀按钮',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                prepend: <Button {...{
                                                    value: 'Go!'
                                                }}/>
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '后缀按钮',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                append: <Button {...{
                                                    value: 'Go!',
                                                    color: 'brand'
                                                }}/>
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '两端按钮',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                prepend: <Button {...{
                                                    value: 'Go!',
                                                    color: 'warning'
                                                }}/>,
                                                append: <Button {...{
                                                    value: 'Go!',
                                                    color: 'outline-info'
                                                }}/>
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/symbol/button').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>选框标志</p>
                    <p>与 <code>Input</code> 组件组合可以在基础输入组件前缀或后缀插入选框，目前仅支持 <code>type</code> 类型为 <code>radio</code> 或 <code>checkbox</code>。
                    </p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Form>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '前缀单选框',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                prepend: (
                                                    <Input {...{
                                                        type: 'radio',
                                                        name: 'demo1',
                                                        itemList: [{
                                                            value: 'value01'
                                                        }]
                                                    }}/>
                                                )
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '前缀复选框',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                prepend: (
                                                    <Input {...{
                                                        type: 'checkbox',
                                                        name: 'demo2',
                                                        itemList: [{
                                                            value: 'value01'
                                                        }]
                                                    }}/>
                                                )
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '后缀单选框',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                append: (
                                                    <Input {...{
                                                        type: 'radio',
                                                        name: 'demo1',
                                                        itemList: [{
                                                            value: 'value01'
                                                        }]
                                                    }}/>
                                                )
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '后缀复选框',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                append: (
                                                    <Input {...{
                                                        type: 'checkbox',
                                                        name: 'demo2',
                                                        itemList: [{
                                                            value: 'value01'
                                                        }]
                                                    }}/>
                                                )
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '两端选框',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                prepend: (
                                                    <Input {...{
                                                        type: 'checkbox',
                                                        name: 'demo2',
                                                        itemList: [{
                                                            value: 'value01'
                                                        }]
                                                    }}/>
                                                ),
                                                append: (
                                                    <Input {...{
                                                        type: 'radio',
                                                        name: 'demo1',
                                                        itemList: [{
                                                            value: 'value01'
                                                        }]
                                                    }}/>
                                                )
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '两端选框',
                                                    type: 'text',
                                                    placeholder: '请输入内容'
                                                },
                                                append: (
                                                    <Input {...{
                                                        type: 'checkbox',
                                                        name: 'demo2',
                                                        itemList: [{
                                                            value: 'value01'
                                                        }]
                                                    }}/>
                                                ),
                                                prepend: (
                                                    <Input {...{
                                                        type: 'radio',
                                                        name: 'demo1',
                                                        itemList: [{
                                                            value: 'value01'
                                                        }]
                                                    }}/>
                                                )
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/symbol/check').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['input', (<Fragment>
                                <span>定义基础输入的相关参数，该属性参考<NavLink to='/tutorial/input'>基础输入</NavLink>中相关配置</span>
                            </Fragment>), 'Object', '-', '-'],
                            ['prepend', '定义标志输入前缀项，支持类型见下表', 'Array', '-', '-'],
                            ['append', '定义标志输入后缀项，支持类型见下表', 'Array', '-', '-'],
                        ],
                        className: true,
                        attribute: true,
                        callback: true
                    }}/>
                    <p className='title'>支持类型</p>
                    <APITable {...{
                        data: [
                            ['文本', '标志支持普通文本作为前后缀类型', '任意', '-', '-'],
                            ['DOM', (<Fragment>
                                <span>标志支持 <code>DOM</code> 作为前后缀类型</span>
                            </Fragment>), 'DOM', '-', '-'],
                            ['图标', (<Fragment>
                                <span>标志支持 <code>Icon</code> 组件作为前后缀类型，请参考<NavLink
                                    to="/tutorial/icon">图标组件</NavLink></span>
                            </Fragment>), 'Component', '-', '-'],
                            ['按钮', (<Fragment>
                                <span>标志支持 <code>Button</code> 组件作为前后缀类型，请参考<NavLink
                                    to="/tutorial/button">按钮组件</NavLink></span>
                            </Fragment>), 'Component', '-', '-'],
                            ['选框', (<Fragment>
                                <span>标志支持 <code>Input</code> 组件中 <code>type</code> 属性为 <code>radio</code> 或 <code>checkbox</code> 的选框作为前后缀类型，请参考<NavLink
                                    to="/tutorial/check">选框组件</NavLink></span>
                            </Fragment>), 'Component', '-', '-'],
                        ],
                        className: false
                    }}/>
                    <Note {...{
                        type: 'danger',
                        message: <p
                            className="helper mb0">当标志类型为选框组件时，仅支持如下属性：<code>name</code>、<code>type</code>、<code>itemList</code>，且<code>itemList</code>仅第一个子元素生效。
                        </p>
                    }}/>
                </Info>
            </Fragment>
        );
    }
}