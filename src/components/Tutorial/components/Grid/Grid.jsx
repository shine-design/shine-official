import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';
import {Col, Row} from 'shined';

import './style.less';

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "布局",
                    description: '通过基础的分栏，迅速简便地创建响应式布局。',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        Shine Design 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（Viewport）尺寸的增加，系统会自动分为最多 12
                        列。它包含了易于使用的预定义类，还有强大的 <code>Mixin</code>
                        用于生成更具语义的布局。
                    </p>
                </Info>
                <p className='title'>设计理念</p>
                <p>布局的栅格化系统，我们是基于行组件（ <code>Row</code> ）和列组件（ <code>Col</code> ）来定义区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的设计理念：
                </p>
                <ul>
                    <li><p>行组件是在水平方向上建立的一块针对列组件的容器。</p></li>
                    <li><p>其他内容应当放置于列组件内，并且，只有列组件可以作为行组件的直接子元素</p></li>
                    <li><p>我们将栅格系统划分为 12 格块，你可以在列组件上设置1～12的任意值。</p></li>
                    <li><p>若同一行数个列组件的格块值之和超过 12 ，那么多余的列组件会另起一行。</p></li>
                </ul>
                <p className='title'>Flex 布局</p>
                <p>
                    <code>Flex</code> 是目前主流的页面弹性布局方式，在基于 12
                    格块的栅格布局之上，我们引入了弹性布局的设计思想。我们允许行组件设置子元素的对齐方式，排列方向，排列顺序等， 弹性布局设计思想可参考：<a
                    href='https://www.runoob.com/w3cnote/flex-grammar.html' target='_blank'
                    rel="noopener noreferrer">Flex 布局语法教程</a>。</p>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础布局</p>
                    <p>使用行组件和列组件，就可以创建一个基础的栅格布局，所有列组件必须放在行组件内。
                    </p>
                    <Example {...{
                        className: ['demo-grid'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb1o', 'demo']}>
                                    <Col part={12} className={['bg-purple-dark', 'demo-col']}>Col-12</Col>
                                </Row>
                                <Row className={['helper', 'mb1o', 'demo']}>
                                    <Col part={6} className={['bg-purple', 'demo-col']}>Col-6</Col>
                                    <Col part={6} className={['bg-purple-light', 'demo-col']}>Col-6</Col>
                                </Row>
                                <Row className={['helper', 'mb1o', 'demo']}>
                                    <Col part={4} className={['bg-purple', 'demo-col']}>Col-4</Col>
                                    <Col part={4} className={['bg-purple-light', 'demo-col']}>Col-4</Col>
                                    <Col part={4} className={['bg-purple', 'demo-col']}>Col-4</Col>
                                </Row>
                                <Row className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/grid/basic').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>列偏移</p>
                    <p>使用 <code>offset</code> 属性可以设置列组件的偏移量，偏移量取值范围为 1～11，偏移的位置会被空白撑满。
                    </p>
                    <Example {...{
                        className: ['demo-grid'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} offset={3} className={['bg-purple', 'demo-col']}>Offset-3 |
                                        Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                </Row>

                                <Row className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} offset={3} className={['bg-purple-light', 'demo-col']}>Offset-3 |
                                        Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                </Row>

                                <Row className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                    <Col part={3} offset={3} className={['bg-purple', 'demo-col']}>Offset-3 |
                                        Col-3</Col>
                                </Row>

                                <Row className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/grid/offset').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>列排序</p>
                    <p>列排序是布局系统的一个完美的特性，您可以很容易地以一种顺序编写列，然后以另一种顺序显示列。使用 <code>order</code> 属性可以设置列排列顺序，优先级较高（值越小）的排列靠前。
                    </p>
                    <Example {...{
                        className: ['demo-grid'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} order={1} className={['bg-purple', 'demo-col']}>Col-Order-1</Col>
                                    <Col part={3} order={2}
                                         className={['bg-purple-light', 'demo-col']}>Col-Order-2</Col>
                                    <Col part={3} order={3} className={['bg-purple', 'demo-col']}>Col-Order-3</Col>
                                    <Col part={3} order={4}
                                         className={['bg-purple-light', 'demo-col']}>Col-Order-4</Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/grid/order').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>主轴</p>
                    <p>在行组件上使用 <code>direction</code> 属性可以设置主轴（排列方向），目前支持横向排列和竖向排列。</p>
                    <Example {...{
                        className: ['demo-grid'],
                        display: (
                            <Fragment>
                                <Row direction='hor' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                </Row>
                                <Row direction='ver' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={12} className={['bg-purple', 'demo-col']}>Col-12</Col>
                                    <Col part={12} className={['bg-purple-light', 'demo-col']}>Col-12</Col>
                                    <Col part={12} className={['bg-purple', 'demo-col']}>Col-12</Col>
                                    <Col part={12} className={['bg-purple-light', 'demo-col']}>Col-12</Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/grid/direction').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>主轴对齐方式</p>
                    <p>使用 <code>justify</code> 属性可以指定横向列之间在主轴上的对齐方式，支持左对齐、居中对齐、右对齐、两端对齐和环绕对齐。</p>
                    <Example {...{
                        className: ['demo-grid'],
                        display: (
                            <Fragment>
                                <Row justify='flex-start' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                </Row>
                                <Row justify='center' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                </Row>
                                <Row justify='flex-end' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                </Row>
                                <Row justify='space-between' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                </Row>
                                <Row justify='space-around' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Col-3</Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/grid/justify').default,
                            language: 'jsx'
                        }
                    }}/>
                    <Note {...{
                        type: 'info',
                        message: (
                            <Fragment>
                                <p>与 <code>direction</code> 属性相一致的方向为主轴方向，即项目的排列方向。</p>
                            </Fragment>
                        )
                    }}/>
                    <p className='title'>交叉轴对齐方式</p>
                    <p>使用 <code>align</code> 属性可以指定横向列之间在交叉轴上的对齐方式，支持起点对齐、中线对齐、终点对齐、文字基线对齐和拉伸对齐。</p>
                    <Example {...{
                        className: ['demo-grid'],
                        display: (
                            <Fragment>
                                <Row align='flex-start' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col', 'demo-higher']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col', 'demo-middle']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col', 'demo-high']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                </Row>
                                <Row align='center' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col', 'demo-higher']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col', 'demo-middle']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col', 'demo-high']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                </Row>
                                <Row align='flex-end' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col', 'demo-higher']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col', 'demo-middle']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col', 'demo-high']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                </Row>
                                <Row align='baseline' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col', 'demo-higher']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col', 'demo-middle']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col', 'demo-high']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Col-3</Col>
                                </Row>
                                <Row align='stretch' className={['helper', 'mb1o', 'demo', 'demo-row-higher']}>
                                    <Col part={3} className={['bg-purple', 'demo-text']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-text']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple', 'demo-text']}>Col-3</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-text']}>Col-3</Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/grid/align').default,
                            language: 'jsx'
                        }
                    }}/>
                    <Note {...{
                        type: 'info',
                        message: (
                            <Fragment>
                                <p>与 <code>direction</code> 属性相垂直的方向为交叉轴方向。</p>
                            </Fragment>
                        )
                    }}/>
                    <p className='title'>多行对齐方式</p>
                    <p>使用 <code>alignContent</code> 属性可以指定主轴上不同行（列）的排列方式，支持起点对齐、中线对齐、终点对齐、文字基线对齐和拉伸对齐。</p>
                    <Example {...{
                        className: ['demo-grid'],
                        display: (
                            <Fragment>
                                <Row alignContent='flex-start'
                                     className={['helper', 'mb1o', 'demo', 'demo-row-higher']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-2</Col>
                                </Row>
                                <Row alignContent='center' className={['helper', 'mb1o', 'demo', 'demo-row-higher']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-2</Col>
                                </Row>
                                <Row alignContent='flex-end' className={['helper', 'mb1o', 'demo', 'demo-row-higher']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-2</Col>
                                </Row>
                                <Row alignContent='space-between'
                                     className={['helper', 'mb1o', 'demo', 'demo-row-higher']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-2</Col>
                                </Row>
                                <Row alignContent='space-around'
                                     className={['helper', 'mb1o', 'demo', 'demo-row-higher']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-2</Col>
                                </Row>
                                <Row alignContent='stretch' className={['helper', 'mb1o', 'demo', 'demo-row-higher']}>
                                    <Col part={3} className={['bg-purple', 'demo-text-half']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-text-half']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-text-half']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-text-half']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-text-half']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-text-half']}>Row-2</Col>
                                    <Col part={3} className={['bg-purple', 'demo-text-half']}>Row-2</Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/grid/alignContent').default,
                            language: 'jsx'
                        }
                    }}/>
                    <p className='title'>折行策略</p>
                    <p>使用 <code>wrap</code> 属性可以指定主轴上超出范围的折行方式，支持正向折行、不折行和反向折行。</p>
                    <Example {...{
                        className: ['demo-grid'],
                        display: (
                            <Fragment>
                                <Row wrap='wrap' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-dark', 'demo-col']}>Row-2</Col>
                                </Row>
                                <Row wrap='wrap-reverse' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-dark', 'demo-col']}>Row-2</Col>
                                </Row>
                                <Row wrap='nowrap' className={['helper', 'mb1o', 'demo']}>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-light', 'demo-col']}>Row-1</Col>
                                    <Col part={3} className={['bg-purple-dark', 'demo-col']}>Row-2</Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/grid/wrap').default,
                            language: 'jsx'
                        }
                    }}/>
                </Info>
                <Note {...{
                    type: 'info',
                    message: <p>折行策略中"不折行"效果需要滚动水平滚动条才能查看效果。</p>
                }}/>
                <Info {...{
                    description: '配置参数'
                }}>
                    <p>栅格系统由行组件 <code>Row</code> 和列组件 <code>Col</code> 组成，我们将依次介绍各个组件配置参数。</p>
                    <p className='title'>行</p>
                    <APITable {...{
                        data: [
                            ['direction', '定义主轴方向，即项目排列方向', 'String', 'ver / hor', 'ver'],
                            ['justify', '定义主轴上项目对齐方式', 'String', 'flex-start / flex-end / center / space-between / space-around', '-'],
                            ['align', '定义交叉轴上项目对齐方式', 'String', 'flex-start / flex-end / center / baseline / stretch', '-'],
                            ['wrap', '定义当一条轴线排列空间不足时的折行策略', 'String', 'nowrap / wrap-reverse / wrap', '-'],
                            ['alignContent', '定义存在多根轴线时的对齐方式，当只有一根轴线时，该属性无效', 'String', 'nowrap / wrap-reverse / wrap', '-']
                        ],
                        attribute: true
                    }}/>
                    <p className='title'>列</p>
                    <APITable {...{
                        data: [
                            ['order', '定义项目排列顺序，数值越小，排列越靠前', 'Number', '1 至 12', '-'],
                            ['align', (
                                <Fragment>定义项目自身的对齐方式，该属性会覆盖列组件中设置的 <code>align</code> 属性</Fragment>), 'String', 'flex-start / flex-end / center / baseline / stretch', '-'],
                            ['part', (
                                <Fragment>定义当前项目跨越的格数，支持基于不同尺寸设备单独设置，可同时设置多个值，可附加前缀，见下表</Fragment>), 'Number / String / Array', '1 至 12', '-'],
                            ['offset', '定义当前项目基于栅格的偏移量', 'Number', '1 至 11', '-'],
                        ],
                        attribute: true
                    }}/>
                    <p className='title'>设备尺寸</p>
                    <div className="table-responsive" id='device'>
                        <table className="table helper center">
                            <thead>
                            <tr className='active helper center'>
                                <th></th>
                                <th className='helper center'>超小屏幕</th>
                                <th className='helper center'>小屏幕</th>
                                <th className='helper center'>中等屏幕</th>
                                <th className='helper center'>大屏幕</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th className='helper center'>设备</th>
                                <td>手机设备</td>
                                <td>平板设备</td>
                                <td>桌面显示器</td>
                                <td>大桌面显示器</td>
                            </tr>
                            <tr>
                                <th className='helper center'>分辨率</th>
                                <td>&lt;768px</td>
                                <td>&ge;992px</td>
                                <td>&ge;1200px</td>
                                <td>&ge;1200px</td>
                            </tr>
                            <tr>
                                <th className='helper center'>前缀</th>
                                <td>xs-</td>
                                <td>sm-</td>
                                <td>md-</td>
                                <td>lg-</td>
                            </tr>
                            <tr>
                                <th className='helper center'>列数</th>
                                <td colSpan='4'>1 至 12</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Info>
            </Fragment>
        );
    }
}