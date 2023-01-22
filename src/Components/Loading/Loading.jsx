import './loading.css';

const Loading = () => {
  return (
    <>
      <div className="loadingBlock">
        <div
          className="spinner-border text-light"
          style={{ width: '12rem', height: '12rem', borderWidth: 10 }}
          role="status"
        />
      </div>
    </>
  );
};

export default Loading;
