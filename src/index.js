import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const meInReact =
  React.createElement('div', {className: 'me'},
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, "Who is learning React"),
    React.createElement('ul', {className: 'my-interests'},
    [
      React.createElement('li', {}, 'JavaScript'),
      React.createElement('li', {}, 'React'),
      React.createElement('li', {}, 'Movies'),
      React.createElement('li', {}, 'Ice cream'),
    ]
    )
  )

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact

// const list =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'My favorite ice cream flavors'),
//     React.createElement('ul', {},
//     [
//       React.createElement('li', {className: 'brown'}, 'Chocolate'),
//       React.createElement('li', {className: 'white'}, 'Vanilla'),
//       React.createElement('li', {className: 'yellow'}, 'Banana')
//     ]
//     )
//   );
