function Svg({ children }) {
  return (
    <svg className="icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconSecurity() {
  return (
    <Svg>
      <rect x="6.5" y="14" width="19" height="12" rx="1.2" {...stroke} />
      <path d="M11 14v-3.2a5 5 0 0 1 10 0V14" {...stroke} />
      <path d="M16 18.5v3" {...stroke} />
    </Svg>
  );
}

export function IconNetwork() {
  return (
    <Svg>
      <circle cx="16" cy="7.2" r="2.1" {...stroke} />
      <circle cx="7.2" cy="24" r="2.1" {...stroke} />
      <circle cx="24.8" cy="24" r="2.1" {...stroke} />
      <path d="M16 9.3v4.6M16 13.9 8.6 21.6M16 13.9l7.4 7.7" {...stroke} />
    </Svg>
  );
}

export function IconLighting() {
  return (
    <Svg>
      <path d="M16 4.2v2.2M8.4 8.2l1.5 1.5M23.6 8.2 22.1 9.7" {...stroke} />
      <path d="M12.2 16.2a3.8 3.8 0 1 1 7.6 0c0 1.7-1 2.8-1.7 3.9-.4.6-.5 1.2-.5 1.9h-3.2c0-.7-.1-1.3-.5-1.9-.7-1.1-1.7-2.2-1.7-3.9Z" {...stroke} />
      <path d="M13.3 24.6h5.4M14.2 27h3.6" {...stroke} />
    </Svg>
  );
}

export function IconAv() {
  return (
    <Svg>
      <rect x="4.5" y="7" width="23" height="14.5" rx="1.2" {...stroke} />
      <path d="M12 26.2h8M16 21.5v4.7" {...stroke} />
    </Svg>
  );
}

export function IconGarden() {
  return (
    <Svg>
      <path d="M16 27.2V15" {...stroke} />
      <path d="M16 18.2c-4.2-.8-6.6-3.8-6.6-7.4 3.5.2 5.8 2 6.6 4.2.8-2.2 3.1-4 6.6-4.2 0 3.6-2.4 6.6-6.6 7.4Z" {...stroke} />
    </Svg>
  );
}
