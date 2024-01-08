using System;
public class Types{
    public static void Main(string[] args){
        int myInt = 10;
        double myDouble = 20.5;
        char myChar = 'A';
        bool myBool = true;

        Console.WriteLine("Type of myInt: " + myInt.GetType());
        Console.WriteLine("Type of myDouble: " + myDouble.GetType());
        Console.WriteLine("Type of myChar: " + myChar.GetType());
        Console.WriteLine("Type of myBool: " + myBool.GetType());
    }
}
