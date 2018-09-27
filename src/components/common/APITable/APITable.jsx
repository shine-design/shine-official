import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom";

export default class extends Component {
    static defaultProps = {
        className: true,
        attribute: false,
        callback: false
    };

    render() {
        const {data, attribute, className, callback, custom} = this.props;
        return (
            <Fragment>
                <div className="table-responsive">
                    <table className="table helper center">
                        <thead>
                        <tr className='active'>
                            <th width="5%" className='helper center'>参数</th>
                            <th width="40%">说明</th>
                            <th width="15%" className='helper center'>类型</th>
                            <th width="30%">可选项</th>
                            <th width="10%">默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((items, index) => {
                                return (
                                    <tr key={index}>
                                        {
                                            items.map((item, index) => {
                                                return (
                                                    <td key={index}
                                                        className={index === 1 ? 'helper left' : null}>
                                                        {item}
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                        {
                            className && (
                                <tr>
                                    <td>className</td>
                                    <td className='helper left'>自定义类修饰符，指定修饰符会被追加于容器上</td>
                                    <td>String / Array</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            )
                        }
                        {
                            attribute && (
                                <tr>
                                    <td>attribute</td>
                                    <td className='helper left'>自定义属性，指定属性会被设置于容器上</td>
                                    <td>Object</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            )
                        }
                        {
                            callback && (
                                <tr>
                                    <td>callbacks</td>
                                    <td className='helper left'>该组件支持合成事件系统
                                    </td>
                                    <td>Object</td>
                                    <td>请参考<NavLink
                                        to='/tutorial/event'>相关资料</NavLink></td>
                                    <td>-</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}