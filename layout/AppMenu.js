import getConfig from 'next/config';
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const model = [
        {
            label: 'Hierarchy',
            items: [
               { 
                  label: 'Página inicial',
                  icon: 'pi pi-fw pi-home', 
                  to: '/' 
               },
               {
                   label: 'Passagens',
                   icon: 'pi pi-ticket',
                   items: [
                    {
                        label: 'Consultar Passagens'
                    },
                    {
                        label: 'Bloqueio de Poltrona'
                    }
                   ]
               },
                {
                    label: 'Viagens',
                    icon: 'pi pi-map',
                    items: [
                        {
                            label: 'Gestão de viagens'
                        },
                        {
                            label: 'Confirmação de embarque'
                        }
                    ]
                },
                {
                    label: 'Financeiro',
                    icon: 'pi pi-wallet',
                    items: [
                     {
                         label: 'Meu Caixa'
                     },
                     {
                         label: 'Caixa da Agência'
                     },
                     {
                         label: 'Taxa de embarque'
                     }
                    ]
                },
                {
                    label: 'Cadastros',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                     {
                         label: 'Clientes'
                     }
                    ]
                },
                {
                    label: 'Usuário',
                    icon: 'pi pi-user',
                    items: [
                     {
                         label: 'Alterar senha'
                     }
                    ]
                },
                {
                    label: 'Sair',
                    icon: 'pi pi-power-off'
                }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

                <Link href="https://www.primefaces.org/primeblocks-react" target="_blank" style={{ cursor: 'pointer' }}>
                    <img alt="Prime Blocks" className="w-full mt-3" src={`${contextPath}/layout/images/banner-primeblocks${layoutConfig.colorScheme === 'light' ? '' : '-dark'}.png`} />
                </Link>
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;