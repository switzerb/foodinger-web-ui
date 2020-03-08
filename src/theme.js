import { createMuiTheme } from "@material-ui/core"
import { red, deepOrange } from "@material-ui/core/colors"

const theme = createMuiTheme({
        palette: {
            primary: {
                main: red["900"]
            },
            secondary: {
                main: deepOrange["400"]
            },
        },
        typography: {
            h1: {
                fontSize: '2rem'
            }
        }
    }
);

export default theme;
