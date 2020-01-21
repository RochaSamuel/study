
public class TestaMetodos {
	public static void main(String[] args) {
		Conta contaMaria = new Conta();
		Conta contaJoao = new Conta();
		
		contaMaria.deposita(1000);
		System.out.println(contaMaria.saldo);
		contaJoao.deposita(2000);
		System.out.println(contaJoao.saldo);
		
		if(contaJoao.transfere(3000, contaMaria)) {	
			System.out.println(contaJoao.saldo);
			System.out.println(contaMaria.saldo);
		}else {
			System.out.println("Saldo Insuficiente");
		}
	}
}
