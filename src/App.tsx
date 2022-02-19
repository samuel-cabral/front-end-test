import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-bootstrap';

import { store } from './store';

import { Header } from './components/Header';

import globalTheme from './themes/global';
import './styles/global.scss';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider prefixes={globalTheme}>
        <Header />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
