export const useToggleShowPassword = () => {
  const [hideIcon, setHideIcon] = React.useState("eye-off");
  const [showPassword, setShowPassword] = React.useState(true);

  const handlePasswordShow = () => {
    if (hideIcon === "eye") {
      setHideIcon("eye-off");
      setShowPassword(!showPassword);
    } else if (hideIcon === "eye-off") {
      setHideIcon("eye");
      setShowPassword(!showPassword);
    }
  };

  return {
    showPassword,
    hideIcon,
    handlePasswordShow,
  };
};
