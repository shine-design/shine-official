import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";
import Note from '../../../common/Note/Note';
import {Col, Row, Form, TimePicker, Input} from 'shined';
import {NavLink} from "react-router-dom";
import APITable from "../../../common/APITable/APITable";

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "时间选择器",
                    description: '以秒为最小单位，从弹出或内联窗口中选择时间。',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。</p>
                    <Note {...{
                        type: 'danger',
                        message: <p>时间选择器组件仅支持嵌套普通文本类型的<NavLink
                            to='/tutorial/input'>基础输入</NavLink>组件。</p>
                    }}/>
                </Info>

                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础样式</p>
                    <p>时间选择器组件内置了基础配置项， 仅需将其包裹在普通类文本类型的基础输入组件外部即可实现时间选择功能。
                    </p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Form>
                                            <TimePicker>
                                                <Input {...{
                                                    label: '选择时间',
                                                    placeholder: '请选择时间',
                                                    isReadOnly: true
                                                }}/>
                                            </TimePicker>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/timepicker/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['maxHours', '设置时间选择器最大显示时间', 'Integer', '0 至 24', '24'],
                            ['minuteStep', '设置时间选择器分钟步进长度', 'Integer', '-', '15'],
                            ['showSeconds', '设置时间选择器是否显示秒', 'Boolean', 'true / false', 'false'],
                            ['secondStep', '设置时间选择器秒钟步进长度', 'Integer', '-', '15'],
                            ['defaultTime', '设置日期选择器默认时间', 'String', '-', 'current'],
                            ['showMeridian', '设置日期选择器制式', 'Boolean', 'true（12小时） / false（24小时）', 'true'],
                        ],
                        className: false
                    }}/>
                    <Note {...{
                        type: 'info',
                        message: <p>时间选择器组件改造自第三方插件，更多配置项请参考 <a
                            href="//jdewit.github.io/bootstrap-timepicker/" target="_blank">Bootstrap TimePicker
                            配置</a> 。</p>
                    }}/>
                </Info>
            </Fragment>
        );
    }
}