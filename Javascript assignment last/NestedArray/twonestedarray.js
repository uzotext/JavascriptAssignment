const mixed_Array = [
    "Welcome to Javascript Programming Language!",
     false, 852, 
     { key: "value" },
    [4, 40, 30, 10, 47, 12],  
    [17, 15, 2, 35, 5]    
];


let total_Sum = 0; 
mixed_Array.forEach(item => {
    
    if (Array.isArray(item)) {
    
        const lastTwo = item.slice(-2);
        const sum = lastTwo.reduce((x, y) => x + y, 0); 
        console.log(`Last two numbers: ${lastTwo}, Sum: ${sum}`);
        total_Sum += sum; 
    }
});

console.log(`Total sum of the last two numbers all nested arrays: ${total_Sum}`);
