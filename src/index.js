import React from 'react';
import ReactDOM from 'react-dom';

//原生寫法
const title = React.createElement("h1", {className: "main"}, "Hello React 1");
ReactDOM.render(title, document.getElementById('root'));

//JSX寫法
class Myhead extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h1>Hello React JSX</h1>;
    }
}
ReactDOM.render(<Myhead/>, document.getElementById('root'));