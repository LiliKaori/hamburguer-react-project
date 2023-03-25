import { useRef, useState } from "react";
import { Container, Image, H1, ContainerItems, InputLabel, Input, Button } from "./style"
import Burger from "../../assets/burger.svg"
import axios from "axios"
import { useNavigate } from "react-router-dom";


function App(){  
  const [orders, setOrders] = useState([])
  const inputRequest = useRef()
  const inputClientName = useRef()
  const navigate = useNavigate()

  async function addNewOrder(){
    const newOrder = await axios.post("http://localhost:3001/order", {order: inputRequest.current.value, clientName: inputClientName.current.value})
        
    setOrders([...orders, newOrder.data])

    navigate("/hamburguer-react-project/order")
  }

  return (
    <Container>

      <div>
        <Image src={Burger}/>
        <H1>Faça seu pedido!</H1>
      </div>

      <ContainerItems>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputRequest} placeholder="1 Coca-cola, 1 X-salada"></Input>

        <InputLabel>Nome do cliente</InputLabel>
        <Input ref={inputClientName} placeholder="Steve Jobs"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>
        
      </ContainerItems>
      
    </Container>
  );
}

export default App;
