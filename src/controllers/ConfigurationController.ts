'use strict';

import {workspace} from 'vscode';
import {Config} from '../common/models/Config';
import {Favorite} from '../common/models/Favorite';
import {QPItem} from '../common/models/QPItem';

const FavoriteListKey : string = "FavoritesList";

export class ConfigurationController
{
	private _SettingsBase : string;
	private _Config : Config = new Config();

	public constructor(settingsBase : string) 
	{		
		this._SettingsBase = settingsBase;

		this.onConfigChanged();
		workspace.onDidChangeConfiguration(this.onConfigChanged, this);
	}

	private onConfigChanged()
	{
		let config = workspace.getConfiguration(this._SettingsBase);

		if (config !== undefined)
		{
			if (config.has(FavoriteListKey) === true) 
			{
				this.Clear();

				config.get<Array<Favorite>>(FavoriteListKey)
					.forEach(e => this.AddConfiguredFavorite(e));
			}
		}
	}

	public get ConfigKeys() : string[]
	{
		return this._Config.Favorites.map(f => f.Name);
	}

	public get CollectionPickerOptions() : QPItem[]
	{
		var qpItems = new Array<QPItem>();

		this._Config.Favorites.forEach(f => 
		{
			var item = new QPItem();
			item.label = f.Name;
			item.description = typeof f.Paths === "string" ? 
				f.Type.toString() : f.Type.toString() + "s";

			qpItems.push(item);
		});

		return qpItems;
	}

	public Clear()
	{
		this._Config.Favorites = new Array<Favorite>();
	}

	public AddConfiguredFavorite(favorite : Favorite)
	{
		this._Config.Favorites.push(favorite);
	}

	public GetFavorite(name : string) : Favorite
	{
		return this._Config.Favorites.find(f => f.Name === name);
	}
}
