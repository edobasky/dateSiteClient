import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryModule, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-detail',
  
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  // setting member | undefined, forces you to check if you have it or not before proceeding coding
  member : Member | undefined;
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];


  constructor(private memberService : MembersService, private route :ActivatedRoute) {}
  ngOnInit(): void {
    this.loadMember();

    this.galleryOptions = [
      {
        width : '500px',
        height: '500px',
        imagePercent: 80,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }

    ]
  }

  getImages() {
    if(!this.member) return [];
    const imageUrls = [];
    for (const photo of this.member.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url
      })
    }

    return imageUrls
  }

  loadMember() {
    var username = this.route.snapshot.paramMap.get("username");

    if (!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => {
      this.member = member;
      this.galleryImages = this.getImages();
      }
    })
  }

}
