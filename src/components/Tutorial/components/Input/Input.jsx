import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';

import {Col, Row, Form, Input} from 'shinec';
import {Button} from "../Button/Button";

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "输入 - Input",
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
                                                isSolid:true
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
                </Info>
            </Fragment>
        );
    }
}