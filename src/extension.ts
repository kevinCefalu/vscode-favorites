'use strict';

import * as vscode from 'vscode';
import {ConfigurationController} from './controllers/ConfigurationController';
import {CommandManager} from './commands';

export function activate(context : vscode.ExtensionContext) 
{
    vscode.commands.executeCommand("setContext", "psibit-vscode-favorites:enabled", true);

    let commandManager : CommandManager = new CommandManager(
        new ConfigurationController("psibit-vscode-favorites"));

    console.log("PsiBitDev: Favorites has started, successfully.");

    context.subscriptions.push(vscode.commands.registerCommand(
        'psibit-vscode-favorites.openFavorite', commandManager.OpenFavorite, commandManager));
}

export function deactivate() { }
