import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-bootstrap';

import { Dashboard } from '~/pages/Dashboard';
import { store } from './store';

import '~/styles/global.scss';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
