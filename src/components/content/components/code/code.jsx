import React, {Component, Fragment} from 'react';
import Code from '../../../common/Code/Code';
import './style.less';

export default class Brand extends Component {
    render() {
        const code =
`import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//导入按钮组件
import {Button} from 'shined';

class App extends Component {
    render(){
        return (
            <Button value="Button"/>
        )
    }
}

//初始化React
ReactDOM.render(<APP />,document.querySelector('#app'));`;

        return (
            <Fragment>
                <div className='container'>
                    <div className="promo-title-wrapper ">
                        <h3 className="promo-title"> 比你想象的更简单 </h3>
                        <p className="promo-description"> Shine 抛弃了繁杂的环境配置过程，采用了开箱即用的策略，一键安装，随处使用。 </p>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 col-sm-12">
                            <Code {...{
                                code,
                                language: 'jsx'
                            }}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

