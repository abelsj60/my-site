import React, { Component } from 'react';

class Squib extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="example-2 card">
        <div class="wrapper">
          <div class="header">
            <div class="date">
              <span class="day">12</span>
              <span class="month">Aug</span>
              <span class="year">2016</span>
            </div>
            <ul class="menu-content">
              <li>
                <a href="#" class="fa fa-bookmark-o"></a>
              </li>
              <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
              <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
            </ul>
          </div>
          <div class="data">
            <div class="content">
              <span class="author">Jane Doe</span>
              <h1 class="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
              <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
              <a href="#" class="button">Read more</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Squib;


// // Second example styles
// .example-2 {
//   .wrapper {
//     background: url(https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg) center / cover no-repeat;
//     &:hover {
//       .menu-content {
//         span {
//           transform: translate(-50%, -10px);
//           opacity: 1;
//         }
//       }
//     }
//   }
//   .header {
//     @include cf;
//     color: $white;
//     padding: 1em;
//     .date {
//       float: left;
//       font-size: 12px;
//     }
//   }
//   .menu-content {
//     float: right;
//     li {
//       margin: 0 5px;
//       position: relative;
//     }
//     span {
//       transition: all 0.3s;
//       opacity: 0;
//     }
//   }
//   .data {
//     color: $white;
//     transform: translateY(calc(70px + 4em));
//   }
//   .title {
//     a {
//       color: $white;
//     }
//   }
//   .button {
//     display: block;
//     width: 100px;
//     margin: 2em auto 1em;
//     text-align: center;
//     font-size: 12px;
//     color: $white;
//     line-height: 1;
//     position: relative;
//     font-weight: 700;
//     &::after {
//       content: '\2192';
//       opacity: 0;
//       position: absolute;
//       right: 0;
//       top: 50%;
//       transform: translate(0, -50%);
//       transition: all 0.3s;
//     }
//     &:hover {
//       &::after {
//         transform: translate(5px, -50%);
//         opacity: 1;
//       }
//     }
//   }
// }
