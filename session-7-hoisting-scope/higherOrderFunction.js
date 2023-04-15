// ================================= Higher Order Function ==============================

// A function which takes a function as an argument or returns a function is known as a Higher Order Function.

function a(string){
    console.log(string)
}

// This b is a HOF
function b(a){
    a("Hello dev");
}

b(a);
