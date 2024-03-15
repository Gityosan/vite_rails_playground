import { LitElement, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("my-component")
export class MyComponent extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `
  // @propertyデコレータを使用して、nameプロパティを宣言します。
  // TypeScriptでは、プロパティの型を明示的に指定することができます。
  @property() name?: string = "World"

  // TypeScriptでは、メソッドの戻り値の型も指定できますが、
  // ここではrenderメソッドの戻り値の型を指定する必要はありません（自動的に推論されます）。
  render() {
    return html`<p class="p-tag">Hello, ${this.name}! ${this.name}!</p>`
  }
}
