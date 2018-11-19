import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";
import Note from '../../../common/Note/Note';
import {Col, Row, Form, DatePicker, Input} from 'shined';
import {NavLink} from "react-router-dom";
import APITable from "../../../common/APITable/APITable";

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "日期选择器",
                    description: '以日为最小单位，从弹出或内联窗口中选择日期。',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。</p>
                    <Note {...{
                        type: 'danger',
                        message: <p>日期选择器组件仅支持嵌套普通文本类型的<NavLink
                            to='/tutorial/input'>基础输入</NavLink>组件。</p>
                    }}/>
                </Info>

                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础样式</p>
                    <p>日期选择器组件内置了基础配置项， 仅需将其包裹在普通类文本类型的基础输入组件外部即可实现日期选择功能。
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
                                                    label: '选择日期',
                                                    placeholder: '请选择日期',
                                                    isReadOnly: true
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
                    <APITable {...{
                        data: [
                            ['autoclose', '自动关闭日期选择器', 'Boolean', 'true / false', 'true'],
                            ['calendarWeeks', '是否在日期选择器左侧显示当前日期是当年第几周', 'Boolean / Integer', 'true / false', 'false'],
                            ['clearBtn', '是否在日期选择器下方显示一个清除输入框日期的按钮', 'Boolean / Integer', 'true / false', 'false'],
                            ['datesDisabled', '设置禁用日期，按照指定格式格式化一个日期字符串或者日期字符串数组', 'String / Array', '-', '-'],
                            ['daysOfWeekDisabled', '设置禁用一周第几天，多个值用逗号分隔', 'String / Array', '0（周日） 至 6（周六）', '-'],
                            ['daysOfWeekHighlighted', '设置高亮一周第几天，多个值用逗号分隔', 'String / Array', '0（周日） 至 6（周六）', '-'],
                            ['defaultViewDate', '设置日期选择器初始化时默认显示的时间', 'Date / String / Object', '-', 'today'],
                            ['disableTouchKeyboard', '是否禁用移动设备的虚拟键盘', 'Boolean', 'true / false', 'false'],
                            ['enableOnReadonly', '设置是否在基础输入组件为只读状态时显示日期选择器', 'Boolean', 'true / false', 'true'],
                            ['startDate', '设置日期选择器的起始日期', 'Date / String', '-', '-'],
                            ['endDate', '设置日期选择器的结束日期', 'Date / String', '-', '-'],
                            ['forceParse', '设置日期选择器是否强制转换用户的非法输入', 'Boolean', 'true / false', 'true'],
                            ['format', '设置日期选择器格式化规则, 由 d, dd, D, DD, m, mm, M, MM, yy, yyyy组成的字符串', 'String', '-', 'yyyy-mm-dd'],
                            ['orientation', '设置日期选择器显示方向', 'String', 'left / right / top / bottom', 'auto'],
                            ['startView', '设置日期选择器开始视图', 'Number / String', '0 至 4 / days / months / years / decades / centuries', '0'],
                            ['todayBtn', '设置日期选择器是否显示今日按钮', 'Boolean', 'true / false', 'false'],
                            ['todayHighlight', '设置日期选择器是否显示今日高亮', 'Boolean', 'true / false', 'false'],
                            ['weekStart', '设置日期选择器一周开始', 'Integer', '0 至 6', '0']
                        ],
                        className: false
                    }}/>
                    <Note {...{
                        type: 'info',
                        message: <p>日期选择器组件改造自第三方插件，更多配置项请参考 <a
                            href="//bootstrap-datepicker.readthedocs.io/en/latest/" target="_blank">Bootstrap DatePicker
                            配置</a> 。</p>
                    }}/>
                </Info>
            </Fragment>
        );
    }
}