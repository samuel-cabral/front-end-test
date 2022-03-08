import { Provider } from 'react-redux';
// import { ThemeProvider } from 'react-bootstrap';
import { ChakraProvider } from '@chakra-ui/react';

import { NumbersList } from '~/pages/NumbersList';
import { theme } from '~/styles/theme';
import { store } from './store';

import '~/styles/theme.scss';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <NumbersList />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
