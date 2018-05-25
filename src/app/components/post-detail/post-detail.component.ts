import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../../services/post.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,


  ) {}

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
     switchMap((params: ParamMap) =>
       this.postService.getPost(params.get('id')))
     )
  }

  // getPost(post: Post) {
  //   let postId = post ? post.id : null;
  //   // Pass along the hero id if available
  //   // so that the HeroList component can select that hero.
  //   // Include a junk 'foo' property for fun.
  //   this.router.navigate(['/posts', { id: postId, foo: 'foo' }]);
  // }

}
