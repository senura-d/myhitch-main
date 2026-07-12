@echo off
set /p msg="Enter commit message (default: 'update'): "
if "%msg%"=="" set msg=update
echo Staging changes...
git add -A
echo Committing with message: "%msg%"...
git commit -m "%msg%"
echo Pushing to GitHub main branch...
git push origin main
echo Auto-push complete!
pause
