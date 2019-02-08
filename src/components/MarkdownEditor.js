import React, { Component } from 'react';
import './../stylesheets/MarkdownEditor.css';

class MarkdownEditor extends Component {
  render() {
    return (
      <div className="Editor">
        <h4>Editor</h4>
        <textarea value={this.props.editorValue} onChange={this.props.changeHandler}></textarea>
      </div>
    );
  }
}

export default MarkdownEditor;
