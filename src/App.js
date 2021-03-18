import React, { Component } from 'react';

class App extends Component {
    state = { 
        count : 0
     }
     incrementNum = () =>{
         this.setState({
                count: this.state.count + 1
         })
     }
     decrementNum = () => {
         this.setState({
             count : this.state.count -1
         })
     }
    render() { 
        return ( 
            <div>
                <h1>Hello, World!</h1>
                <span className='badge badge-warning m-2'>{this.state.count}</span>
                <button onClick={this.incrementNum} className='btn btn-primary btn-lg m-3'>+</button>
                <button onClick={this.decrementNum} className='btn btn-danger btn-lg'>-</button>
            </div>
         );
    }
}
 
export default App;