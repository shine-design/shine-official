import React, {Component, Fragment} from 'react';

import Screen from '../screen/screen';
import Content from '../content/content';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Screen/>
                <Content/>
            </Fragment>
        )
    }
}
