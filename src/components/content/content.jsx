import React, {Component, Fragment} from 'react';
import Feature from './components/feature/feature';
// import Brand from './components/brand/brand';
// import Demo from './components/demo/demo';
import Code from './components/code/code';
import Join from './components/join/join';
import './style.less';

export default class Header extends Component {

    render() {
        return (
            <Fragment>
                <div id="content">
                    <Feature/>
                    <Code/>
                    <Join/>
                </div>
            </Fragment>
        )
    }
}
