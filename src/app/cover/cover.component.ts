import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent implements OnInit {
  title!: string;
  subTitle!: string;
  description!: string;
  imageUrl1!: string;
  imageUrl2!: string;
  imageUrl3!: string;
  imageUrl4!: string;

  ngOnInit() {
    this.title = 'Développeur Indépendant';
    this.subTitle = 'Basé sur Bordeaux';
    this.description =
      " N'hesitez pas à me contacter je suis disponible pour la création ";
    this.imageUrl1 =
      'https://www.arch-web.fr/wp-content/uploads/2022/08/component.png';
    this.imageUrl2 =
      'https://www.arch-web.fr/wp-content/uploads/2022/08/component-html.png';
    this.imageUrl3 =
      'https://www.arch-web.fr/wp-content/uploads/2022/08/component-css.png';
    this.imageUrl4 =
      'https://www.arch-web.fr/wp-content/uploads/2022/08/component-js.png';
  }
}
