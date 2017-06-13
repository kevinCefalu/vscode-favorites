'use strict';

import {workspace, window, Uri, commands} from 'vscode';

export class FileSystemController
{
	public static OpenFile(file : string)
	{
		workspace.openTextDocument(file).then((doc) => 
			{
				if (doc !== undefined)
				{
					window
						.showTextDocument(doc);
				}
			});
	}

	public static OpenDirectory(path : string)
	{
		var uri = Uri.parse("file:///" + path.replace(/\\/g, "/"));
		let newWindow = true;

		commands.executeCommand('vscode.openFolder', uri, newWindow);
	}
}
