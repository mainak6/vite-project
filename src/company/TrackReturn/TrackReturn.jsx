import React from 'react'
import Layout from '../../components/layout/Layout';

function TrackReturn() {
  return (
    <Layout>
      <div>
        <h1 className="text-center m-8 text-4xl text-white font-bold bg-fuchsia-500 p-10 rounded-lg ">
            Track Return
        </h1>
        <p className="p-12 justify-normal bg-gray-400 m-10 rounded-xl text-base">
          *Track Your Return* To track the status of your return, please follow
          these steps: 1. Log in to your eMart account. 2. Go to "My Orders" and
          locate the order containing the item you returned. 3. Click on the
          "Track Return" button next to the returned item. 4. Enter your return
          authorization number (RA) and click on the "Track" button. 5. Your
          return status will be displayed on the screen. Please note that it may
          take up to 5 business days for your return to be processed and your
          refund to be issued. You will receive an email notification once your
          refund has been processed. If you have any questions about tracking
          your return, please contact us at [email protected]
        </p>
      </div>
    </Layout>
  );
}

export default TrackReturn