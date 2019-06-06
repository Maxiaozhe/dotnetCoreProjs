# .net core 2.2全功能初探
## 创建.NET Core console APP
1. Create Console project
   ```new
   dotnet new console -n consoleApp
   ```
2. launch.json 中添加配置
   选择.NET Core Launch (console)
   ```json
   "configurations": [
        {
            "name": ".NET Core Launch (console)",
            "type": "coreclr",
            "request": "launch",
            "preLaunchTask": "build",
            // If you have changed target frameworks, make sure to update the program path.
            "program": "${workspaceFolder}/consoleApp/bin/Debug/netcoreapp2.2/consoleApp.dll",
            "args": [],
            "cwd": "${workspaceFolder}/consoleApp",
            // For more information about the 'console' field, see https://github.com/OmniSharp/omnisharp-vscode/blob/master/debugger-launchjson.md#console-terminal-window
            "console": "internalConsole",
            "stopAtEntry": false
        },
        ...
   ```
3. Build
   ```build
   cd consoleApp
   dotnet build     #不指定project的情况下自动寻找csproj文件
   #output 路径
   #consoleApp -> ${workspaceFolder}\consoleApp\bin\Debug\netcoreapp2.2\consoleApp.dll
   ```
4. Run
   ```run
   dotnet run 
   ```
5. publish
   ```publish
   dotnet publish
   #output 路径
   #consoleApp -> ${workspaceFolder}/${projectFolder}\bin\Debug\netcoreapp2.2\consoleApp.dll
   ```
## 创建Webapi Project
1. Create
   ```new
   dotnet new webapi -n webapiApp
   ```
2. launch.json 中添加配置
3. Build
4. Run
5. Publish

## 创建React.js Project
1. Create
   ```new
   dotnet new react -n reactApp
   ```
2. launch.json 中添加配置
3. Build
4. Run
5. Publish

