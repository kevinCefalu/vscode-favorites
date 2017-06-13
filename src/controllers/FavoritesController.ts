'use strict';

import {window} from 'vscode';
import {FavoriteType} from '../common/Enums';
import {Favorite} from '../common/models/favorite';
import {ConfigurationController} from '../controllers/ConfigurationController';
import {FileSystemController} from '../controllers/FileSystemController';

export class FavoritesController
{
	private _ConfigurationController : ConfigurationController;

	public constructor(configurationController : ConfigurationController)
	{
		this._ConfigurationController = configurationController
	}

	public ShowFavoritePicker() 
	{
		window
            .showQuickPick(this._ConfigurationController.CollectionPickerOptions)
            .then(p => this.OpenFavorite(p.label));
	}

	public OpenFavorite(name : string)
	{
		let favorite = this._ConfigurationController.GetFavorite(name);

        if (favorite === undefined || favorite.Paths === undefined) 
		{
            return;
        }

        if (favorite.Type === FavoriteType.File) 
		{
            this.Handle(favorite, FileSystemController.OpenFile);
        }
        else if (favorite.Type === FavoriteType.Folder) 
		{
            this.Handle(favorite, FileSystemController.OpenDirectory);
        }
	}

    private Handle(favorite : Favorite, callbackfn: (this : void, value : string | Array<string>) => void)
    {
        typeof favorite.Paths === "string" ? 
            callbackfn(favorite.Paths) : 
            favorite.Paths.forEach(p => callbackfn(p));
    }
}
