import React from "react"
import { ProductType } from "../service/Products"
import { Segmented } from "antd";
import AddButton from "./AddButton";

const ProductCard: React.FC<{ item: ProductType }> = ({ item }) => {
    return (
        <div className="w-[280px]  flex flex-col items-center">
            <img className="w-[260px] h-[260px]" src={item.imgUrl} alt={item.name} width={259} height={260} />
            <h2 className="text-[20px] font-bold leading-[24px] mt-[11px] mb-[22px]">{item.name}</h2>
            <Segmented<string> options={item.type} />
            <Segmented<string> options={item.size} />
            <div className="flex justify-between w-full items-center mt-[17px]">
                <strong className="text-[22px] font-semibold leading-[26px]">от {item.price} ₽</strong>
                <AddButton/>
            </div>
        </div>
    )
}

export default ProductCard
