(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
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
    </div>`}}customElements.define("snow-man",n);const l=["#ffffff","#ffffff","#ffffff","#ddddff","#b0b0cc","#9a9ab2"],m=r=>{const a=4+Math.floor(Math.random()*4);r.style.setProperty("--size",`${a}px`);const s=Math.floor(Math.random()*l.length),o=Math.floor(Math.random()*500),t=Math.floor(Math.random()*5e3),e=4e3+Math.floor(Math.random()*1e4),i=Math.random()<.1,c=Math.random()<.5?2+Math.floor(Math.random()*25):0,h=Math.random()>.5?"alternate":"alternate-reverse";r.style.setProperty("filter",i?"blur(2px)":"none"),r.style.setProperty("--color",l[s]);const f=[{transform:`translate(${o}px, 0px)`},{transform:`translate(${o}px, 375px)`}],p=[{left:`-${c}px`,offset:0},{left:`${c}px`,offset:1}],v={duration:e,fill:"forwards",delay:t,iterations:3},u={duration:1500,iterations:1/0,easing:"ease-in-out",direction:h},g=r.animate(f,v);r.animate(p,u),console.log(g)},x=100;class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render(),this.startSnow(),this.addEventListener("click",()=>this.shake())}shake(){const a=[{transform:"translate(0, 0)",offset:0},{transform:"translate(20px, 0)",offset:.1},{transform:"translate(-20px, 0)",offset:.2},{transform:"translate(20px, 0)",offset:.3},{transform:"translate(-20px, 0)",offset:.4},{transform:"translate(20px, 0)",offset:.5},{transform:"translate(-20px, 0)",offset:.6},{transform:"translate(20px, 0)",offset:.7},{transform:"translate(-20px, 0)",offset:.8},{transform:"translate(20px, 0)",offset:.9},{transform:"translate(0, 0)",offset:1}],s={duration:1500,iterations:1,easing:"ease-in-out",fill:"backwards"};this.shadowRoot.querySelector(".container").animate(a,s),this.startSnow()}renderSnowFlakes(){return'<div class="snowflake"></div>'.repeat(x)}startSnow(){this.shadowRoot.querySelectorAll(".snowflake").forEach(s=>{m(s)})}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      <div class="sky-container">
        ${this.renderSnowFlakes()}
      </div>
      <div class="snow-container">
        <div class="surface-snow"></div>
        <div class="snow"></div>
      </div>
      <snow-man></snow-man>
    </div>`}}customElements.define("snow-ball",d);
