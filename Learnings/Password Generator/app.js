// Password Generator (Closure-based)
// 👉 Concepts:
// Lexical scope
// Returning functions
// Encapsulation


// const createPasswordGenerator = (length) => {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    
//     return () => {
//         let password = "";
//         for(let i = 0; i < length; i++){
//             const randomPass = Math.floor(Math.random() * chars.length);
//             password += chars[randomPass];
//         }
//         return password;
//     };
// };

const createPasswordGenerator = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
return () => {
    let password = "";
    for(let i = 0; i < length; i++){
        const randomPass = Math.floor(Math.random() * chars.length);
        password += chars[randomPass];
    }
    return password;
};
};