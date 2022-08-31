import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  // HeaderPanel,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  // Temporarily comment these out until they are needed again
  // SideNavHeader,
  // SideNavDetails,
  // SideNavSwitcher,
  // SideNavDivider,
  SideNavItems
  // SideNavLink,
  // SideNavMenu,
  // SideNavMenuItem,
  // Switcher,
  // SwitcherItem,
  // SwitcherDivider
} from "@carbon/react";

import { AppSwitcher, Notification, Search } from "@carbon/icons-react";

export default (props) => (
  <Header aria-label="IBM Platform Name">
    <SkipToContent />
    <HeaderMenuButton aria-label="Open menu" />
    <HeaderName href="#" prefix="IBM">
      [Platform]
    </HeaderName>
    <HeaderNavigation aria-label="IBM [Platform]">
      <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
      <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
        <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
        <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
        <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
      </HeaderMenu>
    </HeaderNavigation>
    {/* <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Search">
        <Search />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
        <AppSwitcher />
      </HeaderGlobalAction>
    </HeaderGlobalBar> */}
    {/* <SideNav
      aria-label="Side navigation"
      // expanded={isSideNavExpanded}
      isPersistent={false}
    >
      <SideNavItems>
        <HeaderSideNavItems>
          <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
          <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
            <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderSideNavItems>
      </SideNavItems>
    </SideNav> */}
  </Header>
);
