import React, { Component } from 'react';
import marked from 'marked';

import './../stylesheets/MarkdownPreviewer.css';

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);

    this.rawMarkupBuilder = this.rawMarkupBuilder.bind(this);
  }

  rawMarkupBuilder(text) {
    let rawMarkup = marked(text, {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="Previewer">
        <h4>Preview</h4>
        <div className="previewContent" dangerouslySetInnerHTML={this.rawMarkupBuilder(this.props.previewerText)}></div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
