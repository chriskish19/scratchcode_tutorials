#include <iostream>
#include <string>

int main(){
    std::string test{};
    char c{'f'};
    int count{};
    
     // the main difference between do while and while loop is that the condition is checked after the code has been executed so the code will always execute once no matter the condition
    do{
        test+=c;
        std::cout << count << ". "<< test << "\n";
        count++;
    }while(test.size()<20);

    return 0;

    // outputs:
    /*  0. f
        1. ff
        2. fff
        3. ffff
        4. fffff
        5. ffffff
        6. fffffff
        7. ffffffff
        8. fffffffff
        9. ffffffffff
        10. fffffffffff
        11. ffffffffffff
        12. fffffffffffff
        13. ffffffffffffff
        14. fffffffffffffff
        15. ffffffffffffffff
        16. fffffffffffffffff
        17. ffffffffffffffffff
        18. fffffffffffffffffff
        19. ffffffffffffffffffff
    */


    
}