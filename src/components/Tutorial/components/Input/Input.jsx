import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';

import {Col, Row, Form, Input} from 'shined';
import {Button} from "../Button/Button";
import {NavLink} from "react-router-dom";

import './style.less';

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
                    title: "基础输入",
                    description: '用于创建交互式控件，可以接收用户的数据、信息。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        输入组件用于搜集用户信息。 根据不同的 <code>type</code> 属性值，输入字段拥有很多种形式。输入字段可以是文本字段、密码字段、数字字段、地址栏字段等。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础输入</p>
                    <p>使用 <code>Input</code> 组件可以快速创建一些常见的表单控件。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={8} offset={2}>
                                        <Form>
                                            <Input {...{
                                                label: '普通文本',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine'
                                            }}/>
                                            <Input {...{
                                                label: '密码文本',
                                                type: 'password',
                                                placeholder: '请输入密码',
                                                defaultValue: 'this is a pwd'
                                            }}/>
                                            <Input {...{
                                                label: 'Email',
                                                type: 'email',
                                                placeholder: '请输入电子邮箱',
                                                defaultValue: 'help@shine.design'
                                            }}/>
                                            <Input {...{
                                                label: '数字文本',
                                                type: 'number',
                                                placeholder: '请输入数字',
                                                defaultValue: '10000'
                                            }}/>
                                            <Input {...{
                                                label: '网址文本',
                                                type: 'url',
                                                placeholder: '请输入网址',
                                                defaultValue: 'https://shine.design'
                                            }}/>
                                            <Input {...{
                                                label: '颜色选择',
                                                type: 'color',
                                                placeholder: '请选择颜色',
                                                defaultValue: '#716ACA'
                                            }}/>
                                            <Input {...{
                                                label: '日期选择',
                                                type: 'date',
                                                placeholder: '请选择日期',
                                                defaultValue: new Date().format('yyyy-MM-dd')
                                            }}/>
                                            <Input {...{
                                                label: '多行文本',
                                                type: 'textarea',
                                                placeholder: '请输入文本内容',
                                                defaultValue: '你好，Shine Design',
                                                attributes: {
                                                    rows: 3
                                                }
                                            }}/>
                                            <Input {...{
                                                label: '文件上传',
                                                type: 'file'
                                            }}/>
                                            <Input {...{
                                                label: '静态内容',
                                                type: 'static',
                                                defaultValue: '你好，Shine Design'
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/input/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>选择输入</p>
                    <p>设置 <code>type</code> 属性可以创建选择控件，支持单选和多选。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={8} offset={2}>
                                        <Form>
                                            <Input {...{
                                                label: '单选控件',
                                                type: 'select',
                                                options: [
                                                    {
                                                        value: 'option1',
                                                        label: '单选项一'
                                                    },
                                                    {
                                                        value: 'option2',
                                                        label: '单选项二'
                                                    },
                                                    {
                                                        value: 'option3',
                                                        label: '单选项三'
                                                    },
                                                    {
                                                        value: 'option4',
                                                        label: '单选项四'
                                                    }
                                                ]
                                            }}/>
                                            <Input {...{
                                                label: '单选控件',
                                                type: 'select',
                                                multiple: true,
                                                options: [
                                                    {
                                                        value: 'option1',
                                                        label: '多选项一'
                                                    },
                                                    {
                                                        value: 'option2',
                                                        label: '多选项二'
                                                    },
                                                    {
                                                        value: 'option3',
                                                        label: '多选项三'
                                                    },
                                                    {
                                                        value: 'option4',
                                                        label: '多选项四'
                                                    },
                                                    {
                                                        value: 'option5',
                                                        label: '多选项五'
                                                    },
                                                    {
                                                        value: 'option6',
                                                        label: '多选项六'
                                                    }
                                                ]
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/input/select').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>输入样式</p>
                    <p>针对不同风格的页面，我们设计了不同的边框样式，通过 <code>inputStyle</code> 属性可以设置直角边框、圆角边框或环形边框。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={8} offset={2}>
                                        <Form>
                                            <Input {...{
                                                label: '直角边框',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine',
                                                inputStyle: 'square'
                                            }}/>
                                            <Input {...{
                                                label: '圆角边框',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine'
                                            }}/>
                                            <Input {...{
                                                label: '环形边框',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine',
                                                inputStyle: 'pill'
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/input/style').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>阴影效果</p>
                    <p>我们为按钮提供了一种阴影特效，使用 isAir 属性可以使输入组件产生立体效果。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={8} offset={2}>
                                        <Form>
                                            <Input {...{
                                                label: '环形边框',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine',
                                                inputStyle: 'pill'
                                            }}/>
                                            <Input {...{
                                                label: '环形阴影边框',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine',
                                                inputStyle: 'pill',
                                                isAir: true
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/input/style').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>组件尺寸</p>
                    <p>我们提供了三种尺寸的输入组件，通过 <code>size</code> 属性可以设置不同的尺寸。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={8} offset={2}>
                                        <Form>
                                            <Input {...{
                                                label: '小尺寸',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine',
                                                size: 'sm'
                                            }}/>
                                            <Input {...{
                                                label: '中尺寸',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine'
                                            }}/>
                                            <Input {...{
                                                label: '大尺寸',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine',
                                                size: 'lg'
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/input/size').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>反色输入</p>
                    <p>设置 <code>isSolid</code> 属性，使用反色输入框，可以产生更高的对比度。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={8} offset={2}>
                                        <Form>
                                            <Input {...{
                                                label: '透明输入',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine'
                                            }}/>
                                            <Input {...{
                                                label: '反色输入',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine',
                                                isSolid: true
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/input/solid').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>Disabled & Readonly</p>
                    <p>输入组件支持设置 只读 属性或 禁止 属性，该属性可以限制用户的聚焦或写入行为。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={8} offset={2}>
                                        <Form>
                                            <Input {...{
                                                label: '正常输入',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine'
                                            }}/>
                                            <Input {...{
                                                label: '禁止输入',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine',
                                                isDisabled: true
                                            }}/>
                                            <Input {...{
                                                label: '只读输入',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine',
                                                isReadOnly: true
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/input/disabled').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>展示类型</p>
                    <p>输入组件支持 <code>block</code> 类型或 <code>inline</code>类型展示，当为 <code>inline</code> 类型时可以设置划分比例。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={8} offset={2}>
                                        <Form>
                                            <Input {...{
                                                label: '块妆输入',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine'
                                            }}/>
                                            <Input {...{
                                                label: '行间输入',
                                                type: 'text',
                                                display: 'inline',
                                                labelCount: 2,
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine'
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/input/display').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>事件系统</p>
                    <p>按钮组件支持合成事件系统，请参考<NavLink to='/tutorial/event'>相关资料</NavLink>。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Input {...{
                                            label: '事件测试',
                                            type: 'text',
                                            placeholder: '请输入内容',
                                            callbacks: {
                                                onFocus: this._renderEvent,
                                                onBlur: this._renderEvent,
                                                onChange: this._renderEvent
                                            }
                                        }}/>
                                    </Col>
                                    <Col part={12}>
                                        <div className='displayBox'/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/input/event').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['label', '定义基础输入的标签名称', '任意', '-', '-'],
                            ['id', (<Fragment>
                                <span>定义基础输入的 <code>id</code> 属性，若不存在，则提供默认值</span>
                            </Fragment>), 'String / Number', '由算法生成的UUID随机字符串', '-'],
                            ['type', '定义基础输入的类型，目前支持单选和复选', 'String', 'radio / checkbox', '-'],
                            ['name', '定义基础输入的名称，若存在多个选项，则共享名称', 'String / Number', '-', '-'],
                            ['multiple', (<Fragment>
                                <span>定义基础输入是否允许多选，仅 <code>type</code> 设置为 <code>select</code> 时生效</span>
                            </Fragment>), 'Boolean', 'true / false', 'false'],
                            ['options', (<Fragment>
                                <span>定义基础输入组件中各个选项，仅 <code>type</code> 设置为 <code>select</code> 时生效,选项配置见下表</span>
                            </Fragment>), 'Array', '-', '-'],
                            ['placeholder', '定义基础输入的占位内容', '任意', '-', '-'],
                            ['defaultValue', (<Fragment>
                                <span>定义基础输入的 <code>value</code> 属性值</span>
                            </Fragment>), 'String / Number', '-', '-'],
                            ['inputStyle', '定义基础输入组件的样式', 'String', 'pill / square / normal', 'normal'],
                            ['paddingSize', '定义基础输入组件的尺寸', 'String', 'lg / sm / md', 'lg'],
                            ['size', '定义基础输入组件中输入框的尺寸', 'String', 'lg / sm / md', 'lg'],
                            ['display', '定义当前基础输入组件的排列方式', 'String', 'block / inline', 'block'],
                            ['labelCount', (<Fragment>
                                <span>定义当前基础输入组件中标签占的栅格数，相关参数介绍参考<NavLink to='/tutorial/grid'>栅格系统</NavLink></span>
                            </Fragment>), 'Number', '1 至 12', '3'],
                            ['isFirst', (<Fragment>
                                <span>定义当前基础输入组件是否为 <code>Form</code> 表单中第一个组件</span>
                            </Fragment>), 'Boolean', 'true / false', 'false'],
                            ['isLast', (<Fragment>
                                <span>定义当前基础输入组件是否为 <code>Form</code> 表单中最后一个组件</span>
                            </Fragment>), 'Boolean', 'true / false', 'false'],
                            ['isDisabled', '定义是否禁用基础输入', 'Boolean', 'true / false', 'false'],
                            ['isReadOnly', '定义是否只读基础输入', 'Boolean', 'true / false', 'false'],
                            ['isSolid', '定义是否反色显示基础输入', 'Boolean', 'true / false', 'false'],
                            ['isAir', '定义是否阴影显示基础输入', 'Boolean', 'true / false', 'false'],
                            ['helper', '定义基础输入的提示语', '任意', '-', '-'],
                        ],
                        attribute: true,
                        callback: true
                    }}/>
                    <p className='title'>选项配置</p>
                    <APITable {...{
                        data: [
                            ['value', (<Fragment>
                                <span>定义选项的 <code>value</code> 属性</span>
                            </Fragment>), 'String / Number', '-', '-'],
                            ['label', '定义选项的展示名称', '任意', '-', '-'],
                            ['isChecked', '定义是否选中当前选项，一个选项列表里仅可设置一个该属性', 'Boolean', 'true / false', 'false'],
                        ],
                        attribute: true,
                        callback: true
                    }}/>
                </Info>
            </Fragment>
        );
    }
}