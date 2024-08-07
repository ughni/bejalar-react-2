function Footer(props) {
  return (
    <>
      <h1>{ props.name}</h1>
      <ul>
        <li>
          <a href="">home</a>
        </li>
        <li>
          <a href="">about</a>
        </li>
        <li>
          <a href="">{props.paragraf()}</a>
        </li>
      </ul>
      <h1>{ props.kepala}</h1>
    </>
  );

}

export default Footer;