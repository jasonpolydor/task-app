import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';


@Injectable()
export class UserService{
	public url: string;
	public identity;
	public token;

	constructor(private _http: HttpClient){
       this.url = GLOBAL.url;
	}

	signup(user_to_login){
       const json = JSON.stringify(user_to_login);
       const params = `json=${json}`;

       return this._http.post(`${this.url}/login`,params);
	}

	getIdentity(){
		this.identity = JSON.parse(localStorage.getItem('identity'));

		return this.identity;
	}

	getToken(){
		this.token = JSON.parse(localStorage.getItem('token'));

		return this.token;
	}

	register(user_to_register){
		const json 	= JSON.stringify(user_to_register);
		const params = `json=${json}`;

		return this._http.post(`${this.url}/user/new`,params);

	}

	update_user(user_to_update){	
		const json 	= JSON.stringify(user_to_update);
		const token = this.getToken();
		const params = `json=${json}&authorization=${token}`;

		return this._http.post(`${this.url}/user/edit`, params);
	}

	getTask(token,id){
		const params  = `authorization=${token}`;

		return this._http.post(`${this.url}/task/detail/${id}`, params);

	}
}




