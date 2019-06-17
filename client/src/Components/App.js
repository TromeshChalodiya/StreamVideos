import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/stream/new' component={StreamCreate} />
            <Route path='/stream/delete/:id' component={StreamDelete} />
            <Route path='/stream/:id' component={StreamShow} />
            <Route path='/stream/edit/:id' component={StreamEdit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
