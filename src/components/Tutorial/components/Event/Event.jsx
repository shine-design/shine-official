import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import Code from "../../../common/Code/Code";

import APITable from '../../../common/APITable/APITable';
import {NavLink} from "react-router-dom";

import {Col, Row} from 'shinec';


export default class extends Component {
    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "事件系统",
                    description: '合成事件系统',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        Shine Design 采用了与 <code>React</code> 合成事件类似的事件系统，它与原生事件系统有如下的区别：
                    </p>
                    <ul>
                        <li><p>合成事件系统采用驼峰命名方式，如 <code>onClick</code>、<code>onMouseEnter</code>、<code>onKeyUp</code>等。
                        </p></li>
                        <li><p>需要传入一个函数作为事件处理函数，而非字符串。</p></li>
                    </ul>
                    <p className='title'>事件监听</p>
                    <p>
                        Shine Design
                        支持在同一个组件上绑定多个事件监听，只需将多个事件监听函数作为 <code>callbacks</code> 对象的属性传入组件 <code>props</code> 中即可。
                    </p>
                    <ul>
                        <li><p>合成事件系统采用驼峰命名方式，如 <code>onClick</code>、<code>onMouseEnter</code>、<code>onKeyUp</code>等。
                        </p></li>
                        <li><p>需要传入一个函数作为事件处理函数，而非字符串。</p></li>
                    </ul>
                    <p>代码示例如下：</p>
                    <Code {...{
                        code: require('../../../../code/event/basic').default,
                        language: 'markup'
                    }}/>
                    <p className='title'>事件参数</p>
                    <p>
                        合成事件系统支持传入一个 <code>event</code> 作为事件监听函数的参数，为了兼容不同浏览器的差异，我们采用 <a
                        href='https://www.w3.org/TR/DOM-Level-3-Events/'>W3C
                        spec </a> 规范生成该参数，一个基于浏览器原生事件的跨浏览器实现。它拥有和浏览器原生事件一样的接口，包括stopPropagation()和preventDefault()。
                    </p>
                    <p><code>event</code> 参数具有如下 API ：</p>
                    <ul>
                        <li><p><code>boolean</code> bubbles</p></li>
                        <li><p><code>boolean</code>  cancelable</p></li>
                        <li><p><code>DOMEventTarget</code> currentTarget</p></li>
                        <li><p><code>boolean</code>  defaultPrevented</p></li>
                        <li><p><code>number</code> eventPhase</p></li>
                        <li><p><code>boolean</code>  isTrusted</p></li>
                        <li><p><code>DOMEvent</code> nativeEvent</p></li>
                        <li><p><code>void</code> preventDefault()</p></li>
                        <li><p><code>boolean</code>  isDefaultPrevented()</p></li>
                        <li><p><code>void</code> stopPropagation()</p></li>
                        <li><p><code>boolean</code>  isPropagationStopped()</p></li>
                        <li><p><code>DOMEventTarget</code> target</p></li>
                        <li><p><code>number</code> timeStamp</p></li>
                        <li><p><code>string</code> type</p></li>
                    </ul>
                    <Note {...{
                        title: '原生事件',
                        type: 'info',
                        message: (<Fragment>如果你需要使用原生事件的 API 接口，你可以使用 <code>nativeEvent</code> 属性找到它。</Fragment>)
                    }}/>
                </Info>
            </Fragment>
        );
    }
}