import React from "react";

const emojiOptions = [
  { emoji: "😊", name: "Happy" },
  { emoji: "😢", name: "Sad" },
  { emoji: "😡", name: "Angry" },
  { emoji: "😍", name: "In Love" },
  { emoji: "😴", name: "Sleepy" },
  { emoji: "🤩", name: "Excited" },
  { emoji: "😐", name: "Neutral" },
];

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
            <h5 className="modal-title">What's Your Today Mood?</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body d-flex flex-wrap gap-3 justify-content-center">
            {emojiOptions.map(({ emoji, name }) => (
              <div
                key={emoji}
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  onSelect(emoji);
                  onClose();
                }}
              >
                <div style={{ fontSize: "24px" }}>{emoji}</div>
                <small className="text-muted">{name}</small>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

