import { useRef, useState } from "react";
import { Container, Image, H1, ContainerItems, InputLabel, Input, Button } from "./style"
import Burger from "./assets/burger.svg"
import axios from "axios"

function App(){  
  const [orders, setOrders] = useState([])
  const inputRequest = useRef()
  const inputClientName = useRef()

  async function addNewOrder(){
    const newOrder = await axios.post("http://localhost:3001/order", {order: inputRequest.current.value, clientName: inputClientName.current.value})
    // setOrders([{order: "big mac", clientName: "Liliam"}])
    
    setOrders([...orders, newOrder.data])
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
        <ul>
          {
            orders.map((order) => (
              <li key={order.id}>
                {order.order}, {order.clientName}
              </li>
          ))}
        </ul>

      </ContainerItems>
      
    </Container>
  );
}

export default App;
