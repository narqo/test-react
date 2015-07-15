import {createClass, createElement} from "react";
import Button from "./button";

export default createClass({
    displayName : 'Dropdown',

    getInitialState() {
        return {
            text : 'Click Me!'
        };
    },

    componentDidMount() {
        var _this = this;
        setTimeout(function() {
            _this.setState({ text : 'Click Me Not!' });
            setTimeout(function() {
                _this.setState({ text : 'Click Me Maybe!', disabled : true });
            }, 500);
        }, 60);
    },

    render() {
        var {text, disabled} = this.state;
        return createElement(Button, { text, disabled });
    }
});
