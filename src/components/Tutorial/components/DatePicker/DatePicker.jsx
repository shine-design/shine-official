import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";
import Note from '../../../common/Note/Note';
import {Col, Row, Form, DatePicker, Input} from 'shined';
// import './style.less';
import APITable from "../../../common/APITable/APITable";
import {NavLink} from "react-router-dom";

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "日期选择器",
                    description: '从弹出框或内联日历选择一个日期。',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>分隔线组件可以在视觉上将区域分为上下两个相对独立的部分，它由一条占满容器宽度的横线组成。
                    </p>
                </Info>

                <Info {...{
                    description: '代码示例'
                }}>
                    <Note {...{
                        type: 'danger',
                        message: <p>日期选择器组件的仅支持嵌套 <code>type</code> 类型为 <code>text</code> 的<NavLink
                            to='/tutorial/input'>基础输入</NavLink>组件。</p>
                    }}/>
                    <p className='title'>日期选择器</p>
                    <p>DatePicker 组件内置了一套基础的选择器配置项， 仅需将其包裹在基础输入组件外部即可实现简单的日期选择功能，也可以通过配置属性实现个性化选择器。
                    </p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Form>
                                            <DatePicker>
                                                <Input {...{
                                                    label: '选择日期'
                                                }}/>
                                            </DatePicker>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/datepicker/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <Note {...{
                        type: 'info',
                        message: <p>DatePicker 组件底层由第三方插件实现，相关配置项请参考 <a href="https://bootstrap-datepicker.readthedocs.io/en/latest/" target="_blank">Bootstrap DatePicker 配置</a> 。</p>
                    }}/>
                </Info>
            </Fragment>
        );
    }
}