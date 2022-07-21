import Home from './Home'
import { ChakraProvider } from "@chakra-ui/react"
import Page1 from './Page1';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
    <div className="App">
      < Home  {...pageProps} />
      <Page1/>
    </div>
    </ChakraProvider>
  );
}

export default App;
