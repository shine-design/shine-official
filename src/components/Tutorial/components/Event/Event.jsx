import React, {Component, Fragment} from 'react';
import Example from "../../../common/Example/Example";
import Note from "../../../common/Note/Note";
import Info from "../../../common/Info/Info";
import Code from "../../../common/Code/Code";

import APITable from '../../../common/APITable/APITable';
import {NavLink} from "react-router-dom";

import {Col, Row} from 'shined';


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
                        language: 'jsx'
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
                        <li><p><code>boolean</code> cancelable</p></li>
                        <li><p><code>DOMEventTarget</code> currentTarget</p></li>
                        <li><p><code>boolean</code> defaultPrevented</p></li>
                        <li><p><code>number</code> eventPhase</p></li>
                        <li><p><code>boolean</code> isTrusted</p></li>
                        <li><p><code>DOMEvent</code> nativeEvent</p></li>
                        <li><p><code>void</code> preventDefault()</p></li>
                        <li><p><code>boolean</code> isDefaultPrevented()</p></li>
                        <li><p><code>void</code> stopPropagation()</p></li>
                        <li><p><code>boolean</code> isPropagationStopped()</p></li>
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
                <Info {...{
                    description: '全部事件'
                }}>
                    <p>
                        Shine Design 支持如下合成事件：
                    </p>
                    <p className='title'>剪贴板事件</p>
                    <p>事件名称</p>
                    <p><code>onCopy</code>、<code>onCut</code>、<code>onPaste</code></p>
                    <p>事件属性</p>
                    <ul>
                        <li><p><code>DOMDataTransfer</code> clipboardData</p></li>
                    </ul>
                    <p className='title'>输入事件</p>
                    <p>事件名称</p>
                    <p><code>onCompositionEnd</code>、<code>onCompositionStart</code>、<code>onCompositionUpdate</code>
                    </p>
                    <p>事件属性</p>
                    <ul>
                        <li><p><code>String</code> data</p></li>
                    </ul>
                    <p className='title'>键盘事件</p>
                    <p>事件名称</p>
                    <p><code>onKeyDown</code>、<code>onKeyPress</code>、<code>onKeyUp</code></p>
                    <p>事件属性</p>
                    <ul>
                        <li><p><code>Boolean</code> altKey</p></li>
                        <li><p><code>Number</code> charCode</p></li>
                        <li><p><code>Boolean</code> ctrlKey</p></li>
                        <li><p><code>Boolean</code> getModifierState(key)</p></li>
                        <li><p><code>String</code> key</p></li>
                        <li><p><code>Number</code> keyCode</p></li>
                        <li><p><code>String</code> locale</p></li>
                        <li><p><code>Number</code> location</p></li>
                        <li><p><code>Boolean</code> metaKey</p></li>
                        <li><p><code>Boolean</code> repeat</p></li>
                        <li><p><code>Boolean</code> shiftKey</p></li>
                        <li><p><code>Number</code> which</p></li>
                    </ul>
                    <p className='title'>焦点事件</p>
                    <p>事件名称</p>
                    <p><code>onFocus</code>、<code>onBlur</code></p>
                    <p>事件属性</p>
                    <ul>
                        <li><p><code>DOMEventTarget</code> relatedTarget</p></li>
                    </ul>
                    <p className='title'>表单事件</p>
                    <p>事件名称</p>
                    <p><code>onChange</code>、<code>onInput</code>、<code>onSubmit</code></p>
                    <p>事件属性</p>
                    <p>请查阅 <NavLink to='/tutorial/form'>表单组件</NavLink> 相关内容。</p>
                    <p className='title'>鼠标事件</p>
                    <p>事件名称</p>
                    <p>
                        <code>onClick</code>、<code>onContextMenu</code>、<code>onDoubleClick</code>、<code>onDrag</code>、<code>onDragEnd</code>、<code>onDragEnter</code>、<code>onDragExit</code>、<code>onDragLeave</code>、<code>onDragOver</code>、<code>onDragStart</code>、
                        <code>onDrop</code>、<code>onMouseDown</code>、<code>onMouseEnter</code>、<code>onMouseLeave</code>、<code>onMouseMove</code>、<code>onMouseOut</code>、<code>onMouseOver</code>、<code>onMouseUp</code>
                    </p>
                    <p>事件属性</p>
                    <ul>
                        <li><p><code>Boolean</code> altKey</p></li>
                        <li><p><code>Number</code> button</p></li>
                        <li><p><code>Number</code> buttons</p></li>
                        <li><p><code>Number</code> clientX</p></li>
                        <li><p><code>Number</code> clientY</p></li>
                        <li><p><code>Boolean</code> ctrlKey</p></li>
                        <li><p><code>Boolean</code> getModifierState(key)</p></li>
                        <li><p><code>Boolean</code> metaKey</p></li>
                        <li><p><code>Number</code> pageX</p></li>
                        <li><p><code>Number</code> pageY</p></li>
                        <li><p><code>DOMEventTarget</code> relatedTarget</p></li>
                        <li><p><code>Number</code> screenX</p></li>
                        <li><p><code>Number</code> screenY</p></li>
                        <li><p><code>Boolean</code> shiftKey</p></li>
                    </ul>
                    <Note {...{
                        type: 'info',
                        message: (<Fragment>
                            <p>
                                <code>onMouseEnter</code> 和 <code>onMouseLeave</code> 事件由失去焦点的元素到正在输入的元素传播，并不是普通的冒泡，也没有捕获阶段。
                            </p>
                        </Fragment>)
                    }}/>
                    <p className='title'>选择事件</p>
                    <p>事件名称</p>
                    <p><code>onSelect</code></p>
                    <p className='title'>触碰事件</p>
                    <p>事件名称</p>
                    <p>
                        <code>onTouchCancel</code>、<code>onTouchEnd</code>、<code>onTouchMove</code>、<code>onTouchStart</code>
                    </p>
                    <p>事件属性</p>
                    <ul>
                        <li><p><code>Boolean</code> altKey</p></li>
                        <li><p><code>DOMTouchList</code> changedTouches</p></li>
                        <li><p><code>Boolean</code> ctrlKey</p></li>
                        <li><p><code>Boolean</code> getModifierState(key)</p></li>
                        <li><p><code>Boolean</code> metaKey</p></li>
                        <li><p><code>Boolean</code> shiftKey</p></li>
                        <li><p><code>DOMTouchList</code> targetTouches</p></li>
                        <li><p><code>DOMTouchList</code> touches</p></li>
                    </ul>
                    <p className='title'>滚动事件</p>
                    <p>事件名称</p>
                    <p><code>onScroll</code></p>
                    <p>事件属性</p>
                    <ul>
                        <li><p><code>Number</code> detail</p></li>
                        <li><p><code>DOMAbstractView</code> view</p></li>
                    </ul>
                    <p className='title'>滚轮事件</p>
                    <p>事件名称</p>
                    <p><code>onWheel</code></p>
                    <p>事件属性</p>
                    <ul>
                        <li><p><code>Number</code> deltaMode</p></li>
                        <li><p><code>Number</code> deltaX</p></li>
                        <li><p><code>Number</code> deltaY</p></li>
                        <li><p><code>Number</code> deltaZ</p></li>
                    </ul>
                    <p className='title'>多媒体事件</p>
                    <p>事件名称</p>
                    <p>
                        <code>onAbort</code>、<code>onCanPlay</code>、<code>onCanPlayThrough</code>、<code>onDurationChange</code>、<code>onEmptied</code>、<code>onEncrypted</code>、<code>onEnded</code>、<code>onError</code>、<code>onLoadedData</code>、<code>onLoadedMetadata</code>、
                        <code>onLoadStart</code>、<code>onPause</code>、<code>onPlay</code>、<code>onPlaying</code>、<code>onProgress</code>、<code>onRateChange</code>、<code>onSeeked</code>、<code>onSeeking</code>、<code>onStalled</code>、<code>onSuspend</code>、
                        <code>onTimeUpdate</code>、<code>onVolumeChange</code>、<code>onWaiting</code></p>0
                    <p className='title'>图片事件</p>
                    <p>事件名称</p>
                    <p><code>onLoad</code>、<code>onError</code></p>
                    <p className='title'>动画事件</p>
                    <p>事件名称</p>
                    <p><code>onAnimationStart</code>、<code>onAnimationEnd</code>、<code>onAnimationIteration</code></p>
                    <p>事件属性</p>
                    <ul>
                        <li><p><code>String</code> animationName</p></li>
                        <li><p><code>String</code> pseudoElement</p></li>
                        <li><p><code>Float</code> elapsedTime</p></li>
                    </ul>
                    <p className='title'>过渡事件</p>
                    <p>事件名称</p>
                    <p><code>onTransitionEnd</code></p>
                    <p>事件属性</p>
                    <ul>
                        <li><p><code>String</code> propertyName</p></li>
                        <li><p><code>String</code> pseudoElement</p></li>
                        <li><p><code>Float</code> elapsedTime</p></li>
                    </ul>
                    <p className='title'>其他事件</p>
                    <p>事件名称</p>
                    <p><code>onToggle</code></p>
                </Info>
            </Fragment>
        );
    }
}