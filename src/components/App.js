import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import BookList from './BookList';
import BookCreate from './BookCreate';
import BookDetail from './BookDetail';

class App extends React.Component {
  render() {
    return (
      <div className='container py-5'>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path='/' exact component={BookList} />
              <Route path='/create' exact component={BookCreate} />
              <Route path='/detail/:id' exact component={BookDetail} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
