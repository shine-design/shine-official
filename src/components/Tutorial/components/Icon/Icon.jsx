import React, {Component, Fragment} from 'react';
import Info from "../../../common/Info/Info";
import Example from "../../../common/Example/Example";
import Note from '../../../common/Note/Note';
import {Row, Col, Icon} from "shinec";
import totalIcon from '../../../../code/icon/total';
import './style.less';

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Info {...{
                    title: "图标",
                    description: 'Icon',
                    guide: true
                }}/>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        Shine 引入了一套基于 <code>Font Awesome</code> 的图标字体库，您可以使用我们所提供的所有特性对它们进行更改，包括：大小、颜色、阴影或者其它任何支持的效果。
                    </p>
                </Info>
                <Info {...{
                    description: '代码示例'
                }}>
                    <p className='title'>使用方式</p>
                    <p>直接通过设置类名为 <code>sh-icon-iconName</code> 来使用即可，或使用我们提供的 <code>Icon</code> 组件。
                    </p>
                    <Example {...{
                        className: ['demo-icon'],
                        display: (
                            <Fragment>
                                <i className='sh-icon-github base'/>
                                <Icon className='sh-icon-check-square-o base'/>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/icon/basic').default,
                            language: 'jsx'
                        }
                    }} />
                    <p className='title'>图标尺寸</p>
                    <p>可以通过增加倍数修饰符显示大图标，例如'2x'、'3x'等，也可以自定义 <code>font-size</code> 设置图标尺寸。
                    </p>
                    <Example {...{
                        className: ['demo-icon'],
                        display: (
                            <Fragment>
                                <i className='sh-icon-camera-retro helper mb10'> Icon-normal</i><br/>
                                <i className='sh-icon-camera-retro sh-icon-2x helper mb10'> Icon-2x</i><br/>
                                <i className='sh-icon-camera-retro sh-icon-3x helper mb10'> Icon-3x</i><br/>
                                <i className='sh-icon-camera-retro sh-icon-4x helper mb10'> Icon-4x</i><br/>
                                <i className='sh-icon-camera-retro sh-icon-5x helper mb10'> Icon-5x</i>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/icon/size').default,
                            language: 'jsx'
                        }
                    }} />
                    <p className='title'>等宽图标</p>
                    <p>使用 <code>shine-fw</code> 可以将图标设置为一个固定宽度。主要用于不同宽度图标无法对齐的情况。 尤其在列表或导航时起到重要作用。
                    </p>
                    <Example {...{
                        className: ['demo-icon'],
                        display: (
                            <Fragment>
                                <div className="list-group">
                                    <a className="list-group-item">
                                        <i className="sh-icon-home sh-icon-fw"/>&nbsp; 菜单项-1
                                    </a>
                                    <a className="list-group-item">
                                        <i className="sh-icon-book sh-icon-fw"/>&nbsp; 菜单项-2
                                    </a>
                                    <a className="list-group-item">
                                        <i className="sh-icon-pencil sh-icon-fw"/>&nbsp; 菜单项-3
                                    </a>
                                    <a className="list-group-item">
                                        <i className="sh-icon-cog sh-icon-fw"/>&nbsp; 菜单项-4
                                    </a>
                                </div>

                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/icon/fw').default,
                            language: 'jsx'
                        }
                    }} />
                    <p className='title'>用于列表</p>
                    <p>使用 <code>sh-icon-ul</code> 和 <code>sh-icon-li</code> 便可以简单的将无序列表的默认符号替换掉。
                    </p>
                    <Example {...{
                        className: ['demo-icon'],
                        display: (
                            <Fragment>
                                <ul className="sh-icon-ul">
                                    <li><i className="sh-icon-li sh-icon-check-square"/>列表项-1</li>
                                    <li><i className="sh-icon-li sh-icon-check-square"/>列表项-2</li>
                                    <li><i className="sh-icon-li sh-icon-check-square-o"/>列表项-3</li>
                                    <li><i className="sh-icon-li sh-icon-check"/>列表项-4</li>
                                </ul>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/icon/list').default,
                            language: 'jsx'
                        }
                    }} />
                    <p className='title'>动画</p>
                    <p>使用 <code>sh-icon-spin</code> 可以使图标不间断旋转，使用 <code>sh-icon-pulse</code> 可以使图片基于8个方位旋转。
                    </p>
                    <Example {...{
                        className: ['demo-icon'],
                        display: (
                            <Fragment>
                                <i className="sh-icon-spinner sh-icon-spin base"/>
                                <i className="sh-icon-circle-o-notch sh-icon-spin base"/>
                                <i className="sh-icon-refresh sh-icon-spin base"/>
                                <i className="sh-icon-cog sh-icon-spin base"/>
                                <i className="sh-icon-spinner sh-icon-pulse base"/>
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/icon/spin').default,
                            language: 'jsx'
                        }
                    }} />
                    <p className='title'>旋转和翻转</p>
                    <p>使用 <code>sh-icon-rotate-*</code> 和 <code>sh-icon-flip-*</code> 类可以对图标进行任意旋转和翻转。</p>
                    <Example {...{
                        className: ['demo-icon'],
                        display: (
                            <Fragment>
                                <i className="sh-icon-shield base"/> 0°<br/>
                                <i className="sh-icon-shield sh-icon-rotate-90 base"/> 90°<br/>
                                <i className="sh-icon-shield sh-icon-rotate-180 base"/> 180°<br/>
                                <i className="sh-icon-shield sh-icon-rotate-270 base"/> 270°<br/>
                                <i className="sh-icon-shield sh-icon-flip-horizontal base"/> 水平翻转 <br/>
                                <i className="sh-icon-shield sh-icon-flip-vertical base"/> 垂直翻转
                            </Fragment>
                        ),
                        code: {
                            code: require('../../../../code/icon/rotate').default,
                            language: 'jsx'
                        }
                    }} />
                </Info>
                <Info {...{
                    description: '常用图标'
                }}>
                    <Note {...{
                        title: '更多图标',
                        message: (
                            <Fragment>
                                访问 Font-Awesome 官网获取更多图标：<a
                                href='https://fontawesome.com/icons' target='_blank'
                                rel="noopener noreferrer">https://fontawesome.com/icons</a>
                            </Fragment>
                        )
                    }}/>
                    <p className='title helper mt40'>网页</p>
                    <Row>
                        {
                            totalIcon[1].map((item, index) => {
                                return (
                                    <Col key={index} part={2} className='icon-display'><i
                                        className={[item, 'icon-self'].join(' ')}/><span
                                        className='icon-class'>{item.replace('sh-icon-', '')}</span></Col>
                                )
                            })
                        }
                    </Row>
                    <p className='title helper mt40'>可旋转</p>
                    <Row>
                        {
                            totalIcon[7].map((item, index) => {
                                return (
                                    <Col key={index} part={2} className='icon-display'><i
                                        className={[item, 'icon-self'].join(' ')}/><span
                                        className='icon-class'>{item.replace('sh-icon-', '')}</span></Col>
                                )
                            })
                        }
                    </Row>
                    <p className='title helper mt40'>指示方向</p>
                    <Row>
                        {
                            totalIcon[13].map((item, index) => {
                                return (
                                    <Col key={index} part={2} className='icon-display'><i
                                        className={[item, 'icon-self'].join(' ')}/><span
                                        className='icon-class'>{item.replace('sh-icon-', '')}</span></Col>
                                )
                            })
                        }
                    </Row>
                    <p className='title helper mt40'>标志</p>
                    <Row>
                        {
                            totalIcon[15].map((item, index) => {
                                return (
                                    <Col key={index} part={2} className='icon-display'><i
                                        className={[item, 'icon-self'].join(' ')}/><span
                                        className='icon-class'>{item.replace('sh-icon-', '')}</span></Col>
                                )
                            })
                        }
                    </Row>
                </Info>
            </Fragment>
        );
    }
}