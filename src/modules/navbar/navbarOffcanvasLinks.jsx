import { Home, CreditCard, Store, TrackChanges, AccountCircle, Logout } from '@mui/icons-material';

const menuItems = [
    { text: 'Home', icon: <Home className='navbar-icon' />, link: '/' },
    { text: 'Tus préstamos', icon: <CreditCard className='navbar-icon' />, link: '/' },
    { text: 'Tiendas', icon: <Store className='navbar-icon' />, link: '/' },
    { text: 'Tracking', icon: <TrackChanges className='navbar-icon' />, link: '/' },
    { text: 'Usuario', icon: <AccountCircle className='navbar-icon' />, link: '/', loggedIn: true },
    { text: 'Cerrar sesión', icon: <Logout className='navbar-icon' />, link: '/' },
]

export default menuItems;