import React, { useEffect, useState } from "react";

import { useAppSelector } from "store/hooks";

import "./styles.sass";

const ErrorSnackbar: React.FC = (): JSX.Element => {
  const [errors, setErrors] = useState<Array<string>>([]);

  const { message } = useAppSelector((state) => state.error);

  useEffect(() => {
    if (message) {
      const currentError = message;

      setErrors([...errors, currentError]);

      setTimeout(() => {
        setErrors(errors.filter((e) => e !== currentError));
      }, 2500);
    }
    return () => {
      setErrors([]);
    };
  }, [message]);

  return (
    <>
      {errors.map((error) => (
        <div id="snackbar" className="show" key={error}>
          {error}
        </div>
      ))}
    </>
  );
};

export default ErrorSnackbar;
