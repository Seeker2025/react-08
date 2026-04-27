import Header from "./Header/Header";
import Counter from "./Counter/Counter";
import Modal from "./Modal/Modal";
import ToDoList from "./ToDoList/ToDoList";
import FormLogin from "./FormRegistration/FormRegistration";

import { Component, useId } from "react";
import { nanoid } from "nanoid";


class App extends Component {
  state ={
    isShowModal: false,
  }

  showModal =()=>{
    this.setState({ isShowModal: true})
  }

  closeModal =()=>{
    this.setState({ isShowModal: false})
  }

  createUser = (data) => {
    console.log('data >>', data);
    const newUser = {
      ...data,
      id: nanoid(),
    }
    
  }

  render(){
  return (
    <>
        {/* <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}
        >
          React homework template
        </div> */}

        <Header showModal={this.showModal}/>

        <Counter/>

        {this.state.isShowModal &&
        <Modal closeModal={this.closeModal}>
            <FormLogin
                  createUser={this.createUser}
                  closeModal={this.closeModal}
             />  
        </Modal>}

        <ToDoList/> 

        
    </>
  );
 }
};

export default App;
