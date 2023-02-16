import { useNavigate } from "react-router-dom";

const Go = (authority) => {
    const navigate = useNavigate();
    if (authority === 5150) {
      navigate("/admin-panel");
    } else if (authority === 2001) {
      navigate("/user-page");
    } else if (authority === 1984) {
      navigate("/holder-page");
    }
  };

  export default Go