import './MainPage.scss';

function MainPage() {
  return (
    <div>
      <section className='introdaction'>
        <h1 className='main-header'>hello</h1>
        <p className='sub-header'>Boris Kim</p>
        <p className='sub-header'>Frontend developer</p>
      </section>
      <section className='about'>
        <h2 className='main-header'>about</h2>
        <div className='link-container sub-header'>
          <p>me</p>
          <p>experience</p>
          <p>skills</p>
        </div>
      </section>
      <section className='projects'>
        <h2 className='main-header'>projects</h2>
        <div className='link-container sub-header'>
          <p>ScreenShot and Link?</p>
          <p>ScreenShot and Link?</p>
          <p>ScreenShot and Link?</p>
          <p>ScreenShot and Link?</p>
        </div>
      </section>
      <section className='contact'>
        <h2 className='main-header'>contact</h2>
        <div className='link-container sub-header'>
          <p>LinkedIn</p>
          <p>GitHub</p>
          <p>E-mail</p>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
