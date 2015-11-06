(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Basic React component that renders a material-ui
//raised button with the text "Default"

const React = require('react');
const ReactDOM = require('react-dom');
const RaisedButton = require('material-ui/lib/raised-button');

const MyAwesomeReactComponent = React.createClass({displayName: "MyAwesomeReactComponent",
  render() {
    return (
      React.createElement(RaisedButton, {label: "Default"})
      );
  },
});

ReactDOM.render(
  React.createElement(MyAwesomeReactComponent, null),
  document.getElementById('app')
);

},{"material-ui/lib/raised-button":"material-ui/lib/raised-button","react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXNwaXJpbi9Xb3Jrc3BhY2UvbWFwcGVyL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxrREFBa0Q7QUFDbEQsdUNBQXVDOztBQUV2QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOztBQUU5RCxNQUFNLDZDQUE2Qyx1Q0FBQTtFQUNqRCxNQUFNLEdBQUc7SUFDUDtNQUNFLG9CQUFDLFlBQVksRUFBQSxDQUFBLENBQUMsS0FBQSxFQUFLLENBQUMsU0FBUyxDQUFBLENBQUcsQ0FBQTtRQUM5QjtHQUNMO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsUUFBUSxDQUFDLE1BQU07RUFDYixvQkFBQyx1QkFBdUIsRUFBQSxJQUFBLENBQUcsQ0FBQTtFQUMzQixRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztDQUMvQixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vQmFzaWMgUmVhY3QgY29tcG9uZW50IHRoYXQgcmVuZGVycyBhIG1hdGVyaWFsLXVpXG4vL3JhaXNlZCBidXR0b24gd2l0aCB0aGUgdGV4dCBcIkRlZmF1bHRcIlxuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuY29uc3QgUmFpc2VkQnV0dG9uID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWkvbGliL3JhaXNlZC1idXR0b24nKTtcblxuY29uc3QgTXlBd2Vzb21lUmVhY3RDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJhaXNlZEJ1dHRvbiBsYWJlbD1cIkRlZmF1bHRcIiAvPlxuICAgICAgKTtcbiAgfSxcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxNeUF3ZXNvbWVSZWFjdENvbXBvbmVudCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuIl19
