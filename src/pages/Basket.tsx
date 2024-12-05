import { useDispatch, useSelector } from "react-redux"
import { ProductType } from "../service/Products"
import { ClearIcon } from "../assets/images/icons";
import { deleteOrderProduct } from "../store/orderSlice";


const Basket = () => {
  const dispatch = useDispatch()
  const orderedProducts = useSelector(
    (state: {orderList: ProductType[]}) => state.orderList
  );
  const totalPrice = orderedProducts.reduce((val:number, item:ProductType) => {
    val+=(item.price * item.orderCount)
    return val
  }, 0)

  return (
    <div className="p-5 bg-white rounded-md">
      <div className="flex justify-end">
        <button className="flex items-center space-x-2 text-[#B6B6B6]"><ClearIcon/> <span>Очистить корзину</span></button>
      </div>
      <ul className="w-[900px] mx-auto mt-[50px]">
        {orderedProducts.map((item:ProductType) => (
          <li className="flex items-center justify-between" key={item.id}>
            <div className="flex items-center space-x-[15px]">
              <img src={item.imgUrl} alt="Img" width={80} height={80}/>
              <div>
                <h2 className="text-[22px] font-bold mb-2">{item.name}</h2>
                <p className="text-[16px] text-[#8D8D8D]">{item.type[0]} тесто, {item.size[0]}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-[22px] h-[22px] items-center flex justify-center rounded-full border-[2px] border-[#FE5F1E] text-[#FE5F1E] text-[16px]">-</button>
              <strong>{item.orderCount}</strong>
              <button className="w-[22px] h-[22px] items-center flex justify-center rounded-full border-[2px] border-[#FE5F1E] text-[#FE5F1E] text-[16px]">+</button>
            </div>
            <strong>{item.price * item.orderCount}₽</strong>
            <button onClick={() => dispatch(deleteOrderProduct(item.id))} className=" text-[#D7D7D7] w-[22px] h-[22px] border-[#D7D7D7] border-[2px] rounded-full justify-center items-center flex ">x</button>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between w-[900px] mx-auto mt-10">
        <p>Всего пицц: {orderedProducts.length} шт.</p>
        <p>Сумма заказа: {totalPrice}₽</p>
      </div>
    </div>
  )
}

export default Basket
