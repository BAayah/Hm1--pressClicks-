let a = 0;
let b = document.getElementById('parag');
let c = document.getElementById('parag1');

const BuCl = () => {
    a = a + 1;
    b.innerHTML = a; 
};

const ButCl = () => {
    a = a - 1;
    c.innerHTML = a;
};