import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delievry_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"Cart"} text2={"Total"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between ">
          <p>SubTotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <div className="flex justify-between ">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {getCartAmount() === 0 ? 0 : delievry_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between font-medium">
          <strong>Total</strong>
          <p>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delievry_fee}.00
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartTotal;
