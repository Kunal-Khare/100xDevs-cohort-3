import React from "react";

const styles = {
  width: 200,
  backgroundColor: "lightgray",
  borderRadius: 5,
  padding: 10,
};

function PostComponent({ name, subtitle, time, image, content }) {
  return (
    <div style={styles}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={`${image}`}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
          }}
        />
      </div>
      <b>{name}</b>

      <div>{subtitle}</div>
      {time !== undefined && (
        <div style={{ display: "flex" }}>
          <div>{time}</div>
          <img src="./assets/pfp.jpg" alt="photo" />
        </div>
      )}

      <div style={{ fontSize: 12 }}>{content}</div>
    </div>
  );
}

export default PostComponent;
