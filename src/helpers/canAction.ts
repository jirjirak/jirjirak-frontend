import { Ability, AbilityBuilder } from '@casl/ability';
// configs
import { DRAWER_MENU_LABEL, USER_ROLE } from 'configs';
import store from 'stores';

function defineAbilitiesFor(type: string) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  switch (type) {
    case USER_ROLE.ADMIN:
      can(['create', 'update', 'view', 'delete'], 'all');
      break;
    case USER_ROLE.LEAD:
      // menu
      can('view', DRAWER_MENU_LABEL.PLAY_BACKGROUND);
      can('view', DRAWER_MENU_LABEL.DASHBOARD);

      can('view', DRAWER_MENU_LABEL.PRODUCT);
      can('view', DRAWER_MENU_LABEL.PRODUCT_LIST);

      can('view', DRAWER_MENU_LABEL.KANBAN);
      can('view', DRAWER_MENU_LABEL.USERS);

      // action
      break;
    case USER_ROLE.GUEST:
      cannot(['create', 'update', 'view', 'delete'], 'all');
      break;
  }
  return build();
}

const canAction = (action: string, resource: string) => {
  const role = store.getState().auth.role || '';
  if (!role) return false;

  const abilities = defineAbilitiesFor(role);
  return abilities.can(action, resource);
};

export default canAction;
