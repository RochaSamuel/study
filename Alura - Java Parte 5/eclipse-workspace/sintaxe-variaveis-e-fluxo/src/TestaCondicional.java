
public class TestaCondicional {
	public static void main(String[] args) {
		System.out.println("testando condicionais");

		int idade = 20;
		int quantidadePessoas = 3;

		if (idade >= 18) {
			System.out.println("voc� tem mais de 18 anos");
			System.out.println("seja bem vindo");
		} else {
			if (quantidadePessoas >= 2) {
				System.out.println("voc� n�o tem 18, mas pode entrar");
			} else {
				System.out.println("infelizmente voc� n�o pode entrar");
			}
		}

		// caso haja apenas uma instru��o n�o � necess�rio o uso das chaves {}
		// if (idade <= 20) System.out.println("voc� tem menos de 20 anos");
	}
}
