#include <iostream>

using std::cout;
using std::cin;
using std::endl;

void swap(int a, int b);
void swap_usg_ptr(int *a, int *b);

int main(){
    int a=20;
    int b=10;
    cout<<"Before Swapping A: "<<a<<" B: "<<b<<endl;
    swap(a,b);
    swap_usg_ptr(&a, &b);
    cout<<"After Swapping A: "<<a<<" B: "<<b<<endl;
    return 0;
}

void swap(int a, int b){
    a = a + b;
    b = a - b;
    a = a - b;
}

void swap_usg_ptr(int *a, int *b){
    *a = *a + *b;
    *b = *a - *b;
    *a = *a - *b;
}