## aws-ses-study

Projeto criado para o estudo de envio de email com Node.js, Nginx, Docker, AWS EC2 e AWS SES.

### Observações
- Na AWS IAM é necessário criar um Role com uma Policy que tem acesso ao SES;
- Na AWS EC2 deve-se vincular este Role à instância EC2 criada. Este vínculo é necessário para uma autenticação direta entre o EC2 e o serviço gerenciado (SES, no caso). Assim, não é necessário lidar com token de usuário;
- Na AWS SES, enquanto o serviço estiver no sandbox, é necessário cadastrar e validar os emails utilizados como `from` e `to`;

### Execução
- Realizar o clone do projeto
- Executar `docker-compose up -d --build` na raíz do projeto
- A rota teste estará disponível em <ip-público>:3001/send-email
