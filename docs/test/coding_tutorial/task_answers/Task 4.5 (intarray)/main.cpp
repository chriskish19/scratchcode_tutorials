#include <iostream>
#include <array>
#include <string>
#include <limits>

int main(){
    std::array<int,20> elements{};
    int index{};
    bool exit_flag{false},valid_input{false};
    std::string answer;

    while(!exit_flag && index < elements.size()){
        std::cout << "Input an integer to be inserted into the array" << "\n";
        if (!(std::cin >> elements[index])) {
            std::cin.clear(); // Clears the fail state
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // Ignores the rest of the line
            std::cout << "Invalid input. Please enter an integer." << "\n";
            continue; // Skip the rest of the loop iteration
        }
        index++;

        while(!valid_input){
            std::cout << "Do you have more integers to input into the array? y or n" << "\n";
            std::cin >> answer;
            
            // parse answer for y or n
            size_t found_y = answer.find('y');
            size_t found_n = answer.find('n');
            if(found_y != std::string::npos || found_n != std::string::npos){
                valid_input = true;
                
                // if there is both y and n in the answer n overrides y
                if(found_n != std::string::npos){
                    exit_flag = true;
                }
            } 
            else{
                std::cout << "Invalid input. Please enter y or n" << "\n";
            }
        }

        // reset 
        valid_input = false;   

        // flush
        std::cout << std::endl; 
    }
    
    std::cout << "Printing elements:" << "\n";
    for(int i{};i<index;i++){
        std::cout << elements[i] << "\n";
    }
    
    return 0;
}