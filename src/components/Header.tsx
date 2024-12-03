import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.svg"
import { BasketLogo } from "../assets/images/icons"

interface HeaderType {
    basketCount: number,
    totalPrice: number
}

const Header:React.FC<HeaderType> = ({basketCount, totalPrice}) => {
    return (
        <div className="flex items-center justify-between pb-[40px] border-b-[1px] border-[#F6F6F6]">
            <Link to={"/"} className="flex items-center">
                <img src={Logo} alt="Logo" width={38} height={38} />
                <div className="ml-[17px]">
                    <h1 className="text-[24px] font-bold leading-[29px]">REACT PIZZA</h1>
                    <p className="text-[16px] leading-[19px] text-[#7B7B7B]">самая вкусная пицца во вселенной</p>
                </div>
            </Link>
            <button className="bg-[#FE5F1E] w-[150px] rounded-[30px] py-[12px] text-white font-semibold flex items-center justify-center space-x-[13px] cursor-pointer">
                <strong className="text-[16px] leading-[19px]">{totalPrice} ₽</strong>
                <span className="inline-block w-[2px] h-[25px] bg-[#FFFFFF40]"></span>
                <div className="flex items-center space-x-[8px]">
                    <BasketLogo/>
                    <span>{basketCount}</span>
                </div>
            </button>
        </div>
    )
}

export default Header
