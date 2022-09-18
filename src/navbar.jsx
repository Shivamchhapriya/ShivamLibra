 import React,{Component} from "react";
 import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


class Nav extends Component {
    render() { 
        return (
            
            <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
                <a class="navbar-brand" href="#"> 
                     <img className="" src="images/liberawide.webp" alt="" />
                </a>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item active ">
                            <a class="nav-link" href="#">FAQ's </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Telegram</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">Twitter</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">BUSD 3X Miner</a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link" href="#">Liberator Bank</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Lambo Contest</a>
                        </li>

                    </ul>
                    <button className="minibtn rounded">open App<img className="" src="images/mini.png" alt="" /></button>

                </div>
        </nav>
            </>
        );
    }
}
 
export default Nav;