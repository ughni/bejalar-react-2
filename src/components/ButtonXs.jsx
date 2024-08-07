function Buton(props) {
  return (
    <>
      <button onClick={props.clickked}> kirim</button>
      <p>{props.kalimat()}</p>
    </>
  )
}

export default Buton;