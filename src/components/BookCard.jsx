import React from "react";

const BookCard = ({ item }) => {
  return (
    <div
      style={{ border: "1px solid", padding: "1%", boxSizing: "border-box" }}
    >
      <img src={item.cover_photo} alt="imamge" width="100%" />
      <p style={{ margin: 0 }}>
        <b>Name:</b> {item.title}
      </p>
      <p style={{ margin: 0 }}>
        <b>Price:</b> {item.price}
      </p>
      <p style={{ margin: 0 }}>
        <b>Category:</b> {item.category}
      </p>
      <p style={{ margin: 0 }}>
        <b>Author:</b> {item.author}
      </p>
    </div>
  );
};

export default BookCard;
