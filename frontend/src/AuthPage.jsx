import axios from "axios";

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post('http://localhost:3001/authenticate',
      {username: value})
      // eslint-disable-next-line react/prop-types
      .then(r => props.onAuth({ ...r.data, secret: value }))
      .catch(e => console.log('error', e))
      
      
    };
  
    return (
        <div className="main">
          <div className="navbar">
        <img  className="logo" src="./public/LOGO.png" target="_blank" />
      <a  href="https://www.linkedin.com/in/sara-el-bouchkeri-4a8a33228/">  <img className="contact"  src="./public/team-building.png" target="_blank" /></a>
      </div>
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Let's chat together 👋</div>
  
          <div className="form-subtitle">and make more friends!  </div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
            get started
            </button>
          </div>
        </form>
    </div>
    <div class="style">

<small>
  Copyright - <b>Sara EL BOUCHKERI</b>
  - <b>Nassima Amouche</b>
  - <b>Ibtissam Bougza</b>
  - <b>Fatima Ouali</b>
</small>
</div>
      </div>
    );
  };
  
  export default AuthPage;