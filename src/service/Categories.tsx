import { useContext, useEffect, useState } from "react"
import { useAxios } from "../hook/useAxios"
import { ArrowUp } from "../assets/images/icons"
import { Context } from "../context/Context"
import { useQuery } from "react-query"


interface CategoryType {
    id: string,
    title: string
}


const Categories = () => {
    const {setCategoryId} = useContext(Context)
    const [categories, setCategories] = useState<CategoryType[]>([])
    const [isActive, setIsActive] = useState<string>("Все")


    function categoryBtnClick(title:string, id:string):void {
        setIsActive(title)
        setCategoryId(id)
    }

    // const {data:categories = []} = useQuery({
    //     queryKey:['categorias'],
    //     queryFn:() => useAxios().get("/categorias").then(res => res.data)
    // })
    useEffect(() => {
        useAxios().get("/categorias").then(res => setCategories(res.data))
    }, )

  return (
    <div className="flex items-center justify-between">
        <div className="flex space-x-[6px]">
            {categories.map((item:CategoryType) => <button onClick={() => categoryBtnClick(item.title, item.id)} className={`${isActive == item.title ? "bg-[#282828] text-white" : "bg-[#F9F9F9] text-black"} py-[14px] px-[30px]  rounded-[30px] text-[16px]  font-semibold text-center`} key={item.id}>{item.title}</button>)}
        </div>
        <div className="flex items-center space-x-[8px] cursor-pointer">
            <ArrowUp/>
            <p className="text-[14px] font-semibold leading-[17px]">Сортировка по:</p>
            <span className="text-[#FE5F1E] text-[16px] leading-[17px]">популярности</span>
        </div>
    </div>
  )
}

export default Categories
