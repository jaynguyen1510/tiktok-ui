import classNames from "classnames";
import { useState, forwardRef } from "react";
import images from "~/asset/images";
import styles from "./Image.modules.scss";

const Image = forwardRef(
  (
    { src, alt, className, fallBack: customFallback = images.avatar, ...props },
    ref
  ) => {
    const [fallBack, setFallback] = useState("");
    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallBack || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
