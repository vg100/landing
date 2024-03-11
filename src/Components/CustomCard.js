import React from 'react';

function CustomCard({ title, description }) {
  return (
    <div className="col-8 col-md-4 mx-auto flex-auto mb-4">
      <div
        className="d-flex flex-items-baseline flex-justify-center height-full text-center py-7 py-md-8 px-4 rounded-2 box-shadow-card-border-mktg"
        style={{
          backgroundColor: "rgba(44, 49, 62, 0.5)",
          WebkitBackdropFilter: "blur(8px)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div>
          <h2 className="h4-mktg color-fg-default mb-2">{title}</h2>
          <p className="f4-mktg color-fg-muted mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
