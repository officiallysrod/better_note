import React from 'react';
import Showdown from 'showdown';
require('github-markdown-css');
require('./preview-pane.component.css');

const markdownConverterOptions = {
  tasklists: true,
  smoothLivePreview: true,
  strikethrough: true,
  literalMidWordUnderscores: true
};

class PreviewPane extends React.Component {

  parseMarkdown(markdown) {
    const converter = new Showdown.Converter(markdownConverterOptions);
    return { __html: converter.makeHtml(markdown) };
  }

  render() {
    return (
      <div className="pane preview-pane">
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={this.parseMarkdown(this.props.markdown)}
        />
      </div>
    );
  }
}

PreviewPane.propTypes = {
  markdown: React.PropTypes.string
};

export default PreviewPane;
