using System;
namespace variables
{
    class Program
    {
        static void Main(string[] args)
        {
            int myInt = 10;
            float myFloat = 20.5f;
            char myChar = 'A';
            bool myBool = true;
            string myString = "Hello, World!";
            DateTime today = DateTime.Now;

            Console.WriteLine(myInt); // outputs: 10
            Console.WriteLine(myFloat); // outputs: 20.5
            Console.WriteLine(myChar); // outputs: A
            Console.WriteLine(myBool); // outputs: True
            Console.WriteLine(myString); // outputs: Hello World
            Console.WriteLine(today); // outputs: current date and time
        }
    }
}
