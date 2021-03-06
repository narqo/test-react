import {createClass, createElement} from 'react'

export default createClass({
    displayName : 'Button',
    
    getInitialState() {
        return {
            inited : false,
            disabled : false,
            text : this.props.text
        };
    },

    componentDidMount() {
        var _this = this,
            lastProps = this.props;

        setTimeout(function() {
            //console.log('timeout', _this.props, lastProps === _this.props);

            _this.setState(function(prevState, curProps) {
                if(lastProps !== curProps) {
                    // TODO: //
                }

                return { inited : true };
            }, function() {
                console.log('button after init');
            });
        }, 300);
    },

    componentWillReceiveProps(nextProps) {
        if(!this.state.inited) {
            //console.log('button next:', 'skip');
            return;
        }

        //console.log('button next:', nextProps);
    },

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should update:', nextProps, nextState);
        return false;
    },

    render() {
        //console.log('button render!');
        var {text, disabled} = this.state;
        return createElement('button',
                { className : 'button', type : 'submit', onClick : this.props.onClick, disabled },
            createElement('span', { className : 'button__text' }, text));
    }
});
