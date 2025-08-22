const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello'
);

const button = React.createElement(
  'button', {
  onClick: () => { console.log("liked message"); }
},
  'Like'
)


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);

const container2 = document.getElementById('root2');
const root2 = ReactDOM.createRoot(container2);
root2.render(button);

const container3 = document.getElementById('root3');
const root3 = ReactDOM.createRoot(container3);
root3.render(button);

const container4 = document.getElementById('root4');
const root4 = ReactDOM.createRoot(container4);
root4.render(button);


