(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;
}).call(this,require('_process'))

},{"_process":7}],2:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyOf
 */

/**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without losing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */
"use strict";

var keyOf = function (oneKeyObj) {
  var key;
  for (key in oneKeyObj) {
    if (!oneKeyObj.hasOwnProperty(key)) {
      continue;
    }
    return key;
  }
  return null;
};

module.exports = keyOf;
},{}],3:[function(require,module,exports){
// To include this file in your project:
// let mui = require('mui');
// let Colors = mui.Styles.Colors;

'use strict';

module.exports = {

  red50: '#ffebee',
  red100: '#ffcdd2',
  red200: '#ef9a9a',
  red300: '#e57373',
  red400: '#ef5350',
  red500: '#f44336',
  red600: '#e53935',
  red700: '#d32f2f',
  red800: '#c62828',
  red900: '#b71c1c',
  redA100: '#ff8a80',
  redA200: '#ff5252',
  redA400: '#ff1744',
  redA700: '#d50000',

  pink50: '#fce4ec',
  pink100: '#f8bbd0',
  pink200: '#f48fb1',
  pink300: '#f06292',
  pink400: '#ec407a',
  pink500: '#e91e63',
  pink600: '#d81b60',
  pink700: '#c2185b',
  pink800: '#ad1457',
  pink900: '#880e4f',
  pinkA100: '#ff80ab',
  pinkA200: '#ff4081',
  pinkA400: '#f50057',
  pinkA700: '#c51162',

  purple50: '#f3e5f5',
  purple100: '#e1bee7',
  purple200: '#ce93d8',
  purple300: '#ba68c8',
  purple400: '#ab47bc',
  purple500: '#9c27b0',
  purple600: '#8e24aa',
  purple700: '#7b1fa2',
  purple800: '#6a1b9a',
  purple900: '#4a148c',
  purpleA100: '#ea80fc',
  purpleA200: '#e040fb',
  purpleA400: '#d500f9',
  purpleA700: '#aa00ff',

  deepPurple50: '#ede7f6',
  deepPurple100: '#d1c4e9',
  deepPurple200: '#b39ddb',
  deepPurple300: '#9575cd',
  deepPurple400: '#7e57c2',
  deepPurple500: '#673ab7',
  deepPurple600: '#5e35b1',
  deepPurple700: '#512da8',
  deepPurple800: '#4527a0',
  deepPurple900: '#311b92',
  deepPurpleA100: '#b388ff',
  deepPurpleA200: '#7c4dff',
  deepPurpleA400: '#651fff',
  deepPurpleA700: '#6200ea',

  indigo50: '#e8eaf6',
  indigo100: '#c5cae9',
  indigo200: '#9fa8da',
  indigo300: '#7986cb',
  indigo400: '#5c6bc0',
  indigo500: '#3f51b5',
  indigo600: '#3949ab',
  indigo700: '#303f9f',
  indigo800: '#283593',
  indigo900: '#1a237e',
  indigoA100: '#8c9eff',
  indigoA200: '#536dfe',
  indigoA400: '#3d5afe',
  indigoA700: '#304ffe',

  blue50: '#e3f2fd',
  blue100: '#bbdefb',
  blue200: '#90caf9',
  blue300: '#64b5f6',
  blue400: '#42a5f5',
  blue500: '#2196f3',
  blue600: '#1e88e5',
  blue700: '#1976d2',
  blue800: '#1565c0',
  blue900: '#0d47a1',
  blueA100: '#82b1ff',
  blueA200: '#448aff',
  blueA400: '#2979ff',
  blueA700: '#2962ff',

  lightBlue50: '#e1f5fe',
  lightBlue100: '#b3e5fc',
  lightBlue200: '#81d4fa',
  lightBlue300: '#4fc3f7',
  lightBlue400: '#29b6f6',
  lightBlue500: '#03a9f4',
  lightBlue600: '#039be5',
  lightBlue700: '#0288d1',
  lightBlue800: '#0277bd',
  lightBlue900: '#01579b',
  lightBlueA100: '#80d8ff',
  lightBlueA200: '#40c4ff',
  lightBlueA400: '#00b0ff',
  lightBlueA700: '#0091ea',

  cyan50: '#e0f7fa',
  cyan100: '#b2ebf2',
  cyan200: '#80deea',
  cyan300: '#4dd0e1',
  cyan400: '#26c6da',
  cyan500: '#00bcd4',
  cyan600: '#00acc1',
  cyan700: '#0097a7',
  cyan800: '#00838f',
  cyan900: '#006064',
  cyanA100: '#84ffff',
  cyanA200: '#18ffff',
  cyanA400: '#00e5ff',
  cyanA700: '#00b8d4',

  teal50: '#e0f2f1',
  teal100: '#b2dfdb',
  teal200: '#80cbc4',
  teal300: '#4db6ac',
  teal400: '#26a69a',
  teal500: '#009688',
  teal600: '#00897b',
  teal700: '#00796b',
  teal800: '#00695c',
  teal900: '#004d40',
  tealA100: '#a7ffeb',
  tealA200: '#64ffda',
  tealA400: '#1de9b6',
  tealA700: '#00bfa5',

  green50: '#e8f5e9',
  green100: '#c8e6c9',
  green200: '#a5d6a7',
  green300: '#81c784',
  green400: '#66bb6a',
  green500: '#4caf50',
  green600: '#43a047',
  green700: '#388e3c',
  green800: '#2e7d32',
  green900: '#1b5e20',
  greenA100: '#b9f6ca',
  greenA200: '#69f0ae',
  greenA400: '#00e676',
  greenA700: '#00c853',

  lightGreen50: '#f1f8e9',
  lightGreen100: '#dcedc8',
  lightGreen200: '#c5e1a5',
  lightGreen300: '#aed581',
  lightGreen400: '#9ccc65',
  lightGreen500: '#8bc34a',
  lightGreen600: '#7cb342',
  lightGreen700: '#689f38',
  lightGreen800: '#558b2f',
  lightGreen900: '#33691e',
  lightGreenA100: '#ccff90',
  lightGreenA200: '#b2ff59',
  lightGreenA400: '#76ff03',
  lightGreenA700: '#64dd17',

  lime50: '#f9fbe7',
  lime100: '#f0f4c3',
  lime200: '#e6ee9c',
  lime300: '#dce775',
  lime400: '#d4e157',
  lime500: '#cddc39',
  lime600: '#c0ca33',
  lime700: '#afb42b',
  lime800: '#9e9d24',
  lime900: '#827717',
  limeA100: '#f4ff81',
  limeA200: '#eeff41',
  limeA400: '#c6ff00',
  limeA700: '#aeea00',

  yellow50: '#fffde7',
  yellow100: '#fff9c4',
  yellow200: '#fff59d',
  yellow300: '#fff176',
  yellow400: '#ffee58',
  yellow500: '#ffeb3b',
  yellow600: '#fdd835',
  yellow700: '#fbc02d',
  yellow800: '#f9a825',
  yellow900: '#f57f17',
  yellowA100: '#ffff8d',
  yellowA200: '#ffff00',
  yellowA400: '#ffea00',
  yellowA700: '#ffd600',

  amber50: '#fff8e1',
  amber100: '#ffecb3',
  amber200: '#ffe082',
  amber300: '#ffd54f',
  amber400: '#ffca28',
  amber500: '#ffc107',
  amber600: '#ffb300',
  amber700: '#ffa000',
  amber800: '#ff8f00',
  amber900: '#ff6f00',
  amberA100: '#ffe57f',
  amberA200: '#ffd740',
  amberA400: '#ffc400',
  amberA700: '#ffab00',

  orange50: '#fff3e0',
  orange100: '#ffe0b2',
  orange200: '#ffcc80',
  orange300: '#ffb74d',
  orange400: '#ffa726',
  orange500: '#ff9800',
  orange600: '#fb8c00',
  orange700: '#f57c00',
  orange800: '#ef6c00',
  orange900: '#e65100',
  orangeA100: '#ffd180',
  orangeA200: '#ffab40',
  orangeA400: '#ff9100',
  orangeA700: '#ff6d00',

  deepOrange50: '#fbe9e7',
  deepOrange100: '#ffccbc',
  deepOrange200: '#ffab91',
  deepOrange300: '#ff8a65',
  deepOrange400: '#ff7043',
  deepOrange500: '#ff5722',
  deepOrange600: '#f4511e',
  deepOrange700: '#e64a19',
  deepOrange800: '#d84315',
  deepOrange900: '#bf360c',
  deepOrangeA100: '#ff9e80',
  deepOrangeA200: '#ff6e40',
  deepOrangeA400: '#ff3d00',
  deepOrangeA700: '#dd2c00',

  brown50: '#efebe9',
  brown100: '#d7ccc8',
  brown200: '#bcaaa4',
  brown300: '#a1887f',
  brown400: '#8d6e63',
  brown500: '#795548',
  brown600: '#6d4c41',
  brown700: '#5d4037',
  brown800: '#4e342e',
  brown900: '#3e2723',

  blueGrey50: '#eceff1',
  blueGrey100: '#cfd8dc',
  blueGrey200: '#b0bec5',
  blueGrey300: '#90a4ae',
  blueGrey400: '#78909c',
  blueGrey500: '#607d8b',
  blueGrey600: '#546e7a',
  blueGrey700: '#455a64',
  blueGrey800: '#37474f',
  blueGrey900: '#263238',

  grey50: '#fafafa',
  grey100: '#f5f5f5',
  grey200: '#eeeeee',
  grey300: '#e0e0e0',
  grey400: '#bdbdbd',
  grey500: '#9e9e9e',
  grey600: '#757575',
  grey700: '#616161',
  grey800: '#424242',
  grey900: '#212121',

  black: '#000000',
  white: '#ffffff',

  transparent: 'rgba(0, 0, 0, 0)',
  fullBlack: 'rgba(0, 0, 0, 1)',
  darkBlack: 'rgba(0, 0, 0, 0.87)',
  lightBlack: 'rgba(0, 0, 0, 0.54)',
  minBlack: 'rgba(0, 0, 0, 0.26)',
  faintBlack: 'rgba(0, 0, 0, 0.12)',
  fullWhite: 'rgba(255, 255, 255, 1)',
  darkWhite: 'rgba(255, 255, 255, 0.87)',
  lightWhite: 'rgba(255, 255, 255, 0.54)'

};
},{}],4:[function(require,module,exports){
'use strict';

var Colors = require('./colors');
var ColorManipulator = require('../utils/color-manipulator');
var Extend = require('../utils/extend');
var update = require('react-addons-update');

module.exports = {

  //get the MUI theme corresponding to a raw theme
  getMuiTheme: function getMuiTheme(rawTheme) {
    var returnObj = {
      appBar: {
        color: rawTheme.palette.primary1Color,
        textColor: rawTheme.palette.alternateTextColor,
        height: rawTheme.spacing.desktopKeylineIncrement
      },
      avatar: {
        borderColor: 'rgba(0, 0, 0, 0.08)'
      },
      button: {
        height: 36,
        minWidth: 88,
        iconButtonSize: rawTheme.spacing.iconSize * 2
      },
      cardText: {
        textColor: rawTheme.palette.textColor
      },
      checkbox: {
        boxColor: rawTheme.palette.textColor,
        checkedColor: rawTheme.palette.primary1Color,
        requiredColor: rawTheme.palette.primary1Color,
        disabledColor: rawTheme.palette.disabledColor,
        labelColor: rawTheme.palette.textColor,
        labelDisabledColor: rawTheme.palette.disabledColor
      },
      datePicker: {
        color: rawTheme.palette.primary1Color,
        textColor: rawTheme.palette.alternateTextColor,
        calendarTextColor: rawTheme.palette.textColor,
        selectColor: rawTheme.palette.primary2Color,
        selectTextColor: rawTheme.palette.alternateTextColor
      },
      dropDownMenu: {
        accentColor: rawTheme.palette.borderColor
      },
      flatButton: {
        color: rawTheme.palette.alternateTextColor,
        textColor: rawTheme.palette.textColor,
        primaryTextColor: rawTheme.palette.accent1Color,
        secondaryTextColor: rawTheme.palette.primary1Color
      },
      floatingActionButton: {
        buttonSize: 56,
        miniSize: 40,
        color: rawTheme.palette.accent1Color,
        iconColor: rawTheme.palette.alternateTextColor,
        secondaryColor: rawTheme.palette.primary1Color,
        secondaryIconColor: rawTheme.palette.alternateTextColor,
        disabledTextColor: rawTheme.palette.disabledColor
      },
      gridTile: {
        textColor: Colors.white
      },
      inkBar: {
        backgroundColor: rawTheme.palette.accent1Color
      },
      leftNav: {
        width: rawTheme.spacing.desktopKeylineIncrement * 4,
        color: rawTheme.palette.canvasColor
      },
      listItem: {
        nestedLevelDepth: 18
      },
      menu: {
        backgroundColor: rawTheme.palette.canvasColor,
        containerBackgroundColor: rawTheme.palette.canvasColor
      },
      menuItem: {
        dataHeight: 32,
        height: 48,
        hoverColor: 'rgba(0, 0, 0, .035)',
        padding: rawTheme.spacing.desktopGutter,
        selectedTextColor: rawTheme.palette.accent1Color
      },
      menuSubheader: {
        padding: rawTheme.spacing.desktopGutter,
        borderColor: rawTheme.palette.borderColor,
        textColor: rawTheme.palette.primary1Color
      },
      paper: {
        backgroundColor: rawTheme.palette.canvasColor
      },
      radioButton: {
        borderColor: rawTheme.palette.textColor,
        backgroundColor: rawTheme.palette.alternateTextColor,
        checkedColor: rawTheme.palette.primary1Color,
        requiredColor: rawTheme.palette.primary1Color,
        disabledColor: rawTheme.palette.disabledColor,
        size: 24,
        labelColor: rawTheme.palette.textColor,
        labelDisabledColor: rawTheme.palette.disabledColor
      },
      raisedButton: {
        color: rawTheme.palette.alternateTextColor,
        textColor: rawTheme.palette.textColor,
        primaryColor: rawTheme.palette.accent1Color,
        primaryTextColor: rawTheme.palette.alternateTextColor,
        secondaryColor: rawTheme.palette.primary1Color,
        secondaryTextColor: rawTheme.palette.alternateTextColor
      },
      refreshIndicator: {
        strokeColor: rawTheme.palette.borderColor,
        loadingStrokeColor: rawTheme.palette.primary1Color
      },
      slider: {
        trackSize: 2,
        trackColor: rawTheme.palette.primary3Color,
        trackColorSelected: rawTheme.palette.accent3Color,
        handleSize: 12,
        handleSizeDisabled: 8,
        handleSizeActive: 18,
        handleColorZero: rawTheme.palette.borderColor,
        handleFillColor: rawTheme.palette.alternateTextColor,
        selectionColor: rawTheme.palette.primary1Color,
        rippleColor: rawTheme.palette.primary1Color
      },
      snackbar: {
        textColor: rawTheme.palette.alternateTextColor,
        backgroundColor: rawTheme.palette.textColor,
        actionColor: rawTheme.palette.accent1Color
      },
      table: {
        backgroundColor: rawTheme.palette.canvasColor
      },
      tableHeader: {
        borderColor: rawTheme.palette.borderColor
      },
      tableHeaderColumn: {
        textColor: rawTheme.palette.primary3Color,
        height: 56,
        spacing: 24
      },
      tableFooter: {
        borderColor: rawTheme.palette.borderColor,
        textColor: rawTheme.palette.primary3Color
      },
      tableRow: {
        hoverColor: rawTheme.palette.accent2Color,
        stripeColor: ColorManipulator.lighten(rawTheme.palette.primary1Color, 0.55),
        selectedColor: rawTheme.palette.borderColor,
        textColor: rawTheme.palette.textColor,
        borderColor: rawTheme.palette.borderColor
      },
      tableRowColumn: {
        height: 48,
        spacing: 24
      },
      timePicker: {
        color: rawTheme.palette.alternateTextColor,
        textColor: rawTheme.palette.accent3Color,
        accentColor: rawTheme.palette.primary1Color,
        clockColor: rawTheme.palette.primary3Color,
        selectColor: rawTheme.palette.primary2Color,
        selectTextColor: rawTheme.palette.alternateTextColor
      },
      toggle: {
        thumbOnColor: rawTheme.palette.primary1Color,
        thumbOffColor: rawTheme.palette.accent2Color,
        thumbDisabledColor: rawTheme.palette.borderColor,
        thumbRequiredColor: rawTheme.palette.primary1Color,
        trackOnColor: ColorManipulator.fade(rawTheme.palette.primary1Color, 0.5),
        trackOffColor: rawTheme.palette.primary3Color,
        trackDisabledColor: rawTheme.palette.primary3Color,
        labelColor: rawTheme.palette.textColor,
        labelDisabledColor: rawTheme.palette.disabledColor
      },
      toolbar: {
        backgroundColor: ColorManipulator.darken(rawTheme.palette.accent2Color, 0.05),
        height: 56,
        titleFontSize: 20,
        iconColor: 'rgba(0, 0, 0, .40)',
        separatorColor: 'rgba(0, 0, 0, .175)',
        menuHoverColor: 'rgba(0, 0, 0, .10)'
      },
      tabs: {
        backgroundColor: rawTheme.palette.primary1Color,
        textColor: ColorManipulator.fade(rawTheme.palette.alternateTextColor, 0.6),
        selectedTextColor: rawTheme.palette.alternateTextColor
      },
      textField: {
        textColor: rawTheme.palette.textColor,
        hintColor: rawTheme.palette.disabledColor,
        floatingLabelColor: rawTheme.palette.textColor,
        disabledTextColor: rawTheme.palette.disabledColor,
        errorColor: Colors.red500,
        focusColor: rawTheme.palette.primary1Color,
        backgroundColor: 'transparent',
        borderColor: rawTheme.palette.borderColor
      },
      isRtl: false
    };

    //add properties to objects inside 'returnObj' that depend on existing properties
    returnObj.flatButton.disabledTextColor = ColorManipulator.fade(returnObj.flatButton.textColor, 0.3);
    returnObj.raisedButton.disabledColor = ColorManipulator.darken(returnObj.raisedButton.color, 0.1);
    returnObj.raisedButton.disabledTextColor = ColorManipulator.fade(returnObj.raisedButton.textColor, 0.3);
    returnObj.toggle.trackRequiredColor = ColorManipulator.fade(returnObj.toggle.thumbRequiredColor, 0.5);

    //append the raw theme object to 'returnObj'
    returnObj.rawTheme = rawTheme;

    //set 'static' key as true (by default) on return object. This is to support the ContextPure mixin.
    returnObj['static'] = true;

    return returnObj;
  },

  //functions to modify properties of raw theme, namely spacing, palette
  //and font family. These functions use the React update immutability helper
  //to create a new object for the raw theme, and return a new MUI theme object

  //function to modify the spacing of the raw theme. This function recomputes
  //the MUI theme and returns it based on the new theme.
  modifyRawThemeSpacing: function modifyRawThemeSpacing(muiTheme, newSpacing) {
    var newRawTheme = update(muiTheme.rawTheme, { spacing: { $set: newSpacing } });
    return this.getMuiTheme(newRawTheme);
  },

  //function to modify the palette of the raw theme. This function recomputes
  //the MUI theme and returns it based on the new raw theme.
  //keys inside 'newPalette' override values for existing keys in palette
  modifyRawThemePalette: function modifyRawThemePalette(muiTheme, newPaletteKeys) {
    var newPalette = Extend(muiTheme.rawTheme.palette, newPaletteKeys);
    var newRawTheme = update(muiTheme.rawTheme, { palette: { $set: newPalette } });
    return this.getMuiTheme(newRawTheme);
  },

  //function to modify the font family of the raw theme. This function recomputes
  //the MUI theme and returns it based on the new raw theme.
  modifyRawThemeFontFamily: function modifyRawThemeFontFamily(muiTheme, newFontFamily) {
    var newRawTheme = update(muiTheme.rawTheme, { fontFamily: { $set: newFontFamily } });
    return this.getMuiTheme(newRawTheme);
  }

};
},{"../utils/color-manipulator":5,"../utils/extend":6,"./colors":3,"react-addons-update":8}],5:[function(require,module,exports){
'use strict';

module.exports = {

  /**
   * The relative brightness of any point in a colorspace, normalized to 0 for
   * darkest black and 1 for lightest white. RGB colors only. Does not take
   * into account alpha values.
   *
   * TODO:
   * - Take into account alpha values.
   * - Identify why there are minor discrepancies for some use cases
   *   (i.e. #F0F & #FFF). Note that these cases rarely occur.
   *
   * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  _luminance: function _luminance(color) {
    color = this._decomposeColor(color);

    if (color.type.indexOf('rgb') > -1) {
      var rgb = color.values.map(function (val) {
        val /= 255; // normalized
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });

      return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    } else {
      var message = 'Calculating the relative luminance is not available for ' + 'HSL and HSLA.';
      console.error(message);
      return -1;
    }
  },

  /**
   * @params:
   * additionalValue = An extra value that has been calculated but not included
   *                   with the original color object, such as an alpha value.
   */
  _convertColorToString: function _convertColorToString(color, additonalValue) {
    var str = color.type + '(' + parseInt(color.values[0]) + ',' + parseInt(color.values[1]) + ',' + parseInt(color.values[2]);

    if (additonalValue !== undefined) {
      str += ',' + additonalValue + ')';
    } else if (color.values.length === 4) {
      str += ',' + color.values[3] + ')';
    } else {
      str += ')';
    }

    return str;
  },

  // Converts a color from hex format to rgb format.
  _convertHexToRGB: function _convertHexToRGB(color) {
    if (color.length === 4) {
      var extendedColor = '#';
      for (var i = 1; i < color.length; i++) {
        extendedColor += color.charAt(i) + color.charAt(i);
      }
      color = extendedColor;
    }

    var values = {
      r: parseInt(color.substr(1, 2), 16),
      g: parseInt(color.substr(3, 2), 16),
      b: parseInt(color.substr(5, 2), 16)
    };

    return 'rgb(' + values.r + ',' + values.g + ',' + values.b + ')';
  },

  // Returns the type and values of a color of any given type.
  _decomposeColor: function _decomposeColor(color) {
    if (color.charAt(0) === '#') {
      return this._decomposeColor(this._convertHexToRGB(color));
    }

    var marker = color.indexOf('(');
    var type = color.substring(0, marker);
    var values = color.substring(marker + 1, color.length - 1).split(',');

    return { type: type, values: values };
  },

  // Set the absolute transparency of a color.
  // Any existing alpha values are overwritten.
  fade: function fade(color, amount) {
    color = this._decomposeColor(color);
    if (color.type === 'rgb' || color.type === 'hsl') color.type += 'a';
    return this._convertColorToString(color, amount);
  },

  // Desaturates rgb and sets opacity to 0.15
  lighten: function lighten(color, amount) {
    color = this._decomposeColor(color);

    if (color.type.indexOf('hsl') > -1) {
      color.values[2] += amount;
      return this._decomposeColor(this._convertColorToString(color));
    } else if (color.type.indexOf('rgb') > -1) {
      for (var i = 0; i < 3; i++) {
        color.values[i] *= 1 + amount;
        if (color.values[i] > 255) color.values[i] = 255;
      }
    }

    if (color.type.indexOf('a') <= -1) color.type += 'a';

    return this._convertColorToString(color, '0.15');
  },

  darken: function darken(color, amount) {
    color = this._decomposeColor(color);

    if (color.type.indexOf('hsl') > -1) {
      color.values[2] += amount;
      return this._decomposeColor(this._convertColorToString(color));
    } else if (color.type.indexOf('rgb') > -1) {
      for (var i = 0; i < 3; i++) {
        color.values[i] *= 1 - amount;
        if (color.values[i] < 0) color.values[i] = 0;
      }
    }

    return this._convertColorToString(color);
  },

  // Calculates the contrast ratio between two colors.
  //
  // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
  contrastRatio: function contrastRatio(background, foreground) {
    var lumA = this._luminance(background);
    var lumB = this._luminance(foreground);

    if (lumA >= lumB) {
      return ((lumA + 0.05) / (lumB + 0.05)).toFixed(2);
    } else {
      return ((lumB + 0.05) / (lumA + 0.05)).toFixed(2);
    }
  },

  /**
   * Determines how readable a color combination is based on its level.
   * Levels are defined from @LeaVerou:
   * https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/contrast-ratio.js
   */
  contrastRatioLevel: function contrastRatioLevel(background, foreground) {
    var levels = {
      'fail': {
        range: [0, 3],
        color: 'hsl(0, 100%, 40%)'
      },
      'aa-large': {
        range: [3, 4.5],
        color: 'hsl(40, 100%, 45%)'
      },
      'aa': {
        range: [4.5, 7],
        color: 'hsl(80, 60%, 45%)'
      },
      'aaa': {
        range: [7, 22],
        color: 'hsl(95, 60%, 41%)'
      }
    };

    var ratio = this.contrastRatio(background, foreground);

    for (var level in levels) {
      var range = levels[level].range;
      if (ratio >= range[0] && ratio <= range[1]) return level;
    }
  }
};
},{}],6:[function(require,module,exports){
'use strict';

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

/**
*  A recursive merge between two objects.
*
*  @param base     - the object whose properties are to be overwritten. It
*                    should be either the root level or some nested level.
*  @param override - an object containing properties to be overwritten. It
*                    should have the same structure as the object object.
*/
var extend = function extend(base, override) {

  var mergedObject = {};

  //Loop through each key in the base object
  Object.keys(base).forEach(function (key) {

    var baseProp = base[key];
    var overrideProp = undefined;

    if (isObject(override)) overrideProp = override[key];

    //Recursive call extend if the prop is another object, else just copy it over
    mergedObject[key] = isObject(baseProp) && !Array.isArray(baseProp) ? extend(baseProp, overrideProp) : baseProp;
  });

  //Loop through each override key and override the props in the
  //base object
  if (isObject(override)) {

    Object.keys(override).forEach(function (overrideKey) {

      var overrideProp = override[overrideKey];

      //Only copy over props that are not objects
      if (!isObject(overrideProp) || Array.isArray(overrideProp)) {
        mergedObject[overrideKey] = overrideProp;
      }
    });
  }

  return mergedObject;
};

module.exports = extend;
},{}],7:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],8:[function(require,module,exports){
module.exports = require('react/lib/update');
},{"react/lib/update":10}],9:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

