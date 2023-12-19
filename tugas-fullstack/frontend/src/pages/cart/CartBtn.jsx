import { AiOutlineShoppingCart } from "react-icons/ai";

const CartBtn = () => {
  return (
    <div className="relative">
      <AiOutlineShoppingCart />
      <div className="absolute -right-2 -top-2 text-[0.7rem] bg-rose-500 text-white rounded-md leading-none py-[0.15rem] px-[0.2rem]">
        <span>0</span>
      </div>
    </div>
  );
};

export default CartBtn;
