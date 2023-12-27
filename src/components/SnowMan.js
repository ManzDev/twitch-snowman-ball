class SnowMan extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --snowman-width: var(--size) * 0.35;
        --snowman-height: var(--size) * 0.65;
      }

      .container {
        display: grid;
        place-items: end center;
        place-content: end center;
        width: calc(var(--snowman-width));
        height: calc(var(--snowman-height));

        & .hat-container {
          --hat-size: calc(90px * 0.7);

          width: 90px;
          height: 90px;
          display: grid;
          place-items: end center;
          transform: translate(15px, 30px) rotateZ(12deg);
          z-index: 10;

          & .hat-top {
            width: var(--hat-size);
            height: 20px;
            background: #585858;
            border-radius: 50%;
            transform: translateY(10px);
          }

          & .hat-center-p1 {
            width: var(--hat-size);
            height: 40px;
            background: #383838;
          }

          & .hat-center-p2 {
            width: var(--hat-size);
            height: 10px;
            z-index: 3;
            background: #e75e3c;

            &::before {
              content: "";
              display: block;
              position: absolute;
              background: #383838;
              border-radius: 50%;
              width: var(--hat-size);
              height: 20px;
              z-index: 4;
              transform: translateY(-10px);
            }

            &::after {
              content: "";
              display: block;
              position: absolute;
              background: #e75e3c;
              border-radius: 50%;
              width: var(--hat-size);
              height: 20px;
              z-index: 2;
            }
          }

          & .hat-bottom {
            height: 30px;
            width: 100%;
            border-radius: 50%;
            transform: translateY(-10px);
            background: #393a3c;
          }
        }

        & :is(.head, .body) {
          background: #ffffff;
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          box-shadow: -30px -5px 0 #0000ff22 inset;
        }

        & .head {
          --size: 100px;
          transform: translateY(3px);
          display: grid;
          place-items: center start;

          & .face {
            width: 60px;
            height: 60px;

            & .eyes {
              width: 100%;
              height: 20px;
              display: flex;
              justify-content: space-around;
              align-items: end;

              & .eye {
                width: 10px;
                height: 10px;
                background: black;
                border-radius: 50%;
              }
            }

            & .carrot-container {
              height: 20px;

              & .carrot {
                width: 80%;
                height: 100%;
                background: orangered;
                border-radius: 0 25px 25px 0;
                clip-path: polygon(0 50%, 100% 0, 100% 100%);
                transform: translate(-15px, 0);
              }
            }

            & .mouth-container {
              width: 50px;
              height: 20px;
              transform: translate(6px, 0);

              & .mouth {
                position: relative;
                top: -10px;
                height: 20px;
                border-bottom: 6px dotted black;
                border-radius: 50%;
              }
            }
          }
        }

        & .body {
          --size: 160px;
          z-index: 5;
          display: grid;
          place-items: center;

          & .buttons {
            width: 15px;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            transform: translateX(-48px);

            & .button {
              --size: 12px;

              width: var(--size);
              height: var(--size);
              background: #000;
              border-radius: 50%;

              &:is(:first-child, :last-child) {
                transform: translateX(6px);
              }
            }
          }
        }

        & .scarf-container {
          --color: indigo;
          --shadow-color: color-mix(in srgb, var(--color), black 30%);

          width: 70%;
          height: 90px;
          position: absolute;
          place-self: center;

          display: grid;
          place-items: center;

          z-index: 6;

          & .scarf-neck {
            width: 90%;
            height: 30px;
            background: red;
            background: linear-gradient(var(--color) 75%, var(--shadow-color) 75%);
            position: absolute;
            z-index: 6;
            border-radius: 15px;
          }

          & .scarf-end {
            width: 35px;
            height: 30px;
            background: linear-gradient(var(--shadow-color) 35%, indigo 35%);
            transform: translate(25px, 25px);
            z-index: 5;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            align-items: end;
            justify-items: center;

            & .gap {
              --size: 6px;

              content: "";
              display: block;
              background: #ffffff;
              width: var(--size);
              height: 5px;
              border-radius: 5px 5px 0 0;
              transform: scale(1.5) translate(0.5px, 2.5px);

              &:nth-child(odd) {
                background: indigo;
                border-radius: 0 0 5px 5px;
              }
            }
          }
        }

        & .shadow {
          background: #0000ff2f;
          width: 80%;
          border-radius: 50%;
          height: 15px;
          position: absolute;
          bottom: -6px;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SnowMan.styles}</style>
    <div class="container">
      <div class="hat-container">
        <div class="hat-top"></div>
        <div class="hat-center-p1"></div>
        <div class="hat-center-p2"></div>
        <div class="hat-bottom"></div>
      </div>
      <div class="head">
        <div class="face">
          <div class="eyes">
            <div class="eye"></div>
            <div class="eye"></div>
          </div>
          <div class="carrot-container">
            <div class="carrot"></div>
          </div>
          <div class="mouth-container">
            <div class="mouth"></div>
          </div>
        </div>
      </div>
      <div class="scarf-container">
        <div class="scarf-neck"></div>
        <div class="scarf-end">
          <div class="gap"></div>
          <div class="gap"></div>
          <div class="gap"></div>
          <div class="gap"></div>
        </div>
      </div>
      <div class="body">
        <div class="buttons">
          <div class="button"></div>
          <div class="button"></div>
          <div class="button"></div>
          <div class="button"></div>
        </div>
      </div>
      <div class="shadow"></div>
    </div>`;
  }
}

customElements.define("snow-man", SnowMan);
