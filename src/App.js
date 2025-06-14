import { Component } from "react";
import Modal from "./components/Modal";
import styled from "styled-components";
const itemArr=[{
  img:"https://pixabay.com/get/g8b691b494faa12f3c1bf318d857ee7d87559036d33f17b71c5b74f40b61af7e7e036a6b01bc342e9708db473f408aa2ffd636455c8f079d8bbab1e936f2b1670_640.jpg",
},{
  img:"https://pixabay.com/get/g0f30e7a31912beb40b5c1fcb902c8d4762040ebbef659ad5710255ca5af1af93466134443f29faad2cf70954aa7d85603a8bbc290d31159f517b48bb44bf459b_640.jpg",
},{
  img:"https://pixabay.com/get/g6ee4ee486e882c133a90a5de8426697e96697985e7e3545e79d60f70016f24ea9ab9781936fb88f1e21cb50dddd03ef981a74e6882f6316ea3df6c306032fb08_640.jpg",
},{
  img:"https://pixabay.com/get/g82e214b98f659239e23af5d20d03288f00cd3377c77554f8ac0de808b69f535a4b083c2452298158a578f356b7e738423914f6e4e229ace4ffe06e33fa444a69_640.jpg",
}]

const ListStyle=styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
`
const ItemStyle=styled.li`
  list-style: none;
`
const Img=styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition-duration: 0.3s;
  &:hover{
    transform: scale(1.05);
    transition-duration: 0.4s;
  }
`
class App extends Component{
  state={
    isOpenModal:false
  }
  componentDidMount(){
    window.addEventListener("keydown",this.handleKeydown)
  }
  componentWillUnmount(){
    
    window.removeEventListener('keydown', this.handleKeydown);
  }

  openModal=(event)=>{
    this.setState(({isOpenModal:true,src:event.target.src}))
  }
  closeModal=()=>{
    this.setState(({isOpenModal:false}))
  }
  handleKeydown=(event)=>{
    if(event.key=="Escape"){
      this.closeModal()
    }
  }
  render(){
    return(
      <>
      <ListStyle>
      {
        itemArr.map((item)=>{
          return(
            <ItemStyle  >
            <Img src={item.img} onClick={this.openModal}/>
            </ItemStyle>
          )
        })
      }
    </ListStyle>
    {this.state.isOpenModal==true ? <Modal img={this.state.src} CloseModal={this.closeModal}/> : null}
    </>
    )
  }
}

export default App;
