import { ThemeProvider } from 'react-bootstrap';
import { Provider } from 'react-redux';

import { NumbersList } from '~/pages/Numbers';
import { store } from '~/store';

import '~/styles/theme.scss';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NumbersList />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
