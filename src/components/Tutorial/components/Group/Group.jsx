import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';
import {NavLink} from "react-router-dom";

import {Col, Row, Button, Group} from 'shined';


export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "按钮组",
                    description: '用于封装一系列按钮的复合组件',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        按钮组允许多个按钮组件被堆叠在同一行（列）上。当想要把按钮对齐在一起时，这就显得非常有用。可以通过 <code>Group</code> 组件创建按钮组，并修改默认样式行为。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础按钮组</p>
                    <p>使用 <code>Group</code> 组件可以直接创建一个基本的按钮组。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Group>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'secondary'
                                            }}/>
                                        </Group>
                                    </Col>
                                    <Col part={3}>
                                        <Group>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'brand'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'brand'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'brand'
                                            }}/>
                                        </Group>
                                    </Col>
                                    <Col part={3}>
                                        <Group>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'info'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'info'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'info'
                                            }}/>
                                        </Group>
                                    </Col>
                                    <Col part={3}>
                                        <Group>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'danger'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'danger'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'danger'
                                            }}/>
                                        </Group>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Group>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'info'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'warning'
                                            }}/>
                                        </Group>
                                    </Col>
                                    <Col part={3}>
                                        <Group>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'outline-brand'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'outline-brand'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'outline-brand'
                                            }}/>
                                        </Group>
                                    </Col>
                                    <Col part={3}>
                                        <Group>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'outline-info'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'outline-info'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'outline-info'
                                            }}/>
                                        </Group>
                                    </Col>
                                    <Col part={3}>
                                        <Group>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'outline-danger'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'outline-danger'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'outline-danger'
                                            }}/>
                                        </Group>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/group/basic').default,
                            language: 'markup'
                        }
                    }}/>
                
                    <p className='title'>按钮组尺寸</p>
                    <p>使用 <code>size</code> 属性可以定义按钮组尺寸。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Group {...{
                                            size: 'lg'
                                        }}>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'secondary'
                                            }}/>
                                        </Group>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Group>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'secondary'
                                            }}/>
                                        </Group>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Group {...{
                                            size: 'sm'
                                        }}>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'secondary'
                                            }}/>
                                        </Group>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/group/size').default,
                            language: 'markup'
                        }
                    }}/>
                    <Note {...{
                        type: 'info',
                        title: '优先级',
                        message: (<Fragment>
                            <p>按钮组的 <code>size</code> 属性相比按钮的 <code>size</code> 属性具有更高优先级。</p>
                        </Fragment>)
                    }}/>
                    <p className='title'>环形 & 阴影</p>
                    <p>设置 <code>isPill</code> 属性为 <code>true</code> 可以将按钮组设置为环形样式，使用 <code>isAir</code> 属性可以设置阴影。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Group {...{
                                            isPill: true
                                        }}>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'secondary'
                                            }}/>
                                        </Group>
                                    </Col>
                                    <Col part={3}>
                                        <Group>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'secondary'
                                            }}/>
                                        </Group>
                                    </Col>
                                </Row>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Group {...{
                                            isPill: true,
                                            isAir: true
                                        }}>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'secondary'
                                            }}/>
                                        </Group>
                                    </Col>
                                    <Col part={3}>
                                        <Group {...{
                                            isAir: true
                                        }}>
                                            <Button {...{
                                                value: 'Left',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Right',
                                                color: 'secondary'
                                            }}/>
                                        </Group>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/group/pill').default,
                            language: 'markup'
                        }
                    }}/>
                    <p className='title'>纯图标按钮组</p>
                    <p>Shine Design 支持纯图标按钮的按钮组组件，仅需设置按钮的 <code>iconName</code> 属性。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Group>
                                            <Button {...{
                                                color: 'secondary',
                                                iconName: 'sh-icon-edit'
                                            }}/>
                                            <Button {...{
                                                color: 'secondary',
                                                iconName: 'sh-icon-trash'
                                            }}/>
                                            <Button {...{
                                                color: 'secondary',
                                                iconName: 'sh-icon-search'
                                            }}/>
                                        </Group>
                                    </Col>
                                </Row>

                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Group {...{
                                            isPill: true,
                                        }}>
                                            <Button {...{
                                                color: 'secondary',
                                                iconName: 'sh-icon-edit'
                                            }}/>
                                            <Button {...{
                                                color: 'secondary',
                                                iconName: 'sh-icon-trash'
                                            }}/>
                                            <Button {...{
                                                color: 'secondary',
                                                iconName: 'sh-icon-search'
                                            }}/>
                                        </Group>
                                    </Col>
                                </Row>

                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Group {...{
                                            isPill: true,
                                            isAir: true
                                        }}>
                                            <Button {...{
                                                color: 'secondary',
                                                iconName: 'sh-icon-edit'
                                            }}/>
                                            <Button {...{
                                                color: 'secondary',
                                                iconName: 'sh-icon-trash'
                                            }}/>
                                            <Button {...{
                                                color: 'secondary',
                                                iconName: 'sh-icon-search'
                                            }}/>
                                        </Group>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/group/icon').default,
                            language: 'markup'
                        }
                    }}/>
                    <Note {...{
                        type: 'danger',
                        message: (<Fragment>
                            设置纯图标按钮无需设置 <code>value</code> 属性。
                        </Fragment>)
                    }}/>
                    <p className='title'>垂直按钮组</p>
                    <p>按钮组默认使用水平方向排列按钮，通过设置 <code>direction</code> 属性切换排列方向。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={3}>
                                        <Group direction='ver' isPill={true} isAir={true} size='lg'>
                                            <Button {...{
                                                value: 'Top',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Bottom',
                                                color: 'secondary'
                                            }}/>
                                        </Group>
                                    </Col>
                                    <Col part={3}>
                                        <Group direction='ver' isPill={true} isAir={true}>
                                            <Button {...{
                                                value: 'Top',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Bottom',
                                                color: 'secondary'
                                            }}/>
                                        </Group>
                                    </Col>
                                    <Col part={3}>
                                        <Group direction='ver' isPill={true} isAir={true} size='sm'>
                                            <Button {...{
                                                value: 'Top',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Middle',
                                                color: 'secondary'
                                            }}/>
                                            <Button {...{
                                                value: 'Bottom',
                                                color: 'secondary'
                                            }}/>
                                        </Group>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/group/ver').default,
                            language: 'markup'
                        }
                    }}/>
                    <Note {...{
                        type: 'danger',
                        message: (<Fragment>
                            <p>使用垂直排列按钮组方向时，设置 <code>isPill</code>、<code>isAir</code> 无效。</p>
                        </Fragment>)
                    }}/>
                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <APITable {...{
                        data: [
                            ['size', (
                                <Fragment>定义按钮组的大小尺寸，该属性会覆盖按钮组件的 <code>size</code> 尺寸</Fragment>), 'String', 'lg / sm / normal', 'normal'],
                            ['direction', '定义按钮组的展示方向', 'String', 'ver / hor', 'hor'],
                            ['isPill', '定义按钮是否以环形的样式展示', 'Boolean', 'true / false', 'false'],
                            ['isAir', '定义按钮是否显示阴影样式', 'Boolean', 'true / false', 'false']
                        ]
                    }}/>
                </Info>
            </Fragment>
        );
    }
}