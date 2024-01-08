#include <iostream>
int main(){
    // this is a comment, it is ignored by the compiler and is not executed
    /* this is also a comment */
    bool on{true}; // change to: bool on{false};
    if(on){
        // if on is true this will execute any code inside the curly braces
        std::cout << "switch is on" << std::endl; // in c++ a semi-colon ends a line of code, like a period in a sentence.
    }
    else{
        // if on is false this will execute any code inside the curly braces
        std::cout << "switch is off" << std::endl;
    }
    // std::cout << "text to be displayed in the terminal" << std::endl;
    // std::cout is a function that can accept almost any type for which the << operator is overloaded, the type we passed in is a const char*
    // we will learn more about this later 
    
    return 0; // main function must return an integer value, to indicate we sucessfully executed to the end of the main function we return the value 0
}
