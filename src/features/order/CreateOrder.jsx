// import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import { isValidPhone } from '../../utils/helpers';
import { isEmpty } from 'lodash-es';
import { Button } from '../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyCart } from '../cart';
import { clearCart, getCart } from '../cart/cartSlice';
import store from '../../store';
import { fetchAddress } from '../user/userSlice';

function CreateOrder() {
  const {
    user: {
      username,
      position,
      address,
      status: addressStatus,
      error: errorAddress,
    },
    cart,
  } = useSelector((state) => {
    return {
      user: state.user,
      cart: state.cart.cart,
    };
  });

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const dispatch = useDispatch();
  const formError = useActionData();
  const isLoadingAddress = addressStatus === 'loading';

  if (isEmpty(cart)) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      <Form method="POST">
        <div className="mb-4 flex  flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={username}
          />
        </div>

        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formError?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs font-bold text-red-700">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input  w-full"
              disabled={isLoadingAddress}
              defaultValue={address}
            />

            {addressStatus === 'error' && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs font-bold text-red-700">
                {errorAddress}
              </p>
            )}
          </div>
          {!position.latitude && !position.longitude && (
            <span className="z-2 absolute right-1 top-1">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                type="small"
                disabled={isLoadingAddress}
              >
                get Position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:bg-yellow-300  focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" value={JSON.stringify(cart)} name="cart" />
          <input
            type="hidden"
            value={`${position?.latitude || ''},${position?.longitude || ''}`}
            name="position"
          />

          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting ? 'Placing order...' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };

  const errors = {};

  if (!isValidPhone(order.phone)) errors.phone = 'Invalid phone number!';

  if (!isEmpty(errors)) return errors;
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
