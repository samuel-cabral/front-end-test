import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-bootstrap';

import { store } from './store';

import { Header } from './components/Header';

import './styles/global.scss';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
