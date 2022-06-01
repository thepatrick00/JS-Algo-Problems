//every scope has access to everything outside of that scope

//using an IIFE here. A immidiatly invoked function expression

 const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`I have ${num} credit(s).`)
    return () => { counter++; credits(counter); }
 })();
