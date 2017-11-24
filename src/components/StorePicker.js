import React, { Component } from 'react'
import { getFunName } from '../helpers';

export default class StorePicker extends Component {
  goToStore(e) {
    e.preventDefault()
    console.log('You Changed the URL')
    // Grab the text from inbox
    const storeId = this.storeInput.value
    console.log(`Going to ${storeId}`)
    
    // Transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={ (input) => this.storeInput = input } />
        <button type="submit">Visit Store →</button>

      </form>
    )
  }

  static contextTypes = {
    router: React.PropTypes.object
  }
}