import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  constructor(private api: ApiService, private route: ActivatedRoute, public dialog: MatDialog) { }
  items: any;
  title: string;

  routeParamsSub: Subscription;
  ngOnInit(): void {
    this.routeParamsSub = this.route.params.subscribe(params => {
      this.title = params.category;
      this.api.getImageList(params.category).subscribe((val: any) => {
        this.items = val.results;

      })
    })
  }
  openDialog(element) {
    this.api.getImage(element.id).subscribe((val: any) => {
      console.log(val)
      this.dialog.open(DialogContentComponent, {
        data: {
          authorFirstName: element.user.first_name,
          authorLastName: element.user.last_name,
          profileImage: element.user.profile_image.small,
          username: element.user.username,
          fullImage: element.urls.raw,
          locationCountry: val.location.country,
          locationCity: val.location.city,
          createdAt: val.created_at
        }
      });
    })
  }
  ngOnDestroy() {
    this.routeParamsSub.unsubscribe();
  }
}
@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.component.html',
  styleUrls: ['dialog-content.component.scss']
})
export class DialogContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }
}
