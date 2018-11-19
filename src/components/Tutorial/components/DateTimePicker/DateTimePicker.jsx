import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";
import Note from '../../../common/Note/Note';
import {Col, Row, Form, DateTimePicker, Input} from 'shined';
// import './style.less';
import APITable from "../../../common/APITable/APITable";
import {NavLink} from "react-router-dom";

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "日期时间选择器",
                    description: '以秒为最小单位，从弹出或内联窗口中选择日期与时间。',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>当用户需要输入同时输入一个日期与时间，可以点击标准输入框，弹出日期与时间面板进行选择。
                    </p>
                    <Note {...{
                        type: 'danger',
                        message: <p>日期时间选择器组件仅支持嵌套普通文本类型的<NavLink
                            to='/tutorial/input'>基础输入</NavLink>组件。</p>
                    }}/>
                </Info>

                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础样式</p>
                    <p>日期时间选择器组件内置了基础配置项， 仅需将其包裹在普通类文本类型的基础输入组件外部即可实现日期时间选择功能。
                    </p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Form>
                                            <DateTimePicker>
                                                <Input {...{
                                                    label: '选择日期',
                                                    placeholder: '请选择日期与时间',
                                                    isReadOnly: true
                                                }}/>
                                            </DateTimePicker>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/datetimepicker/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['format', '设置日期时间选择器格式化规则, 由 d, dd, D, DD, m, mm, M, MM, yy, yyyy组成的字符串', 'String', '-', 'yyyy-mm-dd'],
                            ['weekStart', '设置日期时∂间选择器一周开始', 'Integer', '0 至 6', '0'],
                            ['startDate', '设置日期时间选择器的起始日期', 'Date / String', '-', '-'],
                            ['endDate', '设置日期时间选择器的结束日期', 'Date / String', '-', '-'],
                            ['daysOfWeekDisabled', '设置禁用一周第几天，多个值用逗号分隔', 'String / Array', '0（周日） 至 6（周六）', '-'],
                            ['autoclose', '自动关闭日期时间选择器', 'Boolean', 'true / false', 'true'],
                            ['startView', '设置日期时间选择器开始视图', 'Number / String', '0 至 4 / days / months / years / decades / centuries', '0'],
                            ['todayBtn', '设置日期时间选择器是否显示今日按钮', 'Boolean', 'true / false', 'false'],
                            ['todayHighlight', '设置日期时间选择器是否显示今日高亮', 'Boolean', 'true / false', 'false'],
                            ['forceParse', '设置日期时间选择器是否强制转换用户的非法输入', 'Boolean', 'true / false', 'true'],
                            ['minuteStep', '设置日期时间选择器分钟步进长度。', 'Integer', '-', '15'],
                            ['showMeridian', '设置日期时间选择器制式', 'Boolean', 'true（12小时） / false（24小时）', 'true'],
                            ['initialDate', '设置日期时间选择器默认值', 'Date / String', '-', 'new Date()'],
                        ],
                        className: false
                    }}/>
                    <Note {...{
                        type: 'info',
                        message: <p>日期时间选择器组件改造自第三方插件，更多配置项请参考 <a href="//www.malot.fr/bootstrap-datetimepicker/"
                                                                  target="_blank">Bootstrap DateTimePicker 配置</a> 。
                        </p>
                    }}/>
                </Info>
            </Fragment>
        );
    }
}