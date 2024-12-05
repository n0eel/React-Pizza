import { ReactNode } from "react"

interface ButtonType {
  orderClass?: string;
  title: string;
  leftIcon?: ReactNode;
  orderCount?: number;
}

const AddButton: React.FC<ButtonType> = ({ orderClass, orderCount, title, leftIcon }) => {
  return (
    <button className={`${orderClass} group hover:bg-[#FE5F1E] hover:text-white duration-300 py-[8px] flex items-center border-[1px] border-[#EB5A1E] mx-[18px] rounded-[30px] gap-[7px] w-[132px] text-[#EB5A1E] justify-center`}>
        {leftIcon}
        <span className="text-[16px] font-semibold">{title}</span>
        {orderCount && orderCount > 0 ? <span className="w-[22px] h-[22px] rounded-full group-hover:bg-white group-hover:text-[#EB5A1E] duration-300 text-[13px] text-white bg-[#EB5A1E]">{orderCount}</span> : null}
    </button>
  )
}

export default AddButton
