# Projeto Integrador — Cloud & DevOps


## Aplicação

🔗 **Acesse:** https://devopszahara.duckdns.org


## 1. Descrição da aplicação

--> O projeto consiste em uma aplicação web desenvolvida para a disciplina de DevOps e Computação em Nuvem do curso de Ciência da Computação da Afya São Lucas. A aplicação foi desenvolvida com o objetivo de colocar em prática conceitos de desenvolvimento de software, controle de versão, containerização e implantação de aplicações em um ambiente de nuvem. A nossa aplicação apresenta uma página web responsiva com informações sobre o projeto e seus integrantes, sendo disponibilizada publicamente na internet por meio de uma infraestrutura hospedada na Oracle Cloud. O nosso sistema utiliza tecnologias web como HTML5, CSS3, JavaScript e Bootstrap, permitindo a apresentação e interação com o conteúdo da aplicação. Além do desenvolvimento da interface, o projeto busca demonstrar na prática um fluxo de DevOps, envolvendo versionamento do código com Git e GitHub, execução da aplicação em containers Docker, infraestrutura em nuvem, configuração de domínio, acesso seguro por HTTPS, automação de implantação e monitoramento. Sendo assim, projeto integra o desenvolvimento da aplicação com práticas de Cloud Computing e DevOps, desde a criação e versionamento do código até a disponibilização e manutenção.


## 2. Arquitetura do ambiente

--> A aplicação está hospedada em uma máquina virtual na Oracle Cloud, utilizando o sistema operacional Ubuntu Linux. O código-fonte é armazenado e versionado no GitHub, enquanto o Docker é utilizado para realizar a conteinerização e execução da aplicação. O acesso à aplicação é realizado por meio de um domínio configurado no serviço de DNS, que direciona o domínio para o endereço IP público da máquina virtual, e a comunicação com a aplicação é realizada por HTTP e HTTPS.

--> O fluxo geral da arquitetura é representado abaixo:

```text
Desenvolvedor
      |
      v
    Git
      |
      v
   GitHub
      |
      v
GitHub Actions
      |
      v
    Deploy
      |
      v
Oracle Cloud
 Ubuntu Linux
      |
      v
    Docker
      |
      v
  Container
      |
      v
 Aplicação
      ^
      |
     DNS
      ^
      |
   Usuário
```

## 3. Tecnologias utilizadas

## 4. Estrutura do projeto

## 5. Processo de instalação

## 6. Processo de deploy

## 7. Configuração do Docker

## 8. Configuração do DNS

## 9. Configuração do HTTPS

## 10. Processo de CI/CD

## 11. Monitoramento

## 12. Procedimentos básicos de recuperação
