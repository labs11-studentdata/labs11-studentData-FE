import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

// To see what is available to override in the theme object
// https://material-ui.com/customization/default-theme/


const theme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: grey,
        error: red,
        background: {
            paper: "#eee",
            default: "#ddd",
        }
    },
    typography: {
        useNextVariants: true,
    },
});

export default theme;