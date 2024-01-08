// c++ forloop example program
#include <iostream>
#include <string>

int main(){
    std::string test{};
    char c{'f'};
    // theres three parts to the for loop
    // 1. int i{}; is the variable used in the loop
    // 2. is the condition i<20; which means loop until this becomes false
    // 3. i++(i = i + 1; ) means to increment i each time the loop executes 
    for(int i{};i<20;i++){ 
        test+=c;
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