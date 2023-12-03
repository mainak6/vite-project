import React from 'react'
import Layout from '../../components/layout/Layout';

function ReturnPolicy() {
  return (
    <Layout>
      <div>
        <h1 className="text-center m-8 text-4xl text-white font-bold bg-fuchsia-500 p-10 rounded-lg ">
          Return Policy
        </h1>
        <p className="p-12 justify-normal bg-gray-400 m-10 rounded-xl text-base">
          *eMart Return Policy* We understand that sometimes you may need to
          return or exchange a product purchased from eMart. We are committed to
          making the return and refund process as easy and convenient as
          possible for you. *Return Policy* You may return most new, unopened
          items within 30 days of delivery for a full refund. Items must be in
          their original packaging with all tags attached. *Here's how to return
          an item:* 1. *Log in to your eMart account.* 2. *Go to "My Orders" and
          find the order containing the item you want to return.* 3. *Click on
          the "Return Item" button next to the item.* 4. *Select the reason for
          your return and click on the "Submit" button.* 5. *You will receive a
          return authorization number (RA) via email.* 6. *Pack the item
          securely and include a copy of your RA in the package.* 7. *Ship the
          package to the address provided on your RA.* *Refund Policy* Once we
          receive your returned item, we will inspect it and process your refund
          within 7 business days. Your refund will be issued to the original
          payment method used for your purchase. *Exceptions* The following
          items are not eligible for return: * Gift cards * Downloadable
          products * Custom-made items * Items marked as "final sale"
          *Exchanges* If you would like to exchange an item for a different size
          or color, follow the same steps as for a return. Once we receive your
          returned item, we will ship you the replacement item. *Damaged or
          Defective Items* If you receive a damaged or defective item, please
          contact us within 7 days of delivery. We will arrange for a
          replacement item or a full refund. *Shipping Costs* You are
          responsible for shipping costs for all returns. However, we will waive
          the shipping costs for damaged or defective items. *Contact Us* If you
          have any questions about our return and refund policy, please contact
          us at [email protected]
        </p>
      </div>
    </Layout>
  );
}

export default ReturnPolicy