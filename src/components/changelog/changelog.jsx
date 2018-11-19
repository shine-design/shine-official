import React, {Component, Fragment} from 'react';

import Background from '../common/Background/Background';
import Filter from './components/filter/filter';
import Items from './components/items/items';
import './style.less';

export default class Changelog extends Component {
    render() {
        return (
            <Fragment>
                <Background {...{
                    title: '更新日志',
                    description: <Fragment>Shine Design 更新参照 <a href='https://semver.org/' target='_blank'>Semantic
                        Versioning 2.0.0 </a> 标准进行。</Fragment>
                }}/>
                <div id='content'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="changelog-wrapper js-changelog">
                                    <Filter/>
                                    <Items {...{
                                        items: [
                                            require('../../version/0.2.6').default,
                                            require('../../version/0.2.5').default,
                                            require('../../version/0.2.4').default,
                                            require('../../version/0.2.3').default,
                                            require('../../version/0.2.2').default,
                                            require('../../version/0.2.1').default,
                                            require('../../version/0.2.0').default,
                                            require('../../version/0.1.2').default,
                                            require('../../version/0.1.1').default,
                                            require('../../version/0.1.0').default
                                        ]
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
