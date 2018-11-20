import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";

import {Col, Row, Form, Input, DatePicker, SymbolInput, Button} from 'shined';
import APITable from "../../../common/APITable/APITable";
import {NavLink} from "react-router-dom";

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "表单容器",
                    description: '创建一个交互表单用于收集用户输入。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>表单容器组件是一个特殊的组件，该组件主要用于标识表单范围，收集用户输入，处理表单校验等方面，所有输入组件均需被该组件嵌套。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>表单校验</p>
                    <p>使用 <code>validate</code> 属性指定当前表单在执行操作时的校验规则。
                    </p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Form {...{
                                            validate: {},
                                        }}>
                                            <Input {...{
                                                label: '普通文本',
                                                type: 'text',
                                                placeholder: '请输入内容',
                                                name: 'testA',
                                                validate: {
                                                    required: true
                                                }
                                            }}/>
                                            <Input {...{
                                                label: '密码文本',
                                                type: 'password',
                                                placeholder: '请输入密码',
                                                name: 'testB',
                                                validate: {
                                                    required: true,
                                                    minlength: 5,
                                                    maxlength: 10
                                                }
                                            }}/>
                                            <Input {...{
                                                label: 'Email',
                                                type: 'email',
                                                placeholder: '请输入电子邮箱',
                                                defaultValue: 'aaa',
                                                name: 'testC',
                                                validate: {
                                                    email: true
                                                }
                                            }}/>
                                            <Input {...{
                                                label: '数字文本',
                                                type: 'number',
                                                placeholder: '请输入数字',
                                                defaultValue: '1',
                                                name: 'testD',
                                                validate: {
                                                    number: true,
                                                    range: [5, 10]
                                                }
                                            }}/>
                                            <Input {...{
                                                label: '网址文本',
                                                type: 'url',
                                                placeholder: '请输入网址',
                                                name: 'testE',

                                                validate: {
                                                    required: true,
                                                    url: true
                                                }
                                            }}/>
                                            <Input {...{
                                                label: '多行文本',
                                                type: 'textarea',
                                                placeholder: '请输入文本内容',
                                                attributes: {
                                                    rows: 3
                                                },
                                                name: 'testF',

                                                validate: {
                                                    minlength: 10,
                                                }
                                            }}/>
                                            <Input {...{
                                                label: '单选控件',
                                                type: 'select',
                                                name: 'testG',

                                                options: [
                                                    {
                                                        value: '',
                                                        label: ''
                                                    },
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
                                                ],
                                                validate: {
                                                    required: true
                                                }
                                            }}/>
                                            <Input {...{
                                                label: '单选控件',
                                                type: 'select',
                                                name: 'testH',
                                                multiple: true,

                                                options: [
                                                    {
                                                        value: '',
                                                        label: ''
                                                    },
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
                                                ],
                                                validate: {
                                                    required: true,
                                                    minlength: 2,
                                                    maxlength: {
                                                        value: 4,
                                                        message: '最多选择4项'
                                                    }
                                                }
                                            }}/>
                                            <Input {...{
                                                label: '单选框',
                                                type: 'radio',
                                                name: 'test',

                                                itemList: [
                                                    {
                                                        text: 'Default',
                                                        defaultValue: 'default',
                                                    },
                                                    {
                                                        text: 'Disabled',
                                                        defaultValue: 'disabled',
                                                        disabled: true
                                                    },
                                                    {
                                                        text: 'Checked',
                                                        defaultValue: 'checked',
                                                        defaultChecked: true
                                                    }
                                                ],
                                                helper: 'Some help text goes here',
                                                validate: {
                                                    required: true
                                                }
                                            }}/>
                                            <Input {...{
                                                label: '复选框',
                                                type: 'checkbox',
                                                name: 'testJ',

                                                itemList: [
                                                    {
                                                        text: 'Default',
                                                        defaultValue: 'default',
                                                    },
                                                    {
                                                        text: 'Disabled',
                                                        defaultValue: 'disabled',
                                                        disabled: true
                                                    },
                                                    {
                                                        text: 'Checked',
                                                        defaultValue: 'checked',
                                                        defaultChecked: true
                                                    }
                                                ],
                                                helper: 'Some help text goes here',
                                                validate: {
                                                    required: true,
                                                    minlength: 1,
                                                    maxlength: 2
                                                }
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    id: 'equal',
                                                    label: '前缀标志',
                                                    type: 'text',
                                                    placeholder: '请输入内容',
                                                    name: 'testK',
                                                    validate: {
                                                        required: true
                                                    }
                                                },
                                                prepend: '@'
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '后缀标志',
                                                    type: 'text',
                                                    placeholder: '请输入内容',
                                                    name: 'testL',
                                                    validate: {
                                                        required: true,
                                                        equalTo: '#equal'
                                                    }
                                                },
                                                append: '@example.com'
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '两端标志',
                                                    type: 'text',
                                                    placeholder: '请输入内容',
                                                    name: 'testN',
                                                    validate: {
                                                        required: true
                                                    }
                                                },
                                                prepend: '#',
                                                append: 'px'
                                            }}/>
                                            <SymbolInput {...{
                                                input: {
                                                    label: '多个标志',
                                                    type: 'text',
                                                    placeholder: '请输入内容',
                                                    name: 'testM',
                                                    validate: {
                                                        required: true
                                                    }
                                                },
                                                prepend: ['Amount', '0'],
                                                append: ['.00', '$']
                                            }}/>
                                            <DatePicker>
                                                <Input {...{
                                                    label: '选择日期',
                                                    placeholder: '请选择日期',
                                                    name: 'testO',
                                                    isReadOnly: true,

                                                    validate: {
                                                        required: true
                                                    }
                                                }}/>
                                            </DatePicker>
                                            <div className="helper center">
                                                <Button value="提交表单" type="submit" color="info" btnStyle="pill"/>
                                            </div>

                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/form/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['validate', (<Fragment>
                                定义表单校验相关配置，该属性参考<NavLink to='/tutorial/validate'>表单校验</NavLink>相关介绍
                            </Fragment>), 'Object', '-', '-'],
                        ],
                        attribute: false,
                        className: false
                    }}/>
                </Info>
            </Fragment>
        );
    }
}