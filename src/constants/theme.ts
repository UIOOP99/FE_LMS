// @ts-ignore
const {createMuiTheme} = require("@material-ui/core");

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
     
      main: "#00416d",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    text: {
      primary: "#2f2f2f",
    //   secondary: "#FFFFFF",
    },
    secondary: {
      main: "#8DAA91",
      // light: "#d8e8da",
      light: "#e4ede5",
    },
    background: {
      default: '#f7f7f7'
    }
  },
  typography: {
    fontFamily: "YekanBakhFaEn",
    fontWeightMedium: 500,
    fontWeightRegular: "normal",
    fontWeightBold: "bold",
  },
  direction: "rtl",
});

module.exports = {theme};
