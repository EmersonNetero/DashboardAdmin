import './style.css';
import logo from "../../assets/logogit.png"

function Sidebar({ sidebarOpen, closeSidebar }) {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Emersumm</h1>
                    <i onClick={()=> closeSidebar()}
                        className='fa fa-times' id="sidebarIcon" aria-hidden="true">
                    </i>
                </div>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className='fa fa-minus-square'></i>
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i className='fas fa-tachometer-alt'></i>
                    <a href="#">Área adminstrativa</a>
                </div>
                <div className="sidebar__link">
                    <i className='fas fa-building'></i>
                    <a href="#">Lojas</a>
                </div>
                <div className="sidebar__link">
                    <i className='fas fa-archive'></i>
                    <a href="#">Produtos</a>
                </div>
                <div className="sidebar__link">
                    <i className='fas fa-bars'></i>
                    <a href="#">Categorias</a>
                </div>
                <div className="sidebar__link">
                    <i className='fas fa-utensils'></i>
                    <a href="#">Pedidos</a>
                </div>
                <h2>PESSOAS</h2>
                <div className="sidebar__link">
                    <i className='fas fa-male'></i>
                    <a href="#">Administradores</a>
                </div>
                <div className="sidebar__link">
                    <i className='fas fa-user-circle'></i>
                    <a href="#">Usuários</a>
                </div>
                <div className="sidebar__link">
                    <i className='far fa-money-bill-alt'></i>
                    <a href="#">Pagementos e custos</a>
                </div>
                <div className="sidebar__link">
                    <i className='fas fa-tasks'></i>
                    <a href="#">A plataforma</a>
                </div>
                <div className="sidebar__link">
                    <i className='fas fa-file-alt'></i>
                    <a href="#">Política e privacidade</a>
                </div>
                <div className="sidebar__logout">
                    <i className='fas fa-power-off'></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    ) 
}


export default Sidebar;