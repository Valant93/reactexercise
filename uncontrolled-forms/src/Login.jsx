import React from "react";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on";

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember me:", remember);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <div>
        <label>
          Remember me:
          <input type="checkbox" name="remember" />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
