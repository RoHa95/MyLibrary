import React from 'react'

//components
import Cart from './Cart';
import AddSelectedBooktoQeue from './AddSelectedBooktoQeue';

function FeutureBook() {
    return (
        <div className="p-4 mx-auto md:px-20 flex flex-col gap-y-4">
          <h2 className="text-indigo-800 font-bold bg-indigo-100 rounded-lg px-2 py-1 lg:my-2 lg:text-2xl">
            کتاب های در صف مطالعه
          </h2>
          <div className="flex flex-col sm:flex-row gap-1 lg:gap-3 items-center justify-center">
            <Cart/>
            <Cart/>
            <Cart/>
            <AddSelectedBooktoQeue/>
          </div>
        </div>
      );
}

export default FeutureBook