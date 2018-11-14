import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';

import {Col, Row, Form, Switch} from 'shined';
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
                    title: "开关",
                    description: '两种相互对立的状态间的切换，多用于触发开/关。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>开关组件是一类特殊的单选框组件。该组件仅有两个相互对立的状态——开/关，用户可以通过移动滑块方式实现状态切换，通常用于表单中的配置项。</p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础开关</p>
                    <p>开关组件是一类特殊的单选框组件，支持默认状态为开（或关），支持禁用或只读组件。
                    </p>
                    <Example {...{
                        className: ['demo-input', 'demo-switch'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: '默认关',
                                                display: 'inline',
                                                labelCount: 5
                                            }}/>
                                            <Switch {...{
                                                label: '图标关',
                                                display: 'inline',
                                                labelCount: 5,
                                                isShowIcon: true
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: '默认开',
                                                display: 'inline',
                                                isChecked: true,
                                                labelCount: 5
                                            }}/>
                                            <Switch {...{
                                                label: '图标开',
                                                display: 'inline',
                                                isChecked: true,
                                                labelCount: 5,
                                                isShowIcon: true
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: '默认禁用',
                                                display: 'inline',
                                                isDisabled: true,
                                                labelCount: 5
                                            }}/>
                                            <Switch {...{
                                                label: '图标禁用',
                                                display: 'inline',
                                                isDisabled: true,
                                                labelCount: 5,
                                                isShowIcon: true
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/switch/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>带状态的开关</p>
                    <p>在一些特殊情景下，使用背景带有状态颜色的开关可以给用户产生更直观的体验。
                    </p>
                    <Example {...{
                        className: ['demo-input', 'demo-switch'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: 'Default',
                                                display: 'inline',
                                                labelCount: 5,
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Success',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'success',
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Warning',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'warning',
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: 'Info',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'info',
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Danger',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'danger',
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Primary',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'primary',
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>

                                        </Form>
                                    </Col>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: 'Accent',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'accent',
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Brand',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'brand',
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Metal',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'metal',
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/switch/state').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>带轮廓状态的开关</p>
                    <p>与带状态的开关不同，轮廓色仅作用于开关滑块，不会作用于开关的背景颜色，减少因状态颜色过多导致的颜色混乱问题。</p>
                    <Example {...{
                        className: ['demo-input', 'demo-switch'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: 'Default',
                                                display: 'inline',
                                                labelCount: 5,
                                                isChecked: true,
                                                isShowIcon: true,
                                                isOutline: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Success',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'success',
                                                isChecked: true,
                                                isShowIcon: true,
                                                isOutline: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Warning',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'warning',
                                                isChecked: true,
                                                isShowIcon: true,
                                                isOutline: true
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: 'Info',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'info',
                                                isChecked: true,
                                                isShowIcon: true,
                                                isOutline: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Danger',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'danger',
                                                isChecked: true,
                                                isShowIcon: true,
                                                isOutline: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Primary',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'primary',
                                                isChecked: true,
                                                isShowIcon: true,
                                                isOutline: true
                                            }}/>

                                        </Form>
                                    </Col>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: 'Accent',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'accent',
                                                isChecked: true,
                                                isShowIcon: true,
                                                isOutline: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Brand',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'brand',
                                                isChecked: true,
                                                isShowIcon: true,
                                                isOutline: true
                                            }}/>
                                            <Switch {...{
                                                label: 'Metal',
                                                display: 'inline',
                                                labelCount: 5,
                                                bgColor: 'metal',
                                                isChecked: true,
                                                isShowIcon: true,
                                                isOutline: true
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/switch/outline').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>其他尺寸的开关</p>
                    <p>与其他表单组件类似，开关组件也支持三种不同的尺寸样式。</p>
                    <Example {...{
                        className: ['demo-input', 'demo-switch'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: '小尺寸',
                                                display: 'inline',
                                                labelCount: 5,
                                                size: 'sm',
                                                isChecked: true
                                            }}/>
                                            <Switch {...{
                                                label: '小尺寸',
                                                display: 'inline',
                                                labelCount: 5,
                                                size: 'sm',
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: '中尺寸',
                                                display: 'inline',
                                                labelCount: 5,
                                                isChecked: true
                                            }}/>
                                            <Switch {...{
                                                label: '中尺寸',
                                                display: 'inline',
                                                labelCount: 5,
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>
                                        </Form>
                                    </Col>
                                    <Col part={4}>
                                        <Form>
                                            <Switch {...{
                                                label: '大尺寸',
                                                display: 'inline',
                                                labelCount: 5,
                                                size: 'lg',
                                                isChecked: true
                                            }}/>
                                            <Switch {...{
                                                label: '大尺寸',
                                                display: 'inline',
                                                labelCount: 5,
                                                size: 'lg',
                                                isChecked: true,
                                                isShowIcon: true
                                            }}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/switch/size').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['label', '定义开关的标签名称', '任意', '-', '-'],
                            ['id', (<Fragment>
                                <span>定义当前选项的 <code>id</code> 属性，若不存在，则提供默认值</span>
                            </Fragment>), 'String / Number', '由算法生成的UUID随机字符串', '-'],
                            ['name', '定义开关的名称', 'String / Number', '-', '-'],
                            ['bgColor', '定义当前开关的背景状态颜色', 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>色彩</NavLink></Fragment>, 'default'],
                            ['defaultValue', (<Fragment>
                                <span>定义当前开关的 <code>value</code> 属性值</span>
                            </Fragment>), 'String / Number', '-', '-'],
                            ['display', '定义当前开关的排列方式', 'String', 'block / inline', 'block'],
                            ['labelCount', (<Fragment>
                                <span>定义当前选框组件中标签占的栅格数，相关参数介绍参考<NavLink to='/tutorial/grid'>栅格系统</NavLink></span>
                            </Fragment>), 'Number', '1 至 12', '3'],
                            ['isChecked', '定义是否默认打开当前开关', 'Boolean', 'true / false', 'false'],
                            ['isDisabled', '定义是否禁用当前开关', 'Boolean', 'true / false', 'false'],
                            ['isOutline', '定义是否以轮廓色显示当前开关滑块', 'Boolean', 'true / false', 'false'],
                            ['isShowIcon', '定义是否显示开关滑块图标', 'Boolean', 'true / false', 'false'],
                            ['helper', '定义选框的提示语', '任意', '-', '-'],
                        ],
                        attribute: true,
                        callback: true
                    }}/>
                </Info>
            </Fragment>
        );
    }
}