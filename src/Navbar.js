const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          new blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
