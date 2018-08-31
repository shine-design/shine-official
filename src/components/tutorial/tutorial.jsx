import React, {Component, Fragment} from 'react';
import Background from '../common/Background/Background';
import Example from '../common/Example/Example';
import Note from '../common/Note/Note';
import './style.less';

export default class Tutorial extends Component {
    componentDidMount() {
        let menus = $('.js-menu-vertical');
        menus.each(function () {
            let menu = $(this);
            menu.find('li').each(function () {
                if ($(this).has('ul').length) {
                    $(this).addClass('has-children');
                }
            });
            menu.tendina({
                animate: false,
                activeMenu: '.selected'
            });
        });
    }


    render() {

        const code =
            `import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//导入按钮组件
import {Button} from 'omega';

class App extends Component {
    render(){
        return (
            <Button value="Hello World"/>
        )
    }
}

//初始化React
ReactDOM.render(<APP />,document.querySelector('#app'));`;
        return (
            <Fragment>
                <Background {...{
                    title: '使用教程'
                }}/>
                <div id='content'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="main-content">
                                    <div className="category-info helper pt0" id="list-view">
                                        <h3 className="category-title"> 按钮组件
                                            <a className="fragment-identifier js-fragment-identifier fragment-identifier-scroll"
                                               href="#list-view">
                                                <i className="fa fa-link"/>
                                            </a>
                                        </h3>
                                        <h4 className="category-description">A list style layout is for the seated
                                            because users' actions tend to be very singular in purpose. They've come to
                                            your site to do one thing: browse or read. Present them with content in a
                                            standard way and let them just get lost in it.</h4>
                                    </div>
                                    <Example {...{
                                        display: (<h1>This is a Dispay</h1>),
                                        code: {code}
                                    }}/>
                                    <Note {...{
                                        type: 'success',
                                        title: 'This is a title',
                                        message: 'A list style layout is for the seated\n' +
                                            '                                            because users\' actions tend to be very singular in purpose. They\'ve come to\n' +
                                            '                                            your site to do one thing: browse or read. Present them with content in a\n' +
                                            '                                            standard way and let them just get lost in it'
                                    }}/>


                                    <div className="category-info ">
                                        <h4 className="category-description">配置项</h4>
                                    </div>
                                    <p>
                                        Congratulations! These simple steps helped us to create a stylish double
                                        exposure portrait by combining two images and creating an interesting
                                        surrealistic effect. I hope you’ve found some handy tips and tricks, which will
                                        help you to make more
                                        interesting combinations and photo manipulations. Good luck!
                                    </p>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>Language</th>
                                                <th>Included</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="">
                                                <th scope="row">Markup</th>
                                                <td>yes</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">CSS</th>
                                                <td>yes</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">C-like</th>
                                                <td>yes</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">JavaScript</th>
                                                <td>yes</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">ActionScript</th>
                                                <td>no</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">Apache Configuration</th>
                                                <td>no</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">AppleScript</th>
                                                <td>yes</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">ASP.NET (C#)</th>
                                                <td>yes</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">AutoHotkey</th>
                                                <td>no</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">Bash</th>
                                                <td>no</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">C</th>
                                                <td>no</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">C#</th>
                                                <td>yes</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">C++</th>
                                                <td>yes</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">CoffeeScript</th>
                                                <td>yes</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">CSS Extras</th>
                                                <td>yes</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">Dart</th>
                                                <td>no</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">Eiffel</th>
                                                <td>no</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">Erlang</th>
                                                <td>no</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">F#</th>
                                                <td>no</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">Fortran</th>
                                                <td>no</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row">Gherkin</th>
                                                <td>no</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className="sidebar js-sidebar-fixed">
                                    <div className="widget">
                                        <div className="search">
                                            <form action="#">
                                                <input type="text" className="search-input form-control"
                                                       placeholder="search"/>
                                                <i className="fa fa-search search-icon"/>
                                            </form>
                                        </div>
                                    </div>
                                    <nav className="menu-vertical-wrapper">
                                        <ul className="menu-vertical  js-menu-vertical" data-prepend-to=".js-layout"
                                            data-select="Menu">
                                            <li>
                                                <a href="#">Tutorials</a>
                                                <ul>
                                                    <li>
                                                        <a href="#">Instalation</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Manually</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Wizard</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Softaculous</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Fantastico</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Transfer</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Create</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Multimedia</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Post</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Comments</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Themes</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Plugins</a>
                                                <ul>
                                                    <li>
                                                        <a href="#">Instalation</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Manually</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Wizard</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Softaculous</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Fantastico</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Transfer</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Create</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Multimedia</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Post</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Comments</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Themes</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Partners</a>
                                                <ul>
                                                    <li>
                                                        <a href="#">Instalation</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Manually</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Wizard</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Softaculous</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Fantastico</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Transfer</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Create</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Multimedia</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Post</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Comments</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Themes</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Affiliates</a>
                                                <ul>
                                                    <li>
                                                        <a href="#">Instalation</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Manually</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Wizard</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Softaculous</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Fantastico</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Transfer</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Create</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Multimedia</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Post</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Comments</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Themes</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Events</a>
                                                <ul>
                                                    <li>
                                                        <a href="#">Instalation</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Manually</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Wizard</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Softaculous</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Fantastico</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Transfer</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Create</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Multimedia</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Post</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Comments</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Themes</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">About</a>
                                                <ul>
                                                    <li>
                                                        <a href="#">Instalation</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Manually</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Wizard</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Softaculous</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Fantastico</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Transfer</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Create</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Multimedia</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Post</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Comments</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Themes</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Faq</a>
                                                <ul>
                                                    <li>
                                                        <a href="#">Instalation</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Manually</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Wizard</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Softaculous</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Fantastico</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Transfer</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Create</a>
                                                        <ul>
                                                            <li>
                                                                <a href="views.html">Multimedia</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Post</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Comments</a>
                                                            </li>
                                                            <li>
                                                                <a href="views.html">Themes</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="widget">
                                        <h3 className="widget-title">Recommended products</h3>
                                        <ul className="widget-recommended-products">
                                            <li className="widget-recommended-product">
                                                <img src="http://placehold.it/67x67"
                                                     className="widget-recommended-product-img"
                                                     alt="Recommended products"/>
                                                <a href="#" className="widget-recommended-product-link">
                                                    <h5 className="widget-recommended-product-link-title"> VSResume
                                                        <i className="fa fa-angle-right"/>
                                                    </h5>
                                                    <p className="widget-recommended-product-link-description">Online
                                                        CV / Resume Template</p>
                                                </a>
                                            </li>
                                            <li className="widget-recommended-product">
                                                <img src="http://placehold.it/67x67"
                                                     className="widget-recommended-product-img"
                                                     alt="Recommended products"/>
                                                <a href="#" className="widget-recommended-product-link">
                                                    <h5 className="widget-recommended-product-link-title"> VSDocs
                                                        <i className="fa fa-angle-right"/>
                                                    </h5>
                                                    <p className="widget-recommended-product-link-description">Online
                                                        Documentation Template</p>
                                                </a>
                                            </li>
                                            <li className="widget-recommended-product">
                                                <img src="http://placehold.it/67x67"
                                                     className="widget-recommended-product-img"
                                                     alt="Recommended products"/>
                                                <a href="#" className="widget-recommended-product-link">
                                                    <h5 className="widget-recommended-product-link-title"> Triablo
                                                        <i className="fa fa-angle-right"/>
                                                    </h5>
                                                    <p className="widget-recommended-product-link-description">eCommerce
                                                        Landing Page</p>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="widget-recommended-products">
                                            <li className="widget-recommended-product">
                                                <img src="http://placehold.it/67x67"
                                                     className="widget-recommended-product-img"
                                                     alt="Recommended products"/>
                                                <a href="#" className="widget-recommended-product-link">
                                                    <h5 className="widget-recommended-product-link-title"> Paradise
                                                        Cakes
                                                        <i className="fa fa-angle-right"/>
                                                    </h5>
                                                    <p className="widget-recommended-product-link-description">eCommerce
                                                        Landing Page</p>
                                                </a>
                                            </li>
                                            <li className="widget-recommended-product">
                                                <img src="http://placehold.it/67x67"
                                                     className="widget-recommended-product-img"
                                                     alt="Recommended products"/>
                                                <a href="#" className="widget-recommended-product-link">
                                                    <h5 className="widget-recommended-product-link-title"> EatLand
                                                        <i className="fa fa-angle-right"/>
                                                    </h5>
                                                    <p className="widget-recommended-product-link-description">eCommerce
                                                        Landing Page</p>
                                                </a>
                                            </li>
                                            <li className="widget-recommended-product">
                                                <img src="http://placehold.it/67x67"
                                                     className="widget-recommended-product-img"
                                                     alt="Recommended products"/>
                                                <a href="#" className="widget-recommended-product-link">
                                                    <h5 className="widget-recommended-product-link-title"> VSBuilder
                                                        <i className="fa fa-angle-right"/>
                                                    </h5>
                                                    <p className="widget-recommended-product-link-description">Pure
                                                        HTML and CSS Page Builder</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}