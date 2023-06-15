import { Link } from "react-router-dom"
function Login(){
    return(
       
            <div className="main">
                <form className="masuk" >
                    <input className="masuk1" type="text" placeholder="Username"  />
                    <hr />
                    <input className="masuk1" type="password" placeholder="password"  />
                    <br />
                    <button className="masuk2"> <Link to="/" className="link">Login</Link> </button>
    
                </form>
            <div className='daftar6'>belom punya akun? Daftar</div>
            </div>

    )
      
}
export default Login