import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <>
      <LoadingStyled>
        <img src="img/loading.mp4" alt="loading..." />
        <span>Loading...</span>
      </LoadingStyled>
    </>
  );
};

export default Loading;
