@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

:: Load environment variables from .env file
for /f "usebackq tokens=1,* delims==" %%A in (".env") do (
    set "%%A=%%B"
)

:: Start the Node.js server
echo Starting the encryption server...
start http://localhost:3000
node app.js

pause
