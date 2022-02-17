import { Provider } from 'react-redux';
import { store } from './store';

import { Header } from './components/Header';

import './styles/global.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
