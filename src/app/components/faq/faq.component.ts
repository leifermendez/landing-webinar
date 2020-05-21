import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  isCollapsed = true;
  public data: any;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.get('FAQ.QUESTIONS').subscribe((res: string) => {
      // console.log(res);
      this.data = res;
      // this.changeBackground(this.section);
    });
  }

}
