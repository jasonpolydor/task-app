import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';

@Injectable()
export class TaskService{
	public url: string;
	public identity;
	public token;

	constructor(
		private _http: Http
	){
       this.url = GLOBAL.url;
	}

	create(token, task){
		const json 	= JSON.stringify(task);
		const params 	= `json=${json}&authorization=${token}`;

		return this._http.post(`${this.url}/task/new`,params)
						 .map(res=>res.json());
	}

	getTasks(token, page = null){
		const params = `authorization=${token}`;

		if(page == null){
			page=1;
		}
		return this._http.post(`${this.url}/task/list?page=${page}`,params)
						 .map(res=>res.json());
	}

	getTask(token, id){
		const params = `authorization=${token}`;

		return this._http.post(`${this.url}/task/detail/${id}`,params)
						 .map(res=>res.json());
	}

	update(token, task, id){
		const json 	= JSON.stringify(task);
		const params 	= `json=${json}&authorization=${token}`;

		return this._http.post(`${this.url}/task/edit/${id}`, params)
						 .map(res=>res.json());
	}

	search(token, search = null, filter = null, order = null){
		const params = `authorization=${token}&filter=${filter}&order=${order}`;


		let url;
		if(search == null){
			url = `${this.url}/task/search`;
		}else{
			url = `${this.url}/task/search/${search}`;
		}

		return this._http.post(url, params)
					.map(res => res.json());
	}

	deleteTask(token, id){
		const params = `authorization=${token}`;

		return this._http.post(`${this.url}/task/remove/${id}`,params)
						 .map(res=>res.json());
	}
}