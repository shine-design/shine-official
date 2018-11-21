import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom'

//Components
import Home from './components/home/home';
import Guide from './components/Guide/Guide';
import Changelog from './components/changelog/changelog';
import Tutorial from './components/Tutorial/Tutorial';
import CLI from './components/CLI/CLI';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Contribute from './components/Contribute/Contribute';

export default class App extends Component {
    componentDidMount() {
        this.preLoader();
    }

    componentWillReceiveProps(nextProps) {
        
        if (this.props.location.pathname !== nextProps.location.pathname) {
            if ($('html,body').scrollTop() !== 0) $('html,body').animate({scrollTop: '0px'}, 800);
        }
    }

    preLoader() {
        $('.js-preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    }

    render() {
        return (
            <Fragment>
                <div className="page js-page">
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/cli" exact component={CLI}/>
                        <Route path="/guide" exact component={Guide}/>
                        <Route path="/changelog" exact component={Changelog}/>
                        <Route path="/tutorial" component={Tutorial}/>
                        <Route path="/contribute" component={Contribute}/>
                    </Switch>
                    <Footer/>
                </div>
            </Fragment>
        )
    }
}
