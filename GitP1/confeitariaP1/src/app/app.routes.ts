import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { ReenvioSenha } from './reenvio-senha/reenvio-senha';
import { Home } from './home/home';
import { Contato } from './contato/contato';
import { Detalhe } from './detalhe/detalhe';

export const routes: Routes = [
    {path: "vitrine", component:Vitrine}, {path: "login", component:Login},
    {path: "cadastro", component:Cadastro}, {path: "reenvio-senha", component:ReenvioSenha},
    {path: "home", component:Home}, {path: "contato", component:Contato},
    {path: "detalhe", component:Detalhe}, {path:"", component:Home}
];
