function Children(props) {
  return (
    <div>
      {props.children}
      <input
        type="text"
        name="text22"
        onChange={(e) => props.onchange(e, "sdfsdf")}
      />
    </div>
  );
}

export default Children;
