let nota;

nota = prompt('Introduce tu nota');

if(Number(nota) == nota){
    if(nota<5)
    {
        alert('Eres un borrico y tienes que estudiar mas');
        window.location.href="https:\\w3schools.com";
    }

document.getElementById('main').innerHTML = 
`<h2>Enhorabuena! Has aprobado </h2>
<h1>${nota}</h1>`;
}

else{
    alert('Debes escribir una nota correcta');
    window.location.reload();
}