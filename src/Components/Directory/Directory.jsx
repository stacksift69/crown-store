import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.styles.scss";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
          grid : 'div1',
          size : 'small'
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
          grid : 'div2',
          size : 'small'

        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
          grid : 'div3',
          size : 'small'
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
          grid : 'div4',
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
          grid : 'div5',
        },
      ],
    };
  }
  render() {
    return (
      <div className={`${this.state.sections.grid} directory-menu`} >
        {this.state.sections.map(({title , id , imageUrl , size}) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
