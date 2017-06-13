'use strict';

import {ConfigurationController} from './controllers/ConfigurationController';
import {FavoritesController} from './controllers/FavoritesController';

export class CommandManager
{
	public constructor(private configController : ConfigurationController) { }

	public OpenFavorite()
	{
		var controller : FavoritesController = 
			new FavoritesController(this.configController);
			
		controller.ShowFavoritePicker();
	}
}
