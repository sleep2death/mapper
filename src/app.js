//Basic React component that renders a material-ui
//raised button with the text "Default"

const React = require('react');
const ReactDOM = require('react-dom');
const RaisedButton = require('material-ui/lib/raised-button');

const MyAwesomeReactComponent = React.createClass({
  render() {
    return (
      <RaisedButton label="Default" />
      );
  },
});

ReactDOM.render(
  <MyAwesomeReactComponent />,
  document.getElementById('app')
);
