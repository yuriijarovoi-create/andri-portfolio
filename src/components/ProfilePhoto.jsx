export default function ProfilePhoto({ size = 'large' }) {
  return (
    <div className={`profile-photo profile-photo--${size}`} aria-label="Profilfoto Platzhalter">
      <div className="profile-photo__glow profile-photo__glow--outer" aria-hidden="true" />
      <div className="profile-photo__glow profile-photo__glow--inner" aria-hidden="true" />
      <div className="profile-photo__glow profile-photo__glow--pulse" aria-hidden="true" />
      <div className="profile-photo__ring" aria-hidden="true" />
      <div className="profile-photo__frame">
        <div className="profile-photo__inner">
          <svg
            className="profile-photo__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <img
           src="/profile.png"
           alt="Andrii Yarovyi"
           className="profile-photo__image"
          />
        </div>
      </div>
    </div>
  );
}
