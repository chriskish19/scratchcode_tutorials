#include <iostream> // the header file that contains all the code that defines functions like std::cout and the << operator 
#include <limits> // std::numeric_limits<int> is defined in this header, we will learn more about header files later 
int main(){
    // int represents an integer type, it can hold a value in the range of -2,147,483,648 to 2,147,483,647
    int number{5}; // number is initially assigned the value: 5
    std::cout << number << "\n"; // outputs 5 to the console
    number = 7; // number is now assigned a new value of: 7
    std::cout << number << "\n"; // outputs 7 to the console

    // Here we get the max and min value for a integer
    int max_int = std::numeric_limits<int>::max();
    int min_int = std::numeric_limits<int>::min();

    std::cout << "Maximum int value: " << max_int << "\n"; // outputs 2,147,483,647
    std::cout << "Minimum int value: " << min_int << "\n"; // outputs -2,147,483,648

    return 0;
}    
