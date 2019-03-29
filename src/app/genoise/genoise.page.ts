import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-genoise',
  templateUrl: './genoise.page.html',
  styleUrls: ['./genoise.page.scss'],
})
export class GenoisePage implements OnInit {

  constructor(private param: ActivatedRoute, private http: HttpClient, private route: Router) { }

cat=[];
recette=[];
categorie="";
  ngOnInit() {
	console.log(this.param.snapshot.paramMap.get('id'));
	this.get(this.param.snapshot.paramMap.get('id'));
	this.getCat(this.param.snapshot.paramMap.get('id'));
  }

	get(id){
		this.http.get('http://localhost:3000/categorie/'+id).subscribe((response)=> {
		console.log(response['result']);
		this.recette = response['result'];
		});
	}

	getCat(id){
		this.http.get('http://localhost:3000/categorie/seul/'+id).subscribe((response)=> {
		console.log(response['result']);
		this.categorie=response['result']['categorie'];
		});
	}
Choix(id){
	this.route.navigate(['/details/'+id]);
}

}
