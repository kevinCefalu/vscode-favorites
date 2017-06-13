'use strict';

import {Favorite} from '../models/favorite';

export class Config
{
	private _Favorites : Array<Favorite>;

	public get Favorites() : Array<Favorite> { return this._Favorites; }
	public set Favorites(value : Array<Favorite>) { this._Favorites = value; }
}
