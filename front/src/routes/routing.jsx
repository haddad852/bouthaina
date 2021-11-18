/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from '../views/starter/starter.jsx';
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/
import Alerts from '../views/ui-components/test.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';
import Aoutcompte from '../views/ui-components/compteadd/Add.compte'
import Listecompte from '../views/ui-components/compteadd/List.compte'
import Transaction from '../views/ui-components/compteadd/Transaction'
import Listetransaction from '../views/ui-components/compteadd/List.transaction'
import Demandechequier from '../views/ui-components/compteadd/Demande.cheque'
import Listdemandechequier from '../views/ui-components/compteadd/Listdemandechequier'
var ThemeRoutes = [
  {
    path: '/starter/starter',
    name: 'List compte',
    icon: 'mdi mdi-reorder-horizontal',
    component: Listecompte
  },
  {
    path: '/ui-components/alert',
    name: 'Ajouter compte',
    icon: 'mdi mdi-account-plus',
    component: Aoutcompte
  },
  {
    path: '/ui-components/badge',
    name: 'Transaction',
    icon: 'mdi mdi-exit-to-app',
    component: Transaction
  },
  {
    path: '/ui-components/listtransaction',
    name: 'List all Transaction',
    icon: 'mdi mdi-grid',
    component: Listetransaction
  },
  {
    path: '/ui-components/demandechequier',
    name: 'demande chequier',
    icon: 'mdi mdi-file-chart',
    component: Demandechequier
  },

  {
    path: '/ui-components/Listdemandechequier',
    name: 'demande chequier',
    icon: 'mdi mdi-file-chart',
    component: Listdemandechequier
  },
  
  {
    path: '/ui-components/button',
    name: 'Act3',
    icon: 'mdi mdi-toggle-switch',
    component: Buttons
  },
  {
    path: '/ui-components/card',
    name: 'Act5',
    icon: 'mdi mdi-credit-card-multiple',
    component: Cards
  },
  {
    path: '/ui-components/layout',
    name: 'Act6',
    icon: 'mdi mdi-apps',
    component: LayoutComponent
  },
  {
    path: '/ui-components/pagination',
    name: 'Act7',

    icon: 'mdi mdi-priority-high',
    component: PaginationComponent
  },
  {
    path: '/ui-components/popover',
    name: 'Act8',

    icon: 'mdi mdi-pencil-circle',
    component: PopoverComponent
  },
  {
    path: '/ui-components/tooltip',
    name: 'Act9',

    icon: 'mdi mdi-image-filter-vintage',
    component: TooltipComponent
  },
  {
    path: '/',
    pathTo: '/starter/starter',
    name: 'Dashboard',
    redirect: true
  }
];
export default ThemeRoutes;
