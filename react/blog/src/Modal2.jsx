function Modal2(props) {
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>{props.date}</p>
      <p>상세내용</p>
    </div>
  );
}

export default Modal2;
