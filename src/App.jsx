// React
import { ChakraProvider } from "@chakra-ui/react";
// CC
import Home from "./pages/Home";
import Fonts from './utils/fonts';
import theme from './utils/theme';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Home />
    </ChakraProvider>
  )
}
