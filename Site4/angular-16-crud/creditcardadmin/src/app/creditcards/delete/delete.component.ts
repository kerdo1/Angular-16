import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  creditcardId!: Number;

  constructor(private router: ActivatedRoute,
    private route: Router,
    private creditcardsService: CreditcardsService) {
    this.creditcardId = parseInt(this.router.snapshot.paramMap.get("id") || '');

    //del function
    this.creditcardsService.deleteCreditCard(this.creditcardId).subscribe(data => {
      alert("Deleted the credit card");
      this.route.navigate(['/creditcards'])
    })
  }

}
