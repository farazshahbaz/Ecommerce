import { createContext } from "react"
import all_products from "../assets/all_products"
export const ShopContext = createContext(null);
const Shopcontextprovider = (props) => {
    const contextvalue = { all_products };
    return (
        <div>
            <ShopContext.Provider value={contextvalue}>
                {props.children}
            </ShopContext.Provider>
        </div>
    )
}

export default Shopcontextprovider;
