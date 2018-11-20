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
                    title: "表单校验",
                    description: '对用户输入数据进行校验',
                    guide: true
                }}>
                </Info>
                <Info {...{
                    description: '简介'
                }}>
                    <p>
                        Shine Design 为表单组件提供了强大的验证功能，让客户端表单验证变得更简单，同时提供了大量的定制选项，满足表单组件各种需求。
                    </p>
                </Info>
                <Info {...{
                    description: '默认规则'
                }}>
                    <p>
                        Shine Design 表单校验功能内置了丰富的校验规则，见下表。
                    </p>
                    <div className="table-responsive">
                        <table className="table helper center">
                            <thead>
                            <tr className='active helper center'>
                                <th className='helper center'>规则名</th>
                                <th className='helper center'>值类型</th>
                                <th className='helper center'>规则描述</th>
                                <th className='helper center'>错误提示</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>required</td>
                                <td>Boolean</td>
                                <td>必须输入的字段</td>
                                <td>这是必填字段</td>
                            </tr>
                            <tr>
                                <td>remote</td>
                                <td>String</td>
                                <td>使用 Ajax 方法调用接口验证输入值</td>
                                <td>请修正此字段</td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td>Boolean</td>
                                <td>必须输入正确格式的电子邮件</td>
                                <td>请输入有效的电子邮件地址</td>
                            </tr>
                            <tr>
                                <td>url</td>
                                <td>Boolean</td>
                                <td>必须输入正确格式的网址</td>
                                <td>请输入有效的网址</td>
                            </tr>
                            <tr>
                                <td>date</td>
                                <td>Boolean</td>
                                <td>必须输入正确格式的日期，不支持IE6及以下版本</td>
                                <td>请输入有效的日期</td>
                            </tr>
                            <tr>
                                <td>dateISO</td>
                                <td>Boolean</td>
                                <td>必须输入正确格式的日期（ISO）。只验证格式，不验证有效性</td>
                                <td>请输入有效的日期 (YYYY-MM-DD)</td>
                            </tr>
                            <tr>
                                <td>number</td>
                                <td>Boolean</td>
                                <td>必须输入合法的数字（负数，小数）</td>
                                <td>请输入有效的数字</td>
                            </tr>
                            <tr>
                                <td>digits</td>
                                <td>Boolean</td>
                                <td>必须输入整数</td>
                                <td>只能输入数字</td>
                            </tr>
                            <tr>
                                <td>creditcard</td>
                                <td>Boolean</td>
                                <td>必须输入合法的信用卡号</td>
                                <td>请输入有效的信用卡号码</td>
                            </tr>
                            <tr>
                                <td>equalTo</td>
                                <td>String</td>
                                <td>输入值必须和指定DOM组件相同</td>
                                <td>你的输入不相同</td>
                            </tr>
                            <tr>
                                <td>accept</td>
                                <td>String</td>
                                <td>输入拥有合法后缀名的字符串（上传文件的后缀）</td>
                                <td>请输入有效的后缀</td>
                            </tr>
                            <tr>
                                <td>maxlength</td>
                                <td>Number</td>
                                <td>字符串的最大长度（汉字算一个字符）</td>
                                <td>最多可以输入 n 个字符</td>
                            </tr>
                            <tr>
                                <td>minlength</td>
                                <td>Number</td>
                                <td>字符串的最小长度（汉字算一个字符）</td>
                                <td>最少要输入 n 个字符</td>
                            </tr>
                            <tr>
                                <td>rangelength</td>
                                <td>Array</td>
                                <td>字符串的长度范围（汉字算一个字符）</td>
                                <td>请输入长度在 m 到 n 之间的字符串</td>
                            </tr>
                            <tr>
                                <td>range</td>
                                <td>Array</td>
                                <td>输入值的范围</td>
                                <td>请输入范围在 m 到 n 之间的数值</td>
                            </tr>
                            <tr>
                                <td>max</td>
                                <td>Number</td>
                                <td>可输入的最大值（汉字算一个字符）</td>
                                <td>请输入不大于 n 的数值</td>
                            </tr>
                            <tr>
                                <td>min</td>
                                <td>Number</td>
                                <td>可输入的最小值（汉字算一个字符）</td>
                                <td>请输入不小于 n 的数值</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Info>
                <Info {...{
                    description: '自定义规则'
                }}>
                    <p>
                        除了内置的规则，Shine Design 还支持自定义校验规则，使用自定义规则可以让表单功能更强大。与默认规则设置方式相似，仅需在配置规则时（表单组件的<code>rules</code>属性中，或输入组件的<code>validate</code>属性中），指定规则名称和校验函数即可。
                    </p>
                    <p>自定义规则校验函数会传入三个参数：value、element 和 params 。分别表示当前输入组件的值，当前输入组件实例和初始化规则时指定的参数。</p>
                    <p>如下所示的 <code>customA</code>  与 <code>customB</code> 均为自定义规则。</p>
                    <Code {...{
                        code:
`
{
    required : true,
    customA : (value,element,params) => {
        // TODO Validate
    },
    customB : {
        value : (value,element,params) => {
            // TODO Validate
        },
        message : 'This is Error Message',
        params : 'This is params'
    }
}
`
                    }}/>

                </Info>
                <Info {...{
                    description: '配置参数'
                }}>
                    <p className="title">isValidate</p>
                    <p>类型：Boolean</p>
                    <p>默认值：True</p>
                    <p>设置当前表单是否开启表单校验。</p>

                    <p className="title">isDebug</p>
                    <p>类型：Boolean</p>
                    <p>默认值：False</p>
                    <p>设置当前表单校验规则是否以调试模式启动（调试模式不提交表单）。</p>

                    <p className="title">rules</p>
                    <p>类型：Object</p>
                    <p>默认值：空</p>
                    <p>设置当前表单中输入组件的校验规则 ,其中键名为输入组件的 <code>name</code> 属性值，键值为检验规则对象。示例如下：</p>
                    <Code {...{
                        language: 'json',
                        code:
                            `{
    username : {
        required : true
    },
    password : {
        required : true,
        maxlength : 10
    }
}`
                    }}/>
                    <Note {...{
                        type: 'danger',
                        message: <p>Shine Design 推荐开发者在输入组件内部使用 <code>validate</code> 属性单独指定校验规则，在此处设置的规则将会覆盖单独指定的规则。
                        </p>
                    }}/>

                    <p className="title">messages</p>
                    <p>类型：Object</p>
                    <p>默认值：空</p>
                    <p>设置当前表单中输入组件的错误提示 ,其中键名为输入组件的 <code>name</code> 属性值，键值为检验规则错误消息。示例如下：</p>
                    <Code {...{
                        language: 'json',
                        code:
                            `{
    username : {
        required : '当前字段为必填项'
    },
    password : {
        required : '当前字段为必填项',
        maxlength : '当前字段最大长度为10'
    }
}`
                    }}/>
                    <Note {...{
                        type: 'danger',
                        message: <p>Shine Design
                            推荐开发者在输入组件内部使用 <code>validate</code> 属性单独指定错误提示，在此处设置的规则将会覆盖单独指定的错误提示，也会覆盖校验默认错误提示。</p>
                    }}/>

                    <p className="title">ignore</p>
                    <p>类型：String</p>
                    <p>默认值：空</p>
                    <p>设置当前表单校验规则对某些元素不生效。</p>

                    <p className="title">onError</p>
                    <p>类型：Function</p>
                    <p>默认值：空</p>
                    <p>指定当输入组件校验未通过时，错误提示的显示位置，该方法会传入两个参数：<code>error</code> 和 <code>element</code>，分别表示错误代码实例和当前输入组件实例。
                    </p>

                    <p className="title">onSuccess</p>
                    <p>类型：Function / String</p>
                    <p>默认值：空</p>
                    <p>指定当输入组件校验通过后的操作，如果值为字符串，会当作一个CSS的修饰类，也可传入方法作为回调。</p>

                    <p className="title">onShowErrors</p>
                    <p>类型：Function</p>
                    <p>默认值：空</p>
                    <p>当进行表单校验后，会返回所有未通过的表单信息和错误信息，该方法会传入两个参数：<code>errorMap</code> 和 <code>errorList</code>，前者为输入组件 <code>name</code> 属性值与错误信息组成的对象集合，后者为更详细的错误列表。
                    </p>

                    <p className="title">onInvalidHandler</p>
                    <p>类型：Function</p>
                    <p>默认值：空</p>
                    <p>当未通过表单校验时，会执行该回调函数，该方法会传入两个参数：<code>event</code> 和 <code>validate</code>，前者为表单提交事件实例，后者为表单验证对象实例。
                    </p>

                    <p className="title">onSubmit</p>
                    <p>类型：Function</p>
                    <p>默认值：空</p>
                    <p>当通过表单校验时，会执行该回调函数，该方法会传入一个参数：<code>form</code> ，为当前表单组件的实例。
                    </p>

                    <p className="title">attributes</p>
                    <p>类型：Object</p>
                    <p>默认值：空</p>
                    <p>其他自定义配置项。
                    </p>

                </Info>
            </Fragment>
        );
    }
}