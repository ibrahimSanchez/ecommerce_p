"use client";
import { createOrder } from "@/api/order/order.api";
import {
  removeAllItemsFromCart,
  selectTotalPrice,
} from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { OrderItem } from "@/types/order";
import { useNotification } from "@/app/context/NotificationContext";

type FormData = {
  delivery_address: string;
};

const OrderSummary = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const route = useRouter();
  const { showNotification } = useNotification();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const arrayItems: OrderItem[] = cartItems.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
      price: item.price,
    }));

    try {
      if (!accessToken) route.push("/auth/signin");
      const res = await createOrder({
        arrayItems,
        total_amount: totalPrice,
        delivery_address: data.delivery_address,
      });
      showNotification({ message: "Purchase order added", error: false });
      dispatch(removeAllItemsFromCart());
    } catch (error) {
      showNotification({
        message: error.response?.data?.message || "An error occurred",
        error: true,
      });
    }
  };

  return (
    <div className="lg:max-w-[455px] w-full">
      {/* <!-- order list box --> */}
      <div className="bg-white shadow-1 rounded-[10px]">
        <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
          <h3 className="font-medium text-xl text-dark">Order Summary</h3>
        </div>

        <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
          {/* <!-- title --> */}
          <div className="flex items-center justify-between py-5 border-b border-gray-3">
            <div>
              <h4 className="font-medium text-dark">Product</h4>
            </div>
            <div>
              <h4 className="font-medium text-dark text-right">Subtotal</h4>
            </div>
          </div>

          {/* <!-- product item --> */}
          {cartItems.map((item, key) => (
            <div
              key={key}
              className="flex items-center justify-between py-5 border-b border-gray-3"
            >
              <div>
                <p className="text-dark">{item.title}</p>
              </div>
              <div>
                <p className="text-dark text-right">
                  ${item.discountedPrice * item.quantity}
                </p>
              </div>
            </div>
          ))}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-5 border-b border-gray-3">
              <label htmlFor="deliveryAddress" className="block mb-2.5">
                Delivery address
              </label>

              <input
                type="text"
                name="deliveryAddress"
                id="deliveryAddress"
                autoComplete="on"
                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                {...register("delivery_address", { required: true })}
              />
            </div>

            {/* <!-- total --> */}
            <div className="flex items-center justify-between pt-5">
              <div>
                <p className="font-medium text-lg text-dark">Total</p>
              </div>
              <div>
                <p className="font-medium text-lg text-dark text-right">
                  ${totalPrice}
                </p>
              </div>
            </div>

            {/* <!-- checkout button --> */}
            <button
              type="submit"
              className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Process to Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
