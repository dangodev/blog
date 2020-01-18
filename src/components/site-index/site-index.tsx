import { Component, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: './site-index.css',
  tag: 'site-index',
})
export class SiteIndex {
  render() {
    return (
      <div class="wrapper">
        <header>
          <site-nav />
        </header>
        <main role="main">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="page-home" exact={true} />
              <stencil-route url="/post/:slug" component="page-post" />
              <stencil-route url="/tag/:tag" component="page-tag" />
              <stencil-route url="/about" component="page-about" />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <footer class="footer">
          MMX
          <br />
          <a href="https://blog.pow.rs/feed.rss">RSS</a> /{' '}
          <a href="https://blog.pow.rs/atom.xml">Atom</a> /{' '}
          <a href="https://blog.pow.rs/feed.json">JSON</a>
          <br />
          built with{' '}
          <a href="https://stenciljs.com/" rel="noopener noreferrer" target="_blank">
            Stencil PWA
          </a>
        </footer>
      </div>
    );
  }
}
