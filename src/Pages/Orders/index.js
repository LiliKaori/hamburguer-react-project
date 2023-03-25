import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Image, H1, ContainerItems, Button, Order, ButtonDelete } from "./style"
import BurgerPack from "../../assets/burger-pack.svg"
import axios from "axios"
import Trash from "../../assets/trash.svg"

function App(){  
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
    
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

  function goBackPage(){
    navigate("/hamburguer-react-project")
  }


  return (
    <Container>

      <div>
        <Image src={BurgerPack}/>
        <H1>Pedidos</H1>
      </div>

      <ContainerItems>
        
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

        <Button onClick={goBackPage}>Voltar</Button>

      </ContainerItems>
      
    </Container>
  );
}

export default App;
