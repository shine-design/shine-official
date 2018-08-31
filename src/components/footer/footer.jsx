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

        if(scope.length){
            currentBtn.click(function (e) {
                e.preventDefault();
                e.stopPropagation();

                if(versionList.is(':visible')){
                    versionList.fadeOut('fast');
                }else{
                    versionList.fadeIn('fast');
                }
            });

            $('body').click(function() {
                if(versionList.is(':visible')){
                    versionList.fadeOut('fast');
                }
            });
        }


        var scrollButton = $('.js-scroll-top');

        scrollButton.click(function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: "0px" });
        });


    }

    render() {
        return (
            <Fragment>
                <footer className="js-footer-is-fixed">
                    <div className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                    <div className="footer-logo-wrapper">
                                        <a href="index.html" className="logo-image ">
                                            <img src={logo} alt="logo"/>
                                        </a>
                                        <p className="slogan">
                                            <br/>Omega Design
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <div className="footer-wrapper">
                                        <span className="scroll-top js-scroll-top">
									<i className="fa fa-angle-up"/>
								</span>
                                        <div className="docs-version js-docs-version">
                                            <span className="docs-current-version js-docs-current-version">v3.5</span>
                                            <ul className="js-docs-version-list">
                                                <li>
                                                    <a href="let">1.0</a>
                                                </li>
                                                <li>
                                                    <a href="let">1.5</a>
                                                </li>
                                                <li>
                                                    <a href="let">2.5</a>
                                                </li>
                                                <li>
                                                    <a href="let">3.0</a>
                                                </li>
                                                <li>
                                                    <a href="let">3.1</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="footer-menu helper right">
                                            <li>
                                                <a href="let"> About us </a>
                                            </li>
                                            <li>
                                                <a href="let"> Privacy Policy </a>
                                            </li>
                                            <li>
                                                <a href="let"> Terms & Condotions </a>
                                            </li>
                                            <li>
                                                <a href="let"> My account </a>
                                            </li>
                                            <li>
                                                <a href="let"> Support service </a>
                                            </li>
                                        </ul>
                                        <p className="copyright helper right">
                                            <a href="http://vsart.me">Longjun.Qu</a>, All Rights reserved. 2018 &copy;
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
