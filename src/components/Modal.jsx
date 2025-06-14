import styled from "styled-components";
import { Component } from "react";
import { IoMdClose } from "react-icons/io";
const Backdrop=styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`
const ModalStyle=styled.div`
    display: flex;
    margin: 0 auto;
`
const Button=styled.button`
    width: 24px;
    height: 24px;
    background: none;
    border: none;
    cursor: pointer;
`
class Modal extends Component {
  render() {
    return (
      <Backdrop>
        <ModalStyle>
          <img src={this.props.img} alt="" />
        </ModalStyle>
        <Button onClick={this.props.CloseModal}>
        <IoMdClose color="white"/>
        </Button>  
      </Backdrop>
    );
  }
}
export default Modal;
