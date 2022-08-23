import './OrderFormulary.css';
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { addDoc, collection, getDocs, Timestamp, query, where, documentId, writeBatch} from 'firebase/firestore'
import { database } from "../../services/firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderFormulary = () => {

    const linkToMain = (idCompra) => (
        <div>
            <Link to='/' className="link_tostify">The order was added successfully, the ID of your purchase is:{idCompra}</Link>
        </div>
    );

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();

    const { cart, getTotal, clearCart} = useContext(CartContext)
    const total = getTotal()

    const submitInfo = async () => {
    try{
        if(name === "" || email === "" || !phone){
            toast.error("You cannot make the purchase because information is missing.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else {
            if( cart.length > 0 ) {
                const phoneNumber = parseInt(phone)
                const dbRef = collection(database, 'products')
                const ordersRef = collection(database,"orders")
                const cartIds = cart.map(product => product.id)
                const noStock = []
                const myBatch = writeBatch(database)
                const clientInfo = { 
                    client: {
                        name: name,
                        email: email,
                        phone: phoneNumber
                    },
                    items: cart,
                    total,
                    date: Timestamp.fromDate(new Date())
                }
                
                const productsadded = await getDocs(query(dbRef, where(documentId(), 'in', cartIds)))
                const { docs } = productsadded
                docs.forEach(prod => {
                    const data = prod.data()
                    const dataBaseStock = data.stock

                    const products = cart.find(doc => doc.id === prod.id)
                    const prodQuantity = products?.quantity

                    if(dataBaseStock >= prodQuantity){
                        myBatch.update(prod.ref, {stock: dataBaseStock - prodQuantity})
                    }else{
                        noStock.push({id: prod.id, ...data})
                    }
                })
                if(noStock.length === 0){
                    const addOrder = await addDoc(ordersRef, clientInfo)
                    const idCompra = addOrder.id
                    myBatch.commit()
                    toast.success(linkToMain(idCompra), {
                        position: "top-center",
                        autoClose: false,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    setName("")
                    setEmail("")
                    setPhone("")
                    clearCart()
                }else{
                    toast.error("The purchase could not be generated as there is a product out of stock", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                } else {
                    toast.error("The purchase could not be generated since the cart is empty", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } 
            }
        } catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <h1 className="tittle_formulary">Finish your purchase!</h1>
            <div className="formulario">
                <form>
                    <div className="formulario">
                        <label for="name" className="subTittle_formulary">Name</label>
                        <input type="text" id="name" className="formulario_input" required="text" value={name} onInput={(evt) => setName(evt.target.value)}/>
                    </div>
                    <div className="formulario">
                        <label for="email" className="subTittle_formulary">E-mail</label>
                        <input type="email" id="email" className="formulario_input" required="email" value={email} onInput={(evt) => setEmail(evt.target.value)}/>
                    </div>
                    <div className="formulario">
                        <label for="phone" className="subTittle_formulary">Phone</label>
                        <input type="phone" id="phone" className="formulario_input" required="tel" value={phone}  onInput={(evt) => setPhone(evt.target.value)}/>
                    </div>
                    <div>
                        <input className="button_detalle" type="button" value="Submit" onClick={submitInfo}/>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default OrderFormulary