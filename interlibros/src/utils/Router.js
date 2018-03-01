import { StackNavigator } from 'react-navigation';
import AutSinglenton from '../utils/aut/autsinglenton';
import Login from '../componentes/login';
import BuscarLibro from '../componentes/buscarlibro';
import DetalleLibro from '../componentes/detallelibro';
import Mensaje from '../componentes/mensaje';

export const Router = StackNavigator(
    {
        Login: {
            screen: Login,
        },
        BuscarLibro: {
            screen: BuscarLibro,
        },
        DetalleLibro: {
            screen: DetalleLibro,
        },
        Mensaje: {
            screen: Mensaje,
        },
    },
    {
        initialRouteName: 'Login',
    });