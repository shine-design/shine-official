import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";

import {Col, Row, Loader, Form, Input, Button} from 'shined';
import './style.less';
import APITable from "../../../common/APITable/APITable";
import {NavLink} from "react-router-dom";
import Note from '../../../common/Note/Note';

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "加载",
                    description: '用于在视觉上提示加载状态。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>该组件会创建一个加载特效，使用不停旋转或闪现的圆来提示当前加载状态。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础样式</p>
                    <p>在需要显示加载动画的容器外部嵌套该加载组件即可实现该动画效果，也可以通过 <code>color</code> 属性指定加载颜色。
                    </p>
                    <Example {...{
                        className: ['demo-loader'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={1}>
                                        <Loader/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="success"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="warning"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="danger"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="info"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="primary"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="brand"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="accent"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="focus"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="metal"/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/divider/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>加载尺寸</p>
                    <p>通过设置 <code>size</code> 属性可以指定加载动画的尺寸。
                    </p>
                    <Example {...{
                        className: ['demo-loader'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={1}>
                                        <Loader color="success" size="sm"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="success" size="md"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="success" size="lg"/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/divider/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>对齐方式</p>
                    <p>通过设置 <code>align</code> 属性可以指定加载动画出现于容器中的位置。
                    </p>
                    <Example {...{
                        className: ['demo-loader', 'demo-loader-full'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Loader color="success" align="left"/>
                                    </Col>
                                    <Col part={12}>
                                        <Loader color="success" align="center"/>
                                    </Col>
                                    <Col part={12}>
                                        <Loader color="success" align="right"/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/divider/basic').default,
                            language: 'jsx'
                        }
                    }}/>

                    <p className='title'>整合其他组件</p>
                    <p>除了在普通容器中展示加载动画，加载组件也支持在基础输入组件和按钮内部显示加载组件。
                    </p>
                    <Example {...{
                        className: ['demo-loader', 'demo-loader-full'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Form>
                                            <Loader color="primary" align="left">
                                                <Input {...{
                                                    label: '输入内容'
                                                }}/>
                                            </Loader>
                                            <Loader color="primary" align="right">
                                                <Input {...{
                                                    label: '输入内容'
                                                }}/>
                                            </Loader>
                                        </Form>
                                    </Col>

                                    <Col part={2}>
                                        <Loader color="light" align="left">
                                            <Button value="Button" color="danger"/>
                                        </Loader>
                                    </Col>
                                    <Col part={2}>
                                        <Loader color="light" align="right">
                                            <Button value="Button" color="brand"/>
                                        </Loader>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/divider/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>闪现样式</p>
                    <p>除了基础的旋转样式，加载组件也提供了闪现样式。
                    </p>
                    <Note {...{
                        type: 'danger',
                        message: '闪现样式仅支持嵌套普通容器，不支持嵌套基础输入组件和按钮组件。'
                    }}/>
                    <Example {...{
                        className: ['demo-loader'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={1}>
                                        <Loader type="spinner"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="success" type="spinner"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="warning" type="spinner"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="danger" type="spinner"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="info" type="spinner"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="primary" type="spinner"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="brand" type="spinner"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="accent" type="spinner"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="focus" type="spinner"/>
                                    </Col>
                                    <Col part={1}>
                                        <Loader color="metal" type="spinner"/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/divider/basic').default,
                            language: 'jsx'
                        }
                    }}/>

                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['type', <p>定义加载的类型，<code>spinner</code>类型仅能嵌套在普通容器中
                            </p>, 'String', 'loader / spinner', 'loader'],
                            ['color',
                                <Fragment>定义加载组件颜色</Fragment>, 'String',
                                <Fragment>可选项参考<NavLink to='/tutorial/color'>色彩</NavLink></Fragment>, 'default'],
                            ['size', '定义加载组件的大小尺寸', 'String', 'lg / sm / md', 'md'],
                            ['align', '定义加载组件的对齐方式', 'String', 'left / center / right', 'left'],
                        ],
                        attribute: true,
                        callback: true
                    }}/>
                </Info>
            </Fragment>
        );
    }
}