import React, {Component} from 'react';
import './bootstrap.min.css';
import './style.css';

class App extends Component{
    render(){
        return(    
            <div>
                <div>
                    <div>
                        <div>
                            <h1><a href="index.html">textured_<span className="logo_colour">orbs</span></a></h1>
                            <h2>Simple. Contemporary. Website Template.</h2>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li className="selected"><a href="index.html">Home</a></li>
                            <li><a href="examples.html">Examples</a></li>
                            <li><a href="page.html">A Page</a></li>
                            <li><a href="another_page.html">Another Page</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div></div>
                <div>
                    <div></div>
                    <div>
                        <div className="sidebar">
                            <div className="sidebar_top"></div>
                            <div className="sidebar_item">
                                <h3>Latest News</h3>
                                <h4>New Website Launched</h4>
                                <h5>June 1st, 2014</h5>
                                <p>2014 sees the redesign of our website. Take a look around and let us know what you think.</p>
                            </div>
                            <div className="sidebar_base"></div>
                        </div>
                        <div className="sidebar">
                        <div className="sidebar_top"></div>
                        <div className="sidebar_item">
                            <h3>Useful Links</h3>
                        </div>
                        <div className="sidebar_base"></div>
                    </div>
                    <div className="sidebar">
                        <div className="sidebar_top"></div>
                        <div className="sidebar_item">
                            <h3>Search</h3>
                            <form method="post" action="#" id="search_form">
                            <p>
                                <input className="search" type="text" name="search_field"/>
                                <input className="search" type="image" style={{border: '0', margin: '0 0 -9px 5px'}} src="./img/search.png" alt="Search" title="Search" />
                            </p>
                            </form>
                        </div>
                        <div className="sidebar_base"></div>
                    </div>
                </div>
                    <div>
                        <h1>Welcome to the textured_orbs template</h1>
                        <p>This standards compliant, simple, fixed width website template is released as an 'open source' design (under a <a href="http://creativecommons.org/licenses/by/3.0">Creative Commons Attribution 3.0 Licence</a>), which means that you are free to download and use it for anything you want (including modifying and amending it). All I ask is that you leave the 'design from HTML5webtemplates.co.uk' link in the footer of the template, but other than that...</p>
                        <p>This template is written entirely in <strong>HTML5</strong> and <strong>CSS</strong>, and can be validated using the links in the footer.</p>
                        <p>You can view more free HTML5 web templates <a href="http://www.html5webtemplates.co.uk">here</a>.</p>
                        <p>This template is a fully functional 5 page website, with an <a href="examples.html">examples</a> page that gives examples of all the styles available with this design.</p>
                    </div>
                </div>
                <div id="content_footer"></div>
                    <div id="footer">
                    <p><a href="index.html">Home</a> | <a href="examples.html">Examples</a> | <a href="page.html">A Page</a> | <a href="another_page.html">Another Page</a> | <a href="contact.html">Contact Us</a></p>
                    <p>Copyright &copy; textured_orbs | <a href="http://validator.w3.org/check?uri=referer">HTML5</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> | <a href="http://www.html5webtemplates.co.uk">Website templates</a></p>
                </div>
            </div> 
        )
    }
}

export default App;