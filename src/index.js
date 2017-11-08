import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import m from "./main";

class TMain extends React.Component {
    constructor(props) {
      super(props);
      var ba = 0;
    }

	render() {
        return (
        <h2>"hello from main"</h2>
    );
        
	}
}
// 

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, Henrik!');
var main = TMain.createElement;
main.ba = 5;
ReactDOM.render(main, document.getElementById('root')); // OK
//ReactDOM.render(<TMain/>, document.getElementById('root')); // OK
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

 






