import { AddIcon } from "../assets/images/icons"

const AddButton = () => {
  return (
    <button className="py-[8px] flex items-center border-[1px] border-[#EB5A1E] mx-[18px] rounded-[30px] gap-[7px] w-[132px] text-[#EB5A1E] justify-center hover:bg-[#FE5F1E] hover:text-white duration-300">
        <AddIcon/>
        <span className="text-[16px] font-semibold">Добавить</span>
    </button>
  )
}

export default AddButton
