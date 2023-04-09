import { extendTheme } from "@chakra-ui/react";

// Fonts
let fonts = {
    heading: `'Karla', sans-serif`,
    body: `'Karla', sans-serif`
}

const theme = extendTheme({
    fonts: fonts
});

export default theme;