github() {
    if [ -z $1 ]
    then
        echo "especifique a branch!"
        return
    fi
    echo "commitando para github"
    git checkout $1

    git commit -m "automatic commit for shellscript"
  
    git push
  echo "commit finalizado"
}
heroku() {
    
    if [ -z $1 ]
    then
        echo "especifique a branch!"
        return
    fi
    echo "commitando para heroku"
    git checkout $1
   
    git commit -m"automatic deploy for shellscript"
    git push heroku master
    echo "commit finalizado"
}
echo $1
echo $2
git add .
case $1 in
    "github") github "$2";;
    "heroku") heroku "$2";;
    *) echo "opção invalida";;
esac

