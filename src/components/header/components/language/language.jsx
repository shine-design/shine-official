import React, {Component, Fragment} from 'react';

import './style.less';

export default class Language extends Component {
    componentDidMount() {
        this._initLanguage();
    }

    _initLanguage() {
        const language = $('.js-languages');
        const list = language.find('.js-languages-list');
        language.mouseenter(() => {
            list.stop().fadeIn();
        }).mouseleave(() => {
            list.stop().fadeOut();
        });
    }

    render() {
        return (
            <Fragment>
                <div className="languages languages-light js-languages">
							<span className="language-active js-language-active">简体中文
								<i className="fa fa-angle-down"/>
							</span>
                    <ul className="languages-list js-languages-list">
                        <li>
                            <a href="/">简体中文</a>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}
