import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
                <span><a href="https://www.whatson-web.com">Whatson web</a> &copy; 2018 Whatson web.</span>
                <span className="ml-auto">Made with <i className={'fa fa-heart'}></i> by <a
                    href="https://www.whatson-web.com">Whatson web</a></span>
            </footer>
        )
    }
}

export default Footer;