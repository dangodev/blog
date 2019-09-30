import { Component, h } from '@stencil/core';
import postData from '../../data/posts.json';
import { SITE_NAME } from '../../lib/constants';

@Component({
  shadow: true,
  styleUrl: './page-home.css',
  tag: 'page-home',
})
export class PageHome {
  render() {
    return (
      <div>
        <stencil-route-title title={SITE_NAME} />
        <h1 class="title">all posts</h1>
        {postData.map(post => (
          <post-preview post={post} />
        ))}
      </div>
    );
  }
}
