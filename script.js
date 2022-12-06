const characters = [
	{
		"Imagem": "./Images/Garry.png",
        "Nome": "Garry",
        "Genero": "Masculino",
        "Especie": "Caramujo",
        "Profissao": "Bicho de Estimação"
    },
	{
		"Imagem": "./Images/Sandy.png",
        "Nome": "Sandy",
        "Genero": "Feminino",
        "Especie": "Esquilo",
        "Profissao": "Desempregado"
    },
	{	
		"Imagem": "./Images/SeuSiriguejo.png",
        "Nome": "Seu Sirigueijo",
        "Genero": "Masculino",
        "Especie": "Caranguejo",
        "Profissao": "Chefe de Restaurante"
    },
	{	
		"Imagem": "./Images/LulaMolusco.png",
        "Nome": "Lula Molusco",
        "Genero": "Masculino",
        "Especie": "Polvo",
        "Profissao": "Atendente"
    },
    {	
		"Imagem": "./Images/PatrickEstrela.png",
		"Nome": "Patrick",
		"Genero": "Masculino",
		"Especie": "Estrela-do-mar",
		"Profissao": "Desempregado"
    },
    {
		"Imagem": "./Images/BobEsponja.png",
		"Nome": "Bob Esponja",
		"Genero": "Masculino",
		"Especie": "Esponja-do-mar",
		"Profissao": "Cozinheiro"
    }  
]

const jsonData = JSON.stringify(characters);

const charactersData = JSON.parse(jsonData);

const main = document.getElementById('main');

mostrarPersonagens(charactersData)

function mostrarPersonagens(personagens){
	main.innerHTML = '';
	
	personagens.forEach(data => {
		const elemento_personagem = document.createElement('div');
		elemento_personagem.classList.add('personagem');
		elemento_personagem.innerHTML = `

		<div class="row" id="main">
          
			<div class="col-md-4 personagem">
			<img src="${data.Imagem}" alt="${data.Nome}" id="imagens">

			<div class="personagem_nome">
				<h3>${data.Nome}</h3>
			</div>

			<div class="atributos">
				<i class="fas fa-solid fa-venus-mars"></i>
				${data.Genero}
			</div>
			<div class="atributos">
				<i class="fas fa-solid fa-paw"></i>
				${data.Especie}
			</div>
			<div class="atributos">
				<i class="fas fa-solid fa-user-tie"></i>
				${data.Profissao}
			</div>
			</div>
		</div>
		
        `
        main.appendChild(elemento_personagem);
	})
}