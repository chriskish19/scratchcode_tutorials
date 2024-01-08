#include <iostream>
#include <string>

int main(){
    std::string test{"Hello World!"}; // this is an array of chars also called a string
    
    // in arrays we start counting at 0 
    // begining at index 0 would be the character 'H'
    // we access each character by looping through the string and calling text.at(i) function
    // test is an object of the string class, we will cover classes soon
    for(size_t i{};i<test.size();i++){
        std::cout << "at index: " << i << " | character: " << test.at(i) << "\n";
    }

    return 0;
}

// outputs:
/*

at index: 0 | character: H
at index: 1 | character: e
at index: 2 | character: l
at index: 3 | character: l
at index: 4 | character: o
at index: 5 | character:  
at index: 6 | character: W
at index: 7 | character: o
at index: 8 | character: r
at index: 9 | character: l
at index: 10 | character: d
at index: 11 | character: !

*/