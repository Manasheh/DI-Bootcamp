/*Write a JavaScript program that recreates the pattern below.
Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
Do this Daily Challenge by yourself, without looking at the answers on the internet. */

star = ''
for (let i = 1; i <= 6; i++) {
    star = star + ' * '
    console.log(star);
}

star = ''
for (let i = 1; i<=3; i++) { //*,**,***,****,*****,******
    for (let j = 1; j<=2; j++) { 
        star = star + " * "
        console.log(star);
    }

}