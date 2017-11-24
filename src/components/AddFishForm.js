import React, { Component } from 'react'

export default class AddFishForm extends Component {
  createFish(e) {
    e.preventDefault()
    console.log("Gonna make some Fish! 🐠")
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    this.props.addFish(fish)
    this.fishForm.reset(0)
  }
  render() {
    return (
      <form ref={ (el) => this.fishForm = el } className="fish-edit" onSubmit={ (e) => this.createFish(e) }>
        <input ref={ (el) => this.name = el} type="text" placeholder="Fish Name"/>
        <input ref={ (el) => this.price = el} type="text" placeholder="Fish Price"/>
        <select ref={ (el) => this.status = el}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={ (el) => this.desc = el} placeholder="Fish Desc"></textarea>
        <input ref={ (el) => this.image = el} type="text" placeholder="Fish Image"/>
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

AddFishForm.propTypes = {
  addFish: React.PropTypes.func.isRequired
}
