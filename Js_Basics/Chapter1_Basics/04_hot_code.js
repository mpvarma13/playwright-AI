function add(a,b)
{
    return a+b;
}
let result
for(i=0 ; i<1000; i++)
{
    result = add(i, i+1)
}

console.log("print after 1000 calls", result)