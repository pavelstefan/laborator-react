import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Auth from './pages/auth';
import Game from './pages/game';
import Profile from './pages/profile';
import PageContainer from './components/PageContainer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/profile">
            <PageContainer>
              <Profile />
            </PageContainer>
          </Route>
          <Route path="/game">
            <PageContainer>
              <Game />
            </PageContainer>
          </Route>

          <Route path="/">
            <PageContainer>
              <Auth />
            </PageContainer>
          </Route>
        </Switch>
      </Router >
    </Provider>
  );
}

export default App;
