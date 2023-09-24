import React from 'react';
import PriceOption from '../priceOption/PriceOption';

const PriceOptions = () => {

   const gymMembershipOptions= [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to cardio equipment",
            "Free weights area",
            "Locker room access",
            "Fitness classes (limited)"
          ],
          "price": 29.99
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "Full gym access",
            "Unlimited fitness classes",
            "Personal training sessions (2 per month)",
            "Sauna and steam room access",
            "Nutritional guidance"
          ],
          "price": 59.99
        },
        {
          "id": 3,
          "name": "Family Membership",
          "features": [
            "Full gym access for the entire family",
            "Children's play area",
            "Discounts on additional services",
            "Access to all classes"
          ],
          "price": 99.99
        }
      ]
    return (
        <div className='m-12'>
            <p className='text-5xl'>This is best price option</p>
           <div className='grid grid-cols-3 gap-8 p-9'>
           {
                gymMembershipOptions.map(add=> <PriceOption key={add.id} add={add}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;