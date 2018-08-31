import React, {Component, Fragment} from 'react';

import Language from './components/language/language';
import LOGO from './components/logo/logo';
import Menu from './components/menu/menu';
import './style.less';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="header header-over large">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-5">
                                <LOGO/>
                                <Language/>
                            </div>
                            <div className="col-md-9 col-sm-6 col-xs-7">
                                <nav className="right helper">
                                    <Menu/>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
