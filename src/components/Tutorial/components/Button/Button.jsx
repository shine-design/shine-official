import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';
import {NavLink} from "react-router-dom";

import {Col, Row, Button} from 'shined';

import './style.less';

export default class extends Component {

    _renderEvent(e) {
        const _dom = document.querySelector('.displayBox');
        _dom.innerHTML += ('<p>' + (new Date()).format('yyyy-MM-dd hh:mm:ss') + '您触发了' + e.type + '事件' + '</p>');
        _dom.scrollTop = _dom.scrollHeight;
    }

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "按钮",
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
                    <p>使用 <code>Button</code> 组件可以直接创建一个基本的按钮，也可以通过设置不同的色彩对按钮类型进行区分。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
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
                                        <Button value='按钮'/>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
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
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/button/basic').default,
                            language: 'jsx'
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
                                    <Col part={2}>
                                        <Button value='按钮' color='brand' btnStyle='square' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button value='按钮' color='accent' btnStyle='pill' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button value='按钮' color='focus' isBlock={true}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/button/style').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>渐变按钮</p>
                    <p>对默认颜色不满意？我们为您提供了更为个性化的按钮颜色，通过 <code>gradient</code> 属性可以设置渐变色，只需指定起始色和目标色。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={2}>
                                        <Button gradient={{from: 'danger', to: 'success'}} value='按钮' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button gradient={{from: 'primary', to: 'warning'}} value='按钮' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button gradient={{from: 'brand', to: 'metal'}} value='按钮' isBlock={true}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/button/gradient').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>按钮尺寸</p>
                    <p>我们提供了三种尺寸的按钮，通过 <code>size</code> 属性可以设置不同的尺寸。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={2}>
                                        <Button color='brand' size='lg' value='按钮' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='brand' value='按钮' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='brand' size='sm' value='按钮' isBlock={true}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/button/size').default,
                            language: 'jsx'
                        }
                    }}/>


                    <p className='title'>按钮状态</p>
                    <p>用户在进行交互时，我们针对不同按钮提供了默认、激活、禁用三种状态。</p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={2}>
                                        <Button color='brand' value='按钮' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='danger' value='按钮' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='warning' value='按钮' isBlock={true}/>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={2}>
                                        <Button color='brand' isActive={true} value='按钮' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='danger' isActive={true} value='按钮' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='warning' isActive={true} value='按钮' isBlock={true}/>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={2}>
                                        <Button color='brand' isDisabled={true} value='按钮' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='danger' isDisabled={true} value='按钮' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='warning' isDisabled={true} value='按钮' isBlock={true}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/button/state').default,
                            language: 'jsx'
                        }
                    }}/>

                    <p className='title'>元素状态</p>
                    <p>与原生 <code>DOM</code> 结构类似，我们提供了行间状态和块级状态两种元素状态，块级状态默认占满整个父级容器。</p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Button color='brand' btnStyle='square' value='按钮'/>
                                        <Button color='danger' btnStyle='square' value='按钮'/>
                                        <Button color='warning' btnStyle='square' value='按钮'/>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Button color='brand' value='按钮' btnStyle='square' isBlock={true}/>
                                    </Col>
                                    <Col part={12}>
                                        <Button color='danger' value='按钮' btnStyle='square' isBlock={true}/>
                                    </Col>
                                    <Col part={12}>
                                        <Button color='warning' value='按钮' btnStyle='square' isBlock={true}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/button/block').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>阴影效果</p>
                    <p>我们为按钮提供了一种阴影特效，使用 <code>isAir</code> 属性可以使按钮产生立体效果。</p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={2}>
                                        <Button color='brand' value='按钮' isAir={true} btnStyle='square' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='danger' value='按钮' isAir={true} btnStyle='pill' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='success' value='按钮' isAir={true} isBlock={true}/>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={2}>
                                        <Button color='outline-brand' value='按钮' isAir={true} btnStyle='square'
                                                isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='outline-danger' value='按钮' isAir={true} btnStyle='pill'
                                                isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='outline-success' value='按钮' isAir={true} isBlock={true}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/button/air').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>图标按钮</p>
                    <p>使用带图标的按钮可以使用户更容易理解，所有可使用的按钮参考<NavLink to='/tutorial/color'>色彩</NavLink>。</p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={2}>
                                        <Button color='brand' value='编辑' iconName='sh-icon-edit' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='danger' value='删除' iconName='sh-icon-trash' isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='success' value='首页' iconName='sh-icon-home' isBlock={true}/>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={2}>
                                        <Button color='outline-brand' value='编辑' iconName='sh-icon-edit'
                                                isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='outline-danger' value='删除' iconName='sh-icon-trash'
                                                isBlock={true}/>
                                    </Col>
                                    <Col part={2}>
                                        <Button color='outline-success' value='首页' iconName='sh-icon-home'
                                                isBlock={true}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/button/icon').default,
                            language: 'jsx'
                        }
                    }}/>

                    <p className='title'>事件系统</p>
                    <p>按钮组件支持合成事件系统，请参考<NavLink to='/tutorial/event'>相关资料</NavLink>。</p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={2}>
                                        <Button {...{
                                            color: 'brand',
                                            value: '点击',
                                            isBlock: true,
                                            callbacks: {
                                                onClick: this._renderEvent,
                                                onDoubleClick: this._renderEvent,
                                                onMouseEnter: this._renderEvent
                                            }
                                        }}/>
                                    </Col>
                                    <Col part={12}>
                                        <div className='displayBox'/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/button/event').default,
                            language: 'jsx'
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
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>色彩</NavLink></Fragment>, 'default'],
                            ['gradient', '定义按钮的渐变色类型', 'Object', '-', '-'],
                            ['gradient.from', '定义按钮的渐变色起始类型', 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>色彩</NavLink></Fragment>, '-'],
                            ['gradient.to', '定义按钮的渐变色结束类型', 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>色彩</NavLink></Fragment>, '-'],
                            ['size', '定义按钮的大小尺寸', 'String', 'lg / sm / normal', 'normal'],
                            ['isWide', '定义按钮是否以较宽的样式展示', 'Boolean', 'true / false', 'false'],
                            ['isBlock', '定义按钮是否以块级元素的样式展示', 'Boolean', 'true / false', 'false'],
                            ['isActive', '定义按钮是否显示激活状态样式', 'Boolean', 'true / false', 'false'],
                            ['isDisabled', '定义按钮是否显示禁用状态样式', 'Boolean', 'true / false', 'false'],
                            ['isAir', '定义按钮是否显示阴影样式', 'Boolean', 'true / false', 'false'],
                            ['isRetina', '定义按钮是否显示两倍分辨率样式', 'Boolean', 'true / false', 'false'],
                            ['iconName', '定义按钮显示的图标类型', 'String', '-', '-'],
                        ],
                        attribute: true
                    }}/>
                </Info>
            </Fragment>
        );
    }
}