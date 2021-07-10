# Comandos Git
# Aula 2

## Iniciar versionameto
`git init`

## Adicionar ao Git

`git add <nomedoarquivo>` <br>
`git add .` _- adicionar todos os arquivos ao git_

## Criar commit(marcar na linha de tempo)
`git commit -m "<mensagem>`
`git commit -am "<mensagem>"` _- Criar commit adicionando todas as mudanças e dar uma mensagem_

## Mostrar eventos
`git log`

## Mostrar status
`git status`

#
# Aula 3
## Criar ramificação
`git branch` _-mostrar todas as branchs_
`git branch <nomedabranch>` <br>
`git branch feature/lista-produtos`
`git branch <nomedabranch> -D` _- deletar branch_

## Trocar de branch
`git checkout <nomedabranch>` <br>
`git checkout feature/lista-produtos`
`git checkout -b <nomedabranch>` _- Cria um branch e já alterna para a mesma_

## Resetar alterações do Git
`git reset`

## Unir as branchs
`git merge <nomedabranch>`

## Mostrar as alterações de um commit
`git show <codigodocommit>`

## Adicionar um repositório remoto
`git remote add origin https://github.com/<usuario>/<repositorio>.git`

## Enviar ao repositório remoto
`git push -u <remote> <branch>`
`git push -u origin master`

## Clonar repositório remoto
`git clone <https://github.com/...>`

## Buscar informações do repositório remoto
`git pull`

##