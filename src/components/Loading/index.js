import React from 'react';
import 'spinkit/css/spinkit.css';

const style = {
    position: 'absolute',
    top: '0px',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    zIndex: '1000',
    background: 'rgba(255, 255, 255, 0.5)',
    minHeight : '100px'
}

class Loading extends React.Component {

    constructor(props) {

        super(props);

    }


    render() {

            return (
                <div className="loading" style={style}>
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>
                </div>
            );
        }


}

module.exports = Loading;
