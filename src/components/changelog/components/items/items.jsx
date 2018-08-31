import React, {Component, Fragment} from 'react';


export default class Items extends Component {
    render() {
        const {items = []} = this.props;
        return (
            <Fragment>
                <div className="changelog-items">
                    {
                        items.map((item,index) => <Item key={index} {...item}/>)
                    }
                </div>
            </Fragment>
        )
    }
}


class Item extends Component {
    render() {
        const {id, header = {}, description = [], files = []} = this.props;
        const {version, updateData} = header;
        return (
            <Fragment>
                <div id={id} className="changelog-item js-changelog-item">
                    <header className="changelog-header">
                        <h3 className="changelog-version">
                            <a href={'#' + id}>{version}</a>
                        </h3>
                        <p className="changelog-date">{updateData}</p>
                        <span className="changelog-switch js-changelog-switch"/>
                    </header>
                    <div className="changelog-update-descriptions">
                        {
                            description.map((item, index) => <Description key={index} {...item}/>)
                        }
                    </div>
                    <div className="changelog-files-changed">
                        <div className="changelog-files-changed-toolbar">
                            <ul className="changelog-files-changed-filters">
                                <li>
									<span className="changelog-files-changed-filter js-changelog-file-filter"
                                          data-type="new">
                                        <i className="fa fa-plus changelog-state-new"/>新文件
                                    </span>
                                </li>
                                <li>
									<span className="changelog-files-changed-filter js-changelog-file-filter"
                                          data-type="updated">
										<i className="fa fa-refresh changelog-state-updated"/>更新文件
                                    </span>
                                </li>
                                <li>
									<span className="changelog-files-changed-filter js-changelog-file-filter"
                                          data-type="removed">
                                        <i className="fa fa-times changelog-state-removed"/>已移除文件
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="js-changelog-files-scope">
                            {
                                files.map((item, index) => <File key={index} {...item}/>)
                            }
                        </div>
                    </div>
                    <div className="changelog-link"/>
                </div>
            </Fragment>
        );
    }
}

class Description extends Component {
    render() {
        const {type, value} = this.props;
        const typeName = type === 0 ? 'feature' : (type === 1 ? 'improvement' : 'bug-fix');
        let _render = (
            <Fragment>
                <p className={'changelog-update-description js-changelog-update-description changelog-' + typeName}
                   data-instafilta-category={typeName}>
                    <span className="changelog-type">{typeName}</span>
                    {value}
                </p>
            </Fragment>
        );
        return (
            <Fragment>
                {_render}
            </Fragment>
        );
    }
}

class File extends Component {
    render() {
        const {type, fileName} = this.props;
        const typeName = type === 0 ? 'new' : (type === 1 ? 'updated' : 'removed');
        return (
            <Fragment>
                <div className={'changelog-file-changed js-changelog-file changelog-file-' + typeName}
                     data-instafilta-category={typeName}> {fileName}
                </div>
            </Fragment>
        );
    }
}