// =================== Scope, Lexical Environment, scope chain ===========================

const hello = "Hello Devs";

function a() {
    // const hello = "Hello Devs";

    // console.log(hello);

  function b() {
    //   const hello = "Hello Devs";

      // console.log(hello);

    function c() {
        // console.log(hello);
    }
    c();
  }
  b();
}

a();
// console.log(hello);
