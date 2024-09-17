import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/tmovie.png';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
];

const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => {
        // Verificar Home de forma exata
        if (e.path === '/') return pathname === e.path;
        // Verificar as outras rotas usando includes para garantir que seja parte da URL
        return pathname.includes(e.path);
    });

    useEffect(() => {
        // Função para encolher o header ao rolar
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };
        // Adicionar event listener para rolagem
        window.addEventListener('scroll', shrinkHeader);

        // Remover event listener quando o componente for desmontado
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    useEffect(() => {
        // Executa sempre que o pathname mudar para atualizar o componente visualmente
        // Isso garante que a barra vermelha mude quando a rota mudar
    }, [pathname]);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="StarCine Logo" />
                    <Link to="/">StarCine</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;
