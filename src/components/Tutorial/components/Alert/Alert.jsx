import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import APITable from '../../../common/APITable/APITable';
import {NavLink} from "react-router-dom";

import {Col, Row, Alert} from 'shinec';

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "警告框",
                    description: '用于页面中展示重要的提示信息。',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        警告框（Alert）消息大多是用来向终端用户显示诸如警告或确认消息的信息，通过设置不同属性，可以个性化定制警告框样式。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>基础警告框</p>
                    <p>使用 <code>Alert</code> 组件可以直接创建一个基础的警告框，也可以通过指定 <code>color</code> 属性设置不同的状态颜色。
                    </p>
                    <Example {...{
                        className: ['demo-button'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={12}>
                                        <Alert {...{
                                            color: 'success',
                                            title: 'Well done! ',
                                            message: 'You successfully read this important alert message.'
                                        }}/>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/button/basic').default,
                            language: 'markup'
                        }
                    }}/>
                </Info>
            </Fragment>
        );
    }
}
