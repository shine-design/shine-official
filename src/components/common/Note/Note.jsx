import React, {Component, Fragment} from 'react';

import './style.less'

export default class extends Component {
    componentDidMount() {
        this._initClose();
    }

    _initClose() {
        const note = $(this.refs.note);
        const close = note.find('.js-close');
        close.click(function (e) {
            e.preventDefault();
            note.fadeOut();
        });
    }

    render() {
        const {type, title, message, closable = false} = this.props;
        const colorMap = {
            'warning': '',
            'success': 'green',
            'note': 'blue',
            'info': 'blue-light',
            'panel': 'purple',
            'danger': 'red'
        };
        return (
            <Fragment>
                <div ref='note' className={'note js-note ' + colorMap[type]}>
                    {
                        closable && (
                            <span className="note-close js-close">
								<i className="fa fa-times"/>
							</span>
                        )
                    }
                    <h4 className="note-title"> {title} </h4>
                    <div className="note-description"> {message} </div>
                </div>
            </Fragment>
        );
    }
}