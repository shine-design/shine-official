import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Info from "../../../common/Info/Info";

import {Col, Row, Divider} from 'shined';
import './style.less';
import APITable from "../../../common/APITable/APITable";
import {NavLink} from "react-router-dom";

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "分隔线",
                    description: '用于在视觉上分隔两个独立的区域。 ',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>分隔线组件可以在视觉上将区域分为上下两个相对独立的部分，它由一条占满容器宽度的横线组成。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>分隔线</p>
                    <p>使用 <code>Divider</code> 组件可以设置一条分隔线，该组件内部的字段会被显示在分隔线上。
                    </p>
                    <Example {...{
                        className: ['demo-input'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Divider>
                                            我是分隔线
                                        </Divider>
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
                        data: [],
                        attribute: true
                    }}/>
                </Info>
            </Fragment>
        );
    }
}