import { useRef, useState , useEffect} from "react";
import { Container, Image, H1, ContainerItems, InputLabel, Input, Button, Order, ButtonDelete } from "./style"
import Burger from "./assets/burger.svg"
import axios from "axios"
import Trash from "./assets/trash.svg"

function App(){  
  const [orders, setOrders] = useState([])
  const inputRequest = useRef()
  const inputClientName = useRef()

  async function addNewOrder(){
    const newOrder = await axios.post("http://localhost:3001/order", {order: inputRequest.current.value, clientName: inputClientName.current.value})
    // setOrders([{order: "big mac", clientName: "Liliam"}])
    
    setOrders([...orders, newOrder.data])
  }

  async function deleteOrder(orderId){
    await axios.delete(`http://localhost:3001/order/${orderId}`)
    const newOrder = orders.filter(order => order.id !== orderId)
    setOrders(newOrder)
  }

  useEffect(()=>{
    async function fetchOrders() {
    const newOrders = await axios.get(`http://localhost:3001/order`)
    setOrders(newOrders.data)
    }
    fetchOrders()
  }, [orders])


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
              <Order key={order.id}>
                <div>
                  <p>{order.order}</p>
                  <br></br>
                  <p><b>{order.clientName}</b></p>
                </div>
                <ButtonDelete onClick={()=>deleteOrder(order.id)}>
                  <img src={Trash} alt="delete"/>
                </ButtonDelete>
              </Order>
          ))}
        </ul>

      </ContainerItems>
      
    </Container>
  );
}

export default App;
