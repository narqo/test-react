import React from 'react';

export default React.createClass({
    displayName : 'Popup',

    getInitialState() {
        return { isAttachedToBody : false }
    },

    componentDidMount() {
        this.rootNode = null;
        this.renderPopup(this.props);
    },

    componentWillUnmount() {
        React.unmountComponentAtNode(this.rootNode);
        this.rootNode.parentNode.removeChild(this.rootNode);
        this.rootNode = null;
    },

    componentWillReceiveProps(nextProps) {
        //console.log('popup next-props:', nextProps);
        if(!this.state.isAttachedToBody) {
            document.body.appendChild(this.rootNode);
            this.setState({ isAttachedToBody : true });
        }
        this.renderPopup(nextProps);
    },

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    },

    render() {
        return React.createElement('div');
    },

    renderPopup(props) {
        var rootNode;
        if(!this.rootNode) {
            rootNode = document.createElement('div');
            rootNode.innerHTML = React.renderToStaticMarkup(
                React.createElement('div', { className : `popup${props.opened? ' opened' : ''}` }));
            this.rootNode = React.findDOMNode(this).appendChild(rootNode.firstChild);
            rootNode = null;
        } else {
            this.updateBlockMods(props);
        }

        React.render(React.createElement('div', null, props.children), this.rootNode);
    },

    updateBlockMods(props) {
        var {classList} = this.rootNode;
        props.opened?
            classList.add('opened') :
            classList.remove('opened');
    }
});
