import React from 'react';
import Button from './components/button';
import Dropdown from './components/dropdown';
import Popup from './components/popup';

var MyApp = React.createClass({
    getInitialState() {
        return {
            keySuffix : '',
            popupOpened : false
        };
    },

    onPopupAnchorClick() {
        this.setState({ popupOpened : !this.state.popupOpened });
    },

    onRedrawClick() {
        this.setState({ keySuffix : Date.now() });
    },

    render() {
        return React.createElement('div', { key : this.state.keySuffix },
            React.createElement(Popup, { opened : this.state.popupOpened },
                React.createElement(Dropdown)
            ),
            React.createElement(Button, { text : 'open popup', onClick : this.onPopupAnchorClick }),
            React.createElement(Button, { text : 'redraw all', onClick : this.onRedrawClick })
        );
    }
});

React.render(React.createElement(MyApp), document.getElementById('app'));
