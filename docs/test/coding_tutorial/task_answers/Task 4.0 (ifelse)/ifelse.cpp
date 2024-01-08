// Your task is to modify the ifelse C++ example program so that it gets user input to change on to either true or false similar to the ifelse Java example. 
#include <iostream>
int main(){
    bool on{};
    std::string light_switch_state{};
    std::cout << "Enter on to turn on the switch and off to turn off the switch" << "\n";
    std::cin >> light_switch_state;
    if(light_switch_state=="on"){
        on = true;
        std::cout << "Light bulb turned on" << "\n";
    }
    else{
        on =false;
        std::cout << "Light bulb turned off" << "\n";
    }
    return 0;
}
