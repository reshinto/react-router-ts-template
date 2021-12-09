import { useNavigate } from "react-router-dom";

export default ({ page }: { page?: string | undefined }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (page) {
      navigate(page);
    } else {
      navigate(-1);
    }
  };

  return {
    handleClick,
  };
};
