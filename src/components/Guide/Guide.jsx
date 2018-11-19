/**
 * 快速入门
 */
import React, {Component, Fragment} from 'react';
import Background from '../common/Background/Background';
import Note from '../common/Note/Note';
import Article from '../common/Article/Article';
import Step from "../common/Step/Step";
import Code from "../common/Code/Code";
import {NavLink} from 'react-router-dom'
import {Button,Row,Col} from 'shined';
import './style.less';

export default class  extends Component {
    render() {
        return (
            <Fragment>
                <Background {...{
                    title: '新手入门'
                }}/>
                <div id='content'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-content">
                                    <Article>
                                        <p>HI，欢迎来到新手入门，Shine Design 致力于提供给程序员愉悦的开发体验。本教程将教你如何集成 Shine Design
                                            的开发环境。 </p>
                                        <blockquote>
                                            <p>
                                                在开始之前，强烈推荐先学习 React 和 ES2015，并正确安装和配置了 Node.js v6.5 或以上。 本文假设你已了解关于
                                                HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 React 的正确开发方式。如果你刚开始学习前端或者
                                                React，将 Shine Design 作为你的第一步可能不是最好的主意。
                                            </p>
                                        </blockquote>
                                        <h2>环境搭建</h2>
                                        <p>Shine Design 提供两种集成开发环境的方式。</p>
                                        <h4>构建工具</h4>
                                        <p>直接使用集成了 Shine Design 开发环境的脚手架工具 <code>Shine Tool</code>，使用该工具可以直接搭建开箱即用的项目，相关资料请参考 <NavLink
                                            to='cli'>构建工具</NavLink> 。</p>
                                        <h4>手动构建</h4>
                                        <p>手动构建更适合在现有项目中集成 Shine Design
                                            或自定义环境配置的情景，本例以 <code>create-react-app</code> （或其他同类工具）生成的项目作为基础项目，在此基础上集成
                                            Shine Design 开发环境。</p>
                                        <blockquote>
                                            <p>本例假设你已正确安装 <code>create-react-app</code> 命令行工具并熟悉相关命令行指令。相关资料参考 <a
                                                href='https://github.com/facebook/create-react-app'>create-react-app</a>。
                                            </p>
                                        </blockquote>
                                        <Step {...{
                                            steps: [
                                                {
                                                    title: '创建项目',
                                                    content: (
                                                        <Fragment>
                                                            <p>通过在命令行中执行如下指令创建一个新项目 <code>my-app</code>。</p>
                                                            <Code {...{
                                                                code: `
create-react-app my-app
                    `,
                                                                language: 'apacheconf'
                                                            }}/>
                                                        </Fragment>
                                                    )
                                                }, {
                                                    title: '安装依赖',
                                                    content: (
                                                        <Fragment>
                                                            <p>进入项目 <code>my-app</code> 项目文件夹，并安装 Shine Design
                                                                文件依赖，在命令行工具中执行如下命令：
                                                            </p>
                                                            <Code {...{
                                                                code: `
npm install shined
                    `,
                                                                language: 'apacheconf'
                                                            }}/>
                                                            <blockquote>
                                                                <p>在 NPM 包中，Shine Design 被命名为 <code>shined</code>。</p>
                                                            </blockquote>
                                                        </Fragment>
                                                    )
                                                }, {
                                                    title: '启动服务器',
                                                    content: (
                                                        <Fragment>
                                                            <p>进入项目 <code>my-app</code> 项目文件夹，
                                                                并启动开发服务器，你可以在命令行中输入如下指令启动服务器。</p>
                                                            <Code {...{
                                                                code:
                                                                    `
npm start

`,
                                                                language: 'apacheconf'
                                                            }}/>
                                                            <p>静待片刻，开发服务器启动成功后，你可以在浏览器中访问 <a
                                                                href='http://127.0.0.1:8000'>http://127.0.0.1:3000</a> ，当看到欢迎页面时，项目搭建成功。
                                                            </p>
                                                            <blockquote>
                                                                <p>
                                                                    不同命令行工具产生的项目可能存在不同的启动命令和访问地址，详情可查阅相关文档。
                                                                </p>
                                                            </blockquote>
                                                        </Fragment>
                                                    )
                                                }
                                            ]
                                        }}/>
                                        <p>至此，依赖配置成功，开始使用第一个组件吧。</p>
                                        <h2>使用组件</h2>
                                        <p>Shine Design 支持按需加载的方式引入组件，同时需要引入样式文件 (<code>index.css</code>) ,样式文件仅需要在入口处引入一次，即可在整个项目中使用。</p>
                                        <p>以 <code>my-app</code>项目为例，进入项目文件夹，访问 <code>src/App.js</code> 文件，并修改该文件：</p>
                                        <Code {...{
                                            code: `
import React, { Component } from 'react';
import './App.css';

// 导入依赖
import {Button} from 'shined'; // 导入 Button 组件
import 'shined/index.css'; // 导入 Shine Design 样式

class App extends Component {
  render() {
    return (
        <Button value="Button"/>
    );
  }
}
                                            `
                                        }}/>
                                        <blockquote>
                                            <p>部分工具创建的项目可能入口文件路径不同，详情可查阅相关文档。</p>
                                        </blockquote>
                                        <p>刷新页面后，即可出现如下的按钮：</p>
                                        <div className='helper mb20 mt20 ml10'>
                                            <Row>
                                                <Col part={12}>
                                                    <Button value='Button'/>
                                                </Col>
                                            </Row>
                                        </div>
                                        <blockquote>
                                            <p>部分脚手架工具未配置 Webpack 热更新，可能需要手动重启服务。</p>
                                        </blockquote>
                                        <p>至此，Shine Design 组件使用成功，更多组件的使用请参考 <NavLink to='/tutorial'>组件文档</NavLink> 。
                                        </p>
                                    </Article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
}