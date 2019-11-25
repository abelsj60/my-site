import marked from 'marked';

// See this:
// https://github.com/markedjs/marked/issues/655#issuecomment-383226346

export default function myMarkedRenderer(content, optionsObj) {
  const renderer = new marked.Renderer();
  const linkRenderer = renderer.link;
  renderer.link = (href, title, text) => {
      const html = linkRenderer.call(renderer, href, title, text);
      return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
  };

  return marked(content, { renderer, optionsObj })
}
