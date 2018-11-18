import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";
import Note from '../../../common/Note/Note';
import {Col, Row, Form, DateRangePicker, Input} from 'shined';
// import './style.less';
import APITable from "../../../common/APITable/APITable";
import {NavLink} from "react-router-dom";

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "日期范围选择器",
                    description: '从弹出或内联窗口中选择一个日期和时间的范围。',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>日期范围选择器组件可以在基础输入组件上增加日期范围选择功能，可以在获取焦点时自动显示日期范围选择弹窗，并在选择日期范围后填充至基础输入组件。
                    </p>
                </Info>

                <Info {...{
                    description: '代码示例'
                }}>
                    <Note {...{
                        type: 'danger',
                        message: <p>日期范围选择器组件的仅支持嵌套 <code>type</code> 类型为 <code>text</code> 的<NavLink
                            to='/tutorial/input'>基础输入</NavLink>组件。</p>
                    }}/>
                    <Note {...{
                        type: 'info',
                        message: <p>推荐使用 <code>moment</code> 组件进行预设日期范围配置，相关资料请查阅 <a href="//momentjs.com/">moment 官方网站</a>。</p>
                    }}/>
                    <p>日期范围选择器组件内置了一套基础的选择器配置项， 仅需将其包裹在基础输入组件外部即可实现简单的日期范围选择功能，也可以通过配置属性实现个性化选择器。
                    </p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Form>
                                            <DateRangePicker>
                                                <Input {...{
                                                    label: '选择日期范围',
                                                    placeholder: '请选择日期范围',
                                                    isReadOnly: true
                                                }}/>
                                            </DateRangePicker>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/daterangepicker/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <Note {...{
                        type: 'info',
                        message: <p>日期范围时间选择器组件底层由第三方插件实现，相关配置项请参考 <a href="//www.daterangepicker.com/"
                                                                    target="_blank">Bootstrap DateRangePicker 配置</a> 。
                        </p>
                    }}/>
                </Info>
            </Fragment>
        );
    }
}