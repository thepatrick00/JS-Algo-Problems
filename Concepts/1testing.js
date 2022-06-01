let cipherText = [...'YZOGUT QGMORTZ MTRHTILS'];
let plainText = '';

for (let [index, value] of Object.entries(cipherText)) {
  plainText += index % 2 === 0 ? value : '';
}

console.log(Object.entries(cipherText))

console.log(plainText); 




var thing;
let func = (str = 'no arg') => {
  console.log(str);
};
func(thing);
func(null);