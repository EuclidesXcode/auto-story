<?php

// Faz o login do usuário e pega o ID
$user_id = wp_insert_user( array(
    'user_login' => 'meu_usuario',
    'user_pass' => 'minha_senha',
    'user_email' => 'meu_email@example.com'
) );
 
// Gera o token JWT
$token = JWT::encode( array(
    'iss' => site_url(),
    'sub' => $user_id,
    'iat' => time(),
    'exp' => time() + ( 60 * 60 ), // expira em 1 hora
), AUTH_KEY );
 
// Adiciona o token como cabeçalho de autorização
$headers = array(
    'Authorization' => 'Bearer ' . $token,
);

?>
