import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';

import {Col, Row, Form, Input} from 'shined';
import {Button} from "../Button/Button";
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
                    title: "选框 - Radio & Checkbox",
                    description: '用于创建交互式控件，可以接收用户的数据、信息。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>单选组件（Radio）表示只能选中一项命令。它容许用户在一组选项中选择其中一个。</p>
                    <p>复选组件（Checkbox）表示可同时选中多项命令。它容许用户在一组选项中选择多个。</p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础选框</p>
                    <p>使用 <code>Radio</code> 组件可以创建单选控件，使用 <code>Checkbox</code> 组件可以创建复选控件。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={8} offset={2}>
                                        <Form>
                                            <Input {...{
                                                label: '默认单选',
                                                type: 'radio',
                                                radioList: [
                                                    {
                                                        text: 'Default',
                                                        defaultValue: 'bbb',
                                                    },
                                                    {
                                                        text: 'Disabled',
                                                        defaultValue: 'bbb',
                                                        disabled: true
                                                    },
                                                    {
                                                        text: 'Checked',
                                                        defaultValue: 'bbb',
                                                        checked: true
                                                    }
                                                ],
                                                placeholder: '请输入内容',
                                                defaultValue: '欢迎使用Shine'
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