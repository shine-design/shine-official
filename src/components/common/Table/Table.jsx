import React, {Component, Fragment} from 'react';

export default class extends Component {

    render() {
        const {data, head} = this.props;
        return (
            <Fragment>
                <div className="table-responsive">
                    <table className="table helper center">
                        <thead>
                        <tr className='active'>
                            {
                                head.map((item) => {
                                    return (
                                        <th width={item.width || 'auto'}
                                            className={item.className || ['helper center'.join(' ')]}>{item.value}</th>
                                    )
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map(items => {
                                return (
                                    <tr>
                                        {
                                            items.map((item, index) => {
                                                return (
                                                    <td>
                                                        {item}
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}