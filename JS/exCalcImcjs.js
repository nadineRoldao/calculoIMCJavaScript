function calcular(){
	//recuperando o campo nome da tag input
	var nome = document.getElementById("nome").value;
	//recuperando a div de erro para apresentar as mensagens de erro
	var erro = document.getElementById("msgErro");

	var exibeResultado = document.getElementById("exibeResultadoIMC");

	//controle serve como controle para a validação dos campos 
	var controle = true;

	var peso = document.getElementById("peso").value;

	var altura = document.getElementById("altura").value;

	var sexo = document.getElementsByName("sexo");

	var idade = document.getElementById("idade").value;

	var descricaoSexo;

	var exibeResultadoDescricao = document.getElementById("exibeResultadoDescricao");

	var exibeNome = document.getElementById("exibeNome");

	var exibeIdade = document.getElementById("exibeIdade");

	var exibeSexo = document.getElementById("exibeSexo");

	var exibePeso = document.getElementById("exibePeso");

	var exibeAltura = document.getElementById("exibeAltura");

	//validando o campo nome
	if (nome.length < 3 || nome.length > 15) {
		erro.innerHTML = "O nome deve ter no mínimo 3 letras e no Máximo 15 letras";
		controle = false;
	}

	//NaN = not a number
	//validando o campo nome pois ele não aceita números
	//No primeiro if estamos perguntando se controle é verdadeiro, não precisamos colocar == true pois isto está implícito (subentende-se)
	if (controle){
		//Se controle for verdadeiro precisamos apagar a mensagem de erro do campo anterior
		erro.innerHTML = "";
		// O sinal de ! inverte a pergunta, neste caso estamos perguntando: Se o campo nome for divisível, significa que é um número, portanto devem disparar um erro
		if (!isNaN(nome/2)) {
			erro.innerHTML = "Você não pode inserir números no campo nome,";
			controle = false;
		}
	}

	//validando o campo idade
	if (controle) {
		erro.innerHTML = "";
		if (idade == "selecione") {
			erro.innerHTML = "Você tem que selecionar uma idade";
			controle = false;
		}
	}

	//validando o campo altura
	if (controle){
		erro.innerHTML = "";
		altura = altura.replace(',','.');
		if (altura == "" || altura == 0) {
			erro.innerHTML = "Você deve preencher o campo altura";
			controle = false;
		}
		//não precisamos colocar o ponto de exclamação (!) pois não queremos inverter a pergunta
		if (isNaN(altura/2)) {
			erro.innerHTML = "Você não pode inserir letras no campo altura";
			controle = false;
		}	

	}

	//validando o campo peso
	if (controle){
		erro.innerHTML = "";
		peso = peso.replace(',','.');
		if (peso == "" || peso == 0) {
			erro.innerHTML = "Você deve preencher o campo peso";
			controle = false;
		}
		//não precisamos colocar o ponto de exclamação (!) pois não queremos inverter a pergunta
		if (isNaN(peso/2)) {
			erro.innerHTML = "Você não pode inserir letras no campo peso";
			controle = false;
		}
	}

	//validando o campo sexo
	if (controle) {
		erro.innerHTML = "";
		if (sexo[0].checked == false && sexo[1].checked == false) {
			erro.innerHTML = "Você é E.T? Você não tem sexo? Você tem que selecionar um sexo";
			controle = false;
		}
		if (sexo[0].checked) {
			descricaoSexo = sexo[0].value;
		}else if(sexo[1].checked){
			descricaoSexo = sexo[1].value;
		}
	}

	//montando campo de resultado IMC
	if (controle) {
		erro.innerHTML = "";
		
		altura = Number(altura);
		peso = Number(peso);
		var resultado =  peso / (altura * altura);
		resultado = resultado.toFixed(2)
		document.getElementById("tabela").style.display = "none";
		document.getElementById("resultado").style.display = "block";

		if (descricaoSexo == "masculino") {

			if (resultado < 18.5) {
				document.getElementById("imagem").src = "../MEDIA/skinnyMan.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = " Você está muito abaixo do peso ";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;

			} else if(resultado > 18.6 && resultado < 24.9) {
				document.getElementById("imagem").src = "../MEDIA/normalMan.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = "Você está no peso ideal ";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;

			}else if(resultado > 25.0 && resultado < 29.9 ) {
				document.getElementById("imagem").src = "../MEDIA/normalMan.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = "Você está levemente acima do peso ";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;

			}else if(resultado > 30.0 && resultado < 34.9 ) {
				document.getElementById("imagem").src = "../MEDIA/fatMan.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = "Obesidade grau | ";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;

			}else if(resultado > 35.0 && resultado < 39.9 ) {
				document.getElementById("imagem").src = "../MEDIA/fatMan2.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = "Obesidade grau || (severa) ";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;

			}else if(resultado > 40.0 ) {
				document.getElementById("imagem").src = "../MEDIA/fatMan2.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = "Obesidade ||| (Mórbida)";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;
			}

			}else{
			if (resultado < 18.5) {
				document.getElementById("imagem").src = "../MEDIA/skinnyWoman.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = " Você está muito abaixo do peso ";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;

			}else if(resultado > 18.6 && resultado < 24.9) {
				document.getElementById("imagem").src = "../MEDIA/normalWoman.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = "Você está no peso ideal ";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;

			}else if(resultado > 25.0 && resultado < 29.9) {
				document.getElementById("imagem").src = "../MEDIA/normalWoman.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = "Você está levemente acima do peso ";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;

			}else if(resultado > 30.0 && resultado < 34.9) {
				document.getElementById("imagem").src = "../MEDIA/fatWoman.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = "Obesidade grau | ";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;

			}else if(resultado > 35.0 && resultado < 39.9) {
				document.getElementById("imagem").src = "../MEDIA/fatWoman2.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = "Obesidade grau || (severa) ";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;
			}else if(resultado > 40.0 ) {
				document.getElementById("imagem").src = "../MEDIA/fatWoman2.png";
				exibeResultado.innerHTML = resultado;
				exibeResultadoDescricao.innerHTML = "Obesidade ||| (Mórbida)";
				exibeNome.innerHTML = nome;
				exibeSexo.innerHTML = descricaoSexo;
				exibePeso.innerHTML = peso;
				exibeAltura.innerHTML = altura;
				exibeIdade.innerHTML = idade;
			}
		}
	}
}

