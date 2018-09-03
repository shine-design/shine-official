import React, {Component, Fragment} from 'react';
import Clipboard from 'clipboard';

import Prism from 'prismjs';
import './style.less';

export default class extends Component {
    componentDidMount() {
        Prism.highlightAll();
        this._initClipboard();
    }

    _initClipboard() {
        const getCopyMessage = function (action) {
            let actionMsg = '';
            let actionKey = (action === 'cut' ? 'X' : 'C');

            if (/iPhone|iPad/i.test(navigator.userAgent)) {
                actionMsg = 'no support :(';
            } else if (/Mac/i.test(navigator.userAgent)) {
                actionMsg = 'press ⌘-' + actionKey + ' to ' + action;
            } else {
                actionMsg = 'press Ctrl-' + actionKey + ' to ' + action;
            }

            return actionMsg;
        };

        let clipboard = new Clipboard('.js-copy-to-clipboard', {
            target: function (trigger) {
                return $(trigger).parent().find('.js-code')[0];
            }
        });

        clipboard.on('success', function (e) {
            e.clearSelection();
            $(e.trigger).text('复制成功');
            setTimeout(function () {
                $(e.trigger).text('复制');
            }, 700);

        });

        clipboard.on('error', function (e) {
            $(e.trigger).text(getCopyMessage(e.action)).addClass('copy-code-error');
            setTimeout(function () {
                $(e.trigger).text('copy').removeClass('copy-code-error');
            }, 1400);
        });
    }

    render() {
        const {code = '', language = 'javascript'} = this.props;
        return (
            <div className="code-highlight">
                <span className="js-copy-to-clipboard copy-code">复制</span>
                <pre><code className={'js-code language-' + language}>{code}</code></pre>
            </div>
        );
    }
}