import { Provider } from 'react-redux';
import { store } from './store';

import { Catalog } from './components/Catalog';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
