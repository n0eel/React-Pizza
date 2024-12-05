import { useContext, useEffect, useState } from "react"
import { useAxios } from "../hook/useAxios"
import ProductCard from "../components/ProductCard"
import { Context } from "../context/Context"


export interface ProductType {
    id: string,
    categoryId: string,
    imgUrl: string,
    name: string,
    type: string[],
    size: string[],
    price: number,
    orderCount: number
}

const Products = () => {
    const {categoryId} = useContext(Context)
    const [products, setProducts] = useState<ProductType[]>([])


    useEffect(() => {
        useAxios().get(`/products`, {
            params:{categoryId}
        }).then(res => setProducts(res.data))
    }, [categoryId])

    const [getAllProducts, setGetAllProducts] = useState<ProductType[]>(products)
    useEffect(() => setGetAllProducts(products), [products])

  return (
    <div className="mt-[32px]">
        <h1 className="text-[32px] leading-[39px] font-bold ">Все пиццы</h1>
        <div className="mt-[35px] flex justify-between flex-wrap">
            {getAllProducts.map((item:ProductType) => <ProductCard key={item.id} item={item} getAllProducts={getAllProducts} setGetAllProducts={setGetAllProducts}/>)}
        </div>
    </div>
  )
}

export default Products
