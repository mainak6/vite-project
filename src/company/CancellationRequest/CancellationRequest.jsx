import React from 'react'
import Layout from '../../components/layout/Layout';

function CancellationRequest() {
  return (
    <Layout>
      <div>
        <h1 className="text-center m-8 text-4xl text-white font-bold bg-fuchsia-500 p-10 rounded-lg ">
            Cancellation Request
        </h1>
        <p className="p-12 justify-normal bg-gray-400 m-10 rounded-xl text-base">
          *eMart Cancellation Policy* We understand that situations may arise
          where you need to cancel an order placed on eMart. To ensure a smooth
          and fair cancellation process, we have established the following
          cancellation policy: *Order Cancellation* You can cancel an order
          within 24 hours of placing it without any penalty. To cancel an order,
          please follow these steps: 1. Log in to your eMart account. 2. Go to
          "My Orders" and locate the order you want to cancel. 3. Click on the
          "Cancel Order" button next to the order. 4. Confirm your cancellation
          request. Please note that orders cannot be canceled once they have
          been processed and shipped. *Order Modification* If you need to modify
          an order, such as changing the shipping address or adding or removing
          items, please contact us within 24 hours of placing the order. We will
          do our best to accommodate your request. *Refunds for Canceled Orders*
          For orders canceled within 24 hours, your refund will be processed
          within 7 business days and issued to the original payment method used
          for the purchase. *Exceptions* Orders for custom-made items or items
          marked as "final sale" cannot be canceled. *Contact Us* If you have
          any questions about our cancellation policy or need to cancel an
          order, please contact us at [email protected]
        </p>
      </div>
    </Layout>
  );
}

export default CancellationRequest