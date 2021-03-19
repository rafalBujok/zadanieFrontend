import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { DialogContentComponent } from './dialog/dialog-content.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  constructor(private api: ApiService, private route: ActivatedRoute, public dialog: MatDialog) { }
  items: any;
  title: string;
  tags: string[] = [];
  routeParamsSub: Subscription;
  imageSub: Subscription;
  ngOnInit(): void {
    this.routeParamsSub = this.route.params.subscribe(params => {
      this.title = params.category;
      this.imageSub = this.api.getImageList(params.category).subscribe((val: any) => {
        this.tags = []
        this.items = val.results;
        this.title = params.category;
        this.getTags()

      })
    })
  }
  openDialog(element) {

    this.api.getImage(element.id).subscribe((val: any) => {
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
    if (this.routeParamsSub) {
      this.routeParamsSub.unsubscribe();
    }
    if (this.imageSub) {
      this.imageSub.unsubscribe();
    }
  }
  getTags() {
    let tagsIndex = 0;
    // all images loop
    for (let n = 0; n < this.items.length; n++) {
      // if image got any tags
      if (this.items[n].tags.length > 0) {
        // tags loop
        for (let m = 0; m < 3; m++) {

          // check if tag exist in tags array
          if (!this.tags.includes(this.items[n].tags[m].title) &&
            (this.items[n].tags[m].title !== this.title) &&
            (this.items[n].tags[m].title.length < 20) &&
            // number of tags to displayed
            (tagsIndex < 14)) {
            this.tags[tagsIndex] = this.items[n].tags[m].title;
            tagsIndex++;
          }
        }
      }
    }
  }

}


