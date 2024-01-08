#include <iostream>
#include <typeinfo>

int main(){
    int myInt = 10;
    double myDouble = 20.5;
    char myChar = 'A';
    bool myBool = true;

    std::cout << "Type of myInt: " << typeid(myInt).name() << "\n"; // outputs: int
    std::cout << "Type of myDouble: " << typeid(myDouble).name() << "\n"; // outputs: double
    std::cout << "Type of myChar: " << typeid(myChar).name() << "\n"; // outputs: char
    std::cout << "Type of myBool: " << typeid(myBool).name() << "\n"; // outputs: bool

    return 0;
}