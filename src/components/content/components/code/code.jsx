import React, {Component, Fragment} from 'react';
import Code from '../../../common/Code/Code';
import './style.less';

export default class Brand extends Component {
    render() {
        const code =
            `import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//导入按钮组件
import {Button} from 'omega';

class App extends Component {
    render(){
        return (
            <Button value="Hello World"/>
        )
    }
}

//初始化React
ReactDOM.render(<APP />,document.querySelector('#app'));`;

        return (
            <Fragment>
                <div className='container'>
                    <div className="promo-title-wrapper ">
                        <h3 className="promo-title"> 使用示例 </h3>
                        <p className="promo-description"> 我们在开发组件之初，抛弃了繁杂的组件必需配置项，采用了极简的配置策略，开发者无需设置任何参数即可使用默认组件。 </p>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 col-sm-12">
                            <Code {...{
                                code,
                                language: 'javascript',
                                label: ''
                            }}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

