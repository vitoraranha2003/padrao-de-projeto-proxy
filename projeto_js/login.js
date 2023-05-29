function acessar() {
  var lista_emails = ["adminvitor@gmail.com", "gestorsamuel@gmail.com"];
  var lista_senhas = ["123", "456"];
  var get_email = document.querySelector("input#email");
  var get_senha = document.querySelector("input#senha");

  // Verificar se o email e a senha estão na lista
  var email = get_email.value.toLowerCase();
  var senha = get_senha.value.toLowerCase();
  var index = lista_emails.indexOf(email);
  if (index !== -1 && lista_senhas[index] === senha) {
    // Sucesso na autenticação, redirecionar o usuário para a página adequada
    if (email.includes("admin")) {
      window.location.href = "/admin/index.html";
    } else if (email.includes("gestor")) {
      window.location.href = "/gestor/index.html";
    }
  } else {
    // Erro na autenticação
    window.alert("ERRO! Verifique se seu email e/ou senha estão corretos");
  }
}
