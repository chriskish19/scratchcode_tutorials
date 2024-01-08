#include <iostream>
// this is called the function definition and it must be defined before we can call it
// in c++ a function must be defined before it is called since the compiler reads the code top to bottom
int add(int x, int y){ // int x and int y are the function parameters, they act as the function's own variables
    return x+y; // this adds x,y and returns the result 
} 

// this called the main function its the main entry point of any c++ application
// it gets called first when you execute the program
int main(){
    // declare our variables
    int x{5},y{7},result{}; 
    // in c++ this is the same as
    // int x = 5;
    // int y = 7;
    // int result = 0;

    // call our add function and save the result
    result = add(x,y);

    // output the result to the console
    std::cout << result << "\n"; // outputs: 12

    // output the function return value directly without using variables
    std::cout << add(5,7) << "\n"; // outputs: 12
    std::cout << add(6,1) << "\n"; // outputs: 7
    std::cout << add(add(1,1),add(2,1)); // nested call to add function, outputs: 5

    // "\n" is called new line character it gives us a newline to output to in the console
    return 0;
}

