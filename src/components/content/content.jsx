import React, {Component, Fragment} from 'react';
import Feature from './components/feature/feature';
import Code from './components/code/code';
import Tool from './components/tool/tool';
import Join from './components/join/join';
import './style.less';

export default class Header extends Component {

    render() {
        return (
            <Fragment>
                <div id="content">
                    <Feature/>
                    <Code/>
                    <Tool/>
                    <Join/>
                </div>
            </Fragment>
        )
    }
}
