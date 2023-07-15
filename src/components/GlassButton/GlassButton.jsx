

// eslint-disable-next-line react/prop-types
export default function GlassButton({ id, className, children }) {
  return (
    <button id={id} className={className}>{children}</button>
  )
}
