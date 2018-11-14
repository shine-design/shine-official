import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';

import {Col, Row, Form, Input} from 'shined';
import {Button} from "../Button/Button";
import './style.less';
import {NavLink} from "react-router-dom";

export default class extends Component {

    _renderEvent(e) {
        const _dom = document.querySelector('.displayBox');
        _dom.innerHTML += ('<p>' + (new Date()).format('yyyy-MM-dd hh:mm:ss') + '您触发了' + e.type + '事件，选中的选框为' + e.target.value + '</p>');
        _dom.scrollTop = _dom.scrollHeight;
    }

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "单复选框",
                    description: '创建一系列可供用户选择的预设置项。',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>与基础输入类似，<code>Input</code> 组件还支持创建单选和复选组件（统称为选框）。单选组件表示只能选中一项命令。它容许用户在一组选项中选择其中一个。复选组件表示可同时选中多项命令。它容许用户在一组选项中选择多个。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础选框</p>
                    <p>设置 <code>Input</code> 组件的 <code>type</code> 属性为 <code>radio</code> 或 <code>checkbox</code> 即可创建一个基础选框，选框共支持三种状态：默认、选中（Checked）和禁用（Disabled）。
                    </p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={6}>
                                        <Form>
                                            <Input {...{
                                                label: '默认单选框',
                                                type: 'radio',
                                                name: 'demo01',
                                                itemList: [
                                                    {
                                                        text: 'Default',
                                                        defaultValue: 'default',
                                                    },
                                                    {
                                                        text: 'Disabled',
                                                        defaultValue: 'disabled',
                                                        isDisabled: true
                                                    },
                                                    {
                                                        text: 'Checked',
                                                        defaultValue: 'checked',
                                                        isDefaultChecked: true
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={6}>
                                        <Form>
                                            <Input {...{
                                                label: '默认复选框',
                                                type: 'checkbox',
                                                name: 'demo01',
                                                itemList: [
                                                    {
                                                        text: 'Default',
                                                        defaultValue: 'default',
                                                    },
                                                    {
                                                        text: 'Disabled',
                                                        defaultValue: 'disabled',
                                                        isDisabled: true
                                                    },
                                                    {
                                                        text: 'Checked',
                                                        defaultValue: 'checked',
                                                        isDefaultChecked: true
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/check/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>带状态选框</p>
                    <p>设置不同的色彩，可以重点突出相关选框，带来更好的用户体验，选框组件支持统一状态设置和选中状态设置。</p>
                    <Note {...{
                        type: 'info',
                        message: "统一状态即在选框所有状态时均显示该状态，选中状态即只有在选中时才会显示该状态。"
                    }}/>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Form>
                                            <Input {...{
                                                label: '全局状态单选框',
                                                type: 'radio',
                                                name: 'demo02',
                                                itemList: [
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        color: 'success',
                                                        isDefaultChecked: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        color: 'danger'
                                                    },
                                                    {
                                                        text: 'Primary',
                                                        defaultValue: 'primary',
                                                        color: 'primary'
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={3}>
                                        <Form>
                                            <Input {...{
                                                label: '选中状态单选框',
                                                type: 'radio',
                                                name: 'demo03',
                                                itemList: [
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        checkedColor: 'success',
                                                        isDefaultChecked: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        checkedColor: 'danger'
                                                    },
                                                    {
                                                        text: 'Primary',
                                                        defaultValue: 'primary',
                                                        checkedColor: 'primary'
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={3}>
                                        <Form>
                                            <Input {...{
                                                label: '全局状态复选框',
                                                type: 'checkbox',
                                                name: 'demo02',
                                                itemList: [
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        color: 'success',
                                                        isDefaultChecked: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        color: 'danger'
                                                    },
                                                    {
                                                        text: 'Primary',
                                                        defaultValue: 'primary',
                                                        color: 'primary'
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={3}>
                                        <Form>
                                            <Input {...{
                                                label: '选中状态复选框',
                                                type: 'checkbox',
                                                name: 'demo03',
                                                itemList: [
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        checkedColor: 'success',
                                                        isDefaultChecked: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        checkedColor: 'danger'
                                                    },
                                                    {
                                                        text: 'Primary',
                                                        defaultValue: 'primary',
                                                        checkedColor: 'primary'
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/check/state').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>反色选框</p>
                    <p>设置 <code>isSolid</code> 属性，使用反色选框，可以产生更高的对比度。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={6}>
                                        <Form>
                                            <Input {...{
                                                label: '反色单选框',
                                                type: 'radio',
                                                name: 'demo04',
                                                itemList: [
                                                    {
                                                        text: 'Default',
                                                        defaultValue: 'default',
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Disabled',
                                                        defaultValue: 'disabled',
                                                        isDisabled: true,
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Checked',
                                                        defaultValue: 'checked',
                                                        isDefaultChecked: true,
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        color: 'success',
                                                        isDefaultChecked: true,
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        color: 'danger',
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        checkedColor: 'success',
                                                        isDefaultChecked: true,
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        checkedColor: 'danger',
                                                        isSolid: true
                                                    },
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={6}>
                                        <Form>
                                            <Input {...{
                                                label: '反色复选框',
                                                type: 'checkbox',
                                                name: 'demo04',
                                                itemList: [
                                                    {
                                                        text: 'Default',
                                                        defaultValue: 'default',
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Disabled',
                                                        defaultValue: 'disabled',
                                                        isDisabled: true,
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Checked',
                                                        defaultValue: 'checked',
                                                        isDefaultChecked: true,
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        color: 'success',
                                                        isDefaultChecked: true,
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        color: 'danger',
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        checkedColor: 'success',
                                                        isDefaultChecked: true,
                                                        isSolid: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        checkedColor: 'danger',
                                                        isSolid: true
                                                    },
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/check/solid').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>粗体选框</p>
                    <p>设置 <code>isBold</code> 属性，可以产生加粗效果，与状态属性类似，支持全局加粗和选中加粗设置。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Form>
                                            <Input {...{
                                                label: '全局加粗单选框',
                                                type: 'radio',
                                                name: 'demo05',
                                                itemList: [
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        color: 'success',
                                                        isDefaultChecked: true,
                                                        isBold: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        color: 'danger',
                                                        isBold: true
                                                    },
                                                    {
                                                        text: 'Primary',
                                                        defaultValue: 'primary',
                                                        color: 'primary',
                                                        isBold: true
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={3}>
                                        <Form>
                                            <Input {...{
                                                label: '选中加粗单选框',
                                                type: 'radio',
                                                name: 'demo06',
                                                itemList: [
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        checkedColor: 'success',
                                                        isDefaultChecked: true,
                                                        isCheckedBold: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        checkedColor: 'danger',
                                                        isCheckedBold: true
                                                    },
                                                    {
                                                        text: 'Primary',
                                                        defaultValue: 'primary',
                                                        checkedColor: 'primary',
                                                        isCheckedBold: true
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={3}>
                                        <Form>
                                            <Input {...{
                                                label: '全局加粗复选框',
                                                type: 'checkbox',
                                                name: 'demo05',
                                                itemList: [
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        color: 'success',
                                                        isDefaultChecked: true,
                                                        isBold: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        color: 'danger',
                                                        isBold: true
                                                    },
                                                    {
                                                        text: 'Primary',
                                                        defaultValue: 'primary',
                                                        color: 'primary',
                                                        isBold: true
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={3}>
                                        <Form>
                                            <Input {...{
                                                label: '选中加粗复选框',
                                                type: 'checkbox',
                                                name: 'demo06',
                                                itemList: [
                                                    {
                                                        text: 'Success',
                                                        defaultValue: 'success',
                                                        checkedColor: 'success',
                                                        isDefaultChecked: true,
                                                        isCheckedBold: true
                                                    },
                                                    {
                                                        text: 'Danger',
                                                        defaultValue: 'danger',
                                                        checkedColor: 'danger',
                                                        isCheckedBold: true
                                                    },
                                                    {
                                                        text: 'Primary',
                                                        defaultValue: 'primary',
                                                        checkedColor: 'primary',
                                                        isCheckedBold: true
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/check/bold').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>展示类型</p>
                    <p>选框组件支持 <code>block</code> 类型或 <code>inline</code>类型展示，当为 <code>inline</code> 类型时可以设置划分比例。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Form>
                                            <Input {...{
                                                label: '块状单选框',
                                                type: 'radio',
                                                name: 'demo07',
                                                itemList: [
                                                    {
                                                        text: 'Radio01',
                                                        defaultValue: 'radio01',
                                                        isDefaultChecked: true
                                                    }, {
                                                        text: 'Radio02',
                                                        defaultValue: 'radio02',
                                                    }, {
                                                        text: 'Radio03',
                                                        defaultValue: 'radio03',
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={12} className='helper mt20'>
                                        <Form>
                                            <Input {...{
                                                label: '行间单选框',
                                                type: 'radio',
                                                name: 'demo08',
                                                display: 'inline',
                                                labelCount: 2,
                                                itemList: [
                                                    {
                                                        text: 'Radio01',
                                                        defaultValue: 'radio01',
                                                        isDefaultChecked: true
                                                    }, {
                                                        text: 'Radio02',
                                                        defaultValue: 'radio02',
                                                    }, {
                                                        text: 'Radio03',
                                                        defaultValue: 'radio03',
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={12} className='helper mt20'>
                                        <Form>
                                            <Input {...{
                                                label: '行间单选框',
                                                type: 'radio',
                                                name: 'demo09',
                                                display: 'inline',
                                                labelCount: 2,
                                                itemDisplay: 'inline',
                                                itemList: [
                                                    {
                                                        text: 'Radio01',
                                                        defaultValue: 'radio01',
                                                        isDefaultChecked: true
                                                    }, {
                                                        text: 'Radio02',
                                                        defaultValue: 'radio02',
                                                    }, {
                                                        text: 'Radio03',
                                                        defaultValue: 'radio03',
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={12} className='helper mt30'>
                                        <Form>
                                            <Input {...{
                                                label: '块状复选框',
                                                type: 'checkbox',
                                                name: 'demo07',
                                                itemList: [
                                                    {
                                                        text: 'Radio01',
                                                        defaultValue: 'radio01',
                                                        isDefaultChecked: true
                                                    }, {
                                                        text: 'Radio02',
                                                        defaultValue: 'radio02',
                                                    }, {
                                                        text: 'Radio03',
                                                        defaultValue: 'radio03',
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={12} className='helper mt20'>
                                        <Form>
                                            <Input {...{
                                                label: '行间复选框',
                                                type: 'checkbox',
                                                name: 'demo08',
                                                display: 'inline',
                                                labelCount: 2,
                                                itemList: [
                                                    {
                                                        text: 'Radio01',
                                                        defaultValue: 'radio01',
                                                        isDefaultChecked: true
                                                    }, {
                                                        text: 'Radio02',
                                                        defaultValue: 'radio02',
                                                    }, {
                                                        text: 'Radio03',
                                                        defaultValue: 'radio03',
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={12} className='helper mt20'>
                                        <Form>
                                            <Input {...{
                                                label: '行间复选框',
                                                type: 'checkbox',
                                                name: 'demo09',
                                                display: 'inline',
                                                labelCount: 2,
                                                itemDisplay: 'inline',
                                                itemList: [
                                                    {
                                                        text: 'Radio01',
                                                        defaultValue: 'radio01',
                                                        isDefaultChecked: true
                                                    }, {
                                                        text: 'Radio02',
                                                        defaultValue: 'radio02',
                                                    }, {
                                                        text: 'Radio03',
                                                        defaultValue: 'radio03',
                                                    }
                                                ],
                                                helper: 'Some help text goes here'
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/check/display').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>事件系统</p>
                    <p>选框组件支持合成事件系统，请参考<NavLink to='/tutorial/event'>相关资料</NavLink>。</p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={6}>
                                        <Input {...{
                                            label: '单选框',
                                            type: 'radio',
                                            name: 'demo10',
                                            display: 'inline',
                                            labelCount: 3,
                                            itemList: [
                                                {
                                                    text: 'Radio01',
                                                    defaultValue: 'radio01',
                                                    callbacks: {
                                                        onChange: this._renderEvent
                                                    }
                                                },
                                                {
                                                    text: 'Radio02',
                                                    defaultValue: 'radio02',
                                                    callbacks: {
                                                        onChange: this._renderEvent
                                                    }
                                                }
                                            ]
                                        }}/>
                                    </Col>
                                    <Col part={6}>
                                        <Input {...{
                                            label: '复选框',
                                            type: 'checkbox',
                                            name: 'demo11',
                                            display: 'inline',
                                            labelCount: 3,
                                            itemList: [
                                                {
                                                    text: 'Checkbox01',
                                                    defaultValue: 'checkbox01',
                                                    callbacks: {
                                                        onChange: this._renderEvent
                                                    }
                                                },
                                                {
                                                    text: 'Checkbox02',
                                                    defaultValue: 'checkbox02',
                                                    callbacks: {
                                                        onChange: this._renderEvent
                                                    }
                                                }
                                            ]
                                        }}/>
                                    </Col>
                                    <Col part={12}>
                                        <div className='displayBox'/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/check/event').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['label', '定义选框的标签名称', '任意', '-', '-'],
                            ['type', '定义选框的类型，目前支持单选和复选', 'String', 'radio / checkbox', '-'],
                            ['name', '定义选框的名称，若存在多个选项，则共享名称', 'String / Number', '-', '-'],
                            ['itemList', '定义选框组件中各个选项，选项配置见下表', 'Array', '-', '-'],
                            ['paddingSize', '定义选框组件的尺寸', 'String', 'lg / sm / md', 'lg'],
                            ['display', '定义当前选框组件的排列方式', 'String', 'block / inline', 'block'],
                            ['labelCount', (<Fragment>
                                <span>定义当前选框组件中标签占的栅格数，相关参数介绍参考<NavLink to='/tutorial/grid'>栅格系统</NavLink></span>
                            </Fragment>), 'Number', '1 至 12', '3'],
                            ['isFirst', (<Fragment>
                                <span>定义当前选框组件是否为 <code>Form</code> 表单中第一个组件</span>
                            </Fragment>), 'Boolean', 'true / false', 'false'],
                            ['isLast', (<Fragment>
                                <span>定义当前选框组件是否为 <code>Form</code> 表单中最后一个组件</span>
                            </Fragment>), 'Boolean', 'true / false', 'false'],
                            ['helper', '定义选框的提示语', '任意', '-', '-'],
                        ]
                    }}/>
                    <p className='title'>选项配置</p>
                    <APITable {...{
                        data: [
                            ['id', (<Fragment>
                                <span>定义当前选项的 <code>id</code> 属性，若不存在，则提供默认值</span>
                            </Fragment>), 'String / Number', '由算法生成的UUID随机字符串', '-'],
                            ['text', '定义当前选项的标签展示名称', '任意', '-', '-'],
                            ['defaultValue', (<Fragment>
                                <span>定义当前选项的 <code>value</code> 属性值</span>
                            </Fragment>), 'String / Number', '-', '-'],
                            ['color', '定义当前选项的色彩', 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>色彩</NavLink></Fragment>, 'default'],
                            ['checkedColor', '定义当前选项的选中色彩', 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>色彩</NavLink></Fragment>, 'default'],
                            ['isSolid', '定义是否反色显示当前选项', 'Boolean', 'true / false', 'false'],
                            ['isBold', '定义是否加粗显示当前选项', 'Boolean', 'true / false', 'false'],
                            ['isCheckedBold', '定义是否加粗显示当前选项的选中状态', 'Boolean', 'true / false', 'false'],
                            ['isDisabled', '定义是否禁用当前选项', 'Boolean', 'true / false', 'false'],
                            ['isDefaultChecked', '定义是否默认选中当前选项', 'Boolean', 'true / false', 'false']
                        ],
                        attribute: true,
                        callback: true
                    }}/>
                </Info>
            </Fragment>
        );
    }
}