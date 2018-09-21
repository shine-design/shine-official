import React, {Component, Fragment} from 'react';
import Info from "../../common/Info/Info";

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "组件",
                    description: 'Shine Component',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '设计理念'
                }}>
                    <p>组件是一个个不可再被拆分的基本设计元素，例如一个 Button、一个 Input 等。Shine Design 采用了组件化的思想，其设计理念如下：</p>
                    <ul>
                        <li><p>页面上的每个 独立的 可视/可交互区域视为一个组件;</p></li>
                        <li><p>每个组件对应一个工程目录，组件所需的各种资源都在这个目录下就近维护;</p></li>
                        <li><p>每个组件相对独立，页面只不过是组件的容器，组件自由组合形成功能完整的界面;</p></li>
                        <li><p>当不需要某个组件，或者想要替换组件时，可以整个目录删除/替换。</p></li>
                    </ul>
                </Info>
            </Fragment>
        );
    }
}