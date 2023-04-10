import { extendTheme } from "@chakra-ui/react";

// Fonts
let fonts = {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
}

const theme = extendTheme({
    fonts: fonts
});

export default theme;