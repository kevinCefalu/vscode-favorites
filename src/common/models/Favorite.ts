'use strict';

export class Favorite 
{
	private _Name : string;
	private _Type : string;
	private _Path : [Array<string>, string];

	public get Name() : string { return this._Name; }
	public set Name(value : string) { this._Name = value; }

	public get Type() : string { return this._Type; }
	public set Type(value : string) { this._Type = value; }

	public get Paths() : [Array<string>, string] { return this._Path; }
	public set Paths(value : [Array<string>, string]) { this._Path = value; }
}
