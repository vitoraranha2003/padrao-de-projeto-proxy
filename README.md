Para que o código funcione, é necessário digitar no terminal do vscode o comando: node proxy.js. Então, a proxy é iniciada.
Para fechar a proxy, você deve digitar: netstat -ano | findstr :3000. Então, aparecerá um número. Copie esse número e cole no código: taskkill /F /PID.
Exemplo: taskkill /F /PID 523.
