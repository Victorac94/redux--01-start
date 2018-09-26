import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                   {this.props.results.map( res => (
                      <li key={res.id} onClick={() => this.props.onRemoveResult(res.id)}>{res.value}</li>
                   ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
   return {
      ctr: state.ctr.counter,
      results: state.res.results
   }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(5)),
    onSubstractCounter: () => dispatch(actionCreators.substract(5)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onRemoveResult: (id) => dispatch(actionCreators.removeResult(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
