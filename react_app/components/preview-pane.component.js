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

  parseMarkdown() {
    const converter = new Showdown.Converter(markdownConverterOptions);
    return { __html: converter.makeHtml(this.props.markdown) };
  }

  render() {
    return (
      <div className="pane preview-pane markdown-body">
        <div dangerouslySetInnerHTML={this.parseMarkdown()} />
      </div>
    );
  }
}

PreviewPane.propTypes = {
  markdown: React.PropTypes.string
};

export default PreviewPane;
