import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Auth from './pages/auth';
import Game from './pages/game';
import Profile from './pages/profile';
import PageContainer from './components/PageContainer';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <PageContainer>
            <Profile />
          </PageContainer>
        </Route>
        <Route path="/auth">
          <PageContainer>
            <Auth />
          </PageContainer>
        </Route>
        <Route path="/">
          <PageContainer>
            <Game />
          </PageContainer>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
