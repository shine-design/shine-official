import React, {Component, Fragment} from 'react';

export default class Filter extends Component {
    componentDidMount() {
        this._initChangelog();
        this._initScroll();
    }

    _initChangelog() {
        let changelogs = $('.js-changelog');
        changelogs.each(function () {
            let changelog = $(this);
            let changelogItems = changelog.find('.js-changelog-item');

            let changelogFilter = changelog.find('.js-changelog-input').instaFilta({
                scope: '.js-changelog',
                targets: '.js-changelog-update-description'
            });

            let changelogCheckBox = changelog.find('.js-changelog-checkbox');

            changelogItems.each(function () {
                let changelogItem = $(this);
                let switchBtn = changelogItem.find('.js-changelog-switch');
                let fileFilters = changelogItem.find('.js-changelog-file-filter');
                let filesScope = changelogItem.find('.js-changelog-files-scope').instaFilta({
                    targets: '.js-changelog-file',
                    scope: '.js-changelog-files-scope'
                });

                fileFilters.click(function () {
                    let filters = [];
                    $(this).toggleClass('inactive');

                    fileFilters.each(function () {
                        if (!$(this).hasClass('inactive')) {
                            filters.push($(this).data('type'));
                        }
                    });

                    filesScope.filterCategory(filters);
                });

                switchBtn.click(function (e) {
                    e.preventDefault();
                    changelogItem.toggleClass('changelog-view-files');
                });
            });

            changelogCheckBox.on('change', function () {
                let checkedCategories = [];

                changelogCheckBox.each(function () {
                    if ($(this).prop('checked')) {
                        checkedCategories.push($(this).val());
                    }
                });

                changelogFilter.filterCategory(checkedCategories);
            });


        });

    }

    _initScroll() {
        let buttons = $('.js-scroll-to');
        buttons.each(function () {
            let button = $(this);
            let target = button.data('target');
            let speed = button.data('speed') ? button.data('speed') : 1000;
            if (typeof target !== 'undefined' && $(target).length) {
                button.click(function (event) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: $(target).first().offset().top - HeaderFixed.getOffset()
                    }, speed);
                });
            }
        });
        const HeaderFixed = (function () {
            let header = $('.js-header-fixed');
            let headerWrapper = $('<div class="header-fixed-wrapper">');
            let pub = {};

            // Public functions
            pub.isPresent = function () {
                return header.length;
            };
            pub.isOver = function () {
                return header.hasClass('header-over');
            };
            pub.getHeight = function () {
                return header.outerHeight();
            };
            pub.getOffset = function () {
                return pub.isPresent() ? pub.getHeight() : 0;
            };

            // Private functions
            let updateHeader = function (helper) {
                if ($(window).scrollTop() === 0) {
                    header.removeClass('header-fixed').addClass(helper);
                } else {
                    header.addClass('header-fixed').removeClass(helper);
                }
            };

            let init = function () {
                if (!pub.isOver()) {
                    header.wrap(headerWrapper.height(header.outerHeight()));
                    header.addClass('header-fixed');
                } else {
                    let helper = '';

                    if (header.hasClass('large')) {
                        helper = 'large';
                    }
                    else if (header.hasClass('small')) {
                        helper = 'small';
                    }

                    updateHeader(helper);

                    $(window).scroll(function () {
                        updateHeader(helper);
                    });
                }

            };

            if (pub.isPresent()) {
                init();
            }

            return pub;

        })();
    }

    render() {
        return (
            <Fragment>
                <div className="changelog-filters">
                    <input type="text" className="changelog-input js-changelog-input"/>
                    <input id="changelog-filter-feature" className="js-changelog-checkbox changelog-checkbox"
                           type="checkbox" value="feature"/>
                    <label className="changelog-checkbox-label"
                           htmlFor="changelog-filter-feature">Features</label>
                    <input id="changelog-filter-improvement"
                           className="js-changelog-checkbox changelog-checkbox" type="checkbox"
                           value="improvement"/>
                    <label className="changelog-checkbox-label"
                           htmlFor="changelog-filter-improvement">Improvements</label>
                    <input id="changelog-filter-bug-fix"
                           className="js-changelog-checkbox changelog-checkbox" type="checkbox"
                           value="bug-fix"/>
                    <label className="changelog-checkbox-label"
                           htmlFor="changelog-filter-bug-fix">Bug-Fixes</label>
                    <div className="changelog-scroll-to"> 查看版本
                        <i className="pe-7s-angle-down"/>
                        <ul className="changelog-scroll-to-list">
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v211">v2.1.1</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v210">v2.1.0</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v200">v2.0.0</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v190">v1.9.0</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v180">v1.8.0</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v170">v1.7.0</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v160">v1.6.0</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v150">v1.5.0</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v140">v1.4.0</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v130">v1.3.0</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v120">v1.2.0</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v110">v1.1.0</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v002">v0.0.2</a>
                            </li>
                            <li className="changelog-scroll-to-list-item">
                                <a href="#" className="js-scroll-to" data-target="#v001">v0.0.1</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}