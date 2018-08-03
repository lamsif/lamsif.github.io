import java.util.ArrayList;

class PrimeHappy {

    static boolean isPrime(int number) {
        if (number == 0 || number == 1) return false;//False if 0 or 1
        if (number == 2) return true;//True if 2
        for (int i = 2; i < number; i++) {
            if (number % i == 0) {//False if number is divisible
                return false;
            }
        }
        return true;//True Otherwise
    }

    static int isPrimeHappy(int n) {
        int res = 1;//Initial result is 1
        ArrayList<Integer> primes = new ArrayList<Integer>();
        for (int i = 2; i < n; i++) {//Starting from i=2 excludes 0 and 1
            if (isPrime(i)) primes.add(i);//Checking if prime number
        }
        if (primes.size() == 0) {
            res = 0; //0 if no primes are found
        } else {
            int sum = 0;
            for (int i = 0; i < primes.size(); i++) {
                sum += primes.get(i);
            }
            if (sum % n != 0) {
                res = 0;//0 if the sum is not evenly divisible by n
            }
        }
        return res;
    }

    public static void main(String[] args) {
        //int res = isPrimeHappy(32);//Returns 1
    }

}