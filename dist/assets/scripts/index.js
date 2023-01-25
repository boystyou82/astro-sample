class MyElement extends React.Component {
  constructor() {
    super();
    this.innerhtml = /* html */ `
      <div>aaa<div>
    `;
  }
}

customElements.define("my-element", MyElement);
