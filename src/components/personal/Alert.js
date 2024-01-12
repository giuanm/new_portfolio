import photo from '../../assets/construction.svg'

const AboutMe = () => {
  return (
    <>
      <div className='postes'>
        <h3>Em construção, favor acessar aqui <a href="https://giuanm.github.io/js-developer-portfolio/#">Portifólio</a></h3>
        <h3>Under construction, please access here <a href="https://giuanm.github.io/js-developer-portfolio/#">Portfolio</a></h3>
        <img src={photo} alt="foto" className='flag'/>
      </div>
    </>
  )
}

export default AboutMe