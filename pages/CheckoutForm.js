import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { TbCurrencyTaka } from "react-icons/tb";
import { useState } from 'react';

const CheckoutForm = ({amountToPay}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // console.log(card);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setErrorMessage(error?.message || ''); 
            console.log('[error]', error.message);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '18px',
                            color: 'white',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: 'red',
                        },
                    },
                }}
            />
            <button style={{
                backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat"
            }} type="submit" disabled={!stripe} className='w-full my-6 normal-case border-0 btn btn-primary btn-sm'>Pay {amountToPay} <span> <TbCurrencyTaka size={20}></TbCurrencyTaka> </span></button>
            <p className="flex justify-center text-error">{errorMessage}</p>
        </form>
    );
};

export default CheckoutForm;