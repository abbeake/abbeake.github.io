npm run build
Remove-Item -Recurse -Force ../abbeake.github.io/*
Copy-Item -Recurse -Force ./dist/* ../abbeake.github.io/
Set-Location ../abbeake.github.io
git add .
git commit -m "Deploy new build"
git push
Set-Location ../abbeake-site