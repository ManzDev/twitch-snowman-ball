import "@/components/SnowMan.js";
import { initSnowflake } from "@/modules/snowflake.js";

const SNOWFLAKES_NUMBER = 100;

class SnowBall extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      .container {
        --size: 500px;
        --transparent-color: #fff2;

        border: 10px solid var(--transparent-color);
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background-color: var(--transparent-color);
        display: grid;
        align-items: end;
        overflow: hidden;
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          border-right: 25px solid #fffa;
          box-sizing: border-box;
          border-radius: 50%;
          transform: rotate(-145deg);
        }
      }

      /*
      :host(:hover) :is(.snow-container, snow-man) {
        transform: translate(-70px, 0) rotate(15deg);
      }

      :host(:active) :is(.snow-container, snow-man) {
        transform: translate(70px, 0) rotate(-15deg);
      }
      */

      .sky-container {
        --height: calc(var(--size) * 0.75);

        width: 100%;
        height: var(--height);
        z-index: 15;
        position: relative;
        overflow: hidden;

        & .snowflake {
          --size: 5px;

          width: var(--size);
          height: var(--size);
          background: var(--color);
          border-radius: 50%;
          position: absolute;
          top: 0;
        }
      }

      .snow-container {
        --snow-size: calc(var(--size) * 0.25);

        display: grid;
        justify-items: center;
        height: var(--snow-size);
        transform-origin: 50% 100%;
        transition: transform 0.5s;

        & .surface-snow {
          --surface-height: 50px;
          --offset-y: calc(calc(var(--surface-height) / 2) * -1);

          width: 87%;
          height: var(--surface-height);
          border-radius: 50%;
          background: #fff;
          position: absolute;
          transform: translateY(var(--offset-y));
        }

        & .snow {
          width: 100%;
          height: 100%;
          background: #ddd;
        }
      }

      snow-man {
        position: absolute;
        left: calc(50% - calc(var(--snowman-width) / 2));
        bottom: 24%;
        transition: transform 0.5s;
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.startSnow();
    this.addEventListener("click", () => this.shake());
  }

  shake() {
    const keyframes = [
      { transform: "translate(0, 0)", offset: 0 },
      { transform: "translate(20px, 0)", offset: 0.1 },
      { transform: "translate(-20px, 0)", offset: 0.2 },
      { transform: "translate(20px, 0)", offset: 0.3 },
      { transform: "translate(-20px, 0)", offset: 0.4 },
      { transform: "translate(20px, 0)", offset: 0.5 },
      { transform: "translate(-20px, 0)", offset: 0.6 },
      { transform: "translate(20px, 0)", offset: 0.7 },
      { transform: "translate(-20px, 0)", offset: 0.8 },
      { transform: "translate(20px, 0)", offset: 0.9 },
      { transform: "translate(0, 0)", offset: 1 }
    ];

    const options = {
      duration: 1500,
      iterations: 1,
      easing: "ease-in-out",
      fill: "backwards"
    };

    const container = this.shadowRoot.querySelector(".container");
    const animation = container.animate(keyframes, options);

    this.startSnow();
  }

  renderSnowFlakes() {
    return /* html */"<div class=\"snowflake\"></div>".repeat(SNOWFLAKES_NUMBER);
  }

  startSnow() {
    const snowflakes = this.shadowRoot.querySelectorAll(".snowflake");

    snowflakes.forEach(snowflake => {
      initSnowflake(snowflake);
    });
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SnowBall.styles}</style>
    <div class="container">
      <div class="sky-container">
        ${this.renderSnowFlakes()}
      </div>
      <div class="snow-container">
        <div class="surface-snow"></div>
        <div class="snow"></div>
      </div>
      <snow-man></snow-man>
    </div>`;
  }
}

customElements.define("snow-ball", SnowBall);
