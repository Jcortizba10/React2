import { BackButton } from "../BackButton/BackButton"

export const ErrorPage = () => {
  return (
    <>
      <h1> HA OCURRIDO UN ERROR </h1>
      <iframe
        src="https://giphy.com/embed/g01ZnwAUvutuK8GIQn"
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <BackButton />
    </>
  );
};
