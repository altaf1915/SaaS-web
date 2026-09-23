function Container({ children, className = "" }) {
  return (
    <div className={`container-main ${className}`}>
      {children}
    </div>
  )
}

export default Container