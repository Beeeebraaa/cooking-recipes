import { Component } from 'preact';

export class ErrorBoundary extends Component {
  state = { error: null };

  componentDidCatch(error: Error) {
    this.setState({ error: error.message });
  }

  render() {
    if (this.state.error) {
      return <div class="d-flex flex-column justify-content-center align-items-center overflow-y-hidden text-center" style={{marginTop: '10rem'}}>
        <h1 class="display-1">Ошибка</h1>
        <p>{this.state.error}</p>
      </div>
    }

    return this.props.children;
  }
}