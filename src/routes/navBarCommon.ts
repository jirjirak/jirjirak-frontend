// material icon
import AddIcon from '@material-ui/icons/Add';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShopIcon from '@material-ui/icons/Shop';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ViewListIcon from '@material-ui/icons/ViewList';
// configs
import { DRAWER_MENU_LABEL, PATH_NAME } from 'configs';

export const navBarCommon = [
  {
    subheader: 'Application',
    items: [
      {
        title: 'Report',
        href: PATH_NAME.DASHBOARD,
        icon: DashboardIcon,
        label: DRAWER_MENU_LABEL.DASHBOARD,
      },
      {
        title: 'Playbackground',
        href: PATH_NAME.PLAY_BACKGROUND,
        icon: SportsEsportsIcon,
        label: DRAWER_MENU_LABEL.PLAY_BACKGROUND,
      },
    ],
  },
  {
    subheader: 'Dashboard',
    items: [
      {
        title: 'Product',
        icon: ShopIcon,
        href: PATH_NAME.PRODUCT,
        label: DRAWER_MENU_LABEL.PRODUCT,
        items: [
          {
            title: 'Add Product',
            icon: AddIcon,
            href: PATH_NAME.PRODUCT_ADD,
            label: DRAWER_MENU_LABEL.PRODUCT_ADD,
          },
          {
            title: 'List Product',
            icon: ViewListIcon,
            href: PATH_NAME.PRODUCT_LIST,
            label: DRAWER_MENU_LABEL.PRODUCT_LIST,
          },
        ],
      },
      {
        title: 'Kanban',
        href: PATH_NAME.KANBAN,
        icon: AssessmentIcon,
        label: DRAWER_MENU_LABEL.KANBAN,
      },
    ],
  },
  {
    subheader: 'Users',
    items: [
      {
        title: 'Users',
        icon: PeopleIcon,
        href: PATH_NAME.USERS,
        label: DRAWER_MENU_LABEL.USERS,
      },
    ],
  },
];
