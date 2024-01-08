import java.util.Scanner;
public class ifelse {  // In Java, when you have a public class, the filename must match the class name. Filename: ifelse.java
    public static void main(String[] args){ // this is the main function
        boolean light_bulb;

        // Create a Scanner object
        Scanner scanner = new Scanner(System.in);
        
        // Prompt the user
        System.out.println("Enter on to turn on the switch and off to turn off the switch");

        // get user input
        String light_switch_state = scanner.nextLine(); // gets the typed text from the next line

        // anything other than "on" will turn off the light
        if(light_switch_state.equals("on")){ // test if light_switch_state equals "on"
            light_bulb = true; // set light_bulb to on
            System.out.println("Light bulb turned on"); // output text to the terminal
        }
        else{
            light_bulb = false; // turn off light_bulb
            System.out.println("Light bulb turned off"); // output text to the terminal
        }

        scanner.close(); // delete scanner object
    }
}