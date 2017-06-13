'use strict';

import {QuickPickItem} from 'vscode';

export class QPItem implements QuickPickItem
{
	public label : string;
	public description : string;
	public detail?: string;
}
