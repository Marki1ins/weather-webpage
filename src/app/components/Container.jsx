export function Container({ children, imgSrc }) {
  const backgroundStyle = imgSrc && {
    backgroundImage: `url(${imgSrc})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main
      className={
        imgSrc
          ? "flex items-center justify-center min-h-screen"
          : "flex items-center justify-center min-h-screen bg-gradient-to-t from-light-blue to-dark-blue"
      }
      style={backgroundStyle}
    >
      {children}
    </main>
  );
}
