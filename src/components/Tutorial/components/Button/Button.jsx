import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';
import {NavLink} from "react-router-dom";

import {Col, Row, Button} from 'shinec';

import './style.less';

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "Button 按钮",
                    description: '用于触发若干操作命令或用户行为',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        按钮组件标可以在页面上生成一组（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础按钮</p>
                    <p>使用 <code>Button</code> 组件可以直接创建一个基本的按钮，也可以通过设置不同的状态颜色对按钮类型进行区分。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={1}>
                                        <Button value='按钮'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='brand'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='accent'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='focus'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='metal'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='success'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='warning'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='danger'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='primary'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='light'/>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={1}>
                                        <Button value='按钮'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-brand'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-accent'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-focus'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-metal'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-success'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-warning'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-danger'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-primary'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-light'/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/grid/basic').default,
                            language: 'markup'
                        }
                    }}/>

                    <p className='title'>按钮样式</p>
                    <p>针对不同风格的页面，我们设计了不同的边框样式，通过 <code>btnStyle</code> 属性可以设置直角按钮、圆角按钮或环形按钮。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={1}>
                                        <Button value='按钮'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='brand'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='accent'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='focus'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='metal'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='success'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='warning'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='danger'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='primary'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='light'/>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={1}>
                                        <Button value='按钮'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-brand'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-accent'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-focus'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-metal'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-success'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-warning'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-danger'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-primary'/>
                                    </Col>
                                    <Col part={1}>
                                        <Button value='按钮' color='outline-light'/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/grid/basic').default,
                            language: 'markup'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['type', '定义按钮的类型，部分类型必须嵌套在表单组件中才生效', 'String', 'button / submit / reset', 'button'],
                            ['value', '定义按钮的展示文字', 'String', '-', 'Button'],
                            ['btnStyle', '定义按钮的外观样式，支持直角矩形，圆角矩形和环形', 'String', 'square / pill / normal', 'normal'],
                            ['color',
                                <Fragment>定义按钮前景色，支持常规颜色或轮廓颜色（以 <code>outline-</code> 修饰）</Fragment>, 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>状态颜色</NavLink></Fragment>, 'default'],
                            ['gradient', '定义按钮的渐变色类型', 'Object', '-', '-'],
                            ['gradient.from', '定义按钮的渐变色起始类型', 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>状态颜色</NavLink></Fragment>, '-'],
                            ['gradient.to', '定义按钮的渐变色结束类型', 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>状态颜色</NavLink></Fragment>, '-'],
                            ['size', '定义按钮的大小尺寸', 'String', 'lg / sm / normal', 'normal'],
                            ['isWide', '定义按钮是否以较宽的样式展示', 'Boolean', 'true / false', 'false'],
                            ['isBlock', '定义按钮是否以块级元素的样式展示', 'Boolean', 'true / false', 'false'],
                            ['isActive', '定义按钮是否显示激活状态样式', 'Boolean', 'true / false', 'false'],
                            ['isDisabled', '定义按钮是否显示禁用状态样式', 'Boolean', 'true / false', 'false'],
                            ['isAir', '定义按钮是否显示阴影样式', 'Boolean', 'true / false', 'false'],
                            ['isRetina', '定义按钮是否显示两倍分辨率样式', 'Boolean', 'true / false', 'false'],
                            ['iconName', '定义按钮显示的图标类型', 'String', '-', '-'],
                        ]
                    }}/>
                </Info>
                <Info {...{
                    description: '事件系统'
                }}>

                </Info>
            </Fragment>
        );
    }
}