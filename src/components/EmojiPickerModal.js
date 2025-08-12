import React from "react";

const emojiOptions = ["😊", "😢", "😡", "😍", "😴", "🤩", "😐"];

export default function EmojiPickerModal({ visible, onClose, onSelect }) {
  if (!visible) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.3)" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">What's Your Today mood?</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body d-flex flex-wrap gap-2 justify-content-center">
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
      </div>
    </div>
  );
}
