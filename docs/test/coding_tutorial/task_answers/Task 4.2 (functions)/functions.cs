// Your task is to write the Java functions program in C#.
using System;

namespace functionsApp
{
    class Program
    {
        static int add(int x,int y){
            return x+y;
        }
        static void Main(string[] args)
        {
            Console.WriteLine(add(1,2)); // outputs: 3
            Console.WriteLine(add(4,5)); // outputs: 9
        }
    }
}
