/* Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
*/
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
      theme: "dark",
      language: "en"
    }
  };
    // Step 1: Create a shallow copy of user    
    const copiedUser = {...user,name:"Raju"};
    // Step 2: Change preferences.theme in the copied object
    copiedUser.preferences.theme="light";
    copiedUser.preferences.language="telugu";
    // Step 3: Log both original and copied objects
    console.log("Original User:",user);
    console.log("Copied User:",copiedUser);
    // Step 4: Observe what changes and what doesn’t

    /*  
    Observation:
    - The 'name' property in the copied object has changed to "Raju", while the original object's 'name' remains "Ravi".
    - However, the 'preferences.theme' property in both the original and copied objects has changed to "light". This is because the 'preferences' object is shared between the two due to the shallow copy.
    */  

