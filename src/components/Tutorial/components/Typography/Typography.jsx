import React, {Component, Fragment} from 'react';
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import Code from '../../../common/Code/Code';
import {Row, Col} from "shined";

import './style.less';
import {Form, Input} from "../Check/Check";
import Example from "../../../common/Example/Example";
import {NavLink} from "react-router-dom";

export default class extends Component {
    render() {
        const code = `font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;`
        return (
            <Fragment>
                <Info {...{
                    title: "字体",
                    description: '使用统一的字体以提供一致的浏览器展示效果。',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        排版是一个麻烦的问题，需要精心设计，而这个设计却是常被视觉设计师所忽略的。Shine Design
                        调研了市场上众多主流的中英文排版方案，设计出了一套适合中英文排版的解决方案，为浏览器带来了一致化的排版效果。
                    </p>
                </Info>

                <Info {...{
                    description: '字体库'
                }}>
                    <p className='title'>中文字体</p>
                    <Row className="helper mb20">
                        <Col part={4}>
                            <div className='demo-typo-box typo-PingFang'>
                                杨柳依依
                                <div className="name">PingFang SC</div>
                            </div>
                        </Col>
                        <Col part={4}>
                            <div className='demo-typo-box typo-Hiragino'>
                                杨柳依依
                                <div className="name">Hiragino Sans GB</div>
                            </div>
                        </Col>
                        <Col part={4}>
                            <div className='demo-typo-box typo-Microsoft'>
                                杨柳依依
                                <div className="name">Microsoft YaHei</div>
                            </div>
                        </Col>
                    </Row>
                    <p className='title'>英文字体</p>
                    <Row>
                        <Col part={4}>
                            <div className='demo-typo-box typo-Helvetica-neue'>
                                Shine
                                <div className="name">Helvetica Neue</div>
                            </div>
                        </Col>
                        <Col part={4}>
                            <div className='demo-typo-box typo-Helvetica'>
                                Shine
                                <div className="name">Helvetica</div>
                            </div>
                        </Col>
                        <Col part={4}>
                            <div className='demo-typo-box typo-Arial'>
                                Shine
                                <div className="name">Arial</div>
                            </div>
                        </Col>
                    </Row>
                    <p className='title helper mt20'>字体代码</p>
                    <Code {...{
                        language: 'css',
                        code
                    }}/>
                </Info>
                <Info {...{
                    description: '字体颜色'
                }}>
                    <p>使用 <code>sh--font-</code> 修饰符可以设置字体色彩，相关可选项请查看<NavLink to='/tutorial/color'>色彩</NavLink>。</p>
                    <Example {...{
                        className: ['demo-text'],
                        display: (
                            <Fragment>
                                <Row className={['helper', 'mb10', 'demo']}>
                                    <Col part={4}>
                                        <h1 className="sh--font-success">标题 H1 </h1>
                                        <h2 className="sh--font-danger">标题 H2 </h2>
                                        <h3 className="sh--font-warning">标题 H3 </h3>
                                        <h4 className="sh--font-info">标题 H4 </h4>
                                        <h5 className="sh--font-brand">标题 H5 </h5>
                                        <h6 className="sh--font-accent">标题 H6 </h6>
                                    </Col>
                                    <Col part={4}>
                                        <p className="sh--font-success">Success 文字</p>
                                        <p className="sh--font-danger">Danger 文字</p>
                                        <p className="sh--font-warning">Warning 文字</p>
                                        <p className="sh--font-info">Info 文字</p>
                                    </Col>
                                    <Col part={4}>
                                        <a className='sh-link sh-link--success' href='#'>Success 超级链接</a><br/>
                                        <a className='sh-link sh-link--danger' href='#'>Danger 超级链接</a><br/>
                                        <a className='sh-link sh-link--warning' href='#'>Warning 超级链接</a><br/>
                                        <a className='sh-link sh-link--info' href='#'>Info 超级链接</a>
                                    </Col>
                                </Row>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/typography/text').default,
                            language: 'jsx'
                        }
                    }}/>

                </Info>
            </Fragment>
        );
    }
}