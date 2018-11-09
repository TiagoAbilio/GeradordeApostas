function mega() {

	var numeros = [];
	var numero,verifica;
	for(var i=0;i<6;i++)
	{
		do
		{
			numero = Math.floor((Math.random() * 60) + 1);
			verifica = false;
			for(var j=0; j < i;j++)
			{
				if (numeros[j]===numero) {
					verifica=true;
				}
			}

		}while(verifica);
		
		numeros.push(numero);
	}
	var resultado="";
	for(var i=0;i<6;i++)
	{
		resultado+=numeros[i]+" ";
	}
       
	document.getElementById("numeros").innerHTML=resultado;
}

function lotofacil()
{
	var numeros = [];
	var numero,verifica;
	for(var i=0;i<15;i++)
	{
		do
		{
			numero = Math.floor((Math.random() * 25) + 1);
			verifica = false;
			for(var j=0; j < i;j++)
			{
				if (numeros[j]===numero) {
					verifica=true;
				}
			}

		}while(verifica);
		numeros.push(numero);
	}
	var resultado="";
	for(var i=0;i<15;i++)
	{
		resultado+=numeros[i]+" ";
	}
	document.getElementById("numeros").innerHTML=resultado;
}

function quina()
{
	var numeros = [];
	var numero,verifica;
	for(var i=0;i<5;i++)
	{
		do
		{
			numero = Math.floor((Math.random() * 80) + 1);
			verifica = false;
			for(var j=0; j < i;j++)
			{
				if (numeros[j]===numero) {
					verifica=true;
				}
			}

		}while(verifica);
		numeros.push(numero);
	}
	var resultado="";
	for(var i=0;i<5;i++)
	{
		resultado+=numeros[i]+" ";
	}
	document.getElementById("numeros").innerHTML=resultado;
}

function lotomania()
{
	var numeros = [];
	var numero,verifica;
	for(var i=0;i<50;i++)
	{
		do
		{
			numero = Math.floor((Math.random() * 50) + 1);
			verifica = false;
			for(var j=0; j < i;j++)
			{
				if (numeros[j]===numero) {
					verifica=true;
				}
			}

		}while(verifica);
		numeros.push(numero);
	}
	var resultado="";
	for(var i=0;i<50;i++)
	{
		resultado+=numeros[i]+" ";
	}
	document.getElementById("numeros").innerHTML=resultado;
}
