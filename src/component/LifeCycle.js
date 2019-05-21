import React, { Component } from 'react';

class LifeCycle extends Component {
    state ={
        number : 0,
        color  : null
    }
    myRef = null;
    
    constructor(props){
        super(props);
        console.log('constructor()');
    }

    static getDerivedStateFromProps(nextPorps, prevState){
        console.log('getDerivedStateFromProps()');
        if(nextPorps.color !== prevState.color){
            return {
                color:nextPorps.color
            };       
        }
        return null;
    }
    componentDidMount(){
        console.log('componentDidMount()');
    }
    shouldComponentUpdate(nextPorps, nextState){
        console.log("shouldComponentUpdate(),", nextPorps,",", nextState);
        return nextState.number %10 !==4;
    }

    componentWillUnmount(){
        console.log("componentWillUnmount()");
    }

    handleClick = () =>{
        this.setState({
            number : this.state.number +1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate()');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate()');
        if(snapshot){
            console.log('업데이트 되기 직전 색상 : ',snapshot);
        }
    }

    render() {
        console.log('render()');
        const style={
            color:this.props.color
        }
        return (
            <div>
                <h1 style = {style} ref={ref=>this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>plus</button>
            </div>
        );
    }
}

export default LifeCycle;