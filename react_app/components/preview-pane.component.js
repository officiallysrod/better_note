import React from 'react';
import Showdown from 'showdown';

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
      <div className="preview-pane">
        <div dangerouslySetInnerHTML={this.parseMarkdown()} />
      </div>
    );
  }
}

PreviewPane.propTypes = {
  markdown: React.PropTypes.string
};

export default PreviewPane;
