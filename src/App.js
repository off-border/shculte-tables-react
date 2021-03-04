import { Provider } from 'react-redux';
import './App.css';
import MainLayoutContainer from './components/MainLayoutContainer';
import store from './store/store.js';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MainLayoutContainer />
            </div>
        </Provider>
    );
}

export default App;
