import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-bootstrap';

import { SignIn } from '~/pages/SignIn';
import { store } from './store';

import '~/styles/global.scss';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SignIn />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
