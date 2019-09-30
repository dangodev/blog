import { Component, h, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Post } from '../../types/post';
import postData from '../../data/posts.json';
import date from '../../utils/date';

@Component({
  shadow: true,
  styleUrl: './page-post.css',
  tag: 'page-post',
})
export class PagePost {
  @Prop() match: MatchResults;
  @State() post?: Post;

  componentWillLoad() {
    this.post = postData.find(({ data: { slug } }) => slug === this.match.params.slug);
  }

  render() {
    return (
      <article class="wrapper">
        {this.post ? (
          <div>
            <header>
              <h1 class="title">{this.post.data.title}</h1>
              <table class="meta">
                <tr>
                  <td>published</td>
                  <td>{date(this.post.data.date)}</td>
                </tr>
                {this.post.data.updated && (
                  <tr>
                    <td>updated</td>
                    <td>{date(this.post.data.updated)}</td>
                  </tr>
                )}
                <tr>
                  <td>tagged</td>
                  <td>
                    <stencil-route-link url={`/tag/${this.post.data.tag}`}>
                      {this.post.data.tag}
                    </stencil-route-link>
                  </td>
                </tr>
              </table>
              <img
                class="img"
                alt={this.post.data.title}
                src={this.post.data.image}
                width="800"
                height="450"
              />
            </header>
            <div class="post" innerHTML={this.post.contents} />
          </div>
        ) : (
          <div>Post not found</div>
        )}
      </article>
    );
  }
}
