import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});







// test:
// build:
//   context: .
//   dockerfile: Dockerfile.dev
// volumes:
//   - .:/app
//   - /app/node_modules
// command: ["npm","run","test"]