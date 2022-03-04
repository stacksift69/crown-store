import React from "react";
import "./MenuItem.styles.scss";

export default function MenuItem({ title, imageUrl, size }) {
  const subtitle = "Shop Now";
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toLowerCase()}</h1>
        <span className="subtitle">{subtitle.toUpperCase()}</span>
      </div>
    </div>
  );
}
