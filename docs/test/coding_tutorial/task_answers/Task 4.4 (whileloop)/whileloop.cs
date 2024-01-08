using System;

namespace whileloop
{
    class Program
    {
        static void Main(string[] args)
        {
            string test="";
            char c = 'f';

            while(test.Length<20){
                test+=c;
                Console.WriteLine(test);
            }
        }
    }
}

// outputs:
/* 
f
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
ffffffffffffffffffff
*/