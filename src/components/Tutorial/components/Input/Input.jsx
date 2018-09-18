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
                    title: "基础输入 - Input",
                    description: '用于创建交互式控件，可以接收用户的数据、信息。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        基础输入组件用于搜集用户信息。 根据不同的 <code>type</code> 属性值，输入字段拥有很多种形式。输入字段可以是文本字段、密码字段、数字字段、地址栏字段等。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>原生输入</p>
                    <p>使用 <code>Input</code> 组件可以快速创建一些常见的表单控件。</p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={8} offset={2}>
                                        <Form>
                                            <Input {...{
                                                label: '普通文本',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                defaultValue:'欢迎使用Shine'
                                            }}/>
                                            <Input {...{
                                                label: '密码文本',
                                                type: 'password',
                                                placeholder: '请输入密码',
                                                defaultValue:'this is a pwd'
                                            }}/>
                                            <Input {...{
                                                label: 'Email',
                                                type: 'email',
                                                placeholder: '请输入电子邮箱',
                                                defaultValue:'help@shine.design'
                                            }}/>
                                            <Input {...{
                                                label: '数字文本',
                                                type: 'number',
                                                placeholder: '请输入数字',
                                                defaultValue:'10000'
                                            }}/>
                                            <Input {...{
                                                label: '网址文本',
                                                type: 'url',
                                                placeholder: '请输入网址',
                                                defaultValue:'https://shine.design'
                                            }}/>
                                            <Input {...{
                                                label: '颜色选择',
                                                type: 'color',
                                                placeholder: '请选择颜色',
                                                defaultValue:'#716ACA'
                                            }}/>
                                            <Input {...{
                                                label: '日期选择',
                                                type: 'date',
                                                placeholder: '请选择日期',
                                                defaultValue:new Date().format('yyyy-MM-dd')
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
                </Info>
            </Fragment>
        );
    }
}