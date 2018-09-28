import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';

import {Col, Row, Progress} from 'shined';
import {NavLink} from "react-router-dom";

import './style.less';
import {Form, Input} from "../Input/Input";

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "进度条",
                    description: '使用高亮颜色标识当前任务进度。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        进度条组件是一个以长方形条状样式高亮显示处理任务的速度，完成度，剩余未完成任务量的大小等信息。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础进度条</p>
                    <p>使用 <code>Progress</code> 组件可以快速创建一个基础的进度条。</p>
                    <Example {...{
                        className: ['demo-progress'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Progress {...{
                                            itemList: [{
                                                value: 0
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 25
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 50
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 100
                                            }]
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/progress/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>背景颜色</p>
                    <p>不同背景颜色的进度条适用于不同的应用场景，添加 <code>bg</code> 修饰符可以显示不同颜色的进度条，参考<NavLink
                        to='/tutorial/color'>色彩</NavLink>。</p>
                    <Example {...{
                        className: ['demo-progress'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Progress {...{
                                            itemList: [{
                                                value: 10,
                                                className: 'sh--bg-success'
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 30,
                                                className: 'sh--bg-brand'
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 50,
                                                className: 'sh--bg-danger'
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 100,
                                                className: 'sh--bg-primary'
                                            }]
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/progress/bg').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>尺寸</p>
                    <p>使用 <code>size</code> 属性可以设置进度条的粗细，也可以通过设置 <code>height</code> 属性设置自定义进度条粗细。</p>
                    <Example {...{
                        className: ['demo-progress'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Progress {...{
                                            itemList: [{
                                                value: 50,
                                                className: 'sh--bg-brand'
                                            }],
                                            size: 'sm'
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 50,
                                                className: 'sh--bg-accent'
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 50,
                                                className: 'sh--bg-warning'
                                            }],
                                            size: 'lg'
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 50,
                                                className: 'sh--bg-danger'
                                            }],
                                            className: 'custom-height'
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/progress/size').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>堆叠进度条</p>
                    <p>在 <code>itemList</code> 中添加多个配置项即可实现堆叠进度条，多个进度条会显示在同一行。</p>
                    <Example {...{
                        className: ['demo-progress'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Progress {...{
                                            itemList: [{
                                                value: 10,
                                                className: 'sh--bg-success'
                                            }, {
                                                value: 20,
                                                className: 'sh--bg-danger'
                                            }, {
                                                value: 30,
                                                className: 'sh--bg-warning'
                                            }, {
                                                value: 40,
                                                className: 'sh--bg-brand'
                                            }]
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/progress/list').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>条纹进度条</p>
                    <p>设置 <code>isStriped</code> 属性可以创建条纹进度条，条纹进度条具有更高的对比度。</p>
                    <Example {...{
                        className: ['demo-progress'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Progress {...{
                                            itemList: [{
                                                value: 10,
                                                className: 'sh--bg-success',
                                                isStriped: true
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 30,
                                                className: 'sh--bg-brand',
                                                isStriped: true
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 50,
                                                className: 'sh--bg-danger',
                                                isStriped: true
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 100,
                                                className: 'sh--bg-primary',
                                                isStriped: true
                                            }]
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/progress/striped').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>动画进度条</p>
                    <p>设置 <code>isAnimated</code> 属性可以创建带动画效果的进度条，动画进度条具有更高的对比度。</p>
                    <Example {...{
                        className: ['demo-progress'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Progress {...{
                                            itemList: [{
                                                value: 10,
                                                className: 'sh--bg-success',
                                                isStriped: true,
                                                isAnimated: true
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 30,
                                                className: 'sh--bg-brand',
                                                isStriped: true,
                                                isAnimated: true
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 50,
                                                className: 'sh--bg-danger',
                                                isStriped: true,
                                                isAnimated: true
                                            }]
                                        }}/>
                                        <Progress {...{
                                            itemList: [{
                                                value: 100,
                                                className: 'sh--bg-primary',
                                                isStriped: true,
                                                isAnimated: true
                                            }]
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/progress/animate').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['size', '定义进度条组件的尺寸', 'String', 'lg / sm / md', 'md'],
                            ['itemList', '定义当前当前进度条占比配置项，相关配置见下表', 'Array', '-', '-'],
                        ]
                    }}/>
                    <p className='title'>占比配置</p>
                    <APITable {...{
                        data: [
                            ['value', '定义当前项占比数值', 'Number', '0 至 100', '-'],
                            ['isStriped', '定义当前项是否显示条纹', 'Boolean', 'true / false', 'false'],
                            ['isAnimated', '定义当前项是否显示动画', 'Boolean', 'true / false', 'false'],
                        ]
                    }}/>
                </Info>
            </Fragment>
        );
    }
}