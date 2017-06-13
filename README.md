# vscode-favorites
VSCode Extension to manage collections of favorite documents, projects, or both, in visual studio code.

## Getting Started
Include new section in your usersettings using the following templates:

"psibitdev-favorites.FavoritesList": [
        { // Single File Favorite
            "Name": "HOSTS File",
            "Type": "File",
            "Paths": "C:\\windows\\System32\\drivers\\etc\\hosts"
        },
        { // Multiple File Favorite
            "Name": "Global Notes",
            "Type": "File",
            "Paths": [
                "D:\\Documents\\Global Notes.txt",
                "D:\\Documents\\Project Ideas.json"
            ]
        },
        { // Single Folder Favorite
            "Name": "GIT Workspace - Personal",
            "Type": "Folder",
            "Paths": "D:\\Documents\\Personal\\GIT"
        }
    ],

## Requirements
 - Include collection settings in your user settings file

[//]: <> ## Known Issues

### 1.0.0
 - Initial Release
