const React = require('react');
const ReactDOM = require('react-dom');
const MUI = require('material-ui');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MUI.AppBar title='Mapper'>
        <iconElementRight style={ {  marginTop: 10} }>
          <MUI.ToolbarGroup>
            <MUI.TextField fullWidth={ false } style={ LoginTextStyle } hintText='Username' />
            <MUI.TextField fullWidth={ false } type='password' style={ LoginTextStyle } hintText='Password' />
          </MUI.ToolbarGroup>
          <MUI.RaisedButton style={ LoginButtonStyle } labelStyle={ {  fontSize: 14} } primary={ true } label='Log In' />
        </iconElementRight>
      </MUI.AppBar>
      );
  }

  Save(e) {
    console.log('Save Button Click:', e);
  }
}

const LoginTextStyle = {
  fontSize: 14,
  width: 140,
  marginRight: 6,
};

const LoginButtonStyle = {
  marginTop: 4,
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
