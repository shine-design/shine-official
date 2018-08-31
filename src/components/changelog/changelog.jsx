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
                    description: 'Omega Design 更新参照 Semantic Versioning 2.0.0 标准进行。'
                }}/>
                <div id='content'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="changelog-wrapper js-changelog">
                                    <Filter/>
                                    <Items {...{
                                        items: [{
                                            id: 'v001',
                                            header: {
                                                version: 'V0.0.1',
                                                updateData: '2018 - 01 -01'
                                            },
                                            description: [{
                                                value: 'Implemented the \'preprod\' mode, it\'s something between the development and production mode. Very useful for those who want to slightly customize the JavaScript behavior without touching the vendor scripts. For more information see the documentation',
                                                type: 0
                                            }, {
                                                value: '404 error page implemented.',
                                                type: 0
                                            }, {
                                                value: 'Text file tree implemented.',
                                                type: 0
                                            }, {
                                                value: "Implemented a working file status filter on the changelog page.",
                                                type: 1
                                            }, {
                                                value: 'Small CSS improvements.',
                                                type: 1
                                            }, {
                                                value: 'Fixed the copy fragment identifier on mobile devices inside the \'.container-spaced\'.',
                                                type: 2
                                            }, {
                                                value: 'Fixed the mobile dropdown menu in Internet Explorer',
                                                type: 2
                                            }],
                                            files: [
                                                {
                                                    type: 0,
                                                    fileName: 'template/img/backgrounds/13.jpg'
                                                }, {
                                                    type: 0,
                                                    fileName: 'template/img/helpers/play-dark.png\n'
                                                }, {
                                                    type: 1,
                                                    fileName: 'template/css/style.css'
                                                }, {
                                                    type: 1,
                                                    fileName: 'template/js/dev/modules.js'
                                                }, {
                                                    type: 2,
                                                    fileName: 'template/less/modules/_faq.less'
                                                }, {
                                                    type: 2,
                                                    fileName: 'template/less/modules/_footer.less'
                                                }
                                            ]
                                        },{
                                            id: 'v002',
                                            header: {
                                                version: 'V0.0.1',
                                                updateData: '2018 - 01 -01'
                                            },
                                            description: [{
                                                value: 'Implemented the \'preprod\' mode, it\'s something between the development and production mode. Very useful for those who want to slightly customize the JavaScript behavior without touching the vendor scripts. For more information see the documentation',
                                                type: 0
                                            }, {
                                                value: '404 error page implemented.',
                                                type: 0
                                            }, {
                                                value: 'Text file tree implemented.',
                                                type: 0
                                            }, {
                                                value: "Implemented a working file status filter on the changelog page.",
                                                type: 1
                                            }, {
                                                value: 'Small CSS improvements.',
                                                type: 1
                                            }, {
                                                value: 'Fixed the copy fragment identifier on mobile devices inside the \'.container-spaced\'.',
                                                type: 2
                                            }, {
                                                value: 'Fixed the mobile dropdown menu in Internet Explorer',
                                                type: 2
                                            }],
                                            files: [
                                                {
                                                    type: 0,
                                                    fileName: 'template/img/backgrounds/13.jpg'
                                                }, {
                                                    type: 0,
                                                    fileName: 'template/img/helpers/play-dark.png\n'
                                                }, {
                                                    type: 1,
                                                    fileName: 'template/css/style.css'
                                                }, {
                                                    type: 1,
                                                    fileName: 'template/js/dev/modules.js'
                                                }, {
                                                    type: 2,
                                                    fileName: 'template/less/modules/_faq.less'
                                                }, {
                                                    type: 2,
                                                    fileName: 'template/less/modules/_footer.less'
                                                }
                                            ]
                                        }]
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
