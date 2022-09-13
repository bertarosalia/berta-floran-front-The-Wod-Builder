import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <>
      <LoadingStyled>
        <img src="img/loading.gif" alt="loading..." />
        <span>Cargando...</span>
      </LoadingStyled>
    </>
  );
};

export default Loading;
