//deepcopy

const order={
    orderId :"ORD1001",
    customer:{
        name:"Anitha",
        address:{
            city:"Hyderabad",
            pincode:500085      
        }
    },items:[
        {product:"Laptop",price:70000}    
    ]   
};
// Step 1: Create a deep copy of order
const copiedOrder=JSON.parse(JSON.stringify(order));
// Step 2: Modify in copied object                                      
copiedOrder.customer.address.city="Bangalore";
copiedOrder.items[0].price=65000;
// Step 3: Verify original object remains unchanged
console.log("Original Order:",order);
console.log("Copied Order:",copiedOrder);
/*
Observation:

- The 'customer.address.city' in the copied object has changed to "Bangalore", while the original object's city remains "Hyderabad".
- The 'items[0].price' in the copied object has changed to 65000, while the original object's price remains 70000.
This confirms that a deep copy was successfully created, and modifications to the copied object did not affect the original object.
*/