'use strict';

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
}

module.exports = assign;
},{}],10:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule update
 */

/* global hasOwnProperty:true */

'use strict';

var assign = require('./Object.assign');
var keyOf = require('fbjs/lib/keyOf');
var invariant = require('fbjs/lib/invariant');
var hasOwnProperty = ({}).hasOwnProperty;

function shallowCopy(x) {
  if (Array.isArray(x)) {
    return x.concat();
  } else if (x && typeof x === 'object') {
    return assign(new x.constructor(), x);
  } else {
    return x;
  }
}

var COMMAND_PUSH = keyOf({ $push: null });
var COMMAND_UNSHIFT = keyOf({ $unshift: null });
var COMMAND_SPLICE = keyOf({ $splice: null });
var COMMAND_SET = keyOf({ $set: null });
var COMMAND_MERGE = keyOf({ $merge: null });
var COMMAND_APPLY = keyOf({ $apply: null });

var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

var ALL_COMMANDS_SET = {};

ALL_COMMANDS_LIST.forEach(function (command) {
  ALL_COMMANDS_SET[command] = true;
});

function invariantArrayCase(value, spec, command) {
  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
  var specValue = spec[command];
  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
}

function update(value, spec) {
  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;

  if (hasOwnProperty.call(spec, COMMAND_SET)) {
    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;

    return spec[COMMAND_SET];
  }

  var nextValue = shallowCopy(value);

  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
    var mergeObj = spec[COMMAND_MERGE];
    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
    assign(nextValue, spec[COMMAND_MERGE]);
  }

  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
    invariantArrayCase(value, spec, COMMAND_PUSH);
    spec[COMMAND_PUSH].forEach(function (item) {
      nextValue.push(item);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
    spec[COMMAND_UNSHIFT].forEach(function (item) {
      nextValue.unshift(item);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
    spec[COMMAND_SPLICE].forEach(function (args) {
      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
      nextValue.splice.apply(nextValue, args);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
    nextValue = spec[COMMAND_APPLY](nextValue);
  }

  for (var k in spec) {
    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
      nextValue[k] = update(value[k], spec[k]);
    }
  }

  return nextValue;
}

module.exports = update;
}).call(this,require('_process'))

},{"./Object.assign":9,"_process":7,"fbjs/lib/invariant":1,"fbjs/lib/keyOf":2}],11:[function(require,module,exports){
"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const MUI = require('material-ui');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var ____Class2I=React.Component;for(var ____Class2I____Key in ____Class2I){if(____Class2I.hasOwnProperty(____Class2I____Key)){App[____Class2I____Key]=____Class2I[____Class2I____Key];}}var ____SuperProtoOf____Class2I=____Class2I===null?null:____Class2I.prototype;App.prototype=Object.create(____SuperProtoOf____Class2I);App.prototype.constructor=App;App.__superConstructor__=____Class2I;function App(){if(____Class2I!==null){____Class2I.apply(this,arguments);}}
  Object.defineProperty(App.prototype,"render",{writable:true,configurable:true,value:function() {
    return (
      React.createElement(MUI.AppBar, {title: "Mapper"}, 
        React.createElement("iconElementRight", {style:  {  marginTop: 10} }, 
          React.createElement(MUI.ToolbarGroup, null, 
            React.createElement(MUI.TextField, {fullWidth:  false, style:  LoginTextStyle, hintText: "Username"}), 
            React.createElement(MUI.TextField, {fullWidth:  false, type: "password", style:  LoginTextStyle, hintText: "Password"})
          ), 
          React.createElement(MUI.RaisedButton, {style:  LoginButtonStyle, labelStyle:  {  fontSize: 14}, primary:  true, label: "Log In"})
        )
      )
      );
  }});

  Object.defineProperty(App.prototype,"Save",{writable:true,configurable:true,value:function(e) {
    console.log('Save Button Click:', e);
  }});


const LoginTextStyle = {
  fontSize: 14,
  width: 140,
  marginRight: 6,
};

const LoginButtonStyle = {
  marginTop: 4,
};

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('app')
);

},{"material-ui":"material-ui","material-ui/lib/styles/theme-manager":4,"react":"react","react-dom":"react-dom","react-tap-event-plugin":"react-tap-event-plugin"}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzIiwibm9kZV9tb2R1bGVzL2ZianMvbGliL2tleU9mLmpzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2xpYi9zdHlsZXMvY29sb3JzLmpzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2xpYi9zdHlsZXMvdGhlbWUtbWFuYWdlci5qcyIsIm5vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9saWIvdXRpbHMvY29sb3ItbWFuaXB1bGF0b3IuanMiLCJub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvbGliL3V0aWxzL2V4dGVuZC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLXVwZGF0ZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvT2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvdXBkYXRlLmpzIiwiL1VzZXJzL2FzcGlyaW4vV29ya3NwYWNlL21hcHBlci9zcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUdBLFlBQVksQ0FBQztBQUNiLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBQ3JFLE1BQU0sb0JBQW9CLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDL0Qsb0JBQW9CLEVBQUUsQ0FBQzs7QUFFdkIsZ0NBQUEsd0pBQUEsOEVBQUEseURBQUEsOEJBQUEscUNBQUEsZUFBQSwwREFBQSxDQUFtQztFQUNqQyw0RkFBTSxDQUFBLENBQUMsR0FBRztJQUNSO01BQ0Usb0JBQUMsVUFBVSxFQUFBLENBQUEsQ0FBQyxLQUFBLEVBQUssQ0FBQyxRQUFTLENBQUEsRUFBQTtRQUN6QixvQkFBQSxrQkFBaUIsRUFBQSxDQUFBLENBQUMsS0FBQSxFQUFLLENBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxFQUFFLEVBQUksQ0FBQSxFQUFBO1VBQzVDLG9CQUFDLGdCQUFnQixFQUFBLElBQUMsRUFBQTtZQUNoQixvQkFBQyxhQUFhLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFFLENBQUMsS0FBSyxFQUFBLENBQUUsQ0FBQyxLQUFBLEVBQUssQ0FBRSxDQUFDLGNBQWMsRUFBQSxDQUFFLENBQUMsUUFBQSxFQUFRLENBQUMsVUFBVSxDQUFBLENBQUcsQ0FBQSxFQUFBO1lBQ2xGLG9CQUFDLGFBQWEsRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUUsQ0FBQyxLQUFLLEVBQUEsQ0FBRSxDQUFDLElBQUEsRUFBSSxDQUFDLFVBQUEsRUFBVSxDQUFDLEtBQUEsRUFBSyxDQUFFLENBQUMsY0FBYyxFQUFBLENBQUUsQ0FBQyxRQUFBLEVBQVEsQ0FBQyxVQUFVLENBQUEsQ0FBRyxDQUFBO1VBQ2pGLENBQUEsRUFBQTtVQUNuQixvQkFBQyxnQkFBZ0IsRUFBQSxDQUFBLENBQUMsS0FBQSxFQUFLLENBQUUsQ0FBQyxnQkFBZ0IsRUFBQSxDQUFFLENBQUMsVUFBQSxFQUFVLENBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBQSxDQUFFLENBQUMsT0FBQSxFQUFPLENBQUUsQ0FBQyxJQUFJLEVBQUEsQ0FBRSxDQUFDLEtBQUEsRUFBSyxDQUFDLFFBQVEsQ0FBQSxDQUFHLENBQUE7UUFDOUYsQ0FBQTtNQUNSLENBQUE7UUFDWDtBQUNSLEdBQUcsRUFBQSxDQUFBOztFQUVELDBGQUFJLENBQUEsQ0FBQyxDQUFDLEdBQUc7SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDO0dBQ3RDLEVBQUEsQ0FBQTtBQUNILENBQUM7O0FBRUQsTUFBTSxjQUFjLEdBQUc7RUFDckIsUUFBUSxFQUFFLEVBQUU7RUFDWixLQUFLLEVBQUUsR0FBRztFQUNWLFdBQVcsRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQzs7QUFFRixNQUFNLGdCQUFnQixHQUFHO0VBQ3ZCLFNBQVMsRUFBRSxDQUFDO0FBQ2QsQ0FBQyxDQUFDOztBQUVGLFFBQVEsQ0FBQyxNQUFNO0VBQ2Isb0JBQUMsR0FBRyxFQUFBLElBQUEsQ0FBRyxDQUFBO0VBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7Q0FDL0IsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignSW52YXJpYW50IFZpb2xhdGlvbjogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGtleU9mXG4gKi9cblxuLyoqXG4gKiBBbGxvd3MgZXh0cmFjdGlvbiBvZiBhIG1pbmlmaWVkIGtleS4gTGV0J3MgdGhlIGJ1aWxkIHN5c3RlbSBtaW5pZnkga2V5c1xuICogd2l0aG91dCBsb3NpbmcgdGhlIGFiaWxpdHkgdG8gZHluYW1pY2FsbHkgdXNlIGtleSBzdHJpbmdzIGFzIHZhbHVlc1xuICogdGhlbXNlbHZlcy4gUGFzcyBpbiBhbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBrZXkvdmFsIHBhaXIgYW5kIGl0IHdpbGwgcmV0dXJuXG4gKiB5b3UgdGhlIHN0cmluZyBrZXkgb2YgdGhhdCBzaW5nbGUgcmVjb3JkLiBTdXBwb3NlIHlvdSB3YW50IHRvIGdyYWIgdGhlXG4gKiB2YWx1ZSBmb3IgYSBrZXkgJ2NsYXNzTmFtZScgaW5zaWRlIG9mIGFuIG9iamVjdC4gS2V5L3ZhbCBtaW5pZmljYXRpb24gbWF5XG4gKiBoYXZlIGFsaWFzZWQgdGhhdCBrZXkgdG8gYmUgJ3hhMTInLiBrZXlPZih7Y2xhc3NOYW1lOiBudWxsfSkgd2lsbCByZXR1cm5cbiAqICd4YTEyJyBpbiB0aGF0IGNhc2UuIFJlc29sdmUga2V5cyB5b3Ugd2FudCB0byB1c2Ugb25jZSBhdCBzdGFydHVwIHRpbWUsIHRoZW5cbiAqIHJldXNlIHRob3NlIHJlc29sdXRpb25zLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGtleU9mID0gZnVuY3Rpb24gKG9uZUtleU9iaikge1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBvbmVLZXlPYmopIHtcbiAgICBpZiAoIW9uZUtleU9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5T2Y7IiwiLy8gVG8gaW5jbHVkZSB0aGlzIGZpbGUgaW4geW91ciBwcm9qZWN0OlxuLy8gbGV0IG11aSA9IHJlcXVpcmUoJ211aScpO1xuLy8gbGV0IENvbG9ycyA9IG11aS5TdHlsZXMuQ29sb3JzO1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHJlZDUwOiAnI2ZmZWJlZScsXG4gIHJlZDEwMDogJyNmZmNkZDInLFxuICByZWQyMDA6ICcjZWY5YTlhJyxcbiAgcmVkMzAwOiAnI2U1NzM3MycsXG4gIHJlZDQwMDogJyNlZjUzNTAnLFxuICByZWQ1MDA6ICcjZjQ0MzM2JyxcbiAgcmVkNjAwOiAnI2U1MzkzNScsXG4gIHJlZDcwMDogJyNkMzJmMmYnLFxuICByZWQ4MDA6ICcjYzYyODI4JyxcbiAgcmVkOTAwOiAnI2I3MWMxYycsXG4gIHJlZEExMDA6ICcjZmY4YTgwJyxcbiAgcmVkQTIwMDogJyNmZjUyNTInLFxuICByZWRBNDAwOiAnI2ZmMTc0NCcsXG4gIHJlZEE3MDA6ICcjZDUwMDAwJyxcblxuICBwaW5rNTA6ICcjZmNlNGVjJyxcbiAgcGluazEwMDogJyNmOGJiZDAnLFxuICBwaW5rMjAwOiAnI2Y0OGZiMScsXG4gIHBpbmszMDA6ICcjZjA2MjkyJyxcbiAgcGluazQwMDogJyNlYzQwN2EnLFxuICBwaW5rNTAwOiAnI2U5MWU2MycsXG4gIHBpbms2MDA6ICcjZDgxYjYwJyxcbiAgcGluazcwMDogJyNjMjE4NWInLFxuICBwaW5rODAwOiAnI2FkMTQ1NycsXG4gIHBpbms5MDA6ICcjODgwZTRmJyxcbiAgcGlua0ExMDA6ICcjZmY4MGFiJyxcbiAgcGlua0EyMDA6ICcjZmY0MDgxJyxcbiAgcGlua0E0MDA6ICcjZjUwMDU3JyxcbiAgcGlua0E3MDA6ICcjYzUxMTYyJyxcblxuICBwdXJwbGU1MDogJyNmM2U1ZjUnLFxuICBwdXJwbGUxMDA6ICcjZTFiZWU3JyxcbiAgcHVycGxlMjAwOiAnI2NlOTNkOCcsXG4gIHB1cnBsZTMwMDogJyNiYTY4YzgnLFxuICBwdXJwbGU0MDA6ICcjYWI0N2JjJyxcbiAgcHVycGxlNTAwOiAnIzljMjdiMCcsXG4gIHB1cnBsZTYwMDogJyM4ZTI0YWEnLFxuICBwdXJwbGU3MDA6ICcjN2IxZmEyJyxcbiAgcHVycGxlODAwOiAnIzZhMWI5YScsXG4gIHB1cnBsZTkwMDogJyM0YTE0OGMnLFxuICBwdXJwbGVBMTAwOiAnI2VhODBmYycsXG4gIHB1cnBsZUEyMDA6ICcjZTA0MGZiJyxcbiAgcHVycGxlQTQwMDogJyNkNTAwZjknLFxuICBwdXJwbGVBNzAwOiAnI2FhMDBmZicsXG5cbiAgZGVlcFB1cnBsZTUwOiAnI2VkZTdmNicsXG4gIGRlZXBQdXJwbGUxMDA6ICcjZDFjNGU5JyxcbiAgZGVlcFB1cnBsZTIwMDogJyNiMzlkZGInLFxuICBkZWVwUHVycGxlMzAwOiAnIzk1NzVjZCcsXG4gIGRlZXBQdXJwbGU0MDA6ICcjN2U1N2MyJyxcbiAgZGVlcFB1cnBsZTUwMDogJyM2NzNhYjcnLFxuICBkZWVwUHVycGxlNjAwOiAnIzVlMzViMScsXG4gIGRlZXBQdXJwbGU3MDA6ICcjNTEyZGE4JyxcbiAgZGVlcFB1cnBsZTgwMDogJyM0NTI3YTAnLFxuICBkZWVwUHVycGxlOTAwOiAnIzMxMWI5MicsXG4gIGRlZXBQdXJwbGVBMTAwOiAnI2IzODhmZicsXG4gIGRlZXBQdXJwbGVBMjAwOiAnIzdjNGRmZicsXG4gIGRlZXBQdXJwbGVBNDAwOiAnIzY1MWZmZicsXG4gIGRlZXBQdXJwbGVBNzAwOiAnIzYyMDBlYScsXG5cbiAgaW5kaWdvNTA6ICcjZThlYWY2JyxcbiAgaW5kaWdvMTAwOiAnI2M1Y2FlOScsXG4gIGluZGlnbzIwMDogJyM5ZmE4ZGEnLFxuICBpbmRpZ28zMDA6ICcjNzk4NmNiJyxcbiAgaW5kaWdvNDAwOiAnIzVjNmJjMCcsXG4gIGluZGlnbzUwMDogJyMzZjUxYjUnLFxuICBpbmRpZ282MDA6ICcjMzk0OWFiJyxcbiAgaW5kaWdvNzAwOiAnIzMwM2Y5ZicsXG4gIGluZGlnbzgwMDogJyMyODM1OTMnLFxuICBpbmRpZ285MDA6ICcjMWEyMzdlJyxcbiAgaW5kaWdvQTEwMDogJyM4YzllZmYnLFxuICBpbmRpZ29BMjAwOiAnIzUzNmRmZScsXG4gIGluZGlnb0E0MDA6ICcjM2Q1YWZlJyxcbiAgaW5kaWdvQTcwMDogJyMzMDRmZmUnLFxuXG4gIGJsdWU1MDogJyNlM2YyZmQnLFxuICBibHVlMTAwOiAnI2JiZGVmYicsXG4gIGJsdWUyMDA6ICcjOTBjYWY5JyxcbiAgYmx1ZTMwMDogJyM2NGI1ZjYnLFxuICBibHVlNDAwOiAnIzQyYTVmNScsXG4gIGJsdWU1MDA6ICcjMjE5NmYzJyxcbiAgYmx1ZTYwMDogJyMxZTg4ZTUnLFxuICBibHVlNzAwOiAnIzE5NzZkMicsXG4gIGJsdWU4MDA6ICcjMTU2NWMwJyxcbiAgYmx1ZTkwMDogJyMwZDQ3YTEnLFxuICBibHVlQTEwMDogJyM4MmIxZmYnLFxuICBibHVlQTIwMDogJyM0NDhhZmYnLFxuICBibHVlQTQwMDogJyMyOTc5ZmYnLFxuICBibHVlQTcwMDogJyMyOTYyZmYnLFxuXG4gIGxpZ2h0Qmx1ZTUwOiAnI2UxZjVmZScsXG4gIGxpZ2h0Qmx1ZTEwMDogJyNiM2U1ZmMnLFxuICBsaWdodEJsdWUyMDA6ICcjODFkNGZhJyxcbiAgbGlnaHRCbHVlMzAwOiAnIzRmYzNmNycsXG4gIGxpZ2h0Qmx1ZTQwMDogJyMyOWI2ZjYnLFxuICBsaWdodEJsdWU1MDA6ICcjMDNhOWY0JyxcbiAgbGlnaHRCbHVlNjAwOiAnIzAzOWJlNScsXG4gIGxpZ2h0Qmx1ZTcwMDogJyMwMjg4ZDEnLFxuICBsaWdodEJsdWU4MDA6ICcjMDI3N2JkJyxcbiAgbGlnaHRCbHVlOTAwOiAnIzAxNTc5YicsXG4gIGxpZ2h0Qmx1ZUExMDA6ICcjODBkOGZmJyxcbiAgbGlnaHRCbHVlQTIwMDogJyM0MGM0ZmYnLFxuICBsaWdodEJsdWVBNDAwOiAnIzAwYjBmZicsXG4gIGxpZ2h0Qmx1ZUE3MDA6ICcjMDA5MWVhJyxcblxuICBjeWFuNTA6ICcjZTBmN2ZhJyxcbiAgY3lhbjEwMDogJyNiMmViZjInLFxuICBjeWFuMjAwOiAnIzgwZGVlYScsXG4gIGN5YW4zMDA6ICcjNGRkMGUxJyxcbiAgY3lhbjQwMDogJyMyNmM2ZGEnLFxuICBjeWFuNTAwOiAnIzAwYmNkNCcsXG4gIGN5YW42MDA6ICcjMDBhY2MxJyxcbiAgY3lhbjcwMDogJyMwMDk3YTcnLFxuICBjeWFuODAwOiAnIzAwODM4ZicsXG4gIGN5YW45MDA6ICcjMDA2MDY0JyxcbiAgY3lhbkExMDA6ICcjODRmZmZmJyxcbiAgY3lhbkEyMDA6ICcjMThmZmZmJyxcbiAgY3lhbkE0MDA6ICcjMDBlNWZmJyxcbiAgY3lhbkE3MDA6ICcjMDBiOGQ0JyxcblxuICB0ZWFsNTA6ICcjZTBmMmYxJyxcbiAgdGVhbDEwMDogJyNiMmRmZGInLFxuICB0ZWFsMjAwOiAnIzgwY2JjNCcsXG4gIHRlYWwzMDA6ICcjNGRiNmFjJyxcbiAgdGVhbDQwMDogJyMyNmE2OWEnLFxuICB0ZWFsNTAwOiAnIzAwOTY4OCcsXG4gIHRlYWw2MDA6ICcjMDA4OTdiJyxcbiAgdGVhbDcwMDogJyMwMDc5NmInLFxuICB0ZWFsODAwOiAnIzAwNjk1YycsXG4gIHRlYWw5MDA6ICcjMDA0ZDQwJyxcbiAgdGVhbEExMDA6ICcjYTdmZmViJyxcbiAgdGVhbEEyMDA6ICcjNjRmZmRhJyxcbiAgdGVhbEE0MDA6ICcjMWRlOWI2JyxcbiAgdGVhbEE3MDA6ICcjMDBiZmE1JyxcblxuICBncmVlbjUwOiAnI2U4ZjVlOScsXG4gIGdyZWVuMTAwOiAnI2M4ZTZjOScsXG4gIGdyZWVuMjAwOiAnI2E1ZDZhNycsXG4gIGdyZWVuMzAwOiAnIzgxYzc4NCcsXG4gIGdyZWVuNDAwOiAnIzY2YmI2YScsXG4gIGdyZWVuNTAwOiAnIzRjYWY1MCcsXG4gIGdyZWVuNjAwOiAnIzQzYTA0NycsXG4gIGdyZWVuNzAwOiAnIzM4OGUzYycsXG4gIGdyZWVuODAwOiAnIzJlN2QzMicsXG4gIGdyZWVuOTAwOiAnIzFiNWUyMCcsXG4gIGdyZWVuQTEwMDogJyNiOWY2Y2EnLFxuICBncmVlbkEyMDA6ICcjNjlmMGFlJyxcbiAgZ3JlZW5BNDAwOiAnIzAwZTY3NicsXG4gIGdyZWVuQTcwMDogJyMwMGM4NTMnLFxuXG4gIGxpZ2h0R3JlZW41MDogJyNmMWY4ZTknLFxuICBsaWdodEdyZWVuMTAwOiAnI2RjZWRjOCcsXG4gIGxpZ2h0R3JlZW4yMDA6ICcjYzVlMWE1JyxcbiAgbGlnaHRHcmVlbjMwMDogJyNhZWQ1ODEnLFxuICBsaWdodEdyZWVuNDAwOiAnIzljY2M2NScsXG4gIGxpZ2h0R3JlZW41MDA6ICcjOGJjMzRhJyxcbiAgbGlnaHRHcmVlbjYwMDogJyM3Y2IzNDInLFxuICBsaWdodEdyZWVuNzAwOiAnIzY4OWYzOCcsXG4gIGxpZ2h0R3JlZW44MDA6ICcjNTU4YjJmJyxcbiAgbGlnaHRHcmVlbjkwMDogJyMzMzY5MWUnLFxuICBsaWdodEdyZWVuQTEwMDogJyNjY2ZmOTAnLFxuICBsaWdodEdyZWVuQTIwMDogJyNiMmZmNTknLFxuICBsaWdodEdyZWVuQTQwMDogJyM3NmZmMDMnLFxuICBsaWdodEdyZWVuQTcwMDogJyM2NGRkMTcnLFxuXG4gIGxpbWU1MDogJyNmOWZiZTcnLFxuICBsaW1lMTAwOiAnI2YwZjRjMycsXG4gIGxpbWUyMDA6ICcjZTZlZTljJyxcbiAgbGltZTMwMDogJyNkY2U3NzUnLFxuICBsaW1lNDAwOiAnI2Q0ZTE1NycsXG4gIGxpbWU1MDA6ICcjY2RkYzM5JyxcbiAgbGltZTYwMDogJyNjMGNhMzMnLFxuICBsaW1lNzAwOiAnI2FmYjQyYicsXG4gIGxpbWU4MDA6ICcjOWU5ZDI0JyxcbiAgbGltZTkwMDogJyM4Mjc3MTcnLFxuICBsaW1lQTEwMDogJyNmNGZmODEnLFxuICBsaW1lQTIwMDogJyNlZWZmNDEnLFxuICBsaW1lQTQwMDogJyNjNmZmMDAnLFxuICBsaW1lQTcwMDogJyNhZWVhMDAnLFxuXG4gIHllbGxvdzUwOiAnI2ZmZmRlNycsXG4gIHllbGxvdzEwMDogJyNmZmY5YzQnLFxuICB5ZWxsb3cyMDA6ICcjZmZmNTlkJyxcbiAgeWVsbG93MzAwOiAnI2ZmZjE3NicsXG4gIHllbGxvdzQwMDogJyNmZmVlNTgnLFxuICB5ZWxsb3c1MDA6ICcjZmZlYjNiJyxcbiAgeWVsbG93NjAwOiAnI2ZkZDgzNScsXG4gIHllbGxvdzcwMDogJyNmYmMwMmQnLFxuICB5ZWxsb3c4MDA6ICcjZjlhODI1JyxcbiAgeWVsbG93OTAwOiAnI2Y1N2YxNycsXG4gIHllbGxvd0ExMDA6ICcjZmZmZjhkJyxcbiAgeWVsbG93QTIwMDogJyNmZmZmMDAnLFxuICB5ZWxsb3dBNDAwOiAnI2ZmZWEwMCcsXG4gIHllbGxvd0E3MDA6ICcjZmZkNjAwJyxcblxuICBhbWJlcjUwOiAnI2ZmZjhlMScsXG4gIGFtYmVyMTAwOiAnI2ZmZWNiMycsXG4gIGFtYmVyMjAwOiAnI2ZmZTA4MicsXG4gIGFtYmVyMzAwOiAnI2ZmZDU0ZicsXG4gIGFtYmVyNDAwOiAnI2ZmY2EyOCcsXG4gIGFtYmVyNTAwOiAnI2ZmYzEwNycsXG4gIGFtYmVyNjAwOiAnI2ZmYjMwMCcsXG4gIGFtYmVyNzAwOiAnI2ZmYTAwMCcsXG4gIGFtYmVyODAwOiAnI2ZmOGYwMCcsXG4gIGFtYmVyOTAwOiAnI2ZmNmYwMCcsXG4gIGFtYmVyQTEwMDogJyNmZmU1N2YnLFxuICBhbWJlckEyMDA6ICcjZmZkNzQwJyxcbiAgYW1iZXJBNDAwOiAnI2ZmYzQwMCcsXG4gIGFtYmVyQTcwMDogJyNmZmFiMDAnLFxuXG4gIG9yYW5nZTUwOiAnI2ZmZjNlMCcsXG4gIG9yYW5nZTEwMDogJyNmZmUwYjInLFxuICBvcmFuZ2UyMDA6ICcjZmZjYzgwJyxcbiAgb3JhbmdlMzAwOiAnI2ZmYjc0ZCcsXG4gIG9yYW5nZTQwMDogJyNmZmE3MjYnLFxuICBvcmFuZ2U1MDA6ICcjZmY5ODAwJyxcbiAgb3JhbmdlNjAwOiAnI2ZiOGMwMCcsXG4gIG9yYW5nZTcwMDogJyNmNTdjMDAnLFxuICBvcmFuZ2U4MDA6ICcjZWY2YzAwJyxcbiAgb3JhbmdlOTAwOiAnI2U2NTEwMCcsXG4gIG9yYW5nZUExMDA6ICcjZmZkMTgwJyxcbiAgb3JhbmdlQTIwMDogJyNmZmFiNDAnLFxuICBvcmFuZ2VBNDAwOiAnI2ZmOTEwMCcsXG4gIG9yYW5nZUE3MDA6ICcjZmY2ZDAwJyxcblxuICBkZWVwT3JhbmdlNTA6ICcjZmJlOWU3JyxcbiAgZGVlcE9yYW5nZTEwMDogJyNmZmNjYmMnLFxuICBkZWVwT3JhbmdlMjAwOiAnI2ZmYWI5MScsXG4gIGRlZXBPcmFuZ2UzMDA6ICcjZmY4YTY1JyxcbiAgZGVlcE9yYW5nZTQwMDogJyNmZjcwNDMnLFxuICBkZWVwT3JhbmdlNTAwOiAnI2ZmNTcyMicsXG4gIGRlZXBPcmFuZ2U2MDA6ICcjZjQ1MTFlJyxcbiAgZGVlcE9yYW5nZTcwMDogJyNlNjRhMTknLFxuICBkZWVwT3JhbmdlODAwOiAnI2Q4NDMxNScsXG4gIGRlZXBPcmFuZ2U5MDA6ICcjYmYzNjBjJyxcbiAgZGVlcE9yYW5nZUExMDA6ICcjZmY5ZTgwJyxcbiAgZGVlcE9yYW5nZUEyMDA6ICcjZmY2ZTQwJyxcbiAgZGVlcE9yYW5nZUE0MDA6ICcjZmYzZDAwJyxcbiAgZGVlcE9yYW5nZUE3MDA6ICcjZGQyYzAwJyxcblxuICBicm93bjUwOiAnI2VmZWJlOScsXG4gIGJyb3duMTAwOiAnI2Q3Y2NjOCcsXG4gIGJyb3duMjAwOiAnI2JjYWFhNCcsXG4gIGJyb3duMzAwOiAnI2ExODg3ZicsXG4gIGJyb3duNDAwOiAnIzhkNmU2MycsXG4gIGJyb3duNTAwOiAnIzc5NTU0OCcsXG4gIGJyb3duNjAwOiAnIzZkNGM0MScsXG4gIGJyb3duNzAwOiAnIzVkNDAzNycsXG4gIGJyb3duODAwOiAnIzRlMzQyZScsXG4gIGJyb3duOTAwOiAnIzNlMjcyMycsXG5cbiAgYmx1ZUdyZXk1MDogJyNlY2VmZjEnLFxuICBibHVlR3JleTEwMDogJyNjZmQ4ZGMnLFxuICBibHVlR3JleTIwMDogJyNiMGJlYzUnLFxuICBibHVlR3JleTMwMDogJyM5MGE0YWUnLFxuICBibHVlR3JleTQwMDogJyM3ODkwOWMnLFxuICBibHVlR3JleTUwMDogJyM2MDdkOGInLFxuICBibHVlR3JleTYwMDogJyM1NDZlN2EnLFxuICBibHVlR3JleTcwMDogJyM0NTVhNjQnLFxuICBibHVlR3JleTgwMDogJyMzNzQ3NGYnLFxuICBibHVlR3JleTkwMDogJyMyNjMyMzgnLFxuXG4gIGdyZXk1MDogJyNmYWZhZmEnLFxuICBncmV5MTAwOiAnI2Y1ZjVmNScsXG4gIGdyZXkyMDA6ICcjZWVlZWVlJyxcbiAgZ3JleTMwMDogJyNlMGUwZTAnLFxuICBncmV5NDAwOiAnI2JkYmRiZCcsXG4gIGdyZXk1MDA6ICcjOWU5ZTllJyxcbiAgZ3JleTYwMDogJyM3NTc1NzUnLFxuICBncmV5NzAwOiAnIzYxNjE2MScsXG4gIGdyZXk4MDA6ICcjNDI0MjQyJyxcbiAgZ3JleTkwMDogJyMyMTIxMjEnLFxuXG4gIGJsYWNrOiAnIzAwMDAwMCcsXG4gIHdoaXRlOiAnI2ZmZmZmZicsXG5cbiAgdHJhbnNwYXJlbnQ6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgZnVsbEJsYWNrOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gIGRhcmtCbGFjazogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICBsaWdodEJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gIG1pbkJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gIGZhaW50QmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgZnVsbFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gIGRhcmtXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44NyknLFxuICBsaWdodFdoaXRlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KSdcblxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDb2xvcnMgPSByZXF1aXJlKCcuL2NvbG9ycycpO1xudmFyIENvbG9yTWFuaXB1bGF0b3IgPSByZXF1aXJlKCcuLi91dGlscy9jb2xvci1tYW5pcHVsYXRvcicpO1xudmFyIEV4dGVuZCA9IHJlcXVpcmUoJy4uL3V0aWxzL2V4dGVuZCcpO1xudmFyIHVwZGF0ZSA9IHJlcXVpcmUoJ3JlYWN0LWFkZG9ucy11cGRhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLy9nZXQgdGhlIE1VSSB0aGVtZSBjb3JyZXNwb25kaW5nIHRvIGEgcmF3IHRoZW1lXG4gIGdldE11aVRoZW1lOiBmdW5jdGlvbiBnZXRNdWlUaGVtZShyYXdUaGVtZSkge1xuICAgIHZhciByZXR1cm5PYmogPSB7XG4gICAgICBhcHBCYXI6IHtcbiAgICAgICAgY29sb3I6IHJhd1RoZW1lLnBhbGV0dGUucHJpbWFyeTFDb2xvcixcbiAgICAgICAgdGV4dENvbG9yOiByYXdUaGVtZS5wYWxldHRlLmFsdGVybmF0ZVRleHRDb2xvcixcbiAgICAgICAgaGVpZ2h0OiByYXdUaGVtZS5zcGFjaW5nLmRlc2t0b3BLZXlsaW5lSW5jcmVtZW50XG4gICAgICB9LFxuICAgICAgYXZhdGFyOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA4KSdcbiAgICAgIH0sXG4gICAgICBidXR0b246IHtcbiAgICAgICAgaGVpZ2h0OiAzNixcbiAgICAgICAgbWluV2lkdGg6IDg4LFxuICAgICAgICBpY29uQnV0dG9uU2l6ZTogcmF3VGhlbWUuc3BhY2luZy5pY29uU2l6ZSAqIDJcbiAgICAgIH0sXG4gICAgICBjYXJkVGV4dDoge1xuICAgICAgICB0ZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUudGV4dENvbG9yXG4gICAgICB9LFxuICAgICAgY2hlY2tib3g6IHtcbiAgICAgICAgYm94Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUudGV4dENvbG9yLFxuICAgICAgICBjaGVja2VkQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUucHJpbWFyeTFDb2xvcixcbiAgICAgICAgcmVxdWlyZWRDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5wcmltYXJ5MUNvbG9yLFxuICAgICAgICBkaXNhYmxlZENvbG9yOiByYXdUaGVtZS5wYWxldHRlLmRpc2FibGVkQ29sb3IsXG4gICAgICAgIGxhYmVsQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUudGV4dENvbG9yLFxuICAgICAgICBsYWJlbERpc2FibGVkQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuZGlzYWJsZWRDb2xvclxuICAgICAgfSxcbiAgICAgIGRhdGVQaWNrZXI6IHtcbiAgICAgICAgY29sb3I6IHJhd1RoZW1lLnBhbGV0dGUucHJpbWFyeTFDb2xvcixcbiAgICAgICAgdGV4dENvbG9yOiByYXdUaGVtZS5wYWxldHRlLmFsdGVybmF0ZVRleHRDb2xvcixcbiAgICAgICAgY2FsZW5kYXJUZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUudGV4dENvbG9yLFxuICAgICAgICBzZWxlY3RDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5wcmltYXJ5MkNvbG9yLFxuICAgICAgICBzZWxlY3RUZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuYWx0ZXJuYXRlVGV4dENvbG9yXG4gICAgICB9LFxuICAgICAgZHJvcERvd25NZW51OiB7XG4gICAgICAgIGFjY2VudENvbG9yOiByYXdUaGVtZS5wYWxldHRlLmJvcmRlckNvbG9yXG4gICAgICB9LFxuICAgICAgZmxhdEJ1dHRvbjoge1xuICAgICAgICBjb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5hbHRlcm5hdGVUZXh0Q29sb3IsXG4gICAgICAgIHRleHRDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS50ZXh0Q29sb3IsXG4gICAgICAgIHByaW1hcnlUZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuYWNjZW50MUNvbG9yLFxuICAgICAgICBzZWNvbmRhcnlUZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUucHJpbWFyeTFDb2xvclxuICAgICAgfSxcbiAgICAgIGZsb2F0aW5nQWN0aW9uQnV0dG9uOiB7XG4gICAgICAgIGJ1dHRvblNpemU6IDU2LFxuICAgICAgICBtaW5pU2l6ZTogNDAsXG4gICAgICAgIGNvbG9yOiByYXdUaGVtZS5wYWxldHRlLmFjY2VudDFDb2xvcixcbiAgICAgICAgaWNvbkNvbG9yOiByYXdUaGVtZS5wYWxldHRlLmFsdGVybmF0ZVRleHRDb2xvcixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUucHJpbWFyeTFDb2xvcixcbiAgICAgICAgc2Vjb25kYXJ5SWNvbkNvbG9yOiByYXdUaGVtZS5wYWxldHRlLmFsdGVybmF0ZVRleHRDb2xvcixcbiAgICAgICAgZGlzYWJsZWRUZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuZGlzYWJsZWRDb2xvclxuICAgICAgfSxcbiAgICAgIGdyaWRUaWxlOiB7XG4gICAgICAgIHRleHRDb2xvcjogQ29sb3JzLndoaXRlXG4gICAgICB9LFxuICAgICAgaW5rQmFyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5hY2NlbnQxQ29sb3JcbiAgICAgIH0sXG4gICAgICBsZWZ0TmF2OiB7XG4gICAgICAgIHdpZHRoOiByYXdUaGVtZS5zcGFjaW5nLmRlc2t0b3BLZXlsaW5lSW5jcmVtZW50ICogNCxcbiAgICAgICAgY29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuY2FudmFzQ29sb3JcbiAgICAgIH0sXG4gICAgICBsaXN0SXRlbToge1xuICAgICAgICBuZXN0ZWRMZXZlbERlcHRoOiAxOFxuICAgICAgfSxcbiAgICAgIG1lbnU6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiByYXdUaGVtZS5wYWxldHRlLmNhbnZhc0NvbG9yLFxuICAgICAgICBjb250YWluZXJCYWNrZ3JvdW5kQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuY2FudmFzQ29sb3JcbiAgICAgIH0sXG4gICAgICBtZW51SXRlbToge1xuICAgICAgICBkYXRhSGVpZ2h0OiAzMixcbiAgICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgICAgaG92ZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjAzNSknLFxuICAgICAgICBwYWRkaW5nOiByYXdUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXIsXG4gICAgICAgIHNlbGVjdGVkVGV4dENvbG9yOiByYXdUaGVtZS5wYWxldHRlLmFjY2VudDFDb2xvclxuICAgICAgfSxcbiAgICAgIG1lbnVTdWJoZWFkZXI6IHtcbiAgICAgICAgcGFkZGluZzogcmF3VGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyLFxuICAgICAgICBib3JkZXJDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5ib3JkZXJDb2xvcixcbiAgICAgICAgdGV4dENvbG9yOiByYXdUaGVtZS5wYWxldHRlLnByaW1hcnkxQ29sb3JcbiAgICAgIH0sXG4gICAgICBwYXBlcjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuY2FudmFzQ29sb3JcbiAgICAgIH0sXG4gICAgICByYWRpb0J1dHRvbjoge1xuICAgICAgICBib3JkZXJDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS50ZXh0Q29sb3IsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5hbHRlcm5hdGVUZXh0Q29sb3IsXG4gICAgICAgIGNoZWNrZWRDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5wcmltYXJ5MUNvbG9yLFxuICAgICAgICByZXF1aXJlZENvbG9yOiByYXdUaGVtZS5wYWxldHRlLnByaW1hcnkxQ29sb3IsXG4gICAgICAgIGRpc2FibGVkQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuZGlzYWJsZWRDb2xvcixcbiAgICAgICAgc2l6ZTogMjQsXG4gICAgICAgIGxhYmVsQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUudGV4dENvbG9yLFxuICAgICAgICBsYWJlbERpc2FibGVkQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuZGlzYWJsZWRDb2xvclxuICAgICAgfSxcbiAgICAgIHJhaXNlZEJ1dHRvbjoge1xuICAgICAgICBjb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5hbHRlcm5hdGVUZXh0Q29sb3IsXG4gICAgICAgIHRleHRDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS50ZXh0Q29sb3IsXG4gICAgICAgIHByaW1hcnlDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5hY2NlbnQxQ29sb3IsXG4gICAgICAgIHByaW1hcnlUZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuYWx0ZXJuYXRlVGV4dENvbG9yLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5wcmltYXJ5MUNvbG9yLFxuICAgICAgICBzZWNvbmRhcnlUZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuYWx0ZXJuYXRlVGV4dENvbG9yXG4gICAgICB9LFxuICAgICAgcmVmcmVzaEluZGljYXRvcjoge1xuICAgICAgICBzdHJva2VDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5ib3JkZXJDb2xvcixcbiAgICAgICAgbG9hZGluZ1N0cm9rZUNvbG9yOiByYXdUaGVtZS5wYWxldHRlLnByaW1hcnkxQ29sb3JcbiAgICAgIH0sXG4gICAgICBzbGlkZXI6IHtcbiAgICAgICAgdHJhY2tTaXplOiAyLFxuICAgICAgICB0cmFja0NvbG9yOiByYXdUaGVtZS5wYWxldHRlLnByaW1hcnkzQ29sb3IsXG4gICAgICAgIHRyYWNrQ29sb3JTZWxlY3RlZDogcmF3VGhlbWUucGFsZXR0ZS5hY2NlbnQzQ29sb3IsXG4gICAgICAgIGhhbmRsZVNpemU6IDEyLFxuICAgICAgICBoYW5kbGVTaXplRGlzYWJsZWQ6IDgsXG4gICAgICAgIGhhbmRsZVNpemVBY3RpdmU6IDE4LFxuICAgICAgICBoYW5kbGVDb2xvclplcm86IHJhd1RoZW1lLnBhbGV0dGUuYm9yZGVyQ29sb3IsXG4gICAgICAgIGhhbmRsZUZpbGxDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5hbHRlcm5hdGVUZXh0Q29sb3IsXG4gICAgICAgIHNlbGVjdGlvbkNvbG9yOiByYXdUaGVtZS5wYWxldHRlLnByaW1hcnkxQ29sb3IsXG4gICAgICAgIHJpcHBsZUNvbG9yOiByYXdUaGVtZS5wYWxldHRlLnByaW1hcnkxQ29sb3JcbiAgICAgIH0sXG4gICAgICBzbmFja2Jhcjoge1xuICAgICAgICB0ZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuYWx0ZXJuYXRlVGV4dENvbG9yLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUudGV4dENvbG9yLFxuICAgICAgICBhY3Rpb25Db2xvcjogcmF3VGhlbWUucGFsZXR0ZS5hY2NlbnQxQ29sb3JcbiAgICAgIH0sXG4gICAgICB0YWJsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuY2FudmFzQ29sb3JcbiAgICAgIH0sXG4gICAgICB0YWJsZUhlYWRlcjoge1xuICAgICAgICBib3JkZXJDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5ib3JkZXJDb2xvclxuICAgICAgfSxcbiAgICAgIHRhYmxlSGVhZGVyQ29sdW1uOiB7XG4gICAgICAgIHRleHRDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5wcmltYXJ5M0NvbG9yLFxuICAgICAgICBoZWlnaHQ6IDU2LFxuICAgICAgICBzcGFjaW5nOiAyNFxuICAgICAgfSxcbiAgICAgIHRhYmxlRm9vdGVyOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiByYXdUaGVtZS5wYWxldHRlLmJvcmRlckNvbG9yLFxuICAgICAgICB0ZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUucHJpbWFyeTNDb2xvclxuICAgICAgfSxcbiAgICAgIHRhYmxlUm93OiB7XG4gICAgICAgIGhvdmVyQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuYWNjZW50MkNvbG9yLFxuICAgICAgICBzdHJpcGVDb2xvcjogQ29sb3JNYW5pcHVsYXRvci5saWdodGVuKHJhd1RoZW1lLnBhbGV0dGUucHJpbWFyeTFDb2xvciwgMC41NSksXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuYm9yZGVyQ29sb3IsXG4gICAgICAgIHRleHRDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS50ZXh0Q29sb3IsXG4gICAgICAgIGJvcmRlckNvbG9yOiByYXdUaGVtZS5wYWxldHRlLmJvcmRlckNvbG9yXG4gICAgICB9LFxuICAgICAgdGFibGVSb3dDb2x1bW46IHtcbiAgICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgICAgc3BhY2luZzogMjRcbiAgICAgIH0sXG4gICAgICB0aW1lUGlja2VyOiB7XG4gICAgICAgIGNvbG9yOiByYXdUaGVtZS5wYWxldHRlLmFsdGVybmF0ZVRleHRDb2xvcixcbiAgICAgICAgdGV4dENvbG9yOiByYXdUaGVtZS5wYWxldHRlLmFjY2VudDNDb2xvcixcbiAgICAgICAgYWNjZW50Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUucHJpbWFyeTFDb2xvcixcbiAgICAgICAgY2xvY2tDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5wcmltYXJ5M0NvbG9yLFxuICAgICAgICBzZWxlY3RDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5wcmltYXJ5MkNvbG9yLFxuICAgICAgICBzZWxlY3RUZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuYWx0ZXJuYXRlVGV4dENvbG9yXG4gICAgICB9LFxuICAgICAgdG9nZ2xlOiB7XG4gICAgICAgIHRodW1iT25Db2xvcjogcmF3VGhlbWUucGFsZXR0ZS5wcmltYXJ5MUNvbG9yLFxuICAgICAgICB0aHVtYk9mZkNvbG9yOiByYXdUaGVtZS5wYWxldHRlLmFjY2VudDJDb2xvcixcbiAgICAgICAgdGh1bWJEaXNhYmxlZENvbG9yOiByYXdUaGVtZS5wYWxldHRlLmJvcmRlckNvbG9yLFxuICAgICAgICB0aHVtYlJlcXVpcmVkQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUucHJpbWFyeTFDb2xvcixcbiAgICAgICAgdHJhY2tPbkNvbG9yOiBDb2xvck1hbmlwdWxhdG9yLmZhZGUocmF3VGhlbWUucGFsZXR0ZS5wcmltYXJ5MUNvbG9yLCAwLjUpLFxuICAgICAgICB0cmFja09mZkNvbG9yOiByYXdUaGVtZS5wYWxldHRlLnByaW1hcnkzQ29sb3IsXG4gICAgICAgIHRyYWNrRGlzYWJsZWRDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5wcmltYXJ5M0NvbG9yLFxuICAgICAgICBsYWJlbENvbG9yOiByYXdUaGVtZS5wYWxldHRlLnRleHRDb2xvcixcbiAgICAgICAgbGFiZWxEaXNhYmxlZENvbG9yOiByYXdUaGVtZS5wYWxldHRlLmRpc2FibGVkQ29sb3JcbiAgICAgIH0sXG4gICAgICB0b29sYmFyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JNYW5pcHVsYXRvci5kYXJrZW4ocmF3VGhlbWUucGFsZXR0ZS5hY2NlbnQyQ29sb3IsIDAuMDUpLFxuICAgICAgICBoZWlnaHQ6IDU2LFxuICAgICAgICB0aXRsZUZvbnRTaXplOiAyMCxcbiAgICAgICAgaWNvbkNvbG9yOiAncmdiYSgwLCAwLCAwLCAuNDApJyxcbiAgICAgICAgc2VwYXJhdG9yQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC4xNzUpJyxcbiAgICAgICAgbWVudUhvdmVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC4xMCknXG4gICAgICB9LFxuICAgICAgdGFiczoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJhd1RoZW1lLnBhbGV0dGUucHJpbWFyeTFDb2xvcixcbiAgICAgICAgdGV4dENvbG9yOiBDb2xvck1hbmlwdWxhdG9yLmZhZGUocmF3VGhlbWUucGFsZXR0ZS5hbHRlcm5hdGVUZXh0Q29sb3IsIDAuNiksXG4gICAgICAgIHNlbGVjdGVkVGV4dENvbG9yOiByYXdUaGVtZS5wYWxldHRlLmFsdGVybmF0ZVRleHRDb2xvclxuICAgICAgfSxcbiAgICAgIHRleHRGaWVsZDoge1xuICAgICAgICB0ZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUudGV4dENvbG9yLFxuICAgICAgICBoaW50Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuZGlzYWJsZWRDb2xvcixcbiAgICAgICAgZmxvYXRpbmdMYWJlbENvbG9yOiByYXdUaGVtZS5wYWxldHRlLnRleHRDb2xvcixcbiAgICAgICAgZGlzYWJsZWRUZXh0Q29sb3I6IHJhd1RoZW1lLnBhbGV0dGUuZGlzYWJsZWRDb2xvcixcbiAgICAgICAgZXJyb3JDb2xvcjogQ29sb3JzLnJlZDUwMCxcbiAgICAgICAgZm9jdXNDb2xvcjogcmF3VGhlbWUucGFsZXR0ZS5wcmltYXJ5MUNvbG9yLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiByYXdUaGVtZS5wYWxldHRlLmJvcmRlckNvbG9yXG4gICAgICB9LFxuICAgICAgaXNSdGw6IGZhbHNlXG4gICAgfTtcblxuICAgIC8vYWRkIHByb3BlcnRpZXMgdG8gb2JqZWN0cyBpbnNpZGUgJ3JldHVybk9iaicgdGhhdCBkZXBlbmQgb24gZXhpc3RpbmcgcHJvcGVydGllc1xuICAgIHJldHVybk9iai5mbGF0QnV0dG9uLmRpc2FibGVkVGV4dENvbG9yID0gQ29sb3JNYW5pcHVsYXRvci5mYWRlKHJldHVybk9iai5mbGF0QnV0dG9uLnRleHRDb2xvciwgMC4zKTtcbiAgICByZXR1cm5PYmoucmFpc2VkQnV0dG9uLmRpc2FibGVkQ29sb3IgPSBDb2xvck1hbmlwdWxhdG9yLmRhcmtlbihyZXR1cm5PYmoucmFpc2VkQnV0dG9uLmNvbG9yLCAwLjEpO1xuICAgIHJldHVybk9iai5yYWlzZWRCdXR0b24uZGlzYWJsZWRUZXh0Q29sb3IgPSBDb2xvck1hbmlwdWxhdG9yLmZhZGUocmV0dXJuT2JqLnJhaXNlZEJ1dHRvbi50ZXh0Q29sb3IsIDAuMyk7XG4gICAgcmV0dXJuT2JqLnRvZ2dsZS50cmFja1JlcXVpcmVkQ29sb3IgPSBDb2xvck1hbmlwdWxhdG9yLmZhZGUocmV0dXJuT2JqLnRvZ2dsZS50aHVtYlJlcXVpcmVkQ29sb3IsIDAuNSk7XG5cbiAgICAvL2FwcGVuZCB0aGUgcmF3IHRoZW1lIG9iamVjdCB0byAncmV0dXJuT2JqJ1xuICAgIHJldHVybk9iai5yYXdUaGVtZSA9IHJhd1RoZW1lO1xuXG4gICAgLy9zZXQgJ3N0YXRpYycga2V5IGFzIHRydWUgKGJ5IGRlZmF1bHQpIG9uIHJldHVybiBvYmplY3QuIFRoaXMgaXMgdG8gc3VwcG9ydCB0aGUgQ29udGV4dFB1cmUgbWl4aW4uXG4gICAgcmV0dXJuT2JqWydzdGF0aWMnXSA9IHRydWU7XG5cbiAgICByZXR1cm4gcmV0dXJuT2JqO1xuICB9LFxuXG4gIC8vZnVuY3Rpb25zIHRvIG1vZGlmeSBwcm9wZXJ0aWVzIG9mIHJhdyB0aGVtZSwgbmFtZWx5IHNwYWNpbmcsIHBhbGV0dGVcbiAgLy9hbmQgZm9udCBmYW1pbHkuIFRoZXNlIGZ1bmN0aW9ucyB1c2UgdGhlIFJlYWN0IHVwZGF0ZSBpbW11dGFiaWxpdHkgaGVscGVyXG4gIC8vdG8gY3JlYXRlIGEgbmV3IG9iamVjdCBmb3IgdGhlIHJhdyB0aGVtZSwgYW5kIHJldHVybiBhIG5ldyBNVUkgdGhlbWUgb2JqZWN0XG5cbiAgLy9mdW5jdGlvbiB0byBtb2RpZnkgdGhlIHNwYWNpbmcgb2YgdGhlIHJhdyB0aGVtZS4gVGhpcyBmdW5jdGlvbiByZWNvbXB1dGVzXG4gIC8vdGhlIE1VSSB0aGVtZSBhbmQgcmV0dXJucyBpdCBiYXNlZCBvbiB0aGUgbmV3IHRoZW1lLlxuICBtb2RpZnlSYXdUaGVtZVNwYWNpbmc6IGZ1bmN0aW9uIG1vZGlmeVJhd1RoZW1lU3BhY2luZyhtdWlUaGVtZSwgbmV3U3BhY2luZykge1xuICAgIHZhciBuZXdSYXdUaGVtZSA9IHVwZGF0ZShtdWlUaGVtZS5yYXdUaGVtZSwgeyBzcGFjaW5nOiB7ICRzZXQ6IG5ld1NwYWNpbmcgfSB9KTtcbiAgICByZXR1cm4gdGhpcy5nZXRNdWlUaGVtZShuZXdSYXdUaGVtZSk7XG4gIH0sXG5cbiAgLy9mdW5jdGlvbiB0byBtb2RpZnkgdGhlIHBhbGV0dGUgb2YgdGhlIHJhdyB0aGVtZS4gVGhpcyBmdW5jdGlvbiByZWNvbXB1dGVzXG4gIC8vdGhlIE1VSSB0aGVtZSBhbmQgcmV0dXJucyBpdCBiYXNlZCBvbiB0aGUgbmV3IHJhdyB0aGVtZS5cbiAgLy9rZXlzIGluc2lkZSAnbmV3UGFsZXR0ZScgb3ZlcnJpZGUgdmFsdWVzIGZvciBleGlzdGluZyBrZXlzIGluIHBhbGV0dGVcbiAgbW9kaWZ5UmF3VGhlbWVQYWxldHRlOiBmdW5jdGlvbiBtb2RpZnlSYXdUaGVtZVBhbGV0dGUobXVpVGhlbWUsIG5ld1BhbGV0dGVLZXlzKSB7XG4gICAgdmFyIG5ld1BhbGV0dGUgPSBFeHRlbmQobXVpVGhlbWUucmF3VGhlbWUucGFsZXR0ZSwgbmV3UGFsZXR0ZUtleXMpO1xuICAgIHZhciBuZXdSYXdUaGVtZSA9IHVwZGF0ZShtdWlUaGVtZS5yYXdUaGVtZSwgeyBwYWxldHRlOiB7ICRzZXQ6IG5ld1BhbGV0dGUgfSB9KTtcbiAgICByZXR1cm4gdGhpcy5nZXRNdWlUaGVtZShuZXdSYXdUaGVtZSk7XG4gIH0sXG5cbiAgLy9mdW5jdGlvbiB0byBtb2RpZnkgdGhlIGZvbnQgZmFtaWx5IG9mIHRoZSByYXcgdGhlbWUuIFRoaXMgZnVuY3Rpb24gcmVjb21wdXRlc1xuICAvL3RoZSBNVUkgdGhlbWUgYW5kIHJldHVybnMgaXQgYmFzZWQgb24gdGhlIG5ldyByYXcgdGhlbWUuXG4gIG1vZGlmeVJhd1RoZW1lRm9udEZhbWlseTogZnVuY3Rpb24gbW9kaWZ5UmF3VGhlbWVGb250RmFtaWx5KG11aVRoZW1lLCBuZXdGb250RmFtaWx5KSB7XG4gICAgdmFyIG5ld1Jhd1RoZW1lID0gdXBkYXRlKG11aVRoZW1lLnJhd1RoZW1lLCB7IGZvbnRGYW1pbHk6IHsgJHNldDogbmV3Rm9udEZhbWlseSB9IH0pO1xuICAgIHJldHVybiB0aGlzLmdldE11aVRoZW1lKG5ld1Jhd1RoZW1lKTtcbiAgfVxuXG59OyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIFRoZSByZWxhdGl2ZSBicmlnaHRuZXNzIG9mIGFueSBwb2ludCBpbiBhIGNvbG9yc3BhY2UsIG5vcm1hbGl6ZWQgdG8gMCBmb3JcbiAgICogZGFya2VzdCBibGFjayBhbmQgMSBmb3IgbGlnaHRlc3Qgd2hpdGUuIFJHQiBjb2xvcnMgb25seS4gRG9lcyBub3QgdGFrZVxuICAgKiBpbnRvIGFjY291bnQgYWxwaGEgdmFsdWVzLlxuICAgKlxuICAgKiBUT0RPOlxuICAgKiAtIFRha2UgaW50byBhY2NvdW50IGFscGhhIHZhbHVlcy5cbiAgICogLSBJZGVudGlmeSB3aHkgdGhlcmUgYXJlIG1pbm9yIGRpc2NyZXBhbmNpZXMgZm9yIHNvbWUgdXNlIGNhc2VzXG4gICAqICAgKGkuZS4gI0YwRiAmICNGRkYpLiBOb3RlIHRoYXQgdGhlc2UgY2FzZXMgcmFyZWx5IG9jY3VyLlxuICAgKlxuICAgKiBGb3JtdWxhOiBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG4gICAqL1xuICBfbHVtaW5hbmNlOiBmdW5jdGlvbiBfbHVtaW5hbmNlKGNvbG9yKSB7XG4gICAgY29sb3IgPSB0aGlzLl9kZWNvbXBvc2VDb2xvcihjb2xvcik7XG5cbiAgICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdyZ2InKSA+IC0xKSB7XG4gICAgICB2YXIgcmdiID0gY29sb3IudmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhbCAvPSAyNTU7IC8vIG5vcm1hbGl6ZWRcbiAgICAgICAgcmV0dXJuIHZhbCA8PSAwLjAzOTI4ID8gdmFsIC8gMTIuOTIgOiBNYXRoLnBvdygodmFsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIDAuMjEyNiAqIHJnYlswXSArIDAuNzE1MiAqIHJnYlsxXSArIDAuMDcyMiAqIHJnYlsyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnQ2FsY3VsYXRpbmcgdGhlIHJlbGF0aXZlIGx1bWluYW5jZSBpcyBub3QgYXZhaWxhYmxlIGZvciAnICsgJ0hTTCBhbmQgSFNMQS4nO1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbXM6XG4gICAqIGFkZGl0aW9uYWxWYWx1ZSA9IEFuIGV4dHJhIHZhbHVlIHRoYXQgaGFzIGJlZW4gY2FsY3VsYXRlZCBidXQgbm90IGluY2x1ZGVkXG4gICAqICAgICAgICAgICAgICAgICAgIHdpdGggdGhlIG9yaWdpbmFsIGNvbG9yIG9iamVjdCwgc3VjaCBhcyBhbiBhbHBoYSB2YWx1ZS5cbiAgICovXG4gIF9jb252ZXJ0Q29sb3JUb1N0cmluZzogZnVuY3Rpb24gX2NvbnZlcnRDb2xvclRvU3RyaW5nKGNvbG9yLCBhZGRpdG9uYWxWYWx1ZSkge1xuICAgIHZhciBzdHIgPSBjb2xvci50eXBlICsgJygnICsgcGFyc2VJbnQoY29sb3IudmFsdWVzWzBdKSArICcsJyArIHBhcnNlSW50KGNvbG9yLnZhbHVlc1sxXSkgKyAnLCcgKyBwYXJzZUludChjb2xvci52YWx1ZXNbMl0pO1xuXG4gICAgaWYgKGFkZGl0b25hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0ciArPSAnLCcgKyBhZGRpdG9uYWxWYWx1ZSArICcpJztcbiAgICB9IGVsc2UgaWYgKGNvbG9yLnZhbHVlcy5sZW5ndGggPT09IDQpIHtcbiAgICAgIHN0ciArPSAnLCcgKyBjb2xvci52YWx1ZXNbM10gKyAnKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnKSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfSxcblxuICAvLyBDb252ZXJ0cyBhIGNvbG9yIGZyb20gaGV4IGZvcm1hdCB0byByZ2IgZm9ybWF0LlxuICBfY29udmVydEhleFRvUkdCOiBmdW5jdGlvbiBfY29udmVydEhleFRvUkdCKGNvbG9yKSB7XG4gICAgaWYgKGNvbG9yLmxlbmd0aCA9PT0gNCkge1xuICAgICAgdmFyIGV4dGVuZGVkQ29sb3IgPSAnIyc7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGNvbG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGV4dGVuZGVkQ29sb3IgKz0gY29sb3IuY2hhckF0KGkpICsgY29sb3IuY2hhckF0KGkpO1xuICAgICAgfVxuICAgICAgY29sb3IgPSBleHRlbmRlZENvbG9yO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSB7XG4gICAgICByOiBwYXJzZUludChjb2xvci5zdWJzdHIoMSwgMiksIDE2KSxcbiAgICAgIGc6IHBhcnNlSW50KGNvbG9yLnN1YnN0cigzLCAyKSwgMTYpLFxuICAgICAgYjogcGFyc2VJbnQoY29sb3Iuc3Vic3RyKDUsIDIpLCAxNilcbiAgICB9O1xuXG4gICAgcmV0dXJuICdyZ2IoJyArIHZhbHVlcy5yICsgJywnICsgdmFsdWVzLmcgKyAnLCcgKyB2YWx1ZXMuYiArICcpJztcbiAgfSxcblxuICAvLyBSZXR1cm5zIHRoZSB0eXBlIGFuZCB2YWx1ZXMgb2YgYSBjb2xvciBvZiBhbnkgZ2l2ZW4gdHlwZS5cbiAgX2RlY29tcG9zZUNvbG9yOiBmdW5jdGlvbiBfZGVjb21wb3NlQ29sb3IoY29sb3IpIHtcbiAgICBpZiAoY29sb3IuY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWNvbXBvc2VDb2xvcih0aGlzLl9jb252ZXJ0SGV4VG9SR0IoY29sb3IpKTtcbiAgICB9XG5cbiAgICB2YXIgbWFya2VyID0gY29sb3IuaW5kZXhPZignKCcpO1xuICAgIHZhciB0eXBlID0gY29sb3Iuc3Vic3RyaW5nKDAsIG1hcmtlcik7XG4gICAgdmFyIHZhbHVlcyA9IGNvbG9yLnN1YnN0cmluZyhtYXJrZXIgKyAxLCBjb2xvci5sZW5ndGggLSAxKS5zcGxpdCgnLCcpO1xuXG4gICAgcmV0dXJuIHsgdHlwZTogdHlwZSwgdmFsdWVzOiB2YWx1ZXMgfTtcbiAgfSxcblxuICAvLyBTZXQgdGhlIGFic29sdXRlIHRyYW5zcGFyZW5jeSBvZiBhIGNvbG9yLlxuICAvLyBBbnkgZXhpc3RpbmcgYWxwaGEgdmFsdWVzIGFyZSBvdmVyd3JpdHRlbi5cbiAgZmFkZTogZnVuY3Rpb24gZmFkZShjb2xvciwgYW1vdW50KSB7XG4gICAgY29sb3IgPSB0aGlzLl9kZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gICAgaWYgKGNvbG9yLnR5cGUgPT09ICdyZ2InIHx8IGNvbG9yLnR5cGUgPT09ICdoc2wnKSBjb2xvci50eXBlICs9ICdhJztcbiAgICByZXR1cm4gdGhpcy5fY29udmVydENvbG9yVG9TdHJpbmcoY29sb3IsIGFtb3VudCk7XG4gIH0sXG5cbiAgLy8gRGVzYXR1cmF0ZXMgcmdiIGFuZCBzZXRzIG9wYWNpdHkgdG8gMC4xNVxuICBsaWdodGVuOiBmdW5jdGlvbiBsaWdodGVuKGNvbG9yLCBhbW91bnQpIHtcbiAgICBjb2xvciA9IHRoaXMuX2RlY29tcG9zZUNvbG9yKGNvbG9yKTtcblxuICAgIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpID4gLTEpIHtcbiAgICAgIGNvbG9yLnZhbHVlc1syXSArPSBhbW91bnQ7XG4gICAgICByZXR1cm4gdGhpcy5fZGVjb21wb3NlQ29sb3IodGhpcy5fY29udmVydENvbG9yVG9TdHJpbmcoY29sb3IpKTtcbiAgICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZigncmdiJykgPiAtMSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29sb3IudmFsdWVzW2ldICo9IDEgKyBhbW91bnQ7XG4gICAgICAgIGlmIChjb2xvci52YWx1ZXNbaV0gPiAyNTUpIGNvbG9yLnZhbHVlc1tpXSA9IDI1NTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdhJykgPD0gLTEpIGNvbG9yLnR5cGUgKz0gJ2EnO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NvbnZlcnRDb2xvclRvU3RyaW5nKGNvbG9yLCAnMC4xNScpO1xuICB9LFxuXG4gIGRhcmtlbjogZnVuY3Rpb24gZGFya2VuKGNvbG9yLCBhbW91bnQpIHtcbiAgICBjb2xvciA9IHRoaXMuX2RlY29tcG9zZUNvbG9yKGNvbG9yKTtcblxuICAgIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpID4gLTEpIHtcbiAgICAgIGNvbG9yLnZhbHVlc1syXSArPSBhbW91bnQ7XG4gICAgICByZXR1cm4gdGhpcy5fZGVjb21wb3NlQ29sb3IodGhpcy5fY29udmVydENvbG9yVG9TdHJpbmcoY29sb3IpKTtcbiAgICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZigncmdiJykgPiAtMSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29sb3IudmFsdWVzW2ldICo9IDEgLSBhbW91bnQ7XG4gICAgICAgIGlmIChjb2xvci52YWx1ZXNbaV0gPCAwKSBjb2xvci52YWx1ZXNbaV0gPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jb252ZXJ0Q29sb3JUb1N0cmluZyhjb2xvcik7XG4gIH0sXG5cbiAgLy8gQ2FsY3VsYXRlcyB0aGUgY29udHJhc3QgcmF0aW8gYmV0d2VlbiB0d28gY29sb3JzLlxuICAvL1xuICAvLyBGb3JtdWxhOiBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI2NvbnRyYXN0LXJhdGlvZGVmXG4gIGNvbnRyYXN0UmF0aW86IGZ1bmN0aW9uIGNvbnRyYXN0UmF0aW8oYmFja2dyb3VuZCwgZm9yZWdyb3VuZCkge1xuICAgIHZhciBsdW1BID0gdGhpcy5fbHVtaW5hbmNlKGJhY2tncm91bmQpO1xuICAgIHZhciBsdW1CID0gdGhpcy5fbHVtaW5hbmNlKGZvcmVncm91bmQpO1xuXG4gICAgaWYgKGx1bUEgPj0gbHVtQikge1xuICAgICAgcmV0dXJuICgobHVtQSArIDAuMDUpIC8gKGx1bUIgKyAwLjA1KSkudG9GaXhlZCgyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICgobHVtQiArIDAuMDUpIC8gKGx1bUEgKyAwLjA1KSkudG9GaXhlZCgyKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaG93IHJlYWRhYmxlIGEgY29sb3IgY29tYmluYXRpb24gaXMgYmFzZWQgb24gaXRzIGxldmVsLlxuICAgKiBMZXZlbHMgYXJlIGRlZmluZWQgZnJvbSBATGVhVmVyb3U6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9MZWFWZXJvdS9jb250cmFzdC1yYXRpby9ibG9iL2doLXBhZ2VzL2NvbnRyYXN0LXJhdGlvLmpzXG4gICAqL1xuICBjb250cmFzdFJhdGlvTGV2ZWw6IGZ1bmN0aW9uIGNvbnRyYXN0UmF0aW9MZXZlbChiYWNrZ3JvdW5kLCBmb3JlZ3JvdW5kKSB7XG4gICAgdmFyIGxldmVscyA9IHtcbiAgICAgICdmYWlsJzoge1xuICAgICAgICByYW5nZTogWzAsIDNdLFxuICAgICAgICBjb2xvcjogJ2hzbCgwLCAxMDAlLCA0MCUpJ1xuICAgICAgfSxcbiAgICAgICdhYS1sYXJnZSc6IHtcbiAgICAgICAgcmFuZ2U6IFszLCA0LjVdLFxuICAgICAgICBjb2xvcjogJ2hzbCg0MCwgMTAwJSwgNDUlKSdcbiAgICAgIH0sXG4gICAgICAnYWEnOiB7XG4gICAgICAgIHJhbmdlOiBbNC41LCA3XSxcbiAgICAgICAgY29sb3I6ICdoc2woODAsIDYwJSwgNDUlKSdcbiAgICAgIH0sXG4gICAgICAnYWFhJzoge1xuICAgICAgICByYW5nZTogWzcsIDIyXSxcbiAgICAgICAgY29sb3I6ICdoc2woOTUsIDYwJSwgNDElKSdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJhdGlvID0gdGhpcy5jb250cmFzdFJhdGlvKGJhY2tncm91bmQsIGZvcmVncm91bmQpO1xuXG4gICAgZm9yICh2YXIgbGV2ZWwgaW4gbGV2ZWxzKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBsZXZlbHNbbGV2ZWxdLnJhbmdlO1xuICAgICAgaWYgKHJhdGlvID49IHJhbmdlWzBdICYmIHJhdGlvIDw9IHJhbmdlWzFdKSByZXR1cm4gbGV2ZWw7XG4gICAgfVxuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGw7XG59XG5cbi8qKlxuKiAgQSByZWN1cnNpdmUgbWVyZ2UgYmV0d2VlbiB0d28gb2JqZWN0cy5cbipcbiogIEBwYXJhbSBiYXNlICAgICAtIHRoZSBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgdG8gYmUgb3ZlcndyaXR0ZW4uIEl0XG4qICAgICAgICAgICAgICAgICAgICBzaG91bGQgYmUgZWl0aGVyIHRoZSByb290IGxldmVsIG9yIHNvbWUgbmVzdGVkIGxldmVsLlxuKiAgQHBhcmFtIG92ZXJyaWRlIC0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyB0byBiZSBvdmVyd3JpdHRlbi4gSXRcbiogICAgICAgICAgICAgICAgICAgIHNob3VsZCBoYXZlIHRoZSBzYW1lIHN0cnVjdHVyZSBhcyB0aGUgb2JqZWN0IG9iamVjdC5cbiovXG52YXIgZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kKGJhc2UsIG92ZXJyaWRlKSB7XG5cbiAgdmFyIG1lcmdlZE9iamVjdCA9IHt9O1xuXG4gIC8vTG9vcCB0aHJvdWdoIGVhY2gga2V5IGluIHRoZSBiYXNlIG9iamVjdFxuICBPYmplY3Qua2V5cyhiYXNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblxuICAgIHZhciBiYXNlUHJvcCA9IGJhc2Vba2V5XTtcbiAgICB2YXIgb3ZlcnJpZGVQcm9wID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGlzT2JqZWN0KG92ZXJyaWRlKSkgb3ZlcnJpZGVQcm9wID0gb3ZlcnJpZGVba2V5XTtcblxuICAgIC8vUmVjdXJzaXZlIGNhbGwgZXh0ZW5kIGlmIHRoZSBwcm9wIGlzIGFub3RoZXIgb2JqZWN0LCBlbHNlIGp1c3QgY29weSBpdCBvdmVyXG4gICAgbWVyZ2VkT2JqZWN0W2tleV0gPSBpc09iamVjdChiYXNlUHJvcCkgJiYgIUFycmF5LmlzQXJyYXkoYmFzZVByb3ApID8gZXh0ZW5kKGJhc2VQcm9wLCBvdmVycmlkZVByb3ApIDogYmFzZVByb3A7XG4gIH0pO1xuXG4gIC8vTG9vcCB0aHJvdWdoIGVhY2ggb3ZlcnJpZGUga2V5IGFuZCBvdmVycmlkZSB0aGUgcHJvcHMgaW4gdGhlXG4gIC8vYmFzZSBvYmplY3RcbiAgaWYgKGlzT2JqZWN0KG92ZXJyaWRlKSkge1xuXG4gICAgT2JqZWN0LmtleXMob3ZlcnJpZGUpLmZvckVhY2goZnVuY3Rpb24gKG92ZXJyaWRlS2V5KSB7XG5cbiAgICAgIHZhciBvdmVycmlkZVByb3AgPSBvdmVycmlkZVtvdmVycmlkZUtleV07XG5cbiAgICAgIC8vT25seSBjb3B5IG92ZXIgcHJvcHMgdGhhdCBhcmUgbm90IG9iamVjdHNcbiAgICAgIGlmICghaXNPYmplY3Qob3ZlcnJpZGVQcm9wKSB8fCBBcnJheS5pc0FycmF5KG92ZXJyaWRlUHJvcCkpIHtcbiAgICAgICAgbWVyZ2VkT2JqZWN0W292ZXJyaWRlS2V5XSA9IG92ZXJyaWRlUHJvcDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtZXJnZWRPYmplY3Q7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4dGVuZDsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QvbGliL3VwZGF0ZScpOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBPYmplY3QuYXNzaWduXG4gKi9cblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5hc3NpZ25cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gdGFyZ2V0IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZm9yICh2YXIgbmV4dEluZGV4ID0gMTsgbmV4dEluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgbmV4dEluZGV4KyspIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgIGlmIChuZXh0U291cmNlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgLy8gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgYWNjZXNzb3JzIG5vciBwcm94aWVzLiBUaGVyZWZvcmUgdGhpc1xuICAgIC8vIGNvcHkgY2Fubm90IHRocm93LiBJZiB3ZSBldmVyIHN1cHBvcnRlZCB0aGlzIHRoZW4gd2UgbXVzdCBoYW5kbGVcbiAgICAvLyBleGNlcHRpb25zIGFuZCBzaWRlLWVmZmVjdHMuIFdlIGRvbid0IHN1cHBvcnQgc3ltYm9scyBzbyB0aGV5IHdvbid0XG4gICAgLy8gYmUgdHJhbnNmZXJyZWQuXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHVwZGF0ZVxuICovXG5cbi8qIGdsb2JhbCBoYXNPd25Qcm9wZXJ0eTp0cnVlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vT2JqZWN0LmFzc2lnbicpO1xudmFyIGtleU9mID0gcmVxdWlyZSgnZmJqcy9saWIva2V5T2YnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9ICh7fSkuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KHgpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4geC5jb25jYXQoKTtcbiAgfSBlbHNlIGlmICh4ICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBhc3NpZ24obmV3IHguY29uc3RydWN0b3IoKSwgeCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxudmFyIENPTU1BTkRfUFVTSCA9IGtleU9mKHsgJHB1c2g6IG51bGwgfSk7XG52YXIgQ09NTUFORF9VTlNISUZUID0ga2V5T2YoeyAkdW5zaGlmdDogbnVsbCB9KTtcbnZhciBDT01NQU5EX1NQTElDRSA9IGtleU9mKHsgJHNwbGljZTogbnVsbCB9KTtcbnZhciBDT01NQU5EX1NFVCA9IGtleU9mKHsgJHNldDogbnVsbCB9KTtcbnZhciBDT01NQU5EX01FUkdFID0ga2V5T2YoeyAkbWVyZ2U6IG51bGwgfSk7XG52YXIgQ09NTUFORF9BUFBMWSA9IGtleU9mKHsgJGFwcGx5OiBudWxsIH0pO1xuXG52YXIgQUxMX0NPTU1BTkRTX0xJU1QgPSBbQ09NTUFORF9QVVNILCBDT01NQU5EX1VOU0hJRlQsIENPTU1BTkRfU1BMSUNFLCBDT01NQU5EX1NFVCwgQ09NTUFORF9NRVJHRSwgQ09NTUFORF9BUFBMWV07XG5cbnZhciBBTExfQ09NTUFORFNfU0VUID0ge307XG5cbkFMTF9DT01NQU5EU19MSVNULmZvckVhY2goZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgQUxMX0NPTU1BTkRTX1NFVFtjb21tYW5kXSA9IHRydWU7XG59KTtcblxuZnVuY3Rpb24gaW52YXJpYW50QXJyYXlDYXNlKHZhbHVlLCBzcGVjLCBjb21tYW5kKSB7XG4gICFBcnJheS5pc0FycmF5KHZhbHVlKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogZXhwZWN0ZWQgdGFyZ2V0IG9mICVzIHRvIGJlIGFuIGFycmF5OyBnb3QgJXMuJywgY29tbWFuZCwgdmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgdmFyIHNwZWNWYWx1ZSA9IHNwZWNbY29tbWFuZF07XG4gICFBcnJheS5pc0FycmF5KHNwZWNWYWx1ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXk7IGdvdCAlcy4gJyArICdEaWQgeW91IGZvcmdldCB0byB3cmFwIHlvdXIgcGFyYW1ldGVyIGluIGFuIGFycmF5PycsIGNvbW1hbmQsIHNwZWNWYWx1ZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUodmFsdWUsIHNwZWMpIHtcbiAgISh0eXBlb2Ygc3BlYyA9PT0gJ29iamVjdCcpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBZb3UgcHJvdmlkZWQgYSBrZXkgcGF0aCB0byB1cGRhdGUoKSB0aGF0IGRpZCBub3QgY29udGFpbiBvbmUgJyArICdvZiAlcy4gRGlkIHlvdSBmb3JnZXQgdG8gaW5jbHVkZSB7JXM6IC4uLn0/JywgQUxMX0NPTU1BTkRTX0xJU1Quam9pbignLCAnKSwgQ09NTUFORF9TRVQpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1NFVCkpIHtcbiAgICAhKE9iamVjdC5rZXlzKHNwZWMpLmxlbmd0aCA9PT0gMSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnQ2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBrZXkgaW4gYW4gb2JqZWN0IHdpdGggJXMnLCBDT01NQU5EX1NFVCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIHNwZWNbQ09NTUFORF9TRVRdO1xuICB9XG5cbiAgdmFyIG5leHRWYWx1ZSA9IHNoYWxsb3dDb3B5KHZhbHVlKTtcblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX01FUkdFKSkge1xuICAgIHZhciBtZXJnZU9iaiA9IHNwZWNbQ09NTUFORF9NRVJHRV07XG4gICAgIShtZXJnZU9iaiAmJiB0eXBlb2YgbWVyZ2VPYmogPT09ICdvYmplY3QnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogJXMgZXhwZWN0cyBhIHNwZWMgb2YgdHlwZSBcXCdvYmplY3RcXCc7IGdvdCAlcycsIENPTU1BTkRfTUVSR0UsIG1lcmdlT2JqKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgIShuZXh0VmFsdWUgJiYgdHlwZW9mIG5leHRWYWx1ZSA9PT0gJ29iamVjdCcpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiAlcyBleHBlY3RzIGEgdGFyZ2V0IG9mIHR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJXMnLCBDT01NQU5EX01FUkdFLCBuZXh0VmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICBhc3NpZ24obmV4dFZhbHVlLCBzcGVjW0NPTU1BTkRfTUVSR0VdKTtcbiAgfVxuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfUFVTSCkpIHtcbiAgICBpbnZhcmlhbnRBcnJheUNhc2UodmFsdWUsIHNwZWMsIENPTU1BTkRfUFVTSCk7XG4gICAgc3BlY1tDT01NQU5EX1BVU0hdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIG5leHRWYWx1ZS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9VTlNISUZUKSkge1xuICAgIGludmFyaWFudEFycmF5Q2FzZSh2YWx1ZSwgc3BlYywgQ09NTUFORF9VTlNISUZUKTtcbiAgICBzcGVjW0NPTU1BTkRfVU5TSElGVF0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgbmV4dFZhbHVlLnVuc2hpZnQoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1NQTElDRSkpIHtcbiAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRXhwZWN0ZWQgJXMgdGFyZ2V0IHRvIGJlIGFuIGFycmF5OyBnb3QgJXMnLCBDT01NQU5EX1NQTElDRSwgdmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICAhQXJyYXkuaXNBcnJheShzcGVjW0NPTU1BTkRfU1BMSUNFXSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXkgb2YgYXJyYXlzOyBnb3QgJXMuICcgKyAnRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlcnMgaW4gYW4gYXJyYXk/JywgQ09NTUFORF9TUExJQ0UsIHNwZWNbQ09NTUFORF9TUExJQ0VdKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgc3BlY1tDT01NQU5EX1NQTElDRV0uZm9yRWFjaChmdW5jdGlvbiAoYXJncykge1xuICAgICAgIUFycmF5LmlzQXJyYXkoYXJncykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXkgb2YgYXJyYXlzOyBnb3QgJXMuICcgKyAnRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlcnMgaW4gYW4gYXJyYXk/JywgQ09NTUFORF9TUExJQ0UsIHNwZWNbQ09NTUFORF9TUExJQ0VdKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgICBuZXh0VmFsdWUuc3BsaWNlLmFwcGx5KG5leHRWYWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX0FQUExZKSkge1xuICAgICEodHlwZW9mIHNwZWNbQ09NTUFORF9BUFBMWV0gPT09ICdmdW5jdGlvbicpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGEgZnVuY3Rpb247IGdvdCAlcy4nLCBDT01NQU5EX0FQUExZLCBzcGVjW0NPTU1BTkRfQVBQTFldKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgbmV4dFZhbHVlID0gc3BlY1tDT01NQU5EX0FQUExZXShuZXh0VmFsdWUpO1xuICB9XG5cbiAgZm9yICh2YXIgayBpbiBzcGVjKSB7XG4gICAgaWYgKCEoQUxMX0NPTU1BTkRTX1NFVC5oYXNPd25Qcm9wZXJ0eShrKSAmJiBBTExfQ09NTUFORFNfU0VUW2tdKSkge1xuICAgICAgbmV4dFZhbHVlW2tdID0gdXBkYXRlKHZhbHVlW2tdLCBzcGVjW2tdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV4dFZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5jb25zdCBNVUkgPSByZXF1aXJlKCdtYXRlcmlhbC11aScpO1xuY29uc3QgVGhlbWVNYW5hZ2VyID0gcmVxdWlyZSgnbWF0ZXJpYWwtdWkvbGliL3N0eWxlcy90aGVtZS1tYW5hZ2VyJyk7XG5jb25zdCBpbmplY3RUYXBFdmVudFBsdWdpbiA9IHJlcXVpcmUoXCJyZWFjdC10YXAtZXZlbnQtcGx1Z2luXCIpO1xuaW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TVVJLkFwcEJhciB0aXRsZT0nTWFwcGVyJz5cbiAgICAgICAgPGljb25FbGVtZW50UmlnaHQgc3R5bGU9eyB7ICBtYXJnaW5Ub3A6IDEwfSB9PlxuICAgICAgICAgIDxNVUkuVG9vbGJhckdyb3VwPlxuICAgICAgICAgICAgPE1VSS5UZXh0RmllbGQgZnVsbFdpZHRoPXsgZmFsc2UgfSBzdHlsZT17IExvZ2luVGV4dFN0eWxlIH0gaGludFRleHQ9J1VzZXJuYW1lJyAvPlxuICAgICAgICAgICAgPE1VSS5UZXh0RmllbGQgZnVsbFdpZHRoPXsgZmFsc2UgfSB0eXBlPSdwYXNzd29yZCcgc3R5bGU9eyBMb2dpblRleHRTdHlsZSB9IGhpbnRUZXh0PSdQYXNzd29yZCcgLz5cbiAgICAgICAgICA8L01VSS5Ub29sYmFyR3JvdXA+XG4gICAgICAgICAgPE1VSS5SYWlzZWRCdXR0b24gc3R5bGU9eyBMb2dpbkJ1dHRvblN0eWxlIH0gbGFiZWxTdHlsZT17IHsgIGZvbnRTaXplOiAxNH0gfSBwcmltYXJ5PXsgdHJ1ZSB9IGxhYmVsPSdMb2cgSW4nIC8+XG4gICAgICAgIDwvaWNvbkVsZW1lbnRSaWdodD5cbiAgICAgIDwvTVVJLkFwcEJhcj5cbiAgICAgICk7XG4gIH1cblxuICBTYXZlKGUpIHtcbiAgICBjb25zb2xlLmxvZygnU2F2ZSBCdXR0b24gQ2xpY2s6JywgZSk7XG4gIH1cbn1cblxuY29uc3QgTG9naW5UZXh0U3R5bGUgPSB7XG4gIGZvbnRTaXplOiAxNCxcbiAgd2lkdGg6IDE0MCxcbiAgbWFyZ2luUmlnaHQ6IDYsXG59O1xuXG5jb25zdCBMb2dpbkJ1dHRvblN0eWxlID0ge1xuICBtYXJnaW5Ub3A6IDQsXG59O1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcbiJdfQ==
