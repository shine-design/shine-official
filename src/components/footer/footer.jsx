import React, {Component, Fragment} from 'react';
import logo from '../../assets/images/logos/logo.png';
import './style.less';

export default class Footer extends Component {
    componentDidMount() {
        var footerFixed = $('.js-footer-is-fixed'); // Select the fixed footer
        var page = $('.js-page'); // Select the page
        var resizeTimer; // Define the timer

        // Calculate the footer height and set it as a padding-bottom to the page
        var updateHeight = function () {
            var footerHeight = footerFixed.outerHeight();
            page.css('padding-bottom', footerHeight + 'px');
        };

        // Check if fixed footer is enabled of disabled
        if (footerFixed.length) {
            footerFixed.addClass('footer-is-fixed');
            updateHeight();

            // Update the height on window resize
            $(window).on('resize', function () {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function () {
                    updateHeight();
                }, 250);
            });
        }


        var scope = $('.js-docs-version');
        var currentBtn = scope.find('.js-docs-current-version');
        var versionList = scope.find('.js-docs-version-list');

        if (scope.length) {
            currentBtn.click(function (e) {
                e.preventDefault();
                e.stopPropagation();

                if (versionList.is(':visible')) {
                    versionList.fadeOut('fast');
                } else {
                    versionList.fadeIn('fast');
                }
            });

            $('body').click(function () {
                if (versionList.is(':visible')) {
                    versionList.fadeOut('fast');
                }
            });
        }


        var scrollButton = $('.js-scroll-top');

        scrollButton.click(function (e) {
            e.preventDefault();
            $("html, body").animate({scrollTop: "0px"});
        });

        function isScroll() {
            if ($(window).scrollTop() === 0) {
                // scrollButton.addClass('hidden');
                scrollButton.fadeOut();
            } else {
                // scrollButton.removeClass('hidden');
                scrollButton.fadeIn();
            }
        }

        isScroll();
        $(window).on('scroll', isScroll);


    }

    render() {
        return (
            <Fragment>
                <footer className="js-footer-is-fixed">
                    <div className="footer-extended">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="footer-extended-container">
                                        <div className="row justify-content-center">
                                            <div className="col-md-2 col-sm-2 col-xs-4">
                                                <div className="footer-extended-menu">
                                                    <h5 className="footer-extended-menu-title">关于</h5>
                                                    <ul className="footer-extended-menu-list">
                                                        <li>
                                                            <a href="#">团队介绍</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">最新消息</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">更新日志</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">联系我们</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-4">
                                                <div className="footer-extended-menu">
                                                    <h5 className="footer-extended-menu-title">下载</h5>
                                                    <ul className="footer-extended-menu-list">
                                                        <li>
                                                            <a href="//github.com/shine-design/shine-design/releases">发布版本</a>
                                                        </li>
                                                        <li>
                                                            <a href="//github.com/shine-design/shine-design">源代码</a>
                                                        </li>
                                                        <li>
                                                            <a href="//github.com/shine-design/shine-design/blob/master/LICENSE">License</a>
                                                        </li>
                                                        <li>
                                                            <a href="//www.npmjs.com/package/shined">NPM</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-4">
                                                <div className="footer-extended-menu">
                                                    <h5 className="footer-extended-menu-title">文档</h5>
                                                    <ul className="footer-extended-menu-list">
                                                        <li>
                                                            <a href="#">新手指南</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">组件文档</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">API 库</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">FAQ</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="clearfix visible-xs-block"/>
                                            <div className="col-md-2 col-sm-2 col-xs-4">
                                                <div className="footer-extended-menu">
                                                    <h5 className="footer-extended-menu-title">社区支持</h5>
                                                    <ul className="footer-extended-menu-list">
                                                        <li>
                                                            <a href="//github.com/shine-design/shine-design/issues">反馈建议</a>
                                                        </li>
                                                        <li>
                                                            <a href="/contribute">贡献指南</a>
                                                        </li>
                                                        <li>
                                                            <a href="//zh.wikipedia.org/wiki/Shine_Design">Wiki</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="footer-wrapper">
                                        <span className="scroll-top js-scroll-top hidden">
                                            <i className="fa fa-angle-up"/>
                                        </span>
                                        <p className="copyright helper center">
                                            Copyright &copy; 2018 · Shine Design · All Rights Reserved <br/>
                                            <a href="http://www.miitbeian.gov.cn/"> 苏ICP备16022318号 </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}
