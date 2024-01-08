#include <iostream>
#include <string>
int main(){
    std::string test{};
    char c{'f'};
    while(test.size()<20){ // if the length of test is under 20 the loop continues
        // same as: test = test + c;
        test+=c; // in c++ the + operator is overloaded to allow adding characters to strings
        std::cout << test << "\n";
    }
    
    return 0;
    // outputs: 
    /*  f
        ff
        fff
        ffff
        fffff
        ffffff
        fffffff
        ffffffff
        fffffffff
        ffffffffff
        fffffffffff
        ffffffffffff
        fffffffffffff
        ffffffffffffff
        fffffffffffffff
        ffffffffffffffff
        fffffffffffffffff
        ffffffffffffffffff
        fffffffffffffffffff
        ffffffffffffffffffff */
}