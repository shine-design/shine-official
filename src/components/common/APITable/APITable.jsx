import React, {Component, Fragment} from 'react';

export default class extends Component {

    render() {
        const {data, custom} = this.props;
        return (
            <Fragment>
                <div className="table-responsive">
                    <table className="table helper center">
                        <thead>
                        <tr className='active'>
                            <th width="5%" className='helper center'>参数</th>
                            <th width="40%">说明</th>
                            <th width="15%" className='helper center'>类型</th>
                            <th width="30%">可选值</th>
                            <th width="10%">默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((items, index) => {
                                return (
                                    <tr key={index}>
                                        {
                                            items.map((item, index) => {
                                                return (
                                                    <td key={index}
                                                        className={index === 3 || index === 1 ? 'helper left' : null}>
                                                        {item}
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td>className</td>
                            <td className='helper left'>自定义类修饰符</td>
                            <td>String / Array</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}