import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom'

import './style.less';

export default class Menu extends Component {

    componentDidMount() {
        this._initMenu();
    }

    _initMenu() {
        let menus = $('.js-menu');
        menus.each(function () {
            let menu = $(this);
            let config = {
                label: '',
                prependTo: menu.parent(),
                closedSymbol: '&#xf054',
                openedSymbol: '&#xf078',
                allowParentLinks: true
            };
            let userConfig = menu.data('config');
            $.extend(true, config, userConfig);
            menu.slicknav(config);
            menu.superfish({
                delay: 300,
                autoArrows: false,
                speed: 'fast',
                disableHI: true
            });
            if (menu.hasClass('menu-light')) {
                $('.slicknav_menu').addClass('menu-light');
            }
            $('body').click(function () {
                if ($('.slicknav_btn').hasClass('slicknav_open')) {
                    menu.slicknav('close');
                }
            });
            $('.slicknav_btn, .slicknav_nav').on('click', function (event) {
                event.stopPropagation();
            });
        });
    }

    render() {
        return (
            <Fragment>
                <ul className="menu menu-dark sf-menu js-menu">
                    <li>
                        <a href="/guide">快速入门</a>
                        <ul>
                            <li>
                                <NavLink to='/cli'>初始化</NavLink>
                            </li>
                            <li>
                                <NavLink to='/cli'>构建工具</NavLink>
                            </li>
                            <li>
                                <NavLink to='/api'>API文档</NavLink>
                            </li>
                            <li>
                                <NavLink to='/style'>代码风格</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to='/tutorial'>组件文档</NavLink>
                    </li>
                    <li>
                        <NavLink to='/changelog'>更新日志</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>联系作者</NavLink>
                    </li>
                </ul>
            </Fragment>
        )
    }
}
