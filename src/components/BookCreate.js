import React from 'react'

export default class BookCreate extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       desc: '',
    }
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.title);
    console.log(this.state.desc);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              className='form-control'
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='desc'>Description</label>
            <input
              type='text'
              id='desc'
              className='form-control'
              value={this.state.desc}
              onChange={(e) => this.setState({ desc: e.target.value })}
            />
          </div>
          <button className='btn btn-primary'>
            Create
          </button>
        </form>
      </div>
    );
  }
}
