import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

	public socket
	public url = 'http://localhost:3000'

	constructor() {
		this.socket = io(this.url)
	}
	//: Observable<any>
	listen(eventName: string){
		return new Observable((subscriber) => {
			this.socket.on(eventName, (data) => {
				subscriber.next(data)
			})
		})
	}

	emit(eventName, data){
		this.socket.emit(eventName, data)
	}

}
