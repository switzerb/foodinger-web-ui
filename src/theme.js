import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { red, deepOrange } from "@material-ui/core/colors"

let theme = createMuiTheme({
        palette: {
            primary: {
                main: red["900"]
            },
            secondary: {
                main: deepOrange["400"]
            },
        },
        typography: {
            fontFamily: 'Raleway, Arial',
        },
        spacing: 5
    }
);
theme = responsiveFontSizes(theme);

export default theme;
