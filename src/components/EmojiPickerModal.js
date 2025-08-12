import React from "react";

const emojiOptions = ["😊", "😢", "😡", "😍", "😴", "🤩", "😐"];

export default function EmojiPickerModal({ visible, onClose, onSelect }) {
  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap"
      }}>
        {emojiOptions.map((emoji) => (
          <span
            key={emoji}
            style={{
              fontSize: "24px",
              cursor: "pointer"
            }}
            onClick={() => {
              onSelect(emoji);
              onClose();
            }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
