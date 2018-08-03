import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
class Banners extends Component {
	state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  
  render() {
	  const { open } = this.state;
    return (
		<div className="row my-4">
        <div className="col-lg-8">
          <img className="img-fluid rounded" src="http://placehold.it/900x400" alt="" />
        </div>
        <div className="col-lg-4">
          <h1>Business Name or Tagline</h1>
          <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
          <a className="btn btn-primary btn-lg" href="#" onClick={this.onOpenModal}>Call to Action!</a>
		   <Modal open={open} onClose={this.onCloseModal} center>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus..Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
        </Modal>
        </div>
      </div>

		);
	}
}
export default Banners;