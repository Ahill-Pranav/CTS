# Git Hands on 1



git --version



git config --global user.name "Ahill Pranav"

git config --global user.email "itisahill.@gmail.com"



git config --global --list



git config --global core.editor "notepad++.exe -multiInst -nosession"



git config --global -e



mkdir GitDemo

cd GitDemo

git init

ls -al	

echo "This is a CTS hands on" > docs.txt

ls

cat docs.txt

git status

git add docs.txt

git commit

git commit -m "Initial commit"

git status

git remote add origin https://github.com/Ahill-Pranav/GitDemo.git



git pull origin master



git push -u origin master


# Git Hands on 2

touch sample.log

mkdir logs

touch logs/error.log

touch .gitignore

notepad .gitignore

git status

git add .gitignore

git commit -m "Added .gitignore"

git status

# Git Hands on 3
git branch GitNewBranch

git branch

git branch -a

git checkout GitNewBranch

echo "Branch Content" > branch.txt

git add .

git commit -m "Added branch file"

git status

git checkout master

git difftool master GitNewBranch

git merge GitNewBranch

git log --oneline --graph --decorate

git branch -d GitNewBranch

git status



# Git Hands on 4

git status

git checkout -b GitWork

echo "<hello>Branch Version</hello>" > hello.xml

git add .

git commit -m "Added hello.xml in branch"

git checkout master

echo "<hello>Master Version</hello>" > hello.xml

git add .

git commit -m "Added hello.xml in master"

git log --oneline --graph --decorate --all

git diff master GitWork

git merge GitWork

git add hello.xml

git commit -m "Resolved merge conflict"

touch hello.xml.bak

notepad .gitignore

git add .gitignore

git commit -m "Ignored backup files"

git branch

git branch -d GitWork

git log --oneline --graph --decorate

# Git Hands on 5

git status

git branch

git pull origin master

git push origin master
