function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        premium-card
        p-6
        ${
          hover
            ? "premium-card-hover"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card
