USE SUCOS;

INSERT INTO TBVENDEDORES(
MATRICULA, NOME, PERCENTUAL_COMISSAO)
VALUES(
'00233',
'José Geraldo da Fonseca',
0.10
);

INSERT INTO TBVENDEDORES(
MATRICULA, NOME, PERCENTUAL_COMISSAO)
VALUES(
'00235',
'Márcio Almeida Silva',
0.08
);

INSERT INTO TBVENDEDORES(
MATRICULA, NOME, PERCENTUAL_COMISSAO)
VALUES(
'00236',
'Cláudia Morais',
0.08
);

SELECT * FROM tbvendedores;

DELETE FROM tbvendedores WHERE PERCENTUAL_COMISSAO = 10; 
