import React, { Component } from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import logo from './logo.svg';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorText: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * milk\n  * bread\n  * eggs\n\nOrdered list:\n\n  1. Learn React\n  2. Build a Markdown Previewer\n  3. ???\n  4. Profit\n\n*[made by Tyler Hawkins - portfolio here](http://tylerhawkins.info/201R/)*'
    }

    this.updateEditorText = this.updateEditorText.bind(this);
  }

  updateEditorText(e) {
    this.setState({
      editorText: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Markdown Previewer</h1>
        </header>
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <MarkdownEditor editorValue={this.state.editorText} changeHandler={this.updateEditorText}/>
            </div>
            <div className="col-md-6">
              <MarkdownPreviewer previewerText={this.state.editorText}/>
            </div>
          </div>
        </div>

        <footer className="App-footer">
          <p>Check out the rest of my portfolio <a href="http://tylerhawkins.info">here</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
