import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserAction,
  deleteUserAction,
} from "../../redux/actions/userAction";

function UserForm() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [status, setStatus] = useState("offline");
  const [name, setName] = useState("");

  function addName(e) {
    setName(e.target.value);
  }

  function addStatus(e) {
    setStatus(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      setUserAction({
        id: Math.round(Math.random() * 100, 3),
        name,
        status,
      }),
    );

    setName("");
    setStatus("offline");
  }

  function handleDelete() {
    dispatch(deleteUserAction());
    console.log(user);
  }

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "80px auto",
        padding: "30px",
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 10,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          margin: "0 0 25px",
          color: "#111827",
          fontSize: "1.5rem",
          fontWeight: 500,
        }}
      >
        Set new User Info:
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={addName}
            style={{
              flex: 1,
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              background: "#fff",
              color: "#111827",
              fontSize: "0.95rem",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <select
            value={status}
            onChange={addStatus}
            style={{
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              background: "#fff",
              color: "#374151",
              fontSize: "0.95rem",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="offline">Offline</option>
            <option value="online">Online</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: "fit-content",
            padding: "9px 16px",
            background: "#111827",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontSize: "0.9rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Save User
        </button>
      </form>

      <div
        style={{
          marginTop: 35,
          paddingTop: 25,
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <h2
          style={{
            margin: "0 0 15px",
            color: "#111827",
            fontSize: "1.15rem",
            fontWeight: 500,
          }}
        >
          User Info:
        </h2>

        {user.name ? (
          <div
            style={{
              padding: "16px",
              background: "#fafafa",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              color: "#374151",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
              }}
            >
              <strong>Name:</strong> {user.name}
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
              }}
            >
              <strong>Status:</strong> {user.status}
            </p>

            <button
              onClick={handleDelete}
              style={{
                width: "fit-content",
                marginTop: 8,
                padding: "8px 14px",
                background: "#fff",
                color: "#dc2626",
                border: "1px solid #dc2626",
                borderRadius: 6,
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Delete User
            </button>
          </div>
        ) : (
          <p
            style={{
              margin: 0,
              padding: "16px",
              background: "#fafafa",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              color: "#6b7280",
              fontSize: "0.9rem",
            }}
          >
            User is not defined or deleted.
          </p>
        )}
      </div>
    </div>
  );
}

export default UserForm;
