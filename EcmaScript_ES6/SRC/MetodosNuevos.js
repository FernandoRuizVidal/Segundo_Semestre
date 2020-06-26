const Texto = 'Hello World';
console.log(Texto, 'Empieza Con A', Texto.toLowerCase().startsWith('A'));
console.log(Texto, 'Termina Con A', Texto.toLowerCase().endsWith('A'));
console.log(Texto, 'Incluye Mi Nombre?', Texto.includes('Fernando'));

const Amigos = ['Braulio', 'Vanesa', 'Lady', 'Ana', 'Oscar'];
console.log(Amigos.includes('David'));
console.log(Amigos.find(Amigo=> Amigo.length > 6));
console.log(Amigos.find(Amigo=> Amigo === 'Lady'));
console.log(Amigos.findIndex(Amigo => Amigo ==='Vanesa'));