@echo off
cd Desktop\React_apps\react_app_8

REM Prompt the user for a custom commit message
set /p commit_message="Enter commit message: "

git add .
git commit -m "%commit_message%"
git push
