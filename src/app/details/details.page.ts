import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private param: ActivatedRoute, private http: HttpClient, private route: Router) { }
  
  details=[];
  categorie="";


  ngOnInit() {
	console.log(this.param.snapshot.paramMap.get('id'));
	this.get(this.param.snapshot.paramMap.get('id'));
	this.getdetails(this.param.snapshot.paramMap.get('id'));
  }

	get(id){
		this.http.get('http://localhost:3000/categorie/'+id).subscribe((response)=> {
		console.log(response);
		});
	}

	getdetails(id){
		this.http.get('http://localhost:3000/categorie/details/'+id).subscribe((response)=> {
		console.log(response['result']);
		this.details=response['result'];
		});
	}


}