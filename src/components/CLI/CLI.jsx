import React, {Component, Fragment} from 'react';
import Background from "../common/Background/Background";
import Code from '../common/Code/Code';
import Info from '../common/Info/Info';
import Note from "../common/Note/Note";
import Step from "../common/Step/Step";

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Background {...{
                    title: '构建工具'
                }}/>
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-content">
                                    <Info {...{
                                        title: "快速构建工具",
                                        description: 'Omega CLI : Omega Command Line Interface',
                                        guide: true
                                    }}>
                                    </Info>
                                    <Info {...{
                                        description: '什么是 Omega CLI'
                                    }}>
                                        <p>
                                            Omega CLI 是一个用于快速构建基于 React 和 Redux 的轻量应用框架的脚手架工具，底层实现来自 Facebook 公司提供的 <a
                                            href='https://github.com/facebook/create-react-app#readme'>create-react-app</a>，支持
                                            side effects、热替换、动态加载、react-native、SSR 等，同时集成了最新的 Omega Design
                                            ，可以通过该工具快速进行项目开发。
                                        </p>
                                    </Info>
                                    <Info {...{
                                        description: "项目实战"
                                    }}>
                                        <p>我们会引导你使用 Omega CLI 从 0 开始创建一个简单应用。</p>
                                        <Step {...{
                                            steps: [
                                                {
                                                    title: '安装 Omega CLI',
                                                    content: (
                                                        <Fragment>
                                                            <p>你可以通过在命令行中输入如下指令，实现 Omega CLI 的安装。</p>
                                                            <Code {...{
                                                                code: `
npm install omega-cli -g
                    `
                                                            }}/>
                                                            <Note {...{
                                                                type: 'success',
                                                                title: '友情提示',
                                                                message: '为了体验 Omega CLI 新特性，建议将 Node 和 NPM 升级至最新版本。'
                                                            }}/>
                                                        </Fragment>
                                                    )
                                                }, {
                                                    title: '创建新应用',
                                                    content: (
                                                        <Fragment>
                                                            <p>你安装完 Omega CLI 之后，就可以在命令行里访问到 omega 命令（<a
                                                                href='https://stackoverflow.com/questions/15054388/global-node-modules-not-installing-correctly-command-not-found'>不能访问？</a>）。现在，你可以通过
                                                                omega init 创建新应用，你可以通过在命令行中输入如下指令，其中projectName为项目名称。
                                                            </p>
                                                            <Code {...{
                                                                code: `
omega init projectName
                    `
                                                            }}/>
                                                            <p>这会创建 projectName 目录（若不存在），包含项目初始化目录和文件，并提供开发服务器、构建脚本、数据
                                                                mock
                                                                服务、代理服务器等功能。</p>
                                                        </Fragment>
                                                    )
                                                }, {
                                                    title: '启动服务器',
                                                    content: (
                                                        <Fragment>
                                                            <p>通过 cd 命令进入 projectName
                                                                目录，并启动开发服务器，你可以在命令行中输入如下指令启动服务器。</p>
                                                            <Code {...{
                                                                code: `
//进入projectName项目
cd projectName

//开启测试服务器
npm run dev
                    `
                                                            }}/>
                                                            <p>静待片刻，开发服务器启动成功后，你可以在浏览器中访问 <a
                                                                href='http://127.0.0.1:8000'>http://127.0.0.1:8000</a> ，当看到欢迎页面时，项目搭建成功。
                                                            </p>
                                                        </Fragment>
                                                    )
                                                }, {
                                                    title: '打包上线',
                                                    content: (
                                                        <Fragment>
                                                            <p>当项目开发完成，需要将代码进行编译，混淆和打包之后，部署至服务器上，你可以在命令行中输入如下指令完成项目打包。</p>
                                                            <Code {...{
                                                                code: `
//进入projectName项目
cd projectName

//编译项目
npm run build
                    `
                                                            }}/>
                                                            <p>静待片刻，项目即可打包完成，打包后项目文件位于/dist目录下，可以将该文件夹下的所有文件部署至服务器上，即可完成上线。
                                                            </p>
                                                        </Fragment>
                                                    )
                                                }
                                            ]
                                        }}/>
                                    </Info>
                                    <Info {...{
                                        description: "目录结构"
                                    }}>
                                        <p>使用 Omega CLI 构建工具创建项目之后，将在你本地创建如下结构的项目，以下是对各个目录进行一个简单介绍。</p>
                                    </Info>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}