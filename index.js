// Unit Test Examples:
// Pushing the "door open" button should hold the door open as long as it is pushed.
// Pushing the "door open" button when the elevator is moving should do nothing.
// Pushing the "door closed" button should close the door if it is open.
// Pushing the "door closed" button if the door is open and someone is standing in the doorway should do nothing.
// Pushing an unlit floor should light up that button.

// Integration Test Example:
// Going from a higher to a lower floor temporarily disables the elevator from responding to the "up" button pressed in the lobby. 
// Functional Test Example:

// Operate the elevator so that a guest: 
// Goes from their room to Floor 7 to breakfast in the Lobby 
// Returns to their room to change into workout clothes
// Goes to the fitness center on Floor 10
// Returns to their room
// Acceptance Test Example: 

// Install the new panel in five locations for six months and collecting feedback before installing in all 1,200 locations. 




// Unit Test:

    // 1. A function called "multiplication" that returns the product of the two input numbers.

    // Pseudocode:
    // Create a function that has multiplication(input1, input2)
    // Return input1 * input2

    // Unit Tests:
    // Expect input1 and input2 to be an integer, whole number
    // Expect multiplication(1, 2) to equal 2
    // Expect multiplication(0, 5) to equal 0
    // Expect multiplication(-2, 5) to equal -10
    // Expect multiplication("fancy", 2) to be an error
    // Expect multiplication(2, "fancy") to be an error
    // Expect multiplication("fancy", "fancy") to be an error
    // Expect only 1 input multiplication(1, undefined | null | "") to be an error
    // Expect only 1 input multiplication(undefined | null | "", 1) to be an error


    // 2. A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

    // Pseudocode:
    // concatOdds(arr1, arr2)
    // Write a function with 2 arrays (arr1, arr2) that will also .filter the array for odd numbers, concatenate the odd numbers from each array and then add them to a new array.  Reorder the array in ascending order using sort
    // Return new array

    // Unit Test:
    // Expect input to be 2 arrays ([arr1], [arr2]) should error if not arrays
    // Expect [arr1] to contain integers, whole numbers
    // Expect [arr2] to contain integers, whole numbers
    // Expect concatOdds([1, 1], [1, 2, 3]) to equal [1, 3]
    // Expect concatOdds([1, 2, "fancy"], [1, 2, 3]) to be an error
    // Expect concatOdds([1, 2, 3], [1, 2, "fancy"]) to be an error
    // Expect concatOdds([-1, 1], [2, 3, 5]) to equal [-1, 1, 3, 5]
    // Expect concatOdds([0], [1, 2]) to equal [1]
    // Expect concatOdds([], []) to equal []
    // Expect concatOdds([2, 4, 6], [8, 10, 12]) to equal []


// Functional Tests:

    // Checkout as a guest:
    // If the guest fills their cart, closes the tab the cart is saved
    // During checkout, if the cart is empty a prompt will appear that says "Nothing to checkout"
    // After adding wanted items to cart and clicking "checkout" the guest will be directed to a page with a review of what items are in the cart.
    // After clicking "checkout" the guest will recieve a prompt asking if they would like to log in, create an account or continue as guest
    // After reviewing the cart during checkout, the guest is taken to a shipping page where they would input:
        // First Name, Last Name
        // Street Address, City, State, Zip Code
        // Phone number or Email (preference)
    // If guest tries to click "Continue to payment" while parts of the shipping page are incomplete an error will appear in the section which is incomplete
    // If shipping is completed by guest and they click "Continue to payment" it will redirect them to payment page
    // Once on payment page the guest will be directed to input a payment:
        /// Name on card
        // Card number
        // CVV or CVC
    // If guest tries to click "continue to process payment" and a section of the payment page is incomplete or invalid an error prompt will appear redirecting them to the section incomplete or invalid
    // If they "continue to process payment" and the card is declined a prompt will alert them that their card was declined and they will be directed to try another payment method



    // Checkout as a user:
    // If the user fills cart, closes the tab the cart is saved
    // If the user fills cart, logs out then logs back in the cart will still have the items in cart
    // During checkout, if the cart is empty a prompt will appear that says "Nothing to checkout"
    // After adding wanted items to cart and clicking "checkout" the user will be directed to a page with a review of what items are in the cart.
    // If user is not logged in: After clicking "checkout" the user will recieve a prompt asking if they would like to log in, create an account or continue as guest
    // After reviewing the cart during checkout, the user is taken to a shipping page where they would confirm their:
        // First Name, Last Name
        // Street Address, City, State, Zip Code
        // Phone number or Email (preference)
    // If guest tries to click "Continue to payment" while parts of the shipping page are incomplete an error will appear in the section which is incomplete
    // If the user changes any information on the shipping page a prompt will appear asking if they confirm the changes made to their account.
    // If shipping is completed by user and they click "Continue to payment" it will redirect them to payment page
    // If the user had chosen the option to save payment method, the user will be asked to confirm the payment option saved in their account.
    // If the user had not chosen to save their last payment method, or has never added a payment method they will be directed to input:
        // Name on card
        // Card number
        // CVV or CVC
    // If user tries to click "continue to process payment" and a section of the payment page is incomplete or invalid an error prompt will appear redirecting them to the section incomplete or invalid
    // If they "continue to process payment" and the card is declined a prompt will alert them that their card was declined and they will be directed to try another payment method